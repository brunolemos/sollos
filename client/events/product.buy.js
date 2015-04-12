Template.BuyProductTemplate.events({
	'submit form': function(e, template) {
			e.preventDefault();

      var card = {};
      card.number = $("#cc-number").val().replace(/[^0-9.]/g, "");
      card.cvc = $("#cc-cvc").val();
      card.expMonth = $("#cc-exp-month").val();
      card.expYear = $("#cc-exp-year").val();

      if(card.number == '' || card.cvc == '' || !(card.expMonth >= 1 && card.expMonth <= 12) || !card.expYear >= 2015) return false;

			// Disable the submit button
      $("#process-payment-btn").attr("disabled", "disabled");

      // Generate a card token & handle the response
      SimplifyCommerce.generateToken({
          key: "sbpb_ZWI2NjU4OTctMGJhYy00ODA4LWE1MjgtNzA1ZGIwYzM1OTY2",
          card: card
      }, simplifyResponseHandler);

			// Prevent the form from submitting
			return false;
	},
});

function simplifyResponseHandler(data) {
		console.log(data);

    var $paymentForm = $("#simplify-payment-form");
    // Remove all previous errors
    $(".error").remove();
    // Check for errors
    if (data.error) {
        // Show any validation errors
        if (data.error.code == "validation") {
            var fieldErrors = data.error.fieldErrors,
                fieldErrorsLength = fieldErrors.length,
                errorList = "";
            for (var i = 0; i < fieldErrorsLength; i++) {
                errorList += "<div class='error'>Field: '" + fieldErrors[i].field +
                             "' is invalid - " + fieldErrors[i].message + "</div>";
            }
            // Display the errors
            $paymentForm.after(errorList);
        }
        // Re-enable the submit button
        $("#process-payment-btn").removeAttr("disabled");
    } else {
        // The token contains id, last4, and card type
        var token = data["id"];
        // Insert the token into the form so it gets submitted to the server
        $paymentForm.append("<input type='hidden' name='simplifyToken' value='" + token + "' />");
        
        // Submit the form to the server
        // $paymentForm.get(0).submit();
        Meteor.call('buyProduct', data, this);
    }
}