(function () {
    function updateIndex(index) {
        window.postMessage({
            direction: "newkit:update-index",
            message: {
                index,
            },
        }, "*");
        return Promise.resolve();
    }

    function parseShortcuts() {
        let shortcuts = Object.create(null);
        let rows = document.querySelectorAll("table tr.data-table__row");
        for (let row of rows) {
            let [links, product, desc] = row.querySelectorAll("td");
            product = product.textContent.trim();
            desc = desc.textContent.trim();
            for (let link of links.querySelectorAll("a")) {
                let href = link.href.trim();
                if (href && href.includes('.new')) {
                    let domain = new URL(link.href.trim()).hostname;
                    // Key value pair of <domain, [product, desc]>
                    shortcuts[domain] = [product, desc];
                }
            }
        }

        // Sort by key.
        return Object.fromEntries(Object.entries(shortcuts).sort());
    }

    let shortcuts = parseShortcuts();
    updateIndex(shortcuts).then(() => {
        setTimeout(() => {
            alert("Newkit: All shortcuts has synced!");
        }, 2000);
    });
})();
