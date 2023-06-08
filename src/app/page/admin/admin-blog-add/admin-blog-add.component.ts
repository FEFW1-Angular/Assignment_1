import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IBlog } from 'src/app/interfaces/Blog';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-admin-blog-add',
  templateUrl: './admin-blog-add.component.html',
  styleUrls: ['./admin-blog-add.component.scss']
})
export class AdminBlogAddComponent {
  blogForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    img: [''],
    description1:['', [Validators.required]],
    description2:['', [Validators.required]],
  })
  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  onHandleSubmit() {
    if (this.blogForm.valid) {
      const blog: IBlog = {
        title: this.blogForm.value.title || '',
        img:this.blogForm.value.img || '',
        descript_1: this.blogForm.value.description1 || '',
        descript_2: this.blogForm.value.description2 || '',
      }
      this.blogService.addBlogs(blog).subscribe(blog => {
        alert("Thêm sản phẩm thành công")
        this.router.navigate(['/admin/blog']);
      })
    }

  }
}
