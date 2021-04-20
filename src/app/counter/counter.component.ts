import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() public value:number;

  @Input() counter: CounterComponent = this;

  constructor() {
    this.value = 0;
  }

  title="Counter"

  
  ngOnInit(): void {
  }

  increment(){
    this.value++;
    console.log("Value from counter.component.ts: " + this.value);
  }

  decrement(){
    if (this.value > 0)
      this.value--;
  }

  getValue(){
    return this.value;
  }

}
