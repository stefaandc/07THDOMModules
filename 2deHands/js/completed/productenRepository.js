import { Product } from "./product.js";
import { producten } from "./productenArray.js";

export class ProductenRepository {
  #producten = [];
  constructor() {
    this.haalProductenOp();
  }
  get producten() {
    return this.#producten;
  }
  voegProductToe(product) {
    this.producten.push(product);
  }
  geefProduct(id) {
    return this.#producten.find((product) => product.id === id);
  }
  geefProductenUitCategorie(categorie) {
    return !categorie
      ? this.producten
      : this.producten.filter((p) => p.categorie === categorie);
  }
  // retourneert een alfabetisch gesorteerde array van strings die de unieke categorieën bevat
  geefAlleCategorieen() {
    return [
      ...new Set(this.#producten.map((product) => product.categorie)),
    ].sort();
  }
  haalProductenOp() {
    producten.forEach(
      ([
        id,
        eigenaar,
        postcode,
        gemeente,
        titel,
        omschrijving,
        prijs,
        categorie,
        afbeeldingen,
      ]) =>
        this.voegProductToe(
          new Product(
            id,
            eigenaar,
            postcode,
            gemeente,
            titel,
            omschrijving,
            prijs,
            categorie,
            afbeeldingen
          )
        )
    );
  }
}
