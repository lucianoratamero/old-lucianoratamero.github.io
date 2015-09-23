
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
  if (data.errors['name']) {
    $populateFieldErrors($nameFieldWrapper(), data.errors['name']);
  };
  if (data.errors['email']) {
    $populateFieldErrors($emailFieldWrapper(), data.errors['email']);
  };
  if (data.errors['message']) {
    $populateFieldErrors($messageFieldWrapper(), data.errors['message']);
  };
}


$(document).ready(function() {
  $submitButton.enable();
});
