import { Component, Input, OnInit } from '@angular/core';
import { Counter} from '../counter'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter : Counter;

  constructor() {
    if (!this.counter)
      this.counter = new Counter();
  }

  title : string="Counter";

  ngOnInit(): void {
  }

  increment(){
    this.counter.value++;
    console.log("Value from counter.component.ts: " + this.counter.value);
  }

  decrement(){
    if (this.counter.value > 0)
      this.counter.value--;
  }
}
