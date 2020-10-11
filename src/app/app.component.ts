import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  appTitle = 'MSIT6203 Lab8';
  randomNumber: number= 0;
  grade: string= "F";
  randomNumberMessage = "";
  cardNumberInput="";
  cardType = "";
  
constructor(){}
ngOnInit() {
    this.generateRandom();
  }
  
  generateRandom() {
    this.randomNumber = Math.floor((Math.random() * 81) + 20);
    this.randomNumberMessage = "Generated Random Number: " + this.randomNumber;
}


switchHelper(){
  if (this.randomNumber >=90 )
    return "A";
  else if (this.randomNumber >=80 && this.randomNumber < 90)
    return "B";
  
  else if (this.randomNumber >=70 && this.randomNumber < 80)
    return "C";
  else if (this.randomNumber >=60 && this.randomNumber < 70)
    return "D";
  else if (this.randomNumber <= 59)
    return "F";
  else 
    return "Invalid Grade" 
  }
  
}
