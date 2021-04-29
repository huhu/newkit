function parseShortcuts() {
    let shortcuts = [];
    let rows = document.querySelectorAll("table tr.data-table__row");
    for (let row of rows) {
        let [links, product, desc] = row.querySelectorAll("td");
        product = product.textContent.trim();
        desc = desc.textContent.trim();
        for (let link of links.querySelectorAll("a")) {
            let shortcut = new URL(link.href.trim()).hostname;
            shortcuts.push({
                product,
                desc,
                shortcut,
            })
        }
    }

    // console.log(JSON.stringify(shortcuts));
    return shortcuts;
}