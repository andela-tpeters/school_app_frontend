import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SingleSchoolComponent } from "./single-school.component";
import { SchoolResolver } from './school-resolver';

const routes: Routes = [
	{ 
		path: '',
		component: SingleSchoolComponent,
		resolve: {
			school: SchoolResolver
		} 
	}
];


export const singleSchoolRouting: ModuleWithProviders = RouterModule.forChild(routes);

