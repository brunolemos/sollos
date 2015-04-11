UI.registerHelper('canRemoveProduct', function(product) {
	if(typeof(product) == 'string') product = Products.findOne(product);
	
	return product.createdBy == Meteor.userId();
});