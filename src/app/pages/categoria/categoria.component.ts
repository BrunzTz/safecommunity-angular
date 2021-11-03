import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/model/categoria';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoriaForm: FormGroup;
  categorias: Categoria[] = []

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private userLoggedService: UserLoggedService
    ) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.listarCategorias();
  }

  iniciarForm(){
    this.categoriaForm = this.formBuilder.group({
      nome: ['', [ Validators.required ]],
      descricao: ['', [ Validators.required ]]
    })
  }

  cadastrar(){
    this.http.post<any>(`${environment.api}/categorias`, this.categoriaForm.value).subscribe( res => {
      if(res) {
        this.toastr.success('Categoria cadastrada com sucesso!');
        this.categorias.push(res)
      }else{
        this.toastr.error('Erro ao cadastrar categoria!');
      }
    })
    this.limpar();
  }

  listarCategorias(){
    this.http.get<any>(`${environment.api}/categorias`).subscribe( res => {
      console.log(res)
      this.categorias = this.categorias.concat(res)
      console.log(this.categorias)
    })
  }

  limpar(){
    this.categoriaForm.patchValue({
      nome: '',
      descricao: ''
    })
  }

}
