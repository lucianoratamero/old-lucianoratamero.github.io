describe("contactForm tests:", function() {

  // ...

  it("should call $populateFieldErrors with $nameFieldWrapper and errors when calling populateErrors with name field errors", function() {

    var data = {
      'errors': {
        'name': 'error message'  // erro esperado
      }
    };
    spyOn(window, '$populateFieldErrors'); // mock da função de popular erros do campo
    spyOn(window, '$nameFieldWrapper').and.returnValue('wrapper');

    $populateErrors(data); // chamada da função

    expect($populateFieldErrors).toHaveBeenCalledWith('wrapper', 'error message');
    // aqui, esperamos que o populateFieldErrors tenha sido chamado corretamente

    expect($populateFieldErrors.calls.count()).toEqual(1);
    // e aqui, esperamos que somente o campo de nome tenha acionado os erros

  });

  // ...

});