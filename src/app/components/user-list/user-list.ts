import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService, User } from '../../service/user';
import { UserCardComponent } from '../user-card/user-card';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    UserCardComponent
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService
  ){}

  ngOnInit(){

    this.userService.getUsers().subscribe({

      next:(response)=>{

        this.users=response.users;

      },

      error:(err)=>{

        console.error(err);

      }

    });

  }

}