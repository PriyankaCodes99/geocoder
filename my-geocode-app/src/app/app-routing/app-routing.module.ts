import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from '../home/home.component';
import {FindComponent} from '../find/find.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'find',
        component: FindComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes, {enableTracing:false}),
    ],
    declarations: [
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
