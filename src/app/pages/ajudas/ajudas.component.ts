import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ajudas } from 'src/app/model/ajudas';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ajudas',
  templateUrl: './ajudas.component.html',
  styleUrls: ['./ajudas.component.scss']
})
export class AjudasComponent implements OnInit {

  public ajudasSolicitadas: Ajudas[] = []
  public ajudasDisponiveis: any[] = []

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private userLoggedService: UserLoggedService
  ) { }

  public get idUsuario(){
    return this.userLoggedService.user.id_usuario;
  }

  ngOnInit(): void {
    this.listarAjudasSolicitadas();
    this.listarAjudasDisponiveis();
  }

  excluirSolicitacao(id:number){
    this.http.delete<any>(`${environment.api}/ajudas/${id}`).subscribe( res => {
      console.log(res)
      this.toastr.success('Ajuda deletada com sucesso!');
      this.ajudasSolicitadas = this.ajudasSolicitadas.filter( ajuda => ajuda.id_ajuda != id)
    })
  }

  listarAjudasSolicitadas(){
    this.http.get<any>(`${environment.api}/ajudas/auxiliado/${this.idUsuario}`).subscribe( res => {
      console.log(res)
      this.ajudasSolicitadas = res.ajudas
      console.log(this.ajudasSolicitadas)
    })
  }

  listarAjudasDisponiveis(){
    this.http.get<any>(`${environment.api}/ajudas/disponiveis/${this.idUsuario}`).subscribe( res => {
      console.log("DISPONIVEIS",res)
      this.ajudasDisponiveis = res.ajudas
      console.log(this.ajudasDisponiveis)
    })
  }

  ajudar(ajuda: any){
    this.http.put<any>(`${environment.api}/ajudas/contribuinte/${this.idUsuario}`, ajuda).subscribe( res => {
      this.ajudasDisponiveis = this.ajudasDisponiveis.filter( ad => ad.id_ajuda != ajuda.id_ajuda)
      this.toastr.info('Ajuda atribuida');
    })
  }
  

}
