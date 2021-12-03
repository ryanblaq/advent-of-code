import { Component, OnInit } from '@angular/core';
import { numberArray } from './numberArray';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.scss']
})
export class DayOneComponent implements OnInit {

  public total = 0;
  public total2 = 0;

  constructor() { }

  ngOnInit(): void {
      this.partOne();
      this.partTwo();
  }

  partOne():void{
      numberArray.forEach((n:number)=>{
        if (n > n-1){
          this.total+=1;
        }        
      })
  }

  partTwo():void{
    this.total2 = 0;
    for (var x=0; x<numberArray.length; x++){
      if (numberArray[x] + numberArray[x+1] + numberArray[x+2] > numberArray[x-1] + numberArray[x] + numberArray[x+1]){
        this.total2+=1;
      }
    }
  }

}
