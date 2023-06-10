import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISigninUser, IUser } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent {
  constructor(
    private signinService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  signinForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]], 
    password: ['', [Validators.required, Validators.minLength(6)]], 
  });
  

  onHandleSubmit() {
    if (this.signinForm.valid) {
      const user: ISigninUser = {
        email: this.signinForm.value.email || '',
        password: this.signinForm.value.password || '',
      };
      this.signinService.signin(user).subscribe(
        (responseUser: ISigninUser) => {
          alert('Đăng nhập thành công');
          localStorage.setItem('currentUser', JSON.stringify(responseUser));
          this.router.navigate(['/home']);
        },
        (error) => {
          alert('Đăng nhập thất bại');
          console.log(error);
        }
      );
      
    }
  }
}
