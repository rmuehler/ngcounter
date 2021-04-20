import { Component } from '@angular/core';
import { CounterComponent} from './counter/counter.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Counter';

  createButton:Element = document.querySelector('#create');
  counters : CounterComponent[] = [];

  create(){
    let counter : CounterComponent = new CounterComponent();
    this.counters.push(counter);
    console.log("I was created!!");
    console.log(this.counters);
    //this.createComponent()
    
  }
}
