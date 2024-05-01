import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCallComponent } from './components/book-call/book-call.component';

const routes: Routes = [
      {
        path:'',
        component:BookCallComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseroutingModule {}
