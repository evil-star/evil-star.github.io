// Начальное модальное окно
let createBtn = document.querySelector(".popup-btn"),
  popupOverlay = document.querySelector(".overlay"),
  mainPage = document.querySelector(".main"),
  customPage = document.querySelector(".custom");

createBtn.addEventListener("click", function() {
  popupOverlay.className += " animated fadeOut";
  mainPage.className += " animated fadeOutDown";

  setTimeout(function() {
    popupOverlay.style.display = "none";
  }, 1000);

  customPage.style.display = "flex";
  customPage.className += " animated fadeIn";
  for (var i = 0; i < customPage.children.length; i++) {
    customPage.children[i].style.display = "block";
  }
});

// Кастомизация

let sexMaleRadio = document.querySelector("#male"),
  sexFemaleRadio = document.querySelector("#female"),

  clothesSlide = document.querySelectorAll(".clothes-style"),
  hairSlide = document.querySelectorAll(".hair-style"),
  skinSlide = document.querySelectorAll(".skin-color"),

  personClothes = document.querySelector("#person-clothes"),
  personHair = document.querySelector("#person-hair"),
  personSkin = document.querySelector("#person-skin"),

  sex = "male";

// Смена пола

sexMaleRadio.addEventListener("change", function() {
  sex = "male";
  personSkin.style.backgroundImage = "url(img/skin/skin-1.png)";
  clothesCurrent = 0;
  hairCurrent = 0;
  skinCurrent = 0;
  clothesChange();
  hairChange();
  skinChange();
});
sexFemaleRadio.addEventListener("change", function() {
  sex = "female";
  personSkin.style.backgroundImage = "url(img/skin/skin-4.png)";
  clothesCurrent = 3;
  hairCurrent = 3;
  skinCurrent = 0;
  clothesChange();
  hairChange();
  skinChange();
});

// Смена одежды

function clothesChange() {
  for (var i = 0; i < clothesSlide.length; i++) {
    clothesSlide[i].style.display = "none";
  }

  if (sex == "male") {
    if (clothesCurrent < 0) {
      clothesCurrent = 0;
    } else if (clothesCurrent > 2) {
      clothesCurrent = 2;
    }
  } else if (sex == "female") {
    if (clothesCurrent < 3) {
      clothesCurrent = 3;
    } else if (clothesCurrent > 5) {
      clothesCurrent = 5;
    }
  }

  clothesSlide[clothesCurrent].style.display = "block";
  personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${clothesCurrent+1}.png`;
}

// Смена волос

function hairChange() {
  for (var i = 0; i < hairSlide.length; i++) {
    hairSlide[i].style.display = "none";
  }

  if (sex == "male") {
    if (hairCurrent < 0) {
      hairCurrent = 0;
    } else if (hairCurrent > 2) {
      hairCurrent = 2;
    }
  } else if (sex == "female") {
    if (hairCurrent < 3) {
      hairCurrent = 3;
    } else if (hairCurrent > 5) {
      hairCurrent = 5;
    }
  }

  hairSlide[hairCurrent].style.display = "block";
  personHair.style.backgroundImage = `url(img/hair/construct/hair-${hairCurrent+1}.png`;
}

// Смена кожи

function skinChange() {
  for (var i = 0; i < skinSlide.length; i++) {
    skinSlide[i].style.display = "none";
  }

  if (skinCurrent > 2) {
    skinCurrent = 2;
  } else if (skinCurrent < 0) {
  	skinCurrent = 0;
  }

  skinSlide[skinCurrent].style.display = "block";
  personSkin.style.backgroundImage = `url(img/skin/skin-${sex == "male" ? skinCurrent+1 : skinCurrent+4}.png`;
}

// Слайдеры

let clothesPrev = document.querySelector(".clothes .prev"),
  clothesNext = document.querySelector(".clothes .next"),

  hairPrev = document.querySelector(".hair .prev"),
  hairNext = document.querySelector(".hair .next"),

  skinPrev = document.querySelector(".skin .prev"),
  skinNext = document.querySelector(".skin .next"),

  clothesCurrent = 0,
  hairCurrent = 0,
  skinCurrent = 0;

clothesPrev.addEventListener("click", function() {
  clothesChange(clothesCurrent -= 1);
});
clothesNext.addEventListener("click", function() {
  clothesChange(clothesCurrent += 1);
});

hairPrev.addEventListener("click", function() {
  hairChange(hairCurrent -= 1);
});
hairNext.addEventListener("click", function() {
  hairChange(hairCurrent += 1);
});

skinPrev.addEventListener("click", function() {
  skinChange(skinCurrent -= 1);
});
skinNext.addEventListener("click", function() {
  skinChange(skinCurrent += 1);
});

// Кнопка "готово"

let readyBtn = document.querySelector("#ready"),
person = {},
cardsBlock = document.querySelector(".main-cards"),
newPerson = document.querySelector(".main-cards-item").cloneNode(true);

readyBtn.addEventListener("click", function() {
  person.name = document.querySelector("#name").value;
  person.age = document.querySelector("#age").value;
  person.sex = document.querySelector("[name=sex]:checked").value;
  person.views = document.querySelector("#select").value;
  person.bio = document.querySelector("#bio").value;

  // Переносим значения полей в новую карточку
  newPerson.querySelector(".name").textContent = person.name;
  newPerson.querySelector(".age").textContent = person.age;
  newPerson.querySelector(".sex").textContent = person.sex;
  newPerson.querySelector(".views").textContent = person.views;
  newPerson.querySelector(".bio").textContent = person.bio;
  newPerson.querySelector(".photo").innerHTML = document.querySelector(".person.construct").innerHTML;
  newPerson.querySelector(".photo").classList.remove("photo-1");

  cardsBlock.appendChild(newPerson);

  mainPage.classList.remove("fadeOutDown");
  mainPage.classList.add("fadeIn");

  customPage.classList.remove("fadeIn");
  customPage.className += " animated fadeOutDown";

  // Обнуляем голоса
  let progressBar = mainPage.querySelectorAll(".progress-bar"),
  progressBarNumber = mainPage.querySelectorAll(".result-count");
  for (var i = 0; i < progressBar.length; i++) {
    progressBar[i].style.height = "0%";
    progressBarNumber[i].textContent = "0%";
  }
});


