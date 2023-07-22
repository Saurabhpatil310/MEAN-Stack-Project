import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { InsertUpdateComponent } from './components/insert-update/insert-update.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'insertUpdate',component:InsertUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

