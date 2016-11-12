import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllSchoolsComponent } from "./all.schools.component";

export const routes: Routes = [
  { path: "all_schools", component: AllSchoolsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AllSchoolsRoutingModule {}
