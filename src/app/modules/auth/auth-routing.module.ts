import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LLayoutComponent } from '../landing/components/l-layout/l-layout.component';
import { ALayoutComponent } from './components/a-layout/a-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {
      path:'',
      component:ALayoutComponent,
      children:[
        {
          path:'',
          component:LoginComponent
        },
        {
          path:'signup',
          component:RegisterComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
