
$contactFormAjax = function(){
  $.ajax({
    url: '/path/to/ajax',
    type: 'POST',
    data: $form().serialize(),
    beforeSend: function(){
      $cleanErrors();
      $submitButton.disable();
    }
  })
  .done(function(data) {
    window.location = data.redirect_url;
  })
  .fail(function(data) {
    $populateErrors(data);
    $submitButton.enable();
  });
}

$populateErrors = function(data){
  for (error in data.errors) {

    $populateFieldErrors(
      $requiredFieldsWrappers[error],
      data.errors[error]
    );

  }
}

$(document).ready(function() {
  $submitButton.enable();
});
