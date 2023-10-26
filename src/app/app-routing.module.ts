import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path:'tasks', component: TaskListComponent},
  { path:'login', component: LoginComponent},
  { path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
