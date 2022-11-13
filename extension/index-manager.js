class IndexManager {
    static async getShortcutsIndex() {
        return await storage.getItem('index-shortcut') || shortcuts
    }

    static setShortcutsIndex(index) {
        storage.setItem('index-shortcut', index);
    }
}