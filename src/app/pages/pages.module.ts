import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { LoginComponent } from './login/login.component';
import { NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LadingPageComponent,
        LoginComponent,
        RegisterUserComponent,
        LayoutMainComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NbInputModule,
        NbIconModule,
        NbFormFieldModule,
        RouterModule,
        SharedModule
    ],
})
export class PagesModule { }