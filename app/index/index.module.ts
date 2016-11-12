import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IndexRoutingModule } from "./index-routing.module";
import { IndexComponent } from "./index.component";
import { SchoolService } from "../services/schools.service";

@NgModule({
  imports: [ IndexRoutingModule, CommonModule ],
  declarations: [ IndexComponent ],
  providers: [ SchoolService ]
})

export class IndexModule {}
