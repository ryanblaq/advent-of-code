import { Binary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { binaryArray } from './binaryArray';

@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.scss']
})
export class DayThreeComponent implements OnInit {

  private binaryArray = binaryArray;
  public powerConsumption: number = 0;
  public lifeSupportRating: number = 0;
  public gammaRateBinary: string = '';
  public epsilonRateBinary: string = '';
  public oxygenRateBinary: string = '';
  public coRateBinary: string = '';
  public oxygenRate:number = 0;
  public coRate:number = 0;
  public gammaRate: number = 0;
  public epsilonRate: number = 0;

  constructor() { }

  ngOnInit(): void {

    this.calcBinaryValuePt1();

    this.calcEpsilonRate();

    this.totalPt1();


    this.calcOxygenValues();
    this.calcCOValues();

    this.totalPt2();
  }

  calcOxygenValues(): void{    
    this.binaryArray = binaryArray;
    //assumes equal length for all array items
    for (var x=0; x < binaryArray[0].length; x++){
      var positionNum = 0;
      this.binaryArray.forEach((num: string, idx: number)=>{
        var val = parseInt(num.slice(x, x+1));
        positionNum += val;
      })
      var matchOn = '';
      if (this.binaryArray.length > 1){
        if (positionNum >= this.binaryArray.length/2){
          matchOn = '1';
        } else {
          matchOn = '0';
        }
        this.binaryArray = this.binaryArray.filter((num)=>{
          if(num.slice(x,x+1) == matchOn){
            return true;
          } else {
            return false;
          }
        })
      }
    }
    this.oxygenRateBinary =  this.binaryArray[0];
    this.oxygenRate = parseInt(this.oxygenRateBinary, 2);
  }

  calcCOValues(): void{   
    this.binaryArray = binaryArray; 
    //assumes equal length for all array items
    for (var x=0; x < binaryArray[0].length; x++){
      var positionNum = 0;
      this.binaryArray.forEach((num: string, idx: number)=>{
        var val = parseInt(num.slice(x, x+1));
        positionNum += val;
      })
      var matchOn = '';
      if (this.binaryArray.length > 1){
        if (positionNum >= this.binaryArray.length/2){
          matchOn = '0';
        } else {
          matchOn = '1';
        }
        this.binaryArray = this.binaryArray.filter((num)=>{
          if(num.slice(x,x+1) == matchOn){
            return true;
          } else {
            return false;
          }
        })
      }      
    }
    this.coRateBinary =  this.binaryArray[0];
    this.coRate = parseInt(this.coRateBinary, 2);
  }

  calcBinaryValuePt1(): void{    
    //assumes equal length for all array items
    for (var x=0; x < binaryArray[0].length; x++){
      var positionNum = 0;
      binaryArray.forEach((num: string, idx: number)=>{
        var val = parseInt(num.slice(x, x+1));
        positionNum += val;
      })
      if (positionNum > binaryArray.length/2){
        this.gammaRateBinary += '1';
      } else {
        this.gammaRateBinary += '0';
      }
    }
    this.gammaRate = parseInt(this.gammaRateBinary, 2);
  }

  calcEpsilonRate(): void{
    for (var x=0; x < this.gammaRateBinary.length; x++){
      if (parseInt(this.gammaRateBinary.slice(x, x+1)) > 0){
        this.epsilonRateBinary += '0';
      } else {
        this.epsilonRateBinary += '1';
      }
    }
    this.epsilonRate = parseInt(this.epsilonRateBinary, 2);
  }

  totalPt1():void{
    this.powerConsumption = this.epsilonRate * this.gammaRate;
  }

  totalPt2():void{
    this.lifeSupportRating = this.oxygenRate * this.coRate;
  }

}
