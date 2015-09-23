
if (!$app) {
  $app = {};  // declaração do objeto base da app, caso não exista
}

// ...

$app.formIsValid = function(){
  var requiredFields = $prezLayer.getFormRequiredFields();
  for (var i = requiredFields.length - 1; i >= 0; i--) {
    if (!requiredFields[i].val().length) {
      return false;
    };
  };
  if (!$app.validateEmail()) {
    return false;
  };
  return true;
}

$app.validateEmail = function(){
  // valida email
}

$app.populateErrors = function(data){
  for (error in data.errors) {
    $app.populateFieldErrors(
      $app.prezLayer.getRequiredFieldsWrappers[error],
      data.errors[error]
    );
  }
}

// ...

$app.populateFieldErrors = function(elm, message){
  elm.append('<div class="' + $app.prezLayer.errorsClass + '"><p>' + message + '</p></div>');
}

$app.cleanErrors = function(){
  $prezLayer.getFormErrors.delete();
}

$app.enableSubmitButton = function(){
  var submitButton = $app.prezLayer.getSubmitButton();

  submitButton.removeClass('disabled');
  submitButton.click(function() {
    if ($app.formIsValid()) {
      $app.services.ajaxForm(
        $app.events.contactFormBeforeSend,
        $app.events.contactFormSuccess,
        $app.events.contactFormError
      );
    };
  });
}

$app.disableSubmitButton = function(){
  var submitButton = $app.prezLayer.getSubmitButton();

  submitButton.addClass('disabled');
  submitButton.click(function(event) {
    event.preventDefault();
  });
}

$(document).ready(function() {
  $app.enableSubmitButton();
});
