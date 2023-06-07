import { Component } from '@angular/core';
import { IBlog } from 'src/app/interfaces/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {
  blogs: IBlog[] = [];
  constructor(private blogService: BlogService) {
   this.blogService.getBlogs().subscribe(data => {
     this.blogs = data
   }, error => {
     console.log(error.message)
   })
 }
}
