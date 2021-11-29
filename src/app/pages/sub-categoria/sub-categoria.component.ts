import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/model/categoria';
import { SubCategoria } from 'src/app/model/sub-categoria';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-categoria',
  templateUrl: './sub-categoria.component.html',
  styleUrls: ['./sub-categoria.component.scss']
})
export class SubCategoriaComponent implements OnInit {

  subCategoriaForm: FormGroup;
  subCategorias: SubCategoria[] = []
  categorias: Categoria[] = [];
  isAlterando: boolean = false;
  idEditar: number | null = null;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.listarSubCategorias();
    this.listarCategorias();
  }

  iniciarForm(){
    this.subCategoriaForm = this.formBuilder.group({
      categoria: [null, [ Validators.required ]],
      nome: ['', [ Validators.required ]],
      descricao: ['', [ Validators.required ]]
    })
  }

  cadastrar(){
    this.http.post<any>(`${environment.api}/subcategorias/${this.subCategoriaForm.get('categoria')?.value}`, this.subCategoriaForm.value).subscribe( res => {
      if(res) {
        console.log(res)
        this.toastr.success('SubCategoria cadastrada com sucesso!');
        this.subCategorias.push(res)
      }else{
        this.toastr.error('Erro ao cadastrar subcategoria!');
      }
    })
    this.limpar();
  }

  atualizar(){
    this.http.put<any>(`${environment.api}/subcategorias/${this.idEditar}`, this.subCategoriaForm.value).subscribe( res => {
      if(res) {
        console.log(res)
        this.toastr.success('SubCategoria atualizada com sucesso!');
        this.subCategorias = this.subCategorias.map((sub: SubCategoria) => {
          if(sub.id_subcategorias != this.idEditar) return sub;

          return res;
        })
        this.resetForm();
      }else{
        this.toastr.error('Erro ao atualizar subcategoria!');
      }
    })
    this.limpar();
  }

  listarSubCategorias(){
    this.http.get<any>(`${environment.api}/subcategorias`).subscribe( res => {
      console.log(res)
      this.subCategorias = this.subCategorias.concat(res)
      console.log(this.subCategorias)
    })
  }

  listarCategorias(){
    this.http.get<any>(`${environment.api}/categorias`).subscribe( res => {
      console.log(res)
      this.categorias = this.categorias.concat(res)
      console.log(this.categorias)
    })
  }

  limpar(){
    this.subCategoriaForm.patchValue({
      categoria: null,
      nome: '',
      descricao: ''
    })
  }

  preencherForm(subCategoria: SubCategoria){
    this.isAlterando = true;
    this.idEditar = subCategoria.id_subcategorias;

    this.subCategoriaForm.patchValue({
      categoria: subCategoria.id_categorias,
      nome: subCategoria.nome,
      descricao: subCategoria.descricao
    })
  }

  salvar(){
    if(this.idEditar)
      return this.atualizar();

    this.cadastrar();
  }

  excluir(id:number){
    this.http.delete<any>(`${environment.api}/subcategorias/${id}`).subscribe( res => {
      console.log(res)
      this.toastr.success('Sub Categoria deletada com sucesso!');
      this.subCategorias = this.subCategorias.filter( sub => sub.id_subcategorias != id)
    })
  }

  resetForm(){
    this.isAlterando = false;
    this.idEditar = null;
    this.limpar();
  }

}
