import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent} from './index/index.component';

export const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full"},
  { path: "index", component: IndexComponent},
  { path: 'school/:id', loadChildren: './single_school/single-school.module#SingleSchoolModule' },
  { path: 'search/:q/:state', loadChildren: './search/search.module#SearchModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}