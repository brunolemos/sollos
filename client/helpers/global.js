UI.registerHelper('canRemoveProduct', function(product) {
	if(typeof(product) == 'string') product = Products.findOne(product);
	
	return product.createdBy == Meteor.userId();
});

UI.registerHelper('formatPrice', function(price) {
	price = parseFloat(price);
	if(isNaN(price)) return "0.00";
	
	return price.toFixed(2);
});