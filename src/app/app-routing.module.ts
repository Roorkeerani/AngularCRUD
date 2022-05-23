import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersComponent } from './users/users.component';
// import { EmployeeViewComponent } from './employee-view/employee-view.component';

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "user-create",
    component: UserCreateComponent
  },
  {
    path: "user/:id",
    component: UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
