import "./preflight.css";
import "./index.css";
import configureHome from "../home/home.js";

export const content = document.createElement("div");

configureIndex();
configureHome();

function configureIndex() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";

  content.id = "content";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  header.appendChild(nav);
  body.appendChild(header);
  body.appendChild(content);
}
