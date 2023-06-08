import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from 'src/app/interfaces/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blog-edit',
  templateUrl: './admin-blog-edit.component.html',
  styleUrls: ['./admin-blog-edit.component.scss']
})
export class AdminBlogEditComponent {
  blog!:IBlog;
  blogForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    img: [''],
    description1:['', [Validators.required]],
    description2:['', [Validators.required]],
  })
  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route:ActivatedRoute
    ) {
      
    this.route.paramMap.subscribe(param => {
      const id = this.route.snapshot.params['id'];
      this.blogService.getBlogsById(id).subscribe(blog => {
        this.blog = blog;
        // set giá trị từ API vào input form
        this.blogForm.patchValue({
          title:this.blog.title,
          img:this.blog.img,
          description1:this.blog.descript_1,
          description2:this.blog.descript_2
        })
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate() {
    // kiểm tra nếu form hợp lệ 
    if (this.blogForm.valid) {
      const newBlog: IBlog = {
        _id: this.blog._id,
        title: this.blogForm.value.title || '',
        img:this.blogForm.value.img || '',
        descript_1: this.blogForm.value.description1 || '',
        descript_2: this.blogForm.value.description2 || '',
      }
      console.log(newBlog);
      
      this.blogService.updateBlogs(newBlog).subscribe(blog => {
        alert("Cập nhật sản phẩm thành công")
        this.router.navigate(['/admin/blog']);
      })
    }
  }
}