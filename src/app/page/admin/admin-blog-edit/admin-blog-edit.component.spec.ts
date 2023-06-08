import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogEditComponent } from './admin-blog-edit.component';

describe('AdminBlogEditComponent', () => {
  let component: AdminBlogEditComponent;
  let fixture: ComponentFixture<AdminBlogEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBlogEditComponent]
    });
    fixture = TestBed.createComponent(AdminBlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
