import { content } from "../index/index.js";
import "./contact.css";

export default function configureContact() {
  content.appendChild(infoContainer);
  if (!initialized) {
    initializeContact();
  }
}

let initialized;
const infoContainer = document.createElement("div");

function initializeContact() {
  infoContainer.classList.add("info-container");
  configureName();
  configureContactInfo(
    "Mama Bear",
    "Chef\n555-555-5554\ntotallyRealEmail@notFake.com"
  );
  configureContactInfo(
    "Papa Bear",
    "Manager\n555-555-5555\nperfectlyRealEmail@notFake.com"
  );
  configureContactInfo(
    "Baby Bear",
    "Waiter\n555-555-5556\ntotallyRealEmail@notFake.com"
  );
  initialized = true;
}

function configureName() {
  const name = document.createElement("h2");
  name.textContent = "Contact Us";
  name.classList.add("name");
  infoContainer.appendChild(name);
}

function configureContactInfo(name, description) {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  const contactName = document.createElement("h3");
  contactName.classList.add("contact-name");
  contactName.textContent = name;
  const contactDescription = document.createElement("p");
  contactDescription.classList.add("contact-description");
  contactDescription.textContent = description;

  contact.appendChild(contactName);
  contact.appendChild(contactDescription);
  infoContainer.appendChild(contact);
}
