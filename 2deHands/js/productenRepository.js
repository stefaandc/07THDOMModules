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
  voegProductToe(product) {}
  geefProductenUitCategorie(categorie) {}
  // retourneert een alfabetisch gesorteerde array van strings die de unieke categorieën bevat
  geefAlleCategorieen() {}
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
