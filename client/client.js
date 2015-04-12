Session.setDefault('TransactionId', '');

if (Meteor.isClient) {
	Meteor.startup(function() {
		GoogleMaps.load();
	});
}
