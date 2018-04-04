let hireEmployersBtn = document.querySelector(".hire-employers-btn");
let goodsTypeBtn = document.querySelector(".goods-item-btn");
let goodsItemsBtn = document.querySelector(".goods-list-btn");
let goodsItemsField = document.querySelector(".choose-item");
let countDailyBudgetBtn = document.querySelector(".count-budget-btn");
let dailyBudgetField = document.querySelector(".count-budget-value");
let notebookBtn = document.querySelector(".activator");
let notebook = document.querySelector(".notebook");
let openImg = document.querySelector(".open");
let closedOverlay = document.querySelector(".closed");
let seller = document.querySelector(".seller");
let openIt = document.querySelector(".openit");
let budgetField = document.querySelector(".budget-value");
let nameField = document.querySelector(".name-value");
let discountField = document.querySelector(".discount-value");

var mainList = {
  budget: 0,
  shopName: "",
  employers: {},
  isOpen: false,
  price: "",
  discount: false,
  shopGoods: [],
  shopItems: [],
  addShopItems: function addShopItems() {
  	let items = document.querySelector(".choose-item").value;
  	let itemsText = document.querySelector(".items-value");
  	mainList.shopItems = items.split(",");
  	mainList.shopItems.sort();

  	let text = "";
  	for (var i = 0; i < mainList.shopItems.length; i++) {
			text += "• " + mainList.shopItems[i] + " ";
  	}
  	itemsText.textContent = text;
  },
  showShopItems: function showShopItems() {
    this.shopItems.forEach(function(item, i){
      console.log((i+1) + ": " + item);
    });
  },
  showShopGoods: function showShopGoods() {
    let goodsTypeField = document.querySelector(".goods-value");
  	goodsTypeField.textContent = "";
  	for (let i = 0; i <= 3; i++) {
  		goodsTypeField.textContent += this.shopGoods[i] + ', ';
  	}
  },
  showEmployers: function showEmployers() {
  	let employersField = document.querySelector(".employers-value");
  	employersField.textContent = "";
  	for (let i = 0; i <= 2; i++) {
  		employersField.textContent += this.employers[i] + ', ';
  	}
  }
};


// Новые работники
hireEmployersBtn.onclick = function() {
	let hireEmployers = document.querySelectorAll(".hire-employers-item");
  for (let i = 0; i <= 2; ++i) {
    mainList.employers[i] = hireEmployers[i].value;
  }
  mainList.showEmployers();
};

// Новые категории товаров
goodsTypeBtn.onclick = function() {
	let goodsType = document.querySelectorAll(".goods-item");
  for (let i = 0; i <= 3; ++i) {
    mainList.shopGoods[i] = goodsType[i].value;
  }
  mainList.showShopGoods();
};

// Новые товары
goodsItemsField.onchange = mainList.addShopItems;

// Рассчет дневного бюджета
countDailyBudgetBtn.addEventListener("click", () => {
  dailyBudgetField.value = mainList.budget / 30;
});

// Открывает блокнот с правками
notebookBtn.onclick = function() {
  notebook.classList.toggle("active");
};

// Переключатель открыто/закрыто
openImg.onclick = function() {
  mainList.discount = false;
  console.log(mainList.discount);
  if (mainList.isOpen) mainList.isOpen = false; else mainList.isOpen = true;
  openImg.classList.toggle("active");
  closedOverlay.classList.toggle("active");
  seller.classList.toggle("active");
  openIt.classList.toggle("active");
  if (mainList.isOpen) {
    mainList.budget = +prompt("Введите бюджет вашего кафе", 15000);
    let shopName = prompt("Название вашего кафе", "ЯваСкрипт");
    mainList.discount = confirm("Будет ли сегодня скидка для посетителей?");
    budgetField.textContent = mainList.budget;
    nameField.textContent = shopName;
    if (mainList.discount) {
      discountField.textContent = "-20% на всё меню";
    }
    else{
      discountField.textContent = "Сегодня нет скидок :(";
    }
  }
};
