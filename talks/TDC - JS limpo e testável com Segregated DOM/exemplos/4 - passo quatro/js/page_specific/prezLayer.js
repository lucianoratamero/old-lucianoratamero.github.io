
$app.prezLayer.getForm = function(){ return $('#contact-form'); }

$app.prezLayer.getNameField =    function(){ return $app.prezLayer.getForm().find('#id_name'); }
$app.prezLayer.getEmailField =   function(){ return $app.prezLayer.getForm().find('#id_email'); }
$app.prezLayer.getMessageField = function(){ return $app.prezLayer.getForm().find('#id_message'); }

$app.prezLayer.getNameFieldWrapper =    function(){ return $app.prezLayer.getNameField.parent(); }
$app.prezLayer.getEmailFieldWrapper =   function(){ return $app.prezLayer.getEmailField.parent(); }
$app.prezLayer.getMessageFieldWrapper = function(){ return $app.prezLayer.getMessageField.parent(); }

$app.prezLayer.getRequiredFieldsWrappers = function(){
  return {
    'name':    $app.prezLayer.getNameFieldWrapper(),
    'email':   $app.prezLayer.getEmailFieldWrapper(),
    'message': $app.prezLayer.getMessageFieldWrapper(),
  }
}

$app.prezLayer.errorsClass =   'bg-danger';
$app.prezLayer.getFormErrors = function(){ return $('.' + $app.prezLayer.errorsClass); }
$app.prezLayer.getSubmitButton = function(){ return $('#contact-form-submit-button'); }
