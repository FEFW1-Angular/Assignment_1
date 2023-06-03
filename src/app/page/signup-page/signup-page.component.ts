import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  signupForm: FormGroup; 

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      role: [''],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const user: IUser = {
        username: this.signupForm.value.username || '',
        password: this.signupForm.value.password || '',
        email: this.signupForm.value.email || '',
        role: this.signupForm.value.role || '',
      };

      this.userService.addUser(user).subscribe(() => {
        alert('Đăng ký thành công');
        this.router.navigate(['/admin/users']);
      });
    }
  }
}
