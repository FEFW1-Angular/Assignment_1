import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}
  //Category
  getCategorys(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:3000/categorys`);
  };

  deleteCategory(id: number): Observable<ICategory[]> {
    return this.http.delete<ICategory[]>(`http://localhost:3000/categorys/${id}`,);
  }
  getCategoryById(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`http://localhost:3000/categorys/${id}`);
  }
  addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`http://localhost:3000/categorys`, category);
  }
  updateCategory(category : any): Observable<ICategory> {
    return this.http.patch<ICategory>(`http://localhost:3000/categorys/${category.id}`, category);
  }
}
