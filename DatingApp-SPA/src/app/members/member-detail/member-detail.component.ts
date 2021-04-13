import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'selenium-webdriver';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {
    this.userID = this.route.snapshot.params['id'];
  }
  userID: any;
  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(this.userID).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
}
