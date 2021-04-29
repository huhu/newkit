const c = new Compat();
const commandManager = new CommandManager(
    new HelpCommand(),
    new HistoryCommand(),
);

const defaultSuggestion = `Oh My New!`;
const omnibox = new Omnibox(defaultSuggestion, c.omniboxPageSize());

omnibox.bootstrap({
    onSearch: (query) => {
        return [];
    },
    onFormat: (index, item) => {
        return {
            content: "",
            description: "",
        };
    },
    afterNavigated: (query, result) => {
        // Ignore the command history
        if (query && query.startsWith(":")) return;

        HistoryCommand.record(query, result)
    }
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