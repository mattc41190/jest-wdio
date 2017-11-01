'use strict';

const selectors = {
    searchBox: `#searchKeywords`
}

function searchBox(client) {
    return client.element(selectors.searchBox);
}

function setSearchBox(client, value) {
    return searchBox(client)
        .waitUntil(searchBox(client).isVisible()).then((visible) => {
            return searchBox(client).setValue(value);
        });
}

function getSearchBoxValue(client) {
    return searchBox(client).getValue();
}

module.exports = {
    searchBox,
    setSearchBox,
    getSearchBoxValue
};
