import { Component, OnInit } from '@angular/core';
import { LoginService} from '../login.service' 

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor( private _LoginService: LoginService) { }

  ngOnInit(): void {
  }

}
