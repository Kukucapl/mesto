let editProfile = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__user-name');
let userJob = document.querySelector('.profile__user-job');
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let popupClose = popup.querySelector('.popup__close-button');
let nameInput = popup.querySelector('#user-name');
let jobInput = popup.querySelector('#user-job');

function popupOn() {
    popup.classList.add('popup_opened');
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
  }

  function popupOff() {
    popup.classList.remove('popup_opened');
  }

function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    popupOff()
}

editProfile.addEventListener('click', popupOn);
popupClose.addEventListener('click', popupOff);
formElement.addEventListener('submit', formSubmitHandler);