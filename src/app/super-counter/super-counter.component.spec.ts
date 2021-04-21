import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperCounterComponent } from './super-counter.component';

describe('SuperCounterComponent', () => {
  let component: SuperCounterComponent;
  let fixture: ComponentFixture<SuperCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('Super counter will render into view when counter > 5', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.nativeElement;
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   let superCounter = compiled.querySelector('super-counter');
  //   expect(component.supercounters[0]).toEqual(superCounter);
    
  // });

  // it('Super counter component will be created', () => {
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   expect(component.supercounters[0]).toBeDefined();
  // });

  // it('Super counter will have a starting value of the SUM of counters', () => {
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.counters[0].value = 3;
  //   component.counters[3].value = 5;
  //   component.counters[2].value = 2;
  //   expect(component.supercounters[0]).toEqual(10);
  // });

  // it('5 Counters are removed from display when super counter appears', () => {
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   expect(component.counters.length).toEqual(0);
  // });

  // it('Super Counter is rendered as double the size of counter', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.nativeElement;
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   let counter = compiled.querySelector('counter');
  //   let superCounter = compiled.querySelector('super-counter');
  //   expect(superCounter.width).toBeGreaterThan(counter.width)
  // });

  // it('Super Counter is not able to decrement below 0', () => {
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   expect(component.supercounters[0].decrement()).toEqual(0);
  // });

  // it('When the + button is clicked super counter increments by 3', () => {
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   expect(component.supercounters[0].increment()).toEqual(3);
  // });

  // it('When the - button is clicked super counter decrements by 3', () => {
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.supercounters[0].increment();
  //   component.supercounters[0].increment();
  //   expect(component.supercounters[0].decrement()).toEqual(3);
  // });

  // it('When the - button is clicked at 0, does not decrement', () => {
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   component.create();
  //   expect(component.supercounters[0].decrement()).toEqual(0);
  // });
});
