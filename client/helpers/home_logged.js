Template.home_logged.helpers({
	products: function() {
		return Products.find();
	},
});