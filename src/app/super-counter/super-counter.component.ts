import { Component, OnInit, Input } from '@angular/core';
import { SuperCounter } from '../counter'

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['../counter/counter.component.css','./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

  @Input() supercounter: SuperCounter;
  
  constructor() {
    if (!this.supercounter)
      this.supercounter = new SuperCounter(0);
  }

  title : string ="Super Counter";

  ngOnInit(): void {
  }

  increment(){
    this.supercounter.value+= 3;
    console.log("Value from supercounter.component.ts: " + this.supercounter.value);
  }

  decrement(){
    if(this.supercounter.value < 3)
      this.supercounter.value = 0;
    else
      this.supercounter.value -= 3;
  }
}
