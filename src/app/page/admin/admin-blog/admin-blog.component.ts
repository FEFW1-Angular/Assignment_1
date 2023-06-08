import { Component } from '@angular/core';
import { IBlog } from 'src/app/interfaces/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent {
 blogs:IBlog[] =[];
 removedBlogs :IBlog[] = [];

 constructor(private blogService:BlogService){
  this.blogService.getBlogs().subscribe(data => {
    this.blogs = data
  }, error => {
    console.log(error.message)
  })
 }
 removedItems:IBlog[] = [];
 removeItem(id: any) {

  const confirmed = confirm('Bạn có muốn xóa blog này không?');
  if (confirmed) {
    alert('Bạn đã xóa blog thành công');
  this.blogService.deleteBlogs(id).subscribe(() => {
    console.log('Delete Success');
    const removedItem = this.blogs.find(item => item._id === id);
    if (removedItem) {
      this.removedItems.push(removedItem);
      this.blogs= this.blogs.filter(item => item._id !== id)
    }
  });
}
}
}