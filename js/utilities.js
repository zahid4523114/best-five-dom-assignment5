function setListElementById(element, name) {
  let getElement = document.getElementById(element);
  let createList = document.createElement("li");
  createList.innerText = name;
  getElement.appendChild(createList);
  //alert window
  let listContainer = document.querySelectorAll("li");
  let nodeLength = listContainer.length;
  if (nodeLength > 5) {
    alert("You can not add more than 5 players");
    getElement.removeChild(createList);
    const button = document.getElementById(disabledId);
    button.disabled = false;
  }
}
//disabled button
function buttonDisabled(disabledId) {
  const button = document.getElementById(disabledId);
  button.disabled = true;
}
//per player price calculation
function perPlayerPriceCalculation() {
  let listContainer = document.querySelectorAll("li");
  let nodeLength = listContainer.length;
  let perPlayerPrice = document.getElementById("per-player-price");
  let getPrice = perPlayerPrice.value;
  let playerExpensesPrice = nodeLength * getPrice;
  let playerExpenses = document.getElementById("player-expenses");
  playerExpenses.innerText = playerExpensesPrice;
}
//calculate total amount
function calculateTotalAmount() {
  let getManagerCost = document.getElementById("manager-price");
  let managerCostValue = Number(getManagerCost.value);
  let getCoachCost = document.getElementById("coach-price");
  let CoachCostValue = Number(getCoachCost.value);
  let playerExpenses = document.getElementById("player-expenses");
  let expensesInnerText = Number(playerExpenses.innerText);
  let totalCost = managerCostValue + CoachCostValue;
  let setTotal = expensesInnerText + totalCost;
  let totalAmount = document.getElementById("total-amount");
  totalAmount.innerText = setTotal;
}
