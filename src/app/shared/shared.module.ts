import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NbIconModule, NbLayoutModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NbLayoutModule,
        NbIconModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class SharedModule { }