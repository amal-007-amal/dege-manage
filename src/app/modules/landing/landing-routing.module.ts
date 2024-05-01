import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LLayoutComponent } from './components/l-layout/l-layout.component';
import { HomeComponent } from './components/home/home.component';
import { BookCallComponent } from '../user/components/book-call/book-call.component';

const routes: Routes = [
    {
        path:'',
        component:LLayoutComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class landingRoutingModule {}
