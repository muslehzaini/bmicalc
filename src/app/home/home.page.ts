import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //declare global variable
  //
  height
  weight
  bmi
  message

  constructor() {}


 buttonPressed(){
 	//local, cannot call into home

 	let heightCM = this.height/100

	this.bmi  = (this.weight/ Math.pow((heightCM),2)).toFixed(2)

	if (this.bmi <= 18){
		this.message="Underweight"
	}
	else if(this.bmi >= 18 && this.bmi <=25){
		this.message="Normal"
	}
	else if(this.bmi >= 25 && this.bmi <=30){
		this.message="Overweight"
	} 
	else{
		this.message="Obese"
	}
	


	


	//console.log(this.height)
	//console.log(this.weight)
 }

}
