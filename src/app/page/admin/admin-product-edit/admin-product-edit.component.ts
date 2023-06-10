import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss'],
})
export class AdminProductEditComponent {
  categorys: ICategory[] = [];
  
  product!: IProduct;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = this.route.snapshot.params['id'];
      this.productService.getProductById(id).subscribe(
        (product) => {
          this.product = product;
          console.log(product)
          // set giá trị từ API vào input form
          this.productForm.patchValue({
            name: this.product.name,
            price: this.product.price,
            img: this.product.img,
            category: (this.product.categoryId as any)?._id,
          });
        },
        (error) => console.log(error.message)
      );
      this.categoryService.getCategorys().subscribe(
        (data) => {
          this.categorys = data;
        },
        (error) => {
          console.log(error.message);
        }
      );
    });
}
  
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    img: [''],
    category: [''],
  });
  
  onHandleUpdate() {
    
    // kiểm tra nếu form hợp lệ
    if (this.productForm.valid) {
      const newProduct: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || '',
        img: this.productForm.value.img || '',
        price: this.productForm.value.price || 0,
        categoryId: this.productForm.value.category || '',
      };
      // console.log(newProduct._id);

      this.productService.updateProduct(newProduct).subscribe((product) => {
        alert('Cập nhật sản phẩm thành công');
        this.router.navigate(['/admin/product']);
      });
    }
  }
}
