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

  /*******************Super Counter Tests********************************/

  it('Super counter will render into view when counter > 5', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    fixture.detectChanges();
    expect(component.supercounters.length).toEqual(1);
  });

  it('Super counter will have a starting value of the SUM of counters', () => {
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    component.counters[0].value += 5;
    component.counters[1].value += 3;
    component.counters[2].value += 7;
    component.create();
    expect(component.supercounters[0].value).toEqual(15);
  });

  it('5 Counters are removed from display when super counter appears', () => {
    component.create();
    component.create();
    component.create();
    component.create();
    component.create();
    expect(component.counters.length).toEqual(5);
    component.create();
    expect(component.counters.length).toEqual(0);
  });

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
  //   let width = document.querySelector(".counter-container").getAttribute("width");
  //   console.log(width);

  //   let counter = compiled.querySelector('counter');
  //   let superCounter = compiled.querySelector('super-counter');
  //   expect(superCounter.width).toBeGreaterThan(counter.width);
  // });
});
