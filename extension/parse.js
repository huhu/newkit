(function () {
    function updateIndex(index) {
        window.postMessage({
            direction: "omn:update-index",
            message: {
                index,
            },
        }, "*");
        return Promise.resolve();
    }

    function parseShortcuts() {
        let shortcuts = [];
        let rows = document.querySelectorAll("table tr.data-table__row");
        for (let row of rows) {
            let [links, product, desc] = row.querySelectorAll("td");
            product = product.textContent.trim();
            desc = desc.textContent.trim();
            for (let link of links.querySelectorAll("a")) {
                let href = link.href.trim();
                if (href && href.includes('.new')) {
                    let shortcut = new URL(link.href.trim()).hostname;
                    shortcuts.push({
                        product,
                        desc,
                        shortcut,
                    });
                }
            }
        }

        return shortcuts;
    }

    let shortcuts = parseShortcuts();
    updateIndex(shortcuts).then(() => {
        setTimeout(() => {
            alert("Oh-my-new: All shortcuts has synced!");
        }, 2000);
    });
})();
