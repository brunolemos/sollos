Template.landing.events({
	'click #loginWithFacebook': function(e, template) {
		Meteor.loginWithFacebook({}, function() {
			Router.go('products');
		});
	}
});