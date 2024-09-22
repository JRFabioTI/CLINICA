import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!:FormGroup
  dadosFrase!:FormGroup

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = new FormGroup({
      nome: new FormControl(),
      email: new FormControl(),
      senha: new FormControl(),
      confirmaSenha: new FormControl(),
    })

  }
  onSubmit(){
  }
  togglePwd(){
  }
  sendFrase(){
  }
}
