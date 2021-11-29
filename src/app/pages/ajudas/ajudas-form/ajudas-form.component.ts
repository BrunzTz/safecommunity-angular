import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { STATUS } from 'src/app/model/ajudas';
import { Categoria } from 'src/app/model/categoria';
import { SubCategoria } from 'src/app/model/sub-categoria';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ajudas-form',
  templateUrl: './ajudas-form.component.html',
  styleUrls: ['./ajudas-form.component.scss']
})
export class AjudasFormComponent implements OnInit {

  ajudasForm: FormGroup;
  subCategorias: SubCategoria[] = []
  categorias: Categoria[] = []
  status = STATUS;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userLoggedService: UserLoggedService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  public get idUsuario(){
    return this.userLoggedService.user.id_usuario;
  }

  public get idEditar(){
    return this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.iniciarForm();
    this.listarSubCategorias();
    this.listarCategorias();
    this.preencherForm();
  }

  iniciarForm(){
    this.ajudasForm = this.formBuilder.group({
      id_categoria: [null, [ Validators.required ]],
      id_subcategoria: [null, [ Validators.required ]],
      comentario: ['', [ Validators.required ]],
      status: [null]
    })
  }

  cadastrar(){
    this.http.post<any>(`${environment.api}/ajudas/${this.idUsuario}`, this.ajudasForm.value).subscribe( res => {
      if(res) {
        console.log(res)
        this.toastr.success('Ajuda cadastrada com sucesso!');
        this.voltarParaListagem()
      }else{
        this.toastr.error('Erro ao cadastrar ajuda!');
      }
    })
    this.limpar();
  }

  atualizar(){
    this.http.put<any>(`${environment.api}/ajudas/${this.idEditar}`, this.ajudasForm.value).subscribe( res => {
      if(res) {
        console.log(res)
        this.toastr.success('Ajuda atualizada com sucesso!');
        this.voltarParaListagem()
      }else{
        this.toastr.error('Erro ao atualizar ajuda!');
      }
    })
    this.limpar();
  }

  preencherForm(){
    if(!this.idEditar) return;

    this.http.get<any>(`${environment.api}/ajudas/${this.idEditar}`).subscribe( res => {
      console.log(res)
      const ajuda = res.ajuda.ajuda;
      this.ajudasForm.patchValue({
        id_categoria: ajuda.id_categorias,
        id_subcategoria: ajuda.id_subcategorias,
        comentario: ajuda.comentario,
        status: +ajuda.status
      })
    })

  }

  listarSubCategorias(){
    this.http.get<any>(`${environment.api}/subcategorias`).subscribe( res => {
      console.log(res)
      this.subCategorias = res
      console.log(this.subCategorias)
    })
  }

  listarCategorias(){
    this.http.get<any>(`${environment.api}/categorias`).subscribe( res => {
      console.log(res)
      this.categorias = res
      console.log(this.categorias)
    })
  }

  limpar(){
    this.ajudasForm.patchValue({
      id_categoria: '',
      id_subcategoria: '',
      comentario: ''
    })
  }

  voltarParaListagem(){
    this.router.navigate(['/safecommunity/ajudas'])
  }

  salvar(){
    if(this.idEditar)
      return this.atualizar();

    this.cadastrar();
  }

}
