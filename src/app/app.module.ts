import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductDetailPageComponent } from './page/product-detail-page/product-detail-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { AdminProductAddComponent } from './page/admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './page/admin/admin-product-edit/admin-product-edit.component';
import { BaseNavComponent } from './components/base-nav/base-nav.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AdminCategoryComponent } from './page/admin/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from './page/admin/admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './page/admin/admin-category-edit/admin-category-edit.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { SigninPageComponent } from './page/signin-page/signin-page.component';
import { AdminBlogComponent } from './page/admin/admin-blog/admin-blog.component';
import { AdminUserComponent } from './page/admin/admin-user/admin-user.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { BlogDetailPageComponent } from './page/blog-detail-page/blog-detail-page.component';
import { AdminBlogAddComponent } from './page/admin/admin-blog-add/admin-blog-add.component';
import { AdminBlogEditComponent } from './page/admin/admin-blog-edit/admin-blog-edit.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    HomePageComponent,
    DashboardComponent,
    ProductPageComponent,
    ProductDetailPageComponent,
    PageNotFoundComponent,
    AdminProductComponent,
    AdminProductAddComponent,
    AdminProductEditComponent,
    BaseNavComponent,
    AdminNavComponent,
    AdminCategoryComponent,
    AdminCategoryAddComponent,
    AdminCategoryEditComponent,
    SignupPageComponent,
    SigninPageComponent,
    AdminBlogComponent,
    AdminUserComponent,
    BlogPageComponent,
    BlogDetailPageComponent,
    AdminBlogAddComponent,
    AdminBlogEditComponent,
    CategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
