import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.scss'],
})
export class AdminCategoryEditComponent {
  category!: ICategory;
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    img: [''],
  });
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = this.route.snapshot.params['id'];
      this.categoryService.getCategoryById(id).subscribe(
        (category) => {
          this.category = category;
          console.log(category._id);
          
          // set giá trị từ API vào input form
          this.categoryForm.patchValue({
            name: this.category.name,
            img: this.category.img,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleUpdate() {
    // kiểm tra nếu form hợp lệ
    if (this.categoryForm.valid) {
      const newCategory: ICategory = {
        _id: this.category._id,
        name: this.categoryForm.value.name || '',
        img: this.categoryForm.value.img || '',

      };
      console.log(newCategory);

      this.categoryService.updateCategory(newCategory).subscribe((category) => {
        alert('Cập nhật danh mục thành công');
        this.router.navigate(['/admin/category']);
      });
    }
  }
}