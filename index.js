const URL =
  "https://script.google.com/macros/s/AKfycbzaG9KzrQVwPxTKvySjelMhIMb60WoacKdBn6-XnGpAV9EThJz7D05n7yWwjyuAqWIk/exec";
const rootEl = document.querySelector(".root");
//utilizando promise
/* function getItems() {
fetch(URL, {
  mode: "cors",
})(
    .then((res) => res.json())
    .then((response) => {
      const products = response.datos.slice(0, 20);
      products.forEach((p) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <div class="img-wrapper">
        <img src=${p.imagen}></img>
        </div>
            <h4>${p.marca + " " + p.modelo}</h4>
            <p>${p.precio}</p>
            `;
        rootEl.appendChild(card);
      });
    })
    .catch((e) => {
      console.error(e);
    });
} */
//utilizando async/await
async function getItems() {
  try {
    const res = await fetch(URL, {
      mode: "cors",
    });
    const items = await res.json();
    setCards(items.datos.slice(0, 20));
  } catch (error) {
    console.error(error);
  }
}
function setCards(products) {
  products.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
                <div class="img-wrapper">
                <img src=${p.imagen}></img>
                </div>
                    <h4>${p.marca + " " + p.modelo}</h4>
                    <p>${p.precio}</p>
                    `;
    rootEl.appendChild(card);
  });
}

(function main() {
  getItems();
})();
