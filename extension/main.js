const c = new Compat();
const commandManager = new CommandManager(
    new HelpCommand(),
    new OpenCommand('update', 'Update to the latest new shortcuts.',
        "https://whats.new/shortcuts/",
        {
            content: ':update',
            description: `Press ${c.match("Enter")} to sync the latest new shortcuts.`,
        }),
    new HistoryCommand(),
);
const searcher = new Searcher(shortcuts);

const defaultSuggestion = `Oh My New!`;
const omnibox = new Omnibox(defaultSuggestion, c.omniboxPageSize());

omnibox.bootstrap({
    onSearch: (query) => {
        return searcher.search(query);
    },
    onFormat: (index, item) => {
        return {
            content: `https://${item.name}.new`,
            description: `New: ${c.match(item.name)} - ${item.product} ${c.dim(c.escape(item.desc))}`,
        };
    },
    onAppend: (query) => {
        return [{
            content: "k",
            description: `Not new shortcut ${query} found`,
        }]
    },
    afterNavigated: (query, result) => {
        // Ignore the command history
        if (query && query.startsWith(":")) return;

        HistoryCommand.record(query, result)
    },
    onEmptyNavigate: (content, disposition) => {
        commandManager.handleCommandEnterEvent(content, disposition);
    },
});

omnibox.addPrefixQueryEvent(":", {
    onSearch: (query) => {
        return commandManager.execute(query);
    },
});

let fileNewIssue = "title=Have you found a bug? Did you feel something was missing?&body=Whatever it was, we'd love to hear from you.";
chrome.runtime.setUninstallURL(
    `https://github.com/huhu/oh-my-new/issues/new?${encodeURI(fileNewIssue)}`
);