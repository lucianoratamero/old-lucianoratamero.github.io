
$form = function(){ return $('#contact-form'); }

$nameField =    function(){ return $form().find('#id_name'); }
$emailField =   function(){ return $form().find('#id_email'); }
$messageField = function(){ return $form().find('#id_message'); }

$nameFieldWrapper =    function(){ return $nameField.parent(); }
$emailFieldWrapper =   function(){ return $emailField.parent(); }
$messageFieldWrapper = function(){ return $messageField.parent(); }

$emailField.isValid = function(){
  // valida email
}

$form.getRequiredFields = function(){
  return [
    $nameField(),
    $emailField(),
    $messageField(),
  ]
}

$form.isValid = function(){
  var requiredFields = $form.getRequiredFields();

  for (var i = requiredFields.length - 1; i >= 0; i--) {
    if (!requiredFields[i].val().length) {
      return false;
    };
  };

  if (!$emailField.isValid()) {
    return false;
  };

  return true;
}

$populateFieldErrors = function(elm, message){
  elm.append('<div class="' + $errorsClass + '"><p>' + message + '</p></div>')
}

$cleanErrors = function(){
  $errors.delete();
}

$errorsClass = 'bg-danger';
$errors =      function(){ return $('.' + $errorsClass); }

$submitButton = function(){ return $('#contact-form-submit-button'); }

$submitButton.enable = function(){
  $submitButton.removeClass('disabled');
  $submitButton.click(function() {
    if ($form.isValid()) {
      $contactFormAjax();
    };
  });
}

$submitButton.disable = function(){
  $submitButton.addClass('disabled');
  $submitButton.click(function(event) {
    event.preventDefault();
  });
}
