Meteor.startup(function () {
	ServiceConfiguration.configurations.upsert({service: "facebook" }, {
		$set: {
			clientId: "497754337040058",
			secret: "bb4825f75d0daf60bb1bbabbcf7ce31f",
			loginStyle: "popup"
		}
	});
	
	if (Products.find().count() === 0) {
	  	Products.insert({name: "Abacaxi", price: 2.99, image: "pineapples.jpg", "cooperativeId": "kabrBctibvtGGbPbE"});
	  	Products.insert({name: "Alface", price: 0.49, image: "lettuce.jpg", "cooperativeId": "kabrBctibvtGGbPbE"});
	  	Products.insert({name: "Banana", price: 1.99, image: "bananas.jpg", "cooperativeId": "kabrBctibvtGGbPbE"});
	  	Products.insert({name: "Maçã", price: 0.99, image: "apples.jpg", "cooperativeId": "kabrBctibvtGGbPbE"});
	  	Products.insert({name: "Melancia", price: 2.99, image: "watermellons.jpg", "cooperativeId": "kabrBctibvtGGbPbE"});
	  	Products.insert({name: "Uva", price: 3.99, image: "grapes.jpg", "cooperativeId": "kabrBctibvtGGbPbE"});
	}

	if (Cooperatives.find().count() === 0) {
		Cooperatives.insert({name: "Cooperativa COAF", image: "logo_coaf.png", "description": "Nossa missão é entregar os melhores produtos para os melhores consumidores.", "address": "Rua Francisco de Paula, 445"});
	}
});