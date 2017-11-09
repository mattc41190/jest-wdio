'use strict';

const selectors = {
    searchBox: `#searchKeywords`
}

class SearchView {
    constructor(client) {
        this.client = client;
    }

    get searchBox() { return this.client.element(selectors.searchBox); }

    set searchBox(value) {
        return this.searchBox.waitUntil(this.searchBox.isVisible())
        .then(() => {
            return this.searchBox.setValue(value);
        });
    }
}

module.exports = SearchView;
