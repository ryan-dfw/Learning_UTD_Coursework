const rootDiv = document.getElementById("root");

function createElement(elName, attrsObj, childText) {
  const newElement = document.createElement(elName);
  for (key in attrsObj) {
    newElement.setAttribute(key, attrsObj[key]);
  }
  newElement.innerText = child.Text;
  return newElement;
}

function insertElement(containerEl, childEl) {
  containerEl.appendChild(childEl);
}

const newAnchor = createElement(
  "a",
  { href: "https://www.google.com", class: "no-underline" },
  "Search the world"
);

insertElement(rootDiv, newAnchor);
