const LOWEST_MATCH_INDEX = 999;

class Searcher {
    constructor(index) {
        this.index = Object.entries(index).map(([domain, [product, description]]) => {
            return [domain, product, description];
        });
    }

    search(keyword) {
        keyword = keyword.toLowerCase().replace(/[-_\s]/ig, "");
        let result = [];
        for (let [shortcut, product, description] of this.index) {
            let [name] = shortcut.split('.');
            let nameMatchIndex = name.indexOf(keyword);
            if (nameMatchIndex === -1) {
                nameMatchIndex = LOWEST_MATCH_INDEX;
            }

            let productMatchIndex = product.toLowerCase().indexOf(keyword);
            if (productMatchIndex === -1) {
                productMatchIndex = LOWEST_MATCH_INDEX;
            }

            if ([nameMatchIndex, productMatchIndex].some(i => i !== LOWEST_MATCH_INDEX)) {
                result.push({
                    nameMatchIndex,
                    productMatchIndex,
                    name,
                    shortcut,
                    product,
                    description,
                });
            }
        }

        return result.sort((a, b) => {
            if (a.nameMatchIndex === b.nameMatchIndex) {
                if (a.productMatchIndex !== LOWEST_MATCH_INDEX && b.productMatchIndex !== LOWEST_MATCH_INDEX) {
                    if (a.productMatchIndex === b.productMatchIndex) {
                        return a.product.length - b.product.length;
                    } else {
                        return a.productMatchIndex - b.productMatchIndex;
                    }
                }
                return a.name.length - b.name.length;
            }
            return a.nameMatchIndex - b.nameMatchIndex;
        });
    }
}