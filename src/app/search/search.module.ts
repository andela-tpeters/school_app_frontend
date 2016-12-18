import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Ng2PaginationModule } from "ng2-pagination";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { SearchTabs } from "../directives/search-page-tabs/search-tabs.component";
import { SearchResolver } from "./search-resolver";

@NgModule({
  imports: [ CommonModule, SearchRoutingModule, Ng2PaginationModule ],
  declarations: [ SearchComponent, SearchTabs ],
  providers: [ SearchResolver ]
})

export class SearchModule {}
