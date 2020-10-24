import { Component, OnInit } from '@angular/core';
import { AppRoutingModule }  from '../app-routing.module'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AppRoutingModule: AppRoutingModule) { }

  ngOnInit(): void {
  }

}
