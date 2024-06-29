import "./preflight.css";
import "./index.css";

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

  const content = document.createElement("div");
  content.id = "content";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  header.appendChild(nav);
  body.appendChild(header);
  body.appendChild(content);
}

configureIndex();
