import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingPageComponent } from './pages/lading-page/lading-page.component';
import { LayoutMainComponent } from './pages/layout-main/layout-main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';

const routes: Routes = [
  { path: '', component: LadingPageComponent },
  { path: 'home', component: LadingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'safecommunity', component: LayoutMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
