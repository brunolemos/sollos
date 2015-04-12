Template.ProductTemplate.helpers({
	isHot: function() {
		return (this.purchasedCount > 20);
	},

	purchasedCount: function() {
		return "100+";
	},

	getCooperative: function(cooperativeId) {
		return Cooperatives.findOne(cooperativeId);
	}
});