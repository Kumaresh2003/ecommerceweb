import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.css']
})
export class HeadNavComponent  {
  showMe=false;
  show=false;
  showMe1=false;
  showelectronics=false;
  constructor() { }
  Mynavbar(){
   
 
     this.showMe=!this.showMe;
  }
  
  Mobliesbar(){
    this.show=!this.show;
  }
  Mynavbar1(){
  this.showMe1=!this.showMe1;
}
myElectronics(){
  this.showelectronics=!this.showelectronics;
}
  }
 

