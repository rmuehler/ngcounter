import { Component, Input } from '@angular/core';
import { CounterComponent } from './counter/counter.component'
import { SuperCounterComponent } from './super-counter/super-counter.component'
import { Counter, SuperCounter } from './counter'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Counter';
  createButton:Element = document.querySelector('#create');
  
  counters : Counter[] = [];
  supercounters : SuperCounter[] = [];
  
  create(){
    if(this.counters.length >= 5){
      this.combineCounters();
    }
    else{
      let counter: Counter = new Counter();
      this.counters.push(counter);
    }
  }

  combineCounters(){
    let temp : number = 0;
    for(let i = 0; i < this.counters.length; i++){
      temp += this.counters[i].value;
    }
    this.counters = [];
    let supercounter : SuperCounter = new SuperCounter(temp);
    // supercounter.value = temp;
    this.supercounters.push(supercounter);
  }
}
