import { Component, OnInit } from '@angular/core';
import { LoginService} from '../login.service'
import { User } from '../models/user'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private services: LoginService) { }

  ngOnInit(): void {
    this.services.username();
   
  }

}
