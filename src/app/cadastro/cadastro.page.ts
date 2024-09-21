import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from '../service/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
cadastro!:FormGroup
  constructor(private toast:ToastService, private router:Router) { }

  ngOnInit() {
    this.IniciarForm();
  }

  IniciarForm(){
    this.cadastro = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      confirmarsenha: new FormControl('')
    })
  }
  EnviarFormulario(){
    console.log(this.cadastro.value)
    this.cadastro.reset()
    this.toast.showSucess("Cadastro realizado com sucesso!")
    this.router.navigate(['login'])
  }
}
