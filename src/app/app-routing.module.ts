import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudasComponent } from './pages/ajudas/ajudas.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { LadingPageComponent } from './pages/lading-page/lading-page.component';
import { LayoutMainComponent } from './pages/layout-main/layout-main.component';
import { LoginComponent } from './pages/login/login.component';
import { RatingComponent } from './pages/rating/rating.component';
import { RecompensasComponent } from './pages/recompensas/recompensas.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
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
        path: 'rating',
        component: RatingComponent
      },
      {
        path: 'recompensas',
        component: RecompensasComponent
      },
      {
        path: 'ajudas',
        component: AjudasComponent
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
