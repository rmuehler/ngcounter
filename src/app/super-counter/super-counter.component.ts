import { Component, OnInit } from '@angular/core';
//import {CounterComponent } from '../counter/'

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['../counter/counter.component.css','./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit  {

  public value:number;
  
  constructor() {
    this.value = 0;
  }

  title : string ="Super Counter"

  ngOnInit(): void {
  }

  increment(){
    this.value+= 3;
  }

  decrement(){
    if(this.value >= 3)
      this.value-= 3;
  }

}
