import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormGroup, FormBuilder  } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  loginForm: FormGroup;
  submit: boolean;

  constructor(private _register: RegisterService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'name': ['', ], 
      'email': ['', ],
      'password': ['', ],
      'confirma_password': ['', ],
    });
  }

  login(){
    console.log('Cadastro em progresso')
    this.submit = true;
    this._register.login(this.loginForm.value);
  }

  usuarioCadastrado(): boolean {
    if(localStorage.getItem('userLogado')){
      return true;
    }
    return false;
  }
}