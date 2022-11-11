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

    chrome.storage.onChanged.addListener(changes => {
        for (let [key, { _oldValue, newValue }] of Object.entries(changes)) {
            console.log('storage key updated:', key);
            switch (key) {
                case "index-shortcut'": {
                    searcher = new Searcher(newValue);
                    break;
                }
            }
        }
    });
})();