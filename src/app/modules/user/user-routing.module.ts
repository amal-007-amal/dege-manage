import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCallComponent } from './components/book-call/book-call.component';
import { ULayoutComponent } from './components/u-layout/u-layout.component';
import { AdvisoryComponent } from './components/advisory/advisory.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { NotifcationComponent } from './components/notifcation/notifcation.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
      {
        path:'',
        component:ULayoutComponent,
        children:[
          {
            path:'advisory',
            component:AdvisoryComponent
          },
          {
            path:'connect',
            component:BookCallComponent
          },
          {
            path:'meeting',
            component:MeetingComponent
          },
          {
            path:'notifcation',
            component:NotifcationComponent
          },
          {
            path:'profile',
            component:ProfileComponent
          },
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseroutingModule {}
