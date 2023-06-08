import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/interfaces/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss']
})
export class BlogDetailPageComponent {
  blog!: IBlog;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = this.route.snapshot.params['id'];
      console.log(id);
      
      this.blogService.getBlogsById(id).subscribe(blog => {
       this.blog = blog;
      }, error => console.log(error.message))
    })
  }
}
