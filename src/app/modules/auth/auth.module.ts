import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { ALayoutComponent } from './components/a-layout/a-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations:[
    ALayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
    imports:[
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ],
    exports:[]
})

export class AuthModule{}