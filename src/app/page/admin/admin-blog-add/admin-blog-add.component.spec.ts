import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogAddComponent } from './admin-blog-add.component';

describe('AdminBlogAddComponent', () => {
  let component: AdminBlogAddComponent;
  let fixture: ComponentFixture<AdminBlogAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBlogAddComponent]
    });
    fixture = TestBed.createComponent(AdminBlogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
