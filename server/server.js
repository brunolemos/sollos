Meteor.startup(function () {
	ServiceConfiguration.configurations.upsert({service: "facebook" }, {
		$set: {
			clientId: "497754337040058",
			appId: "497754337040058",
			secret: "bb4825f75d0daf60bb1bbabbcf7ce31f",
			loginStyle: "popup"
		}
	});

	if (Cooperatives.find().count() <= 0) {
		Cooperatives.remove({});
		var cooperativeId = Cooperatives.insert({name: "Cooperativa COAF", image: "logo_coaf.png", cover: "240514-coaf-brasil.jpg", "description": "Constituída em 2003 por 60 pequenos agricultores da região de Bebedouro, com objetivo de comercializar a produção de verduras e legumes, conseqüentemente garantir melhores preços e capacidade de negociação.", address: "Rua Francisco de Paula, 445 Bebedouro São Paulo"});
		Cooperatives.insert({name: "Sítio Pé na Terra", image: "sitio_pe_na_terra.png", cover: "sitio_pe_na_terra.jpg", "description": "O Sítio Pé na Terra tem como principal foco a natureza. A consciência ecológica e humana são as bases do nosso trabalho, Seja nas visitações de grupos, nos cursos que sediamos ou nos alimentos orgânicos oferecidos.", address: "Rua Carlos Arthur Scherer, 2085, Lomba Grande, Novo Hamburgo/RS"});
		Cooperatives.insert({name: "EcoCitrus", image: "logo-ecocitrus.png", cover: "eco_citrus.jpg", "description": "Uma cooperativa de citricultores com um vasto campo de atuação. A crença em uma agricultura sustentável, ecologicamente correta, socialmente justa e economicamente viável sempre orientou os passos da Ecocitrus – Cooperativa dos Citricultores Ecológicos do Vale do Caí.", address: "Montenegro - RS"});
		Cooperatives.insert({name: "AAPISUL", image: "AAPISUL_icone.jpeg", cover: "AAPISUL.jpeg", "description": "Fundada desde 2007, na cidade de Pilar do Sul-SP com um grupo de 8 agricultores, em 2015 o número total de associados é de 27, que produzem além de mel, outros sub produtos (geléia real,própoles, cera e outros)", address: "Rua Major Euzébio de Moraes Cunha, 312, Fundos, Pilar do Sul"});
	}
	
	if (Products.find().count() <= 0) {
		Products.remove({});
	  	Products.insert({name: "Abacaxi", price: 2.99, image: "pineapples.jpg", "cooperativeId": cooperativeId});
	  	Products.insert({name: "Alface", price: 0.79, image: "lettuce.jpg", "cooperativeId": cooperativeId});
	  	Products.insert({name: "Banana", price: 1.99, image: "bananas.jpg", "cooperativeId": cooperativeId});
	  	Products.insert({name: "Maçã", price: 0.99, image: "apples.jpg", "cooperativeId": cooperativeId});
	  	Products.insert({name: "Melancia", price: 2.99, image: "watermellons.jpg", "cooperativeId": cooperativeId});
	  	Products.insert({name: "Uva", price: 3.99, image: "grapes.jpg", "cooperativeId": cooperativeId});
	  	Products.insert({name: "Batata", price: 1.99, image: "potatos.jpg", "cooperativeId": cooperativeId});
  	}
});