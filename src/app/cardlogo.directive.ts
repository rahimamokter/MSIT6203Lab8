import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCardlogo]',
  
})
export class CardlogoDirective implements OnChanges {
  cardType: string = "Discover";
 
ngOnChanges() {
  
  this.imageSource = './assets/default.JPG';

  if(this.cardNumber.startsWith("34")) {
    this.imageSource = './assets/amex.JPG';
    this.cardType = "Amex";
  }
  
  else if(this.cardNumber.startsWith("30")) {
    this.imageSource = './assets/diners.JPG';
    this.cardType = "Diners";
  }

  else if(this.cardNumber.startsWith("60")) {
      this.imageSource = './assets/discover.JPG';
      this.cardType = "DISCOVER";
    }
    
    else if(this.cardNumber.startsWith("5")) {
      this.imageSource = './assets/mastercard.JPG';
      this.cardType = "MASTERCARD";
    }
    
    else if(this.cardNumber.startsWith("4")) {
      this.imageSource = './assets/visa.JPG';
      this.cardType = "VISA";
    }
    
   
  
}

constructor() { }

  @Input() cardNumber: string;
  //@Input() cardType: string;
  
  @HostBinding('src') imageSource;
}
