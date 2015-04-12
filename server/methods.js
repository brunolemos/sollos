Meteor.methods({
	buyProduct: function(data, product) {
		console.log("data");
		console.log(data);
		console.log("product");
		console.log(product);
		var Simplify = Meteor.npmRequire("simplify-commerce"),

		client = Simplify.getClient({
			publicKey: 'sbpb_ZWI2NjU4OTctMGJhYy00ODA4LWE1MjgtNzA1ZGIwYzM1OTY2',
			privateKey: 'GXt96vrJXgmQrwwWKtUn9i/qm32SOTpckiPKTt3qS7Z5YFFQL0ODSXAOkNtXTToq'
		});
		
		client.payment.create({
				amount : "1000",
				token : data.id,
				description : product.name,
				reference : "7a6ef6be31",
				currency : "BRL"
			}, function(errData, data) {
		
			if(errData) {
				console.error("Error Message: " + errData.data.error.message);
				// handle the error
				return;
			}
			
			console.log("Payment Status: " + data.paymentStatus);
		});
	}
});