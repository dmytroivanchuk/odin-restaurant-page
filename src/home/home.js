import { content } from "../index/index.js";
import "./home.css";

export default function configureHome() {
  configureName();
  configureInfoContainer();
  configureDescription();
  configureHours();
  configureLocation();
}

const infoContainer = document.createElement("div");

function configureInfoContainer() {
  infoContainer.classList.add("info-container");
  content.appendChild(infoContainer);
}

function configureName() {
  const name = document.createElement("h2");
  name.textContent = "Beary's Breakfast Bar";
  name.classList.add("name");
  infoContainer.appendChild(name);
}

function configureDescription() {
  const description = document.createElement("div");
  description.classList.add("description");
  const review = document.createElement("p");
  review.classList.add("review");
  review.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  const author = document.createElement("h4");
  author.textContent = "Goldilocks";
  author.classList.add("author");
  description.appendChild(review);
  description.appendChild(author);
  infoContainer.appendChild(description);
}

function configureHours() {
  const hours = document.createElement("div");
  hours.classList.add("hours");
  const hoursTitle = document.createElement("h3");
  hoursTitle.textContent = "Hours";
  hoursTitle.classList.add("hours-title");
  const schedule = document.createElement("p");
  schedule.classList.add("schedule");
  schedule.textContent =
    "Sunday: 8am - 8pm\nMonday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm";
  hours.appendChild(hoursTitle);
  hours.appendChild(schedule);
  infoContainer.appendChild(hours);
}

function configureLocation() {
  const location = document.createElement("div");
  location.classList.add("location");
  const locationTitle = document.createElement("h3");
  locationTitle.classList.add("location-title");
  locationTitle.textContent = "Location";
  const address = document.createElement("p");
  address.classList.add("address");
  address.textContent = "123 Forest Drive, Forestville, Maine";
  location.appendChild(locationTitle);
  location.appendChild(address);
  infoContainer.appendChild(location);
}
