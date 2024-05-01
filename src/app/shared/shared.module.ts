import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
    declarations:[
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports:[
        CommonModule,
    ],
    exports:[
        NavbarComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class SharedModule{}