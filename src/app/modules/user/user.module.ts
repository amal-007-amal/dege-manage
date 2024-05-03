import { NgModule } from "@angular/core";
import { UseroutingModule } from "./user-routing.module";
import { CommonModule } from "@angular/common";
import { BookCallComponent } from "./components/book-call/book-call.component";
import { ULayoutComponent } from './components/u-layout/u-layout.component';
import { SharedModule } from "../../shared/shared.module";
import { AdvisoryComponent } from './components/advisory/advisory.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { NotifcationComponent } from './components/notifcation/notifcation.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
@NgModule({
    declarations:[
        BookCallComponent,
        ULayoutComponent,
        AdvisoryComponent,
        MeetingComponent,
        NotifcationComponent,
        ProfileComponent,
    ],
    imports:[
        CommonModule,
        MatDatepickerModule,
        UseroutingModule,
        SharedModule
    ],
    providers: [provideNativeDateAdapter()],
    exports:[
        BookCallComponent
    ]
})

export class UserModule{}