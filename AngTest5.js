// app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should update inputValue property on input change', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'Test Value';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.inputValue).toEqual('Test Value');
  });
});