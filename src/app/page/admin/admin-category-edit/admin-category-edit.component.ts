import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.scss']
})
export class AdminCategoryEditComponent {
  category: ICategory = {
    name: "",
    img: ""
  }
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.categoryService.getCategoryById(id).subscribe(category => {
        this.category = category;
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate() {
    this.categoryService.updateCategory(this.category).subscribe(category => {
      console.log(category)
    })
  }

}
