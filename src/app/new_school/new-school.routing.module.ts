import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewSchoolComponent } from "./new.school.component";

export const routes: Routes = [
  { path: 'new_school', component: NewSchoolComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})


export class NewSchoolRoutingModule {}
