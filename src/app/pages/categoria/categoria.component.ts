import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  countId: number = 4
  categoriaForm: FormGroup;
  categorias: any[] = [
    { id: 1, nome: 'Acessórios', descricao: 'Colares, anéis, brincos, coletes esportivos, gravatas, tocas, bonés, chapéus, roupão, jalecos, aventais (EPI), armações, quimonos esportivos, cintos'},
    { id: 2, nome: 'Auxilio', descricao: 'Presta auxilia a necessidade de alguma pessoa'},
    { id: 3, nome: 'Doação', descricao: 'Fazer uma doação de algo'},
  ];

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
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
    this.categorias.push({id: this.countId,...this.categoriaForm.value})
    this.countId++;
    this.limpar();
    this.http.post<any>(`${environment.api}/categorias`, this.categoriaForm.value).subscribe( res => {
      console.log(res)
      //this.categorias.push(res)
    })
  }

  listarCategorias(){
    this.http.get<any>(`${environment.api}/categorias`).subscribe( res => {
      console.log(res)
      this.categorias.push(res)
    })
  }

  limpar(){
    this.categoriaForm.patchValue({
      nome: '',
      descricao: ''
    })
  }

}
