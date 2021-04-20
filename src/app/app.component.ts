import { Component, Input } from '@angular/core';
import { CounterComponent } from './counter/counter.component'
import { SuperCounterComponent } from './super-counter/super-counter.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Counter';
  value: number[] = [];
  createButton:Element = document.querySelector('#create');
  @Input() counters : CounterComponent[] = [];
  supercounters : SuperCounterComponent[] = [];
  valueArray : number[] = [0,0,0,0,0,0,0,0];




  create(){
    if(this.counters.length >= 5){
      this.combineCounters();
    }
    else{
      let counter : CounterComponent = new CounterComponent();
      // counter.value = 5;
      this.counters.push(counter);
      console.log("I was created!!");
      console.log("counters[0] value: " + this.counters[0].value);
      console.log("Counters array: " + this.counters.values)
    }

  }

  combineCounters(){
    let temp : number = this.counters[0].value;
    console.log("intial temp: " + temp)

    for(let i = 0; i < this.counters.length; i++){
      temp += this.counters[i].value;
      console.log("value : " + this.counters[i].value);
      console.log("temp: " + temp)
    }
    this.counters = [];

    let supercounter : SuperCounterComponent = new SuperCounterComponent();
    supercounter.value = temp;
    this.supercounters.push(supercounter);
  }
}
