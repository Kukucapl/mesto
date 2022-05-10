const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-job');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

const popups = Array.from(document.querySelectorAll('.popup'));

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupFigure = document.querySelector('.popup_figure');

const formEdit = document.querySelector('#user-info');
const buttonFormEditClose = formEdit.querySelector('.form__close-button');
const nameInput = formEdit.querySelector('#user-name');
const jobInput = formEdit.querySelector('#user-job');

const formAdd = document.querySelector('#element-card');
const buttonFormAddClose = formAdd.querySelector('.form__close-button');
const placeNameInput = formAdd.querySelector('#place-name');
const placeLinkInput = formAdd.querySelector('#place-link');

const figureImage = popupFigure.querySelector('.figure__image');
const figureCaption = popupFigure.querySelector('.figure__caption');

const cardContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function clearError(form) {
  const inputs = Array.from(form.querySelectorAll('.form__input'));
  const btn = form.querySelector('.form__save-button');
  inputs.forEach(function(input) {
  input.classList.remove('form__input_error');
  form.querySelector(`.${input.id}-error`).classList.remove('form__input-error_active');
  });
  toggleButton(inputs, btn, config);
};

buttonEdit.addEventListener('click', function() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  clearError(formEdit);
  openPopup (popupEdit);
});

formEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(popupEdit);
});

buttonFormEditClose.addEventListener('click', () => closePopup(popupEdit));

buttonAdd.addEventListener('click', function() {
  formAdd.reset();
  clearError(formAdd);
  openPopup (popupAdd);
});

buttonFormAddClose.addEventListener('click', () => closePopup(popupAdd));

function createCard(name, link) {
  const card = cardTemplate.cloneNode(true);
  const elementImage = card.querySelector('.element__image');
  card.querySelector('.element__title').textContent = name;
  elementImage.src = link;
  elementImage.alt = name;
  card.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });
  card.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });
  elementImage.addEventListener('click', function () {
    figureImage.src = link;
    figureImage.alt = name;
    figureCaption.textContent = name;
    openPopup(popupFigure);
  });
  return card;
};

function renderCard(name, link) {
  cardContainer.prepend(createCard(name, link));
};

formAdd.addEventListener('submit', function(evt) {
  evt.preventDefault();
  renderCard(placeNameInput.value, placeLinkInput.value);
  closePopup(popupAdd);
});

initialCards.forEach( function(item) {
  renderCard(item.name, item.link);
});

popupFigure.querySelector('.figure__close-button').addEventListener('click', () => closePopup(popupFigure));

popups.forEach(function(popup) {
 popup.addEventListener('click', function(evt) {
   closePopup(evt.target)
 });
});

function closeByEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}