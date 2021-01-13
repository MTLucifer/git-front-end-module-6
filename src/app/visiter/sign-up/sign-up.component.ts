import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interface/i-user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
user: IUser;
createUserForm: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      username: [null],
      password: [null],
      phoneNumber: [null]
    });
  }

  // tslint:disable-next-line:typedef
  createUser() {
    const newUser: IUser = this.createUserForm.value;
    this.userService.createUser(newUser).subscribe(() => {
      alert('OK');
    }, error => {
      alert('DM');
    });
  }
}
