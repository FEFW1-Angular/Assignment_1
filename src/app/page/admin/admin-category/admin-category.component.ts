import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {
  categorys: ICategory[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategorys().subscribe(data => {
      this.categorys = data
    }, error => {
      console.log(error.message)
    })
  }

  removeItem(id: any) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      console.log('Delete Success')
    })
  }

}
