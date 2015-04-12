UI.registerHelper('facebookAvatar', function(user) {
	if(typeof(user) == 'string') user = Meteor.users.findOne(user);

	return "http://graph.facebook.com/" + user.services.facebook.id + "/picture?width=300&height=300";
});

UI.registerHelper('fruitImage', function(imageFileUrl) {
	return "/img/fruits/" + imageFileUrl;
});

UI.registerHelper('canRemoveProduct', function(product) {
	if(!Meteor.userId() || product == undefined || product == "") return false;
	if(typeof(product) == 'string') product = Products.findOne(product);
	
	return product.createdBy == Meteor.userId();
});

UI.registerHelper('formatPrice', function(price) {
	price = parseFloat(price);
	if(isNaN(price)) return "0.00";
	
	return price.toFixed(2);
});