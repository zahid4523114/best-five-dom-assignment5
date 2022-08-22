function setListElementById(element, name) {
  let getElement = document.getElementById(element);
  let createList = document.createElement("li");
  createList.innerText = name;
  getElement.appendChild(createList);
}
