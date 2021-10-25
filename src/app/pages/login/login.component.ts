import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private userLoggedService: UserLoggedService
    ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      senha: ['', [ Validators.required ]]
    })
  }

  login(){
    this.http.post<any>(`${environment.api}/auth`, this.loginForm.value).subscribe( res => {
      console.log(res)
      this.userLoggedService.name = res[0].nome
      
      if(res) this.router.navigate(['/safecommunity'])
    })
  }

}
