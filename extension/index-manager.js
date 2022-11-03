// Wrap chrome.storage API as a promise.
// See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
function getIndexInternal(key) {
    return new Promise(resolve => {
        chrome.storage.local.get(key, (result) => {
            resolve(result[key]);
        });
    });
}

class IndexManager {
    static async getShortcutsIndex() {
        return await getIndexInternal('index-shortcut') || shortcuts
    }

    static setShortcutsIndex(index) {
        chrome.storage.local.set({ 'index-shortcut': index });
    }
}