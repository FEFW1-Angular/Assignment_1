import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPageComponent } from './signin-page.component';

describe('SigninPageComponent', () => {
  let component: SigninPageComponent;
  let fixture: ComponentFixture<SigninPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninPageComponent]
    });
    fixture = TestBed.createComponent(SigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
