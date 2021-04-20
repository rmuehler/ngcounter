import { ComponentFixtureAutoDetect, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    
    component = new AppComponent();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Angular Counter'`, () => {
    expect(component.title).toEqual('Angular Counter');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Counter');
  });

  it('the create button is defined', () => {
    expect(component.createButton).toBeDefined();
  });

  it('the create button is rendered onto the page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let buttonText = compiled.querySelector('#create')
    expect(buttonText.innerHTML).toEqual("Create");
  });
  
  //TODO: click the button?
  it('the create button pushing counter to an array', () => {
    component.create();
    component.create();
    expect(component.counters.length).toEqual(2);
  });

  it('Render a value of a counter in view', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let value = compiled.querySelector('#countDisplay');
    expect(value.innerHTML).toEqual(0);
  });

  it('Ability to increment value of a counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component.create();
    //TODO hit plus button
    component.counters[0].increment();
    expect(component.counters[0].value).toEqual(1);
  });

  it('Cannot decrement value if it is 0', () => {
    component.create();
    expect(component.counters[0].decrement()).toEqual(0);
  });

  it('Super counter will render into view when counter > 5', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    let superCounter = compiled.querySelector('super-counter');
    expect(component.supercounters[0]).toEqual(superCounter);
    
  });

  it('Super counter component will be created', () => {
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    expect(component.supercounters[0]).toBeDefined();
  });

  it('Super counter will have a starting value of the SUM of counters', () => {
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.counters[0].value = 3;
    component.counters[3].value = 5;
    component.counters[2].value = 2;
    expect(component.supercounters[0]).toEqual(10);
  });

  it('5 Counters are removed from display when super counter appears', () => {
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    expect(component.counters.length).toEqual(0);
  });

  it('Super Counter is rendered as double the size of counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    let counter = compiled.querySelector('counter');
    let superCounter = compiled.querySelector('super-counter');
    expect(superCounter.width).toBeGreaterThan(counter.width)
  });

  it('Super Counter is not able to decrement below 0', () => {
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    expect(component.supercounters[0].decrement()).toEqual(0);
  });

  it('When the + button is clicked super counter increments by 3', () => {
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    expect(component.supercounters[0].increment()).toEqual(3);
  });

  it('When the - button is clicked super counter decrements by 3', () => {
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.supercounters[0].increment();
    component.supercounters[0].increment();
    expect(component.supercounters[0].decrement()).toEqual(3);
  });

  it('When the - button is clicked at 0, does not decrement', () => {
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    expect(component.supercounters[0].decrement()).toEqual(0);
  });
});
