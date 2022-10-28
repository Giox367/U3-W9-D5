interface Ismartphone {
  carica: number;
  costoChiamata: number;
  numeroChiamate: number;
  contatoreChiamate: number;
  unaRicarica(carica: number): number;
  minutiDurata(durata: number): number;
  number404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): number;
}

class Smartphone implements Ismartphone {
  carica: number;
  costoChiamata: number = 0.2;
  numeroChiamate: number;
  contatoreChiamate: number;
  constructor(carica: number, numeroChiamate: number, contatoreChiamate: number, costoChiamata: number) {
    this.carica = carica;
    this.costoChiamata = costoChiamata;
    this.numeroChiamate = numeroChiamate;
    this.contatoreChiamate = contatoreChiamate;
  }
  unaRicarica(ricarica: number): number {
    return (this.carica += ricarica);
  }

  minutiDurata(durata: number): number {
    return this.carica - durata * this.costoChiamata;
  }

  number404(): number {
    return this.carica;
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): number {
    return (this.numeroChiamate = 0);
  }
}

class Iphone extends Smartphone {
  constructor(carica: number, numeroChiamate: number, contatoreChiamate: number, costoChiamata: number) {
    super(carica, numeroChiamate, contatoreChiamate, costoChiamata);
  }
}
let iphone: Iphone = new Iphone(100, 0, 0, 0.2);

console.log(iphone);
iphone.minutiDurata(30);
console.log(iphone.minutiDurata(30));
