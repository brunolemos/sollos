Meteor.methods({
	buyProduct: function(userId, data, product) {
		var Simplify = Meteor.npmRequire("simplify-commerce"),

		client = Simplify.getClient({
			publicKey: 'sbpb_ZWI2NjU4OTctMGJhYy00ODA4LWE1MjgtNzA1ZGIwYzM1OTY2',
			privateKey: 'GXt96vrJXgmQrwwWKtUn9i/qm32SOTpckiPKTt3qS7Z5YFFQL0ODSXAOkNtXTToq'
		});

		client.payment.create({
				amount : product.price * 100,
				token : data.id,
				description : product.name,
				currency : "USD"
			}, function(errData, data) {
		
			if(errData) {
				if(errData.error)
					console.error("Error Message: " + errData.data.error.message);

				// handle the error
				return;
			}
			
			console.log("Payment Status: " + data.paymentStatus);

			//save transaction
			var transaction = {};
			transaction.userId = userId;
			transaction.itemCount = 1;
			transaction.totalPrice = product.price;
			transaction.productId = product._id;
			transaction.cooperativeId = product.cooperativeId;
			transaction.paymentStatus = data.paymentStatus;
			transaction.card = data.card;
			
			Transactions.insert(transaction);
		});
	},

	geoCode: function(address) {
		var geo = new GeoCoder();
		var result = geo.geocode(address);
		
		return result;
	}
});