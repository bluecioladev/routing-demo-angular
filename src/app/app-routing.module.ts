import { EmployeeDetailComponent } from './../../../strucutural-directives/src/app/employee-detail/employee-detail.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [ {

  path: '',

  pathMatch: 'full',

  redirectTo: '/departments'

},

{path: 'departments', component: DepartmentListComponent},

{path: 'departments/:id',component: DepartmentDetailComponent},

{path: 'employees', component: EmployeeListComponent},

{path: "**", component: PageNotFoundComponent} ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,
                                   EmployeeDetailComponent,
                                   DepartmentDetailComponent,
                                   PageNotFoundComponent]
