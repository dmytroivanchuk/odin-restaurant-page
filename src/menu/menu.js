import { content } from "../index/index.js";
import "./menu.css";

export default function configureMenu() {
  content.appendChild(infoContainer);
  if (!initialized) {
    initializeMenu();
  }
}

let initialized;
const infoContainer = document.createElement("div");

function initializeMenu() {
  infoContainer.classList.add("info-container");
  configureName();
  configureMenuItem(
    "Honey Tea",
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
    "$2"
  );
  configureMenuItem(
    "Beary Tea",
    "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
    "$3"
  );
  configureMenuItem(
    "Toast and Jam",
    "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
    "$1"
  );
  configureMenuItem(
    "Fresh Fruit",
    "A small bowl of fresh fruit, whatever we find at the market for the day.",
    "$3"
  );
  initialized = true;
}

function configureName() {
  const name = document.createElement("h2");
  name.textContent = "Menu";
  name.classList.add("name");
  infoContainer.appendChild(name);
}

function configureMenuItem(title, description, price) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  const menuItemTitle = document.createElement("h3");
  menuItemTitle.classList.add("menu-item-title");
  menuItemTitle.textContent = title;
  const menuItemDescription = document.createElement("p");
  menuItemDescription.classList.add("menu-item-description");
  menuItemDescription.textContent = description;
  const menuItemPrice = document.createElement("h4");
  menuItemPrice.classList.add("menu-item-price");
  menuItemPrice.textContent = price;

  menuItem.appendChild(menuItemTitle);
  menuItem.appendChild(menuItemDescription);
  menuItem.appendChild(menuItemPrice);
  infoContainer.appendChild(menuItem);
}
