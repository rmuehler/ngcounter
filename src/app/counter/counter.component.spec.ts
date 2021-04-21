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

  it('Ability to increment value of a counter', () => {
    // const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const increment = compiled.querySelector('#incrementButton');
    increment.click();
    expect(component.counter.value).toEqual(1);
  });

  it('Render a value of a counter in view', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const value = compiled.querySelector('#countDisplay');
    expect(value.innerHTML).toEqual('0');
  });

  it('Cannot decrement value if it is 0', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const decrement = compiled.querySelector('#decrementButton');
    decrement.click();
    expect(component.counter.value).toEqual(0);
  });

});
