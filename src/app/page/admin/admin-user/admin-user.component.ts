import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent {
  users: IUser[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(data => {
      this.users = data
    }, error => {
      console.log(error.message)
    })
  }
}
