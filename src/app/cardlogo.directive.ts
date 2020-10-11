import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCardlogo]',
  
})
export class CardlogoDirective implements OnChanges {
  //cardType: string = "";
 
  constructor() { }

  @Input() cardNumber: string;
  @Input() cardType: string;
  
  @HostBinding('src') imageSource;
  
ngOnChanges() {
  
  this.imageSource = './assets/default.jpg';

 
  if(this.cardNumber.startsWith("34")) {
    this.imageSource = './assets/amex.jpg';
    this.cardType = "Amex";
  }
  
  else if(this.cardNumber.startsWith("30")) {
    this.imageSource = './assets/diners.jpg';
    this.cardType = "Diners";
  }

  else if(this.cardNumber.startsWith("60")) {
      this.imageSource = './assets/discover.jpg';
      this.cardType = "DISCOVER";
    }
    
    else if(this.cardNumber.startsWith("5")) {
      this.imageSource = './assets/mastercard.jpg';
      this.cardType = "MASTERCARD";
    }
    
    else if(this.cardNumber.startsWith("4")) {
      this.imageSource = './assets/visa.jpg';
      this.cardType = "VISA";
    }
    else {
      this.imageSource = './assets/default.jpg';
      this.cardType = "Default";
    }
    
  
}
}
