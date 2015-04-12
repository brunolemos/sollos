Template.NewProductTemplate.events({
	'submit form': function(e, template) {
			e.preventDefault();

	    var data = {};
	    data.name = $('input[name=name]').val();
	    data.price = $('input[name=price]').val();
	    data.createdBy = Meteor.userId();
	    data.createdAt = new Date();

	    if(data.name == '' || data.price < 0) return false;

    	Products.insert(data, function(error, result) {
    		if(error) 
    			alert(error.reason) 
    		else
    			Router.go('home');
    	});
	},
});