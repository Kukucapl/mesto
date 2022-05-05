const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-job');
const editProfile = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__container');
const popupClose = popup.querySelector('.popup__close-button');
const nameInput = popup.querySelector('#user-name');
const jobInput = popup.querySelector('#user-job');

const popupAdd = document.querySelector('.popup-add');
const formAddElement = popupAdd.querySelector('.popup-add__container');
const popupAddClose = popupAdd.querySelector('.popup-add__close-button');
const placeNameInput = popupAdd.querySelector('#place-name');
const placeLinkInput = popupAdd.querySelector('#place-link');

const cardContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;
const popupFigure = document.querySelector('.popup-figure');

const initialCards = [
  {
    name: 'Череповец',
    link: './images/Cherepovets.jpg'
  },
  {
    name: 'Челябинск',
    link: './images/Chelyabinsk.jpg'
  },
  {
    name: 'Казань',
    link: './images/Kazan.jpg'
  },
  {
    name: 'Москва',
    link: './images/Moskva.jpg'
  },
  {
    name: 'Норильск',
    link: './images/Norilsk.jpg'
  },
  {
    name: 'Волжский',
    link: './images/Volzhski.jpg'
  }
];

initialCards.forEach( function(i) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.element__title').textContent = i.name;
  card.querySelector('.element__image').src = i.link;
  card.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });
  card.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.parentElement.remove();
  });
  card.querySelector('.element__image').addEventListener('click', function () {
    popupFigure.classList.add('popup-figure_opened');
    popupFigure.querySelector('.popup-figure__image').src = i.link;
    popupFigure.querySelector('.popup-figure__caption').textContent = i.name;
  });
  cardContainer.prepend(card);
});


function popupOn() {
    popup.classList.add('popup_opened');
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
};

  function popupOff() {
    popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    popupOff()
};

editProfile.addEventListener('click', popupOn);
popupClose.addEventListener('click', popupOff);
formElement.addEventListener('submit', formSubmitHandler);


function popupAddOn() {
  placeNameInput.value = "";
  placeLinkInput.value = "";
  popupAdd.classList.add('popup-add_opened');
};

function popupAddOff() {
  popupAdd.classList.remove('popup-add_opened');
};

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.element__title').textContent = placeNameInput.value;
  if (placeLinkInput.value === '') {
    card.querySelector('.element__image').src = './images/Jose.jpg'
  } else {
    card.querySelector('.element__image').src = placeLinkInput.value;
  };
  card.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });
  card.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.parentElement.remove();
  });
  card.querySelector('.element__image').addEventListener('click', function (evt) {
    popupFigure.classList.add('popup-figure_opened');
    popupFigure.querySelector('.popup-figure__image').src = evt.target.src;
    popupFigure.querySelector('.popup-figure__caption').textContent = placeNameInput.value;
  });
  cardContainer.prepend(card);
  popupAddOff();
};

addButton.addEventListener('click', popupAddOn);
popupAddClose.addEventListener('click', popupAddOff);
formAddElement.addEventListener('submit', formAddSubmitHandler);

popupFigure.querySelector('.popup-figure__close-button').addEventListener('click', function () {
  popupFigure.classList.remove('popup-figure_opened');
});