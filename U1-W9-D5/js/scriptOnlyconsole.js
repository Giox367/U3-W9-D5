"use strict";
class Smartphone {
    constructor(carica, numeroChiamate, contatoreChiamate, costoChiamata) {
        this.costoChiamata = 0.2;
        this.carica = carica;
        this.costoChiamata = costoChiamata;
        this.numeroChiamate = numeroChiamate;
        this.contatoreChiamate = contatoreChiamate;
    }
    unaRicarica(ricarica) {
        return (this.carica += ricarica);
    }
    minutiDurata(durata) {
        return this.carica - durata * this.costoChiamata;
    }
    number404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        return (this.numeroChiamate = 0);
    }
}
class Iphone extends Smartphone {
    constructor(carica, numeroChiamate, contatoreChiamate, costoChiamata) {
        super(carica, numeroChiamate, contatoreChiamate, costoChiamata);
    }
}
let iphone = new Iphone(100, 0, 0, 0.2);
console.log(iphone);
iphone.minutiDurata(30);
console.log(iphone.minutiDurata(30));
