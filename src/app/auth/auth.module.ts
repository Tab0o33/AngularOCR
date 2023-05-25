import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaceSnapsRoutingModule } from './auth-routing.module';

import { LoginComponent } from './components/login/login.component';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FaceSnapsRoutingModule
    ]
})
export class AuthModule { }
