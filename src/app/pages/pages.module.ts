import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { LoginComponent } from './login/login.component';
import { NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { SharedModule } from '../shared/shared.module';
import { WalletComponent } from './wallet/wallet.component';
import { RatingComponent } from './rating/rating.component';
import { RecompensasComponent } from './recompensas/recompensas.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { AjudasComponent } from './ajudas/ajudas.component';
import { ChatComponent } from './chat/chat.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    declarations: [
        LadingPageComponent,
        LoginComponent,
        RegisterUserComponent,
        LayoutMainComponent,
        WalletComponent,
        RatingComponent,
        RecompensasComponent,
        ConfiguracoesComponent,
        AjudasComponent,
        ChatComponent,
        CategoriaComponent,
        SubCategoriaComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NbInputModule,
        NbIconModule,
        NbFormFieldModule,
        RouterModule,
        SharedModule,
        NgSelectModule,
        FormsModule
    ],
})
export class PagesModule { }