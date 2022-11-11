function injectScripts(paths) {
    paths.map(path => {
        let script = document.createElement("script");
        script.src = chrome.runtime.getURL(path);
        script.onload = () => {
            // Remove self after loaded
            script.remove();
        };
        return script;
    }).forEach(script => {
        document.body.insertAdjacentElement('beforeBegin', script);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    injectScripts(["parse.js"]);
});

window.addEventListener("message", async function (event) {
    if (event.source === window &&
        event.data &&
        event.data.direction === "newkit:update-index") {
        // Merge new index into old index.
        let newIndex = Object.assign(await IndexManager.getShortcutsIndex(), event.data.message.index);
        IndexManager.setShortcutsIndex(newIndex);
    }
});

