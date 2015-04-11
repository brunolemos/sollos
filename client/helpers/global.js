UI.registerHelper('canRemoveProduct', function(product) {
	if(typeof(product) == 'string') product = Products.findOne(product);
	
	return product.createdBy == Meteor.userId();
});

UI.registerHelper('formatPrice', function(price) {
	return price.toFixed(2);
});