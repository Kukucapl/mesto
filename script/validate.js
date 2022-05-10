const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__input-error_active',
};

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function(evt) {
        evt.preventDefault();
      });
    setEventListener(formElement, config);
    });
  }; 

  function setEventListener(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButton(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function() {
      checkIsInputValid(formElement, inputElement)
      toggleButton(inputList, buttonElement, config)
      });
    });
  }; 

  function checkIsInputValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideInputError(formElement, inputElement, config);
    };
  };

  function showInputError(formElement, inputElement, errorMessage, config) {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(config.errorClass);
  };
    
  function hideInputError(formElement, inputElement, config) {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    formError.classList.remove(config.errorClass);
    formError.textContent = '';
  };

  function toggleButton(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled='true';
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled='';
    };
  };

  function hasInvalidInput(inputList) {
    return inputList.some(function(inputElement) {
      return !inputElement.validity.valid;
    });
  };

  enableValidation(config);