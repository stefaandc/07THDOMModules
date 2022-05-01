import { ProductenRepository } from "./productenRepository.js";

class ProductenComponent {
  #productenRepository;
  constructor() {
    this.#productenRepository = new ProductenRepository();
  }
  get productenRepository() {
    return this.#productenRepository;
  }
  // intialiseert de pagina
  initialiseerHtml() {
    this.categorieenToHtml(this.#productenRepository.geefAlleCategorieen());
    this.productenToHtml(this.#productenRepository.producten);
    document.getElementById("categorie").onchange = () => {
      this.productenToHtml(
        this.#productenRepository.geefProductenUitCategorie(
          document.getElementById("categorie").value
        )
      );
      document.getElementById("productDetails").style.display = "none";
    };
  }

  // voegt de gegeven categorieen toe aan de selectlist #categorie
  categorieenToHtml(categorieen) {
    categorieen.forEach((categorie) =>
      document
        .getElementById("categorie")
        .insertAdjacentHTML(
          "beforeend",
          `<option value="${categorie}">${categorie}</option>`
        )
    );
  }

  // toont het aantal producten in div #aantalProducten
  // toont de producten in div #overzichtProducten
  productenToHtml(producten) {
    document.getElementById(
      "aantalProducten"
    ).innerHTML = `<h4>Aantal producten: ${producten.length} </h4>`;
    document.getElementById("overzichtProducten").innerHTML = "";
    producten.forEach((product, index) => {
      const divElement = document.createElement("div");
      divElement.id = product.id;
      if (!(index % 2)) divElement.className = "wit";
      divElement.onclick = () => {
        if (document.querySelector(`#overzichtProducten .tekstVet`))
          document
            .querySelector(`#overzichtProducten .tekstVet`)
            .classList.remove("tekstVet");
        document.querySelector(`#${product.id} p`).classList.add("tekstVet");
        this.productDetailsToHtml(product);
      };
      divElement.insertAdjacentHTML(
        "afterbegin",
        `<img src=images/${product.id}/thumbs/thumb_${product.afbeeldingen[0]}.jpg alt=${product.titel}><p>${product.titel}</p>`
      );
      document.getElementById("overzichtProducten").appendChild(divElement);
    });
  }

  // toont de details van het gegeven product in de div #productDetails
  // zet het gegeven product vetjes in de div #overzichtProducten
  productDetailsToHtml(product) {
    // maakt het element met id productDetails zichtbaar en leeg
    const divProductDetails = document.getElementById("productDetails");
    divProductDetails.style.display = "block";
    divProductDetails.innerHTML = "";

    const h2Element = document.createElement("h2");
    const h2Text = document.createTextNode(product.titel);
    h2Element.appendChild(h2Text);
    const pElement = document.createElement("p");
    const pText = document.createTextNode(product.omschrijving);
    pElement.appendChild(pText);
    const h4Element = document.createElement("h4");
    const h4Text = document.createTextNode("Prijs: €" + product.prijs);
    h4Element.appendChild(h4Text);
    const divElement = document.createElement("div");
    divElement.id = "afbeeldingen";
    const imgGroteAfbeelding = document.createElement("img");
    imgGroteAfbeelding.id = "groteAfbeelding";
    imgGroteAfbeelding.src = `images/${product.id}/${product.afbeeldingen[0]}.jpg`;
    imgGroteAfbeelding.alt = product.titel;
    divElement.appendChild(imgGroteAfbeelding);
    const asideElement = document.createElement("aside");
    asideElement.id = "thumbnails";
    product.afbeeldingen.forEach((afbeelding) => {
      const imgElement = document.createElement("img");
      imgElement.src = `images/${product.id}/thumbs/thumb_${afbeelding}.jpg`;
      imgElement.onclick = () => {
        document.getElementById("groteAfbeelding").src = imgElement.src.replace(
          "/thumbs/thumb_",
          "/"
        );
      };
      asideElement.appendChild(imgElement);
    });
    divElement.appendChild(asideElement);
    document.getElementById("productDetails").appendChild(h2Element);
    document.getElementById("productDetails").appendChild(pElement);
    document.getElementById("productDetails").appendChild(h4Element);
    document.getElementById("productDetails").appendChild(divElement);
  }
}

const init = function () {
  const productenComponent = new ProductenComponent();
  productenComponent.initialiseerHtml();
};

window.onload = init;
