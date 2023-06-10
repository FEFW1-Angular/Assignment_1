import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-base-nav',
  templateUrl: './base-nav.component.html',
  styleUrls: ['./base-nav.component.scss']
})
export class BaseNavComponent {
  categorys: ICategory[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {
    this.categoryService.getCategorys().subscribe(data => {
      this.categorys = data
    }, error => {
      console.log(error.message)
    })
  }
  isLoggedIn() {
    return !!localStorage.getItem('currentUser');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signin']);
  }

}
