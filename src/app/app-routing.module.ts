import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudasConcluidaComponent } from './pages/ajudas/ajudas-concluida/ajudas-concluida.component';
import { AjudasFormComponent } from './pages/ajudas/ajudas-form/ajudas-form.component';
import { AjudasPendenteComponent } from './pages/ajudas/ajudas-pendente/ajudas-pendente.component';
import { AjudasComponent } from './pages/ajudas/ajudas.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { HomeComponent } from './pages/home/home.component';
import { LadingPageComponent } from './pages/lading-page/lading-page.component';
import { LayoutMainComponent } from './pages/layout-main/layout-main.component';
import { LoginComponent } from './pages/login/login.component';
import { RatingComponent } from './pages/rating/rating.component';
import { ProdutoComponent } from './pages/recompensas/produto/produto.component';
import { RecompensasComponent } from './pages/recompensas/recompensas.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { SubCategoriaComponent } from './pages/sub-categoria/sub-categoria.component';
import { WalletComponent } from './pages/wallet/wallet.component';

const routes: Routes = [
  { path: '', component: LadingPageComponent },
  { path: 'home', component: LadingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { 
    path: 'safecommunity', 
    component: LayoutMainComponent,
    children: [
      {
        path: 'carteira',
        component: WalletComponent
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      },
      {
        path: 'historico',
        component: HistoricoComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'subcategoria',
        component: SubCategoriaComponent
      },
      {
        path: 'rating',
        component: RatingComponent
      },
      {
        path: 'recompensas',
        component: RecompensasComponent
      },
      {
        path: 'recompensas/produto',
        component: ProdutoComponent
      },
      {
        path: 'ajudas',
        component: AjudasComponent
      },
      {
        path: 'ajudas/cadastrar',
        component: AjudasFormComponent
      },
      {
        path: 'ajudas/:id/alterar',
        component: AjudasFormComponent
      },
      {
        path: 'ajudas-pendente',
        component: AjudasPendenteComponent
      },
      {
        path: 'ajudas-concluida',
        component: AjudasConcluidaComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'configuracoes',
        component: ConfiguracoesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
