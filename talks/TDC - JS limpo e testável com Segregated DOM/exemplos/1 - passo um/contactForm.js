
$(document).ready(function() {

  var contactFormAjax = function(){
    $.ajax({
      url: '/path/to/ajax',
      type: 'POST',
      data: $('#contact-form').serialize(),
      beforeSend: function(){
        $('.bg-danger').delete();
        $('#contact-form-submit-button').addClass('disabled').click(function(event) {
          event.preventDefault();
        });
      }
    })
    .done(function(data) {
      window.location = data.redirect_url;
    })
    .fail(function(data) {
      if (data.errors['name']) {
        $('#id_name').parent().append('<div class="bg-danger text-danger><p>' + data.errors['name'] + '</p></div>');
      };
      if (data.errors['email']) {
        $('#id_email').parent().append('<div class="bg-danger text-danger><p>' + data.errors['email'] + '</p></div>');
      };
      if (data.errors['message']) {
        $('#id_message').parent().append('<div class="bg-danger text-danger><p>' + data.errors['message'] + '</p></div>');
      };
      $('#contact-form-submit-button').click(function() {
        if ($('#id_name').val().length && $('#id_message').val().length && emailValidator($('#id_email').val())) {
          contactFormAjax();
        }
      });
    });
  }

  $('#contact-form-submit-button').click(function() {
    if ($('#id_name').val().length && $('#id_message').val().length && emailValidator($('#id_email').val())) {
      contactFormAjax();
    }
  });

});
