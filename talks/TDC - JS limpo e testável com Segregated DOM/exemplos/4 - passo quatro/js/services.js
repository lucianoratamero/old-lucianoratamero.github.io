
$app.services.ajaxForm = function(
  beforeSendCallback,
  successCallback,
  errorCallback
){
  $.ajax({
    url: '/path/to/ajax',
    type: 'POST',
    data: $form().serialize(),
    beforeSend: function(){
      beforeSendCallback();
    }
  })
  .done(function(data) {
    successCallback(data);
  })
  .fail(function(data) {
    errorCallback(data);
  });
}




