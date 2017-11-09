const client = require('../wdio.setup.js');
const SearchView = require('./views/search.alt.view.js');

describe.only('Searchbox', () => {

	beforeAll(() => {
		jest.setTimeout(60000);
		this.client = client();
		this.searchView =  new SearchView(this.client);
		return this.client;
	});

	afterAll(() => {
	    this.client.end();
	});

	afterEach(() => {
		this.client.refresh();
	});

	it('can be set', () => {
	    expect.assertions(1);
	    return this.client
	        .then(() => this.searchView.searchBox = 'Austin TX')
	        .then(() => this.searchView.searchBox.getValue())
	        .then((value) => expect(value).toBe('Austin TX'));
	});

});
