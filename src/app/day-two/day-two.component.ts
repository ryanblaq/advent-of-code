import { Component, OnInit } from '@angular/core';
import { directionArray } from './directions';


@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.scss']
})
export class DayTwoComponent implements OnInit {
  public depth:number = 0;
  public hPos:number = 0;
  public total:number = 0;
  public depth2:number = 0;
  public hPos2:number = 0;
  public aim:number= 0;
  public total2:number = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.partOne();

    this.partTwo();    
  }

  partOne():void{
    for (var x=0; x< directionArray.length; x++){
      var value: number = 0;
      if (directionArray[x].startsWith('up')){
        value = parseInt(directionArray[x].slice(directionArray[x].length -1,directionArray[x].length));
        this.depth -= value;
      }
      if (directionArray[x].startsWith('down')){
        value = parseInt(directionArray[x].slice(directionArray[x].length -1,directionArray[x].length));
        this.depth += value;
      }
      if (directionArray[x].startsWith('forward')){
        value = parseInt(directionArray[x].slice(directionArray[x].length -1,directionArray[x].length));
        this.hPos += value;
      }
    }
    this.total = this.hPos * this.depth;
  }

  partTwo():void{
    for (var x=0; x< directionArray.length; x++){
      var value: number = 0;
      if (directionArray[x].startsWith('up')){
        value = parseInt(directionArray[x].slice(directionArray[x].length -1,directionArray[x].length));
        this.aim -= value;
      }
      if (directionArray[x].startsWith('down')){
        value = parseInt(directionArray[x].slice(directionArray[x].length -1,directionArray[x].length));
        this.aim += value;
      }
      if (directionArray[x].startsWith('forward')){
        value = parseInt(directionArray[x].slice(directionArray[x].length -1,directionArray[x].length));
        this.hPos2 += value;
        this.depth2 += (this.aim * value);
      }
    }
    this.total2 = this.hPos2 * this.depth2
  }
}
