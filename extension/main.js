const c = new Compat();
(async () => {
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
    let searcher = new Searcher(await IndexManager.getShortcutsIndex());

    const defaultSuggestion = `Oh My Newkit!`;
    const omnibox = new Omnibox(defaultSuggestion, c.omniboxPageSize());

    omnibox.bootstrap({
        onSearch: (query) => {
            return searcher.search(query);
        },
        onFormat: (index, item) => {
            return {
                content: `https://${item.shortcut}`,
                description: `New: ${c.match(item.name)} - ${item.product} ${c.dim(c.escape(item.description))}`,
            };
        },
        afterNavigated: (query, result) => {
            // Ignore the command history
            if (query && query.startsWith(":")) return;

            HistoryCommand.record(query, result);
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


    chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
        switch (message.action) {
            case "update-index": {
                // Merge new index into old index.
                let newIndex = Object.assign(await IndexManager.getShortcutsIndex(), message.index);
                IndexManager.setShortcutsIndex(newIndex);
                searcher = new Searcher(newIndex);
                sendResponse(true);
                break;
            }
        }
        return true;
    });
})();