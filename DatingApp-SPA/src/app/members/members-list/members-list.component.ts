import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../services/alertify/alertify.service';
import { UserService } from '../../services/user-service/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
})
export class MembersListComponent implements OnInit {
  users: User[];
  constructor(
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users);
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
}
