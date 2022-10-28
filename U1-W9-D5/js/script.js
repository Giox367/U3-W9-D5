"use strict";
// interface Ismartphone {
//   carica: number;
//   costoChiamata: number;
//   numeroChiamate: number;
//   contatoreChiamate: number;
//   unaRicarica(): number;
//   minutiDurata(): void;
//   number404(): number;
//   getNumeroChiamate(): number;
//   azzeraChiamate(): number;
// }
// class Smartphone implements Ismartphone {
//   carica: number = 0;
//   costoChiamata: number = 0.2;
//   numeroChiamate: number = 0;
//   contatoreChiamate: number = 0;
//   constructor(carica: number, numeroChiamate: number, contatoreChiamate: number, costoChiamata: number) {
//     this.carica = carica;
//     this.costoChiamata = costoChiamata;
//     this.numeroChiamate = numeroChiamate;
//     this.contatoreChiamate = contatoreChiamate;
//   }
//   unaRicarica(): number {
//     let input: number = 0;
//     return (this.carica += input);
//   }
//   minutiDurata(): void {
//     let secondi: number = 0;
//     let minuti: number = 0;
//     let paragrphminuti = <HTMLElement>document.querySelector("#minuti");
//     let paragrphSecondi = <HTMLElement>document.querySelector("#secondi");
//     setInterval(() => {
//       if (secondi < 59) {
//         secondi++;
//         paragrphSecondi.innerHTML = secondi.toString();
//       } else {
//         secondi = 0;
//         minuti++;
//         paragrphminuti.innerHTML = minuti.toString();
//       }
//     }, 1000);
//   }
//   number404(): number {
//     return this.carica;
//   }
//   getNumeroChiamate(): number {
//     return this.numeroChiamate;
//   }
//   azzeraChiamate(): number {
//     return (this.numeroChiamate = 0);
//   }
// }
// class Iphone extends Smartphone {
//   carica: number = 0;
//   numeroChiamate: number = 0;
//   contatoreChiamate: number = 0;
//   constructor(carica: number, numeroChiamate: number, contatoreChiamate: number, costoChiamata: number) {
//     super(carica, numeroChiamate, contatoreChiamate, costoChiamata);
//   }
// }
// class Samsung extends Smartphone {
//   carica: number = 0;
//   numeroChiamate: number = 0;
//   contatoreChiamate: number = 0;
//   constructor(carica: number, numeroChiamate: number, contatoreChiamate: number, costoChiamata: number) {
//     super(carica, numeroChiamate, contatoreChiamate, costoChiamata);
//   }
// }
// class Xiaomi extends Smartphone {
//   carica: number = 0;
//   numeroChiamate: number = 0;
//   contatoreChiamate: number = 0;
//   constructor(carica: number, numeroChiamate: number, contatoreChiamate: number, costoChiamata: number) {
//     super(carica, numeroChiamate, contatoreChiamate, costoChiamata);
//   }
// }
// let iphone: Iphone = new Iphone(100, 0, 0, 0.2);
// let Samsung1: Samsung = new Samsung(80, 0, 0, 0.2);
// let Xiaomi1: Xiaomi = new Xiaomi(50, 0, 0, 0.2);
// let btnIphoneStart = <HTMLButtonElement>document.querySelector("#start");
// btnIphoneStart.addEventListener("click", iphone.minutiDurata);
