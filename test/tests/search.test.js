global.browser;
const makeClient = require('../wdio.setup.js');
const searchView = require('./views/search.view.js');

describe.only('Searchbox', () => {

	beforeAll(async() => {
		jest.setTimeout(60000);
		browser = makeClient();
		await browser.init();
		await browser.url('/');
	});

	afterAll(async() => {
		await browser.end();
	});

	afterEach(async() => {
		await browser.refresh();
	});

	it('can be set', async() => {
		expect.assertions(1);
		await searchView.setSearchBox('Austin TX');
		let val = await searchView.getSearchBoxValue();
		expect(val).toBe('Austin TX');
	});

});
