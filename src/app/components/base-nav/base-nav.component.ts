import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-base-nav',
  templateUrl: './base-nav.component.html',
  styleUrls: ['./base-nav.component.scss']
})
export class BaseNavComponent {
  categorys: ICategory[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategorys().subscribe(data => {
      this.categorys = data
    }, error => {
      console.log(error.message)
    })
  }
}
