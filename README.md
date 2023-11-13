# Lista della spesa con JS

Da un array predefinito, creaiamo una lista della spesa che verrà elencata in HTML.

## Descrizione del codice

1- Creo un array arbitrario contenente degli item che rappresentano la lista della spesa

let listaSpesa = ["pomodori", "latte", "pane", "formaggio", "uova", "pasta", "riso", "frutta", "verdura", "carne"];

2- Creo un div contenitore all'interno del body e lo appendo al body.

const container = document.createElement('div');

document.body.appendChild(container);

3- Attraverso un ciclo while, prendo ogni elemento della lista e li inserisco in un li. Il programma svolge questa operazione fino a che gli item nell'array non sono finiti, quindi fino a che il numero di li è uguale alla lunghezza dell'array. Creo anche un ul che appendo al div.

const listaUl = document.createElement("ul");
document.container.appendChild(listaUl);

let i = 0;

while (listaSpesa.length - i !== 0) {
    const item = document.createElement("li");
    document.listaUl.appendChild(item);
    document.item.innerText = listaSpesa[i];
    i++
}

