import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  registerUserForm: FormGroup

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.registerUserForm = this.formBuilder.group({
      nome: ['', [ Validators.required ]],
      endereco: [''],
      telefone: [''],
      cpf: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email ]],
      sexo: [''],
      senha: ['', [ Validators.required ]],
      confirmacao_senha: ['', [ Validators.required ]]
    })
  }

  registerUser(){
    this.http.post<any>(`${environment.api}/user`, this.registerUserForm.value).subscribe( res => {
      if(res) this.router.navigate(['/login'])
    })
  }

}
