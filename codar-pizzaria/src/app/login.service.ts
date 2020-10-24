import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user'
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostrarMenuEmitter = new EventEmitter<boolean>();
  obj: object;
  userInfo: User;
  json;
  
  constructor(
    private http: HttpClient, 
    private router: Router) { }

  login(user: User){
    this.http.post<User>('http://52.91.139.190/fsapi/users/login', user, httpOptions).subscribe(
      obj => {
        console.log('logou com sucesso');
        localStorage.setItem('userLogado', JSON.stringify(obj));
        this.router.navigateByUrl('/home');
       
      },
      error => {
        console.log('erro ao logar');
      }
    );  
  }
  usuarioLogado(): boolean {
    if(localStorage.getItem('userLogado')){
      return true;
    }
    return false;
  }

  username(){
    this.json = JSON.stringify(localStorage.getItem('userLogado'));
    console.log(this.json)
        
  }

} 