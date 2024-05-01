import { NgModule } from "@angular/core";
import { UseroutingModule } from "./user-routing.module";
import { CommonModule } from "@angular/common";
import { BookCallComponent } from "./components/book-call/book-call.component";
import { ULayoutComponent } from './components/u-layout/u-layout.component';

@NgModule({
    declarations:[
        BookCallComponent,
        ULayoutComponent
    ],
    imports:[
        CommonModule,
        UseroutingModule
    ],
    exports:[
        BookCallComponent
    ]
})

export class UserModule{}