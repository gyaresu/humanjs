var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');

module.exports = View.extend({
	template: '<body><h1>Our Awesome App</h1><main data-hook="page-container"></main></body>',
	autoRender: true,
	initialize: function () {
		this.listenTo(app.router, 'page', this.handleNewPage);
	},
	render: function () {
		this.renderWithTemplate();
		this.page = new ViewSwitcher(this.queryByHook('page-container'));

	},
	handleNewPage: function (page) {
		this.page.set(page);
	}
});