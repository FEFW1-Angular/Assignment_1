import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.scss']
})
export class AdminCategoryEditComponent  {
  category!: ICategory;
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    img: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.categoryService.getCategoryById(id).subscribe(category => {
        this.category = category;
        this.categoryForm.patchValue({
          name: category.name,
          img: category.img
        });
      }, error => console.log(error.message))
    })
   }

  onHandleUpdate() {
    if (this.categoryForm.valid) {
      const updatedCategory: ICategory = {
        id: this.category.id,
        name: this.categoryForm.value.name || "",
        img: this.categoryForm.value.img || ""
      };

      this.categoryService.updateCategory(updatedCategory).subscribe(category => {
        alert("Thêm danh mục thành công")
        this.router.navigate(['/admin/category']);
      });
    }
  }
}