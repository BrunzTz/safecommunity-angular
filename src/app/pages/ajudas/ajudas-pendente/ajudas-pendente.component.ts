import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Ajudas } from 'src/app/model/ajudas';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ajudas-pendente',
  templateUrl: './ajudas-pendente.component.html',
  styleUrls: ['./ajudas-pendente.component.scss']
})
export class AjudasPendenteComponent implements OnInit {

  modalRef?: BsModalRef;
  ajudasPendentes: any[];
  ajudaSelecionada: any;
  classificacaoForm: FormControl = new FormControl(5)

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private userLoggedService: UserLoggedService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.listarAjudasPendentes();
  }

  listarAjudasPendentes(){
    this.http.get<any>(`${environment.api}/ajudas/ongoingperhelper/${this.userLoggedService.idUsuario}`).subscribe( res => {
      console.log(res)
      this.ajudasPendentes = res.ajudas
      console.log(this.ajudasPendentes)
    })
  }

  openModalClassificacao(template: TemplateRef<any>, ajuda: any) {
    this.modalRef = this.modalService.show(template);
    this.ajudaSelecionada = ajuda
  }

  finalizar(){
    console.log(this.ajudaSelecionada)
    const body = {
      classificacao: this.classificacaoForm.value,
      status: 3
    }
    this.http.put<any>(`${environment.api}/ajudas/finish/${this.ajudaSelecionada.id_ajuda}`, body).subscribe( res => {
      this.modalRef?.hide()
      this.ajudasPendentes = this.ajudasPendentes.filter( ad => ad.id_ajuda != this.ajudaSelecionada.id_ajuda)
      this.toastr.success('Ajuda finalizada com sucesso!');
    })
  }

}
