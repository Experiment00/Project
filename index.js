// Elements
const carNameInput = document.getElementById("car-name");
const carModelInput = document.getElementById("car-model");
const carYearInput = document.getElementById("car-year");
const carPriceInput = document.getElementById("car-price");
const carPositionInput = document.getElementById("car-position");
const carListContainer = document.getElementById("car-list");

const carList = []; 

function addCar() {
  const carName = carNameInput.value.trim();
  const carModel = carModelInput.value.trim();
  const carYear = carYearInput.value.trim();
  const carPrice = carPriceInput.value.trim();
  const carPosition = carPositionInput.value.trim();


  if (!carName || !carModel || !carYear || !carPrice || !carPosition) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }


  const carExists = carList.some((car) => car.position === carPosition);

  if (!carExists) {
    const newCar = {
      name: carName,
      model: carModel,
      year: Number(carYear),
      price: Number(carPrice),
      position: Number(carPosition),
    };
    carList.push(newCar); 
  } else {
    const existingCar = carList.find((car) => car.position === carPosition);
    existingCar.name = carName;
    existingCar.model = carModel;
    existingCar.year = Number(carYear);
    existingCar.price = Number(carPrice);
  }

  carNameInput.value = "";
  carModelInput.value = "";
  carYearInput.value = "";
  carPriceInput.value = "";
  carPositionInput.value = "";

  renderCarList();
}

function renderCarList() {
  carListContainer.innerHTML = ""; 

  carList
    .sort((a, b) => a.position - b.position) 
    .forEach((car) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Название: ${car.name} , Позиция: ${car.position} , Модель: ${car.model}, Год: ${car.year}, Цена: ${car.price}`;
      carListContainer.appendChild(listItem);
    });
}
