import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ajudas-concluida',
  templateUrl: './ajudas-concluida.component.html',
  styleUrls: ['./ajudas-concluida.component.scss']
})
export class AjudasConcluidaComponent implements OnInit {

  ajudasAuxiliadas: any[] = [];
  ajudasContribuidas: any[] = [];
  modalRef?: BsModalRef;
  ajudaSelecionada: any;
  Math = Math;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private userLoggedService: UserLoggedService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.listarAjudasAuxiliadas();
    this.listarAjudasContribuidas();
  }

  listarAjudasAuxiliadas(){
    this.http.get<any>(`${environment.api}/ajudas/finishedperhelped/${this.userLoggedService.idUsuario}`).subscribe( res => {
      console.log(res)
      this.ajudasAuxiliadas = res.ajudas
      console.log(this.ajudasAuxiliadas)
    })
  }

  listarAjudasContribuidas(){
    this.http.get<any>(`${environment.api}/ajudas/finishedperhelper/${this.userLoggedService.idUsuario}`).subscribe( res => {
      console.log(res)
      this.ajudasContribuidas = res.ajudas
      console.log(this.ajudasContribuidas)
    })
  }

  openModal(template: TemplateRef<any>, ajuda: any) {
    this.modalRef = this.modalService.show(template);
    this.ajudaSelecionada = ajuda
    console.log(ajuda)
  }

}
