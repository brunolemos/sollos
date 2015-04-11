Meteor.startup(function () {
	if (Products.find().count() === 0) {
  	Products.insert({name: "Uva", price: 10});
  	Products.insert({name: "Banana", price: 20});
	}
});