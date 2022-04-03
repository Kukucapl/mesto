let editProfile = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__user-name');
let userJob = document.querySelector('.profile__user-job');
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let popupClose = popup.querySelector('.popup__close-button');
let nameInput = popup.querySelector('.popup__input');
let jobInput = popup.querySelector('.popup__input:last-of-type');

nameInput.value = userName.textContent;
jobInput.value = userJob.textContent;

function popupOnOff() {
    popup.classList.toggle('popup_opened');
  }

function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    popupOnOff()
}

editProfile.addEventListener('click', popupOnOff);
popupClose.addEventListener('click', popupOnOff);
formElement.addEventListener('submit', formSubmitHandler);