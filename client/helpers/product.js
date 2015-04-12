Template.ProductTemplate.helpers({
	isHot: function() {
		return (this.numberBuyers < 20);
	},
});