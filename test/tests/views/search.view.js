'use strict';

const selectors = {
    searchBox: `#searchKeywords`
}

function searchBox() {
    return browser.element(selectors.searchBox);
}

function setSearchBox(value) {
    return searchBox()
        .waitUntil(searchBox().isVisible()).then(() => {
            return searchBox().setValue(value);
        });
}

function getSearchBoxValue() {
    return searchBox().getValue();
}

module.exports = {
    searchBox,
    setSearchBox,
    getSearchBoxValue
};
