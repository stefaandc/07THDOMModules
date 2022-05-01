export class Product {
  #id;
  #eigenaar;
  #postcode;
  #gemeente;
  #titel;
  #omschrijving;
  #prijs;
  #categorie;
  #afbeeldingen;
  constructor(
    id,
    eigenaar,
    postcode,
    gemeente,
    titel,
    omschrijving,
    prijs,
    categorie,
    afbeeldingen
  ) {
    this.#id = id;
    this.#eigenaar = eigenaar;
    this.#postcode = postcode;
    this.#gemeente = gemeente;
    this.#titel = titel;
    this.#omschrijving = omschrijving;
    this.#prijs = prijs;
    this.#categorie = categorie;
    this.#afbeeldingen = afbeeldingen;
  }

  get id() {
    return this.#id;
  }
  get titel() {
    return this.#titel;
  }
  get omschrijving() {
    return this.#omschrijving;
  }
  get prijs() {
    return this.#prijs;
  }
  get categorie() {
    return this.#categorie;
  }
  get afbeeldingen() {
    return this.#afbeeldingen;
  }
}
