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

Router.route('/product/:_id', function () {
  this.render('ProductTemplate', {
    data: function () {
      return Products.findOne({_id: this.params._id});
    }
  });
}, {name: 'product.show'});

Router.route('/products/new', function () {
  this.render('NewProductTemplate');
}, {name: 'product.new'});