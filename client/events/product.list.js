Template.ProductsTemplate.events({
	'click .remove': function(e, template) {
			e.preventDefault();

	    if(this._id) {
				Products.remove(this._id);
	    }
	},
});