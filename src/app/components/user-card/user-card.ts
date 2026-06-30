import { Component, Input } from '@angular/core';

import { User } from '../../service/user';

@Component({
  selector:'app-user-card',
  standalone:true,
  templateUrl:'./user-card.html',
  styleUrl:'./user-card.css'
})
export class UserCardComponent{

  @Input()
  user!:User;

}