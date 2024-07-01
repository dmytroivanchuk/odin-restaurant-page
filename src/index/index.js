import "./preflight.css";
import "./index.css";
import configureHome from "../home/home.js";
import configureMenu from "../menu/menu.js";
import configureContact from "../contact/contact.js";

export const content = document.createElement("div");

configureIndex();
configureHome();

function configureIndex() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", () => {
    content.replaceChildren();
    configureHome();
  });
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", () => {
    content.replaceChildren();
    configureMenu();
  });
  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", () => {
    content.replaceChildren();
    configureContact();
  });

  content.id = "content";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  header.appendChild(nav);
  body.appendChild(header);
  body.appendChild(content);
}
