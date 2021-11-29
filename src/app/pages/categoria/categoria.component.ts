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
  categorias: Categoria[] = [];
  isAlterando: boolean = false;
  idEditar: number | null = null;

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

  atualizar(){
    this.http.put<any>(`${environment.api}/categorias/${this.idEditar}`, this.categoriaForm.value).subscribe( res => {
      if(res) {
        console.log(res)
        this.toastr.success('Categoria atualizada com sucesso!');
        this.categorias = this.categorias.map((cat: Categoria) => {
          if(cat.id_categorias != this.idEditar) return cat;

          return res;
        })
        this.resetForm();
      }else{
        this.toastr.error('Erro ao atualizar categoria!');
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

  preencherForm(categoria: Categoria){
    this.isAlterando = true;
    this.idEditar = categoria.id_categorias;

    this.categoriaForm.patchValue({
      nome: categoria.nome,
      descricao: categoria.descricao
    })
  }

  salvar(){
    if(this.idEditar)
      return this.atualizar();

    this.cadastrar();
  }

  excluir(id:number){
    this.http.delete<any>(`${environment.api}/categorias/${id}`).subscribe( res => {
      console.log(res)
      this.toastr.success('Categoria deletada com sucesso!');
      this.categorias = this.categorias.filter( cat => cat.id_categorias != id)
    })
  }

  resetForm(){
    this.isAlterando = false;
    this.idEditar = null;
    this.limpar();
  }

}
