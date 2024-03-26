import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../interface/users';
import { UserService } from '../services/user.srvice';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
@Input() user?:IUser
@Output() updated:EventEmitter<null>=new EventEmitter();

constructor(private service:UserService){}

ngOnInit(): void{
  }
  updateUser(){
    if(this.user)
    this.service.putUser(this.user).subscribe(
      ()=>{
        this.updated.emit();
        }
    );
  }

}
