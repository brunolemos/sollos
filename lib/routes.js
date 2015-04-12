Router.configure({
	layoutTemplate: 'index'
});

Router.onBeforeAction(function() {
    //wait login to render first page
    this.wait(function() {return !Meteor.loggingIn(); });
    this.next();
});


/* USER */

Router.route('/', function() {
	if(Meteor.user()) {
		this.render('home_logged');
	} else {
		this.render('home_notlogged');
	}
}, {name: 'home'});

Router.route('/profile', function() {
	if(Meteor.user()) {
		this.render('ProfileTemplate');
	}
}, {name: 'profile'});

Router.route('/logout', function() {
	Meteor.logout();
	this.redirect('home');
}, {name: 'logout'});

/* PRODUCT */

Router.route('/products/new', function () {
  this.render('NewProductTemplate');
}, {name: 'product.new'});

Router.route('/product/:_id', function () {
  this.render('ProductTemplate', {
    data: function () {
      return Products.findOne({_id: this.params._id});
    }
  });
}, {name: 'product.show'});

/* PAYMENT */

Router.route('/product/:_id/checkout', function () {
  this.render('BuyProductTemplate', {
    data: function () {
      return Products.findOne({_id: this.params._id});
    }
  });
}, {name: 'product.buy'});