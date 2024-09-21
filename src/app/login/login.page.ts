import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  }
  onSubmit(){
  }
  togglePwd(){
  }
  sendFrase(){
  }
}
