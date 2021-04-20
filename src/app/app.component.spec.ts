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
  
  //TODO: 
  it('the create button pushing counter to an array', () => {
    component.create();
    component.create();
    expect(component.counters.length).toEqual(2);
  });

});
