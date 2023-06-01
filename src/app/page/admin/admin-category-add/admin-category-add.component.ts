import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss']
})
export class AdminCategoryAddComponent {
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    img: [''],
  })
  constructor(
    private categoryServerice: CategoryService,
    private router:Router,
    private formBuilder: FormBuilder) { }

    onHandleSubmit() {
      if (this.categoryForm.valid) {
        const category: ICategory = {
          name: this.categoryForm.value.name || "",
          img: this.categoryForm.value.img || "",
        }
        this.categoryServerice.addCategory(category).subscribe(category => {
          alert("Thêm danh mục thành công")
          this.router.navigate(['/admin/category']);
        })
      }}
 
}
