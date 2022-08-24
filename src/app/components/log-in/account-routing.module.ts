import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './log-in.component';
import { ListViewComponent } from './list-view.component';
import { AddEmployeeComponent } from './add-employee.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'login', component: LogInComponent },
            { path: 'ListView', component: ListViewComponent },
            { path: 'AddEmployee', component: AddEmployeeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }