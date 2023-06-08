import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from '../interfaces/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getBlogs(): Observable<IBlog[]>{
    return this.http.get<IBlog[]>(`http://localhost:8080/api/blog`);
  }
  deleteBlogs(_id: number): Observable<IBlog>{
    return this.http.delete<IBlog>(`http://localhost:8080/api/blog/${_id}`);
  }
  getBlogsById(_id: number): Observable<IBlog>{
  return this.http.get<IBlog>(`http://localhost:8080/api/blog/${_id}`);
  }
  addBlogs(blog:IBlog): Observable<IBlog>{
    return this.http.post<IBlog>(`http://localhost:8080/api/blog`,blog);
  }
  updateBlogs(blog:IBlog): Observable<IBlog>{
    return this.http.patch<IBlog>(`http://localhost:8080/api/blog/${blog._id}`,blog);
    }
}
