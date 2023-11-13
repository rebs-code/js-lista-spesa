let listaSpesa = [
  "pomodori",
  "latte",
  "pane",
  "formaggio",
  "uova",
  "pasta",
  "riso",
  "frutta",
  "verdura",
  "carne",
];

const container = document.createElement("div");

document.body.appendChild(container);

const listaUl = document.createElement("ul");
container.appendChild(listaUl);

let i = 0;

while (i < listaSpesa.length) {
    const item = document.createElement("li");
    listaUl.appendChild(item);
    item.innerText = listaSpesa[i];
    i++;
}
