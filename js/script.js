//checking node list
// function playerPrice() {
//   let listContainer = document.querySelectorAll("li");
//   let nodeLength = listContainer.length;
//   return nodeLength;
// }
//player-1
document.getElementById("player-btn-1").addEventListener("click", function () {
  setListElementById("all-list-element", "Neymar Jr");
});
//player-2
document.getElementById("player-btn-2").addEventListener("click", function () {
  setListElementById("all-list-element", "Kylian Mbappé");
});
//player-3
document.getElementById("player-btn-3").addEventListener("click", function () {
  setListElementById("all-list-element", "Lionel Messi");
});
//player-4
document.getElementById("player-btn-4").addEventListener("click", function () {
  setListElementById("all-list-element", "Sergio Ramos");
});
//player-5
document.getElementById("player-btn-5").addEventListener("click", function () {
  setListElementById("all-list-element", "Renato Sanches");
});
//player-6
document.getElementById("player-btn-6").addEventListener("click", function () {
  setListElementById("all-list-element", "Vítor Machado");
});

//player pricing calculation
document.getElementById("calculate").addEventListener("click", function () {
  let listContainer = document.querySelectorAll("li");
  let nodeLength = listContainer.length;
  let perPlayerPrice = document.getElementById("per-player-price");
  let getPrice = perPlayerPrice.value;
  let playerExpensesPrice = nodeLength * getPrice;
  let playerExpenses = document.getElementById("player-expenses");
  playerExpenses.innerText = playerExpensesPrice;
});
//calculate total
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
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
  });
