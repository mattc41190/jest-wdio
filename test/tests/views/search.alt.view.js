'use strict';

const selectors = {
    searchBox: `#searchKeywords`
}

class SearchView {
    constructor(client) {
        this.client = client;
    }

    async getSearchBoxValue() {
        return await this.client.getValue(selectors.searchBox);
    }

    async setSearchBox(value) {
        let searchBox = selectors.searchBox;
        await this.client.waitForVisible(searchBox);
        await this.client.setValue(searchBox, value);
    }
}

module.exports = SearchView;
