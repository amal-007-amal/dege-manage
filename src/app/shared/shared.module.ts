import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UHeaderComponent } from './components/u-header/u-header.component';
import { MHeaderComponent } from './components/m-header/m-header.component';
@NgModule({
    declarations:[
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    UHeaderComponent,
    MHeaderComponent
  ],
    imports:[
        CommonModule,
    ],
    exports:[
        NavbarComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        UHeaderComponent,
        MHeaderComponent
    ]
})

export class SharedModule{}