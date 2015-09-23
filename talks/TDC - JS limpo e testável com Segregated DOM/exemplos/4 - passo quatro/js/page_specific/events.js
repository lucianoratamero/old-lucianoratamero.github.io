
$app.events.contactFormBeforeSend = function(){
  $app.cleanErrors();
  $app.disableSubmitButton();
}

$app.events.contactFormSuccess = function(data){
  window.location = data.redirect_url;
}

$app.events.contactFormError = function(data){
  $app.populateErrors(data);
  $app.enableSubmitButton();
}
