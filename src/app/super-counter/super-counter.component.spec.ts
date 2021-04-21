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

  it('When the + button is clicked super counter increments by 3', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let increment = compiled.querySelector('.incrementButton');
    increment.click();
    expect(component.supercounter.value).toEqual(3);
  });

  it('When the - button is clicked super counter decrements by 3', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let increment = compiled.querySelector('.incrementButton');
    let decrement = compiled.querySelector('.decrementButton');
    increment.click();
    increment.click();
    decrement.click();
    expect(component.supercounter.value).toEqual(3);
  });

  it('When the - button is clicked at 0, does not decrement', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let decrement = compiled.querySelector('.decrementButton');
    decrement.click();
    expect(component.supercounter.value).toEqual(0);
  });
});
