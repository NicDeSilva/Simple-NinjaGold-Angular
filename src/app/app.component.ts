import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  goldCount : number;
  info : Array<string>;
  pokemon : any;

  constructor() {}

  calcGold = (rangeStart:number, rangeCap:number) => {
     let gold = Math.floor(Math.random() *(rangeCap-rangeStart+1)) +rangeStart;
     if (gold > 0){
       console.log("You earned:", gold, "gold.");
       this.info.splice(1,0,"You earned: " + gold + " gold.");
     }
     else {
      console.log("You lost:", gold, "gold.");
      this.info.splice(1,0,"You lost: " + gold + " gold.");
     }
     this.goldCount += gold;
  }

  ngOnInit() {
    this.info = ['Adventure Log:'];
    this.goldCount = 0;

    let btnFarm = document.getElementById("farm");
    btnFarm.addEventListener("click", (e:Event) => this.calcGold(2,5));

    let btnCave = document.getElementById("cave");
    btnCave.addEventListener("click", (e:Event) => this.calcGold(5,10));

    let btnHouse = document.getElementById("house");
    btnHouse.addEventListener("click", (e:Event) => this.calcGold(7,15));

    let btnCasino = document.getElementById("casino");
    btnCasino.addEventListener("click", (e:Event) => this.calcGold(-100,100));

  }
};