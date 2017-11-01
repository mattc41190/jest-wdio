'use strict';

const selectors = {
    searchBox: `#searchKeywords`
}

function searchBox(client) {
    return client.element(selectors.searchBox);
}

// Broken Here: (Not Broken in WDIO Runner)
function setSearchBoxv1(client, value) {
    return searchBox(client)
        .waitForVisible().then((visible) => {
            return client.element(selectors.searchBox).setValue(value);
        });
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
