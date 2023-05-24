import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss']
})
export class AdminCategoryAddComponent {
  category: ICategory = {
    name: "",
    img: ""
  }
  constructor(private categoryService: CategoryService) {

  }

  onHandleAdd() {
    this.categoryService.addCategory(this.category).subscribe(category => {
      console.log(this.category)
    })
  }
}
