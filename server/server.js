Meteor.startup(function () {
	ServiceConfiguration.configurations.upsert({service: "facebook" }, {
		$set: {
			clientId: "497754337040058",
			secret: "bb4825f75d0daf60bb1bbabbcf7ce31f",
			loginStyle: "popup"
		}
	});

	Cooperatives.remove({});
	var cooperativeId = Cooperatives.insert({name: "Cooperativa COAF", image: "logo_coaf.png", cover: "240514-coaf-brasil", "description": "Nossa missão é entregar os melhores produtos para os melhores consumidores.", "address": "Rua Francisco de Paula, 445"});
	
	Products.remove({});
  	Products.insert({name: "Abacaxi", price: 2.99, image: "pineapples.jpg", "cooperativeId": cooperativeId});
  	Products.insert({name: "Alface", price: 0.49, image: "lettuce.jpg", "cooperativeId": cooperativeId});
  	Products.insert({name: "Banana", price: 1.99, image: "bananas.jpg", "cooperativeId": cooperativeId});
  	Products.insert({name: "Maçã", price: 0.99, image: "apples.jpg", "cooperativeId": cooperativeId});
  	Products.insert({name: "Melancia", price: 2.99, image: "watermellons.jpg", "cooperativeId": cooperativeId});
  	Products.insert({name: "Uva", price: 3.99, image: "grapes.jpg", "cooperativeId": cooperativeId});
  	Products.insert({name: "Batata", price: 1.99, image: "potatos.jpg", "cooperativeId": cooperativeId});

});