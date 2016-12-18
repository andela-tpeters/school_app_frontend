import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search.component";
import { SearchResolver } from "./search-resolver";

export const routes: Routes = [
  { path: '', component: SearchComponent, resolve: { schools: SearchResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SearchRoutingModule {}
