import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private services: LoginService) { }

  ngOnInit(): void {
  }

  logout(){
    this.services.logout()
  }

}
