const makeClient = require('../wdio.setup.js');
const SearchView = require('./views/search.alt.view.js');

describe.only('Searchbox', () => {

	beforeAll(async () => {
		jest.setTimeout(60000);
		// this.client = client();
		// console.log(this.client);
		// this.searchView =  new SearchView(this.client);

		this.client = makeClient();
		await this.client.init();
		await this.client.url('/');
		this.searchView = new SearchView(this.client);
	});

	afterAll(() => {
	    this.client.end();
	});

	afterEach(() => {
		this.client.refresh();
	});

	it('can be set', async () => {
		expect.assertions(1);
		await this.searchView.setSearchBox('Austin TX');
		let val = await this.searchView.getSearchBoxValue();

		expect(val).toBe('Austin TX');
	});

});
