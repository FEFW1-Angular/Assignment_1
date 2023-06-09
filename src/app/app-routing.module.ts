import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductDetailPageComponent } from './page/product-detail-page/product-detail-page.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { AdminProductAddComponent } from './page/admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './page/admin/admin-product-edit/admin-product-edit.component';
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
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { CartLayoutComponent } from './layouts/cart-layout/cart-layout.component';
import { BillPageComponent } from './page/bill-page/bill-page.component';
import { AdminOrderComponent } from './page/admin/admin-order/admin-order.component';
import { AdminOrderDetailComponent } from './page/admin/admin-order-detail/admin-order-detail.component';
import { AuthGuard } from './guards/admin.guard';
const routes: Routes = [
  { path: "", component: BaseLayoutComponent, children: [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomePageComponent },
    { path: "product", component: ProductPageComponent },
    { path: "product/:id", component: ProductDetailPageComponent },
    { path: "category/:id", component: CategoryPageComponent },
    { path:"blog", component: BlogPageComponent},
    { path: "blog/:id", component: BlogDetailPageComponent },
    

  ]},
  { path: "", component: CartLayoutComponent, children: [
    { path: "carts", component: CartPageComponent },
    { path: "carts/bill", component: BillPageComponent },
    
  ]},
  //Signin and Signup
  { path: "signup", component: SignupPageComponent },
  { path: "signin", component: SigninPageComponent },

  { path: "admin", component: AdminLayoutComponent,canActivate: [AuthGuard] , children: [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },
    { path: "product", component: AdminProductComponent },
    { path: "product/add", component: AdminProductAddComponent },
    { path: "product/:id/edit", component: AdminProductEditComponent },
    { path: "category", component: AdminCategoryComponent },
    { path: "category/add", component: AdminCategoryAddComponent },
    { path: "category/:id/edit", component: AdminCategoryEditComponent },
    { path: "blog", component: AdminBlogComponent },
    { path: "blog/add", component: AdminBlogAddComponent },
    { path: "blog/:id/edit", component: AdminBlogEditComponent },
    { path: "user", component: AdminUserComponent },
    { path: "order", component: AdminOrderComponent },
    { path: "order/:id", component: AdminOrderDetailComponent },
  ]},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
