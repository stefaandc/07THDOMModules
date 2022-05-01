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
  }

  // voegt de gegeven categorieen toe aan de selectlist #categorie
  categorieenToHtml(categorieen) {}

  // toont het aantal producten in div #aantalProducten
  // toont de producten in div #overzichtProducten
  productenToHtml(producten) {}

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
