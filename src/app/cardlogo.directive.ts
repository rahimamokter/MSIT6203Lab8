import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCardlogo]'
})
export class CardlogoDirective implements OnChanges {
  cardName: string = "Discover";

ngOnChanges() {
  const cardNoVISA = "4";
  const cardNoMaster = "5";
  const cardNoDiners = "30";
  const cardNoAmex = "34";
  const cardNoDiscover = "60";

  this.imageSource = './assets/visa.JPG';
  if(this.cardNumber.startsWith(cardNoVISA)) {
    this.imageSource = './assets/visa.JPG';
    this.cardName = "VISA";
  }

  if(this.cardNumber.startsWith(cardNoMaster)) {
    this.imageSource = './assets/mastercard.JPG';
    this.cardName = "Mastercard";
  }

  if(this.cardNumber.startsWith(cardNoDiscover)) {
    this.imageSource = './assets/discover.JPG';
    this.cardName = "Discover";
  }

  if(this.cardNumber.startsWith(cardNoDiners)) {
  this.imageSource = './assets/diners.JPG';
  this.cardName = "Diners";
  }

  if(this.cardNumber.startsWith(cardNoAmex)) {
  this.imageSource = './assets/amex.JPG';
  this.cardName = "Amex";
  }

}
constructor() { }
  @Input() cardNumber: string;
  @HostBinding('src') imageSource;
}
