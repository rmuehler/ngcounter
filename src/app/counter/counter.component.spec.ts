import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create counter component', () => {
  //   expect(component).toBeTruthy();
  // });

  it('Ability to increment value of a counter', () => {
    //const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let increment = compiled.querySelector('#incrementButton');
    console.log(increment);
    //increment.click();
    fixture.detectChanges();
    expect(increment.innerHTML).toEqual("1");
  });

  // it('Render a value of a counter in view', () => {
  //   const fixture = TestBed.createComponent(CounterComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   let value = compiled.querySelector('#countDisplay');
  //   expect(value.innerHTML).toEqual(0);
  // });

  // it('Cannot decrement value if it is 0', () => {
  //   component.create();
  //   expect(component.counters[0].decrement()).toEqual(0);
  // });

});
