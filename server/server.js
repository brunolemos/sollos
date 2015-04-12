Meteor.startup(function () {
	ServiceConfiguration.configurations.upsert({service: "facebook" }, {
		$set: {
			clientId: "497754337040058",
			secret: "bb4825f75d0daf60bb1bbabbcf7ce31f",
			loginStyle: "popup"
		}
	});
	
	if (Products.find().count() === 0) {
  	Products.insert({name: "Abacaxi", price: 2.99, image: "pineapples.jpg"});
  	Products.insert({name: "Alface", price: 0.49, image: "lettuce.jpg"});
  	Products.insert({name: "Banana", price: 1.99, image: "bananas.jpg"});
  	Products.insert({name: "Maçã", price: 0.99, image: "apples.jpg"});
  	Products.insert({name: "Melancia", price: 2.99, image: "watermellons.jpg"});
  	Products.insert({name: "Uva", price: 3.99, image: "grapes.jpg"});
	}
});