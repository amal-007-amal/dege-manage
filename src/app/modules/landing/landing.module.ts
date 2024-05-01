import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LLayoutComponent } from './components/l-layout/l-layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from "@angular/common";
import { landingRoutingModule } from "./landing-routing.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations:[
    LLayoutComponent,
    HomeComponent,
    AboutComponent,
  ],
    imports:[
        CommonModule,
        landingRoutingModule,
        SharedModule
    ],
    exports:[]
})

export class LandingModule{}