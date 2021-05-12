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

window.addEventListener("message", function (event) {
    if (event.source === window &&
        event.data &&
        event.data.direction === "omn:update-index") {
        chrome.runtime.sendMessage({action: `update-index`, ...event.data.message},
            (response) => {
                console.log(response);
            }
        );
    }
});

