Router.configure({
	layoutTemplate: 'index'
});

Router.route('/', function() {
	if(Meteor.user()) {
		this.render('home_logged');
	} else {
		this.render('home_notlogged');
	}
}, {name: 'home'});

Router.route('/logout', function() {
	Meteor.logout();
	this.redirect('home');
});