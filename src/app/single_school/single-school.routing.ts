import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SingleSchoolComponent } from "./single-school.component";
import { SchoolResolver } from './school-resolver';

export const routes: Routes = [
	{ 
		path: 'school/:id',
		component: SingleSchoolComponent,
		resolve: {
			school: SchoolResolver
		} 
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [SchoolResolver]
})

export class SingleSchoolRoutingModule {}

