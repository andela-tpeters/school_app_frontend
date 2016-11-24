import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IndexRoutingModule } from "./index-routing.module";
import { IndexComponent } from "./index.component";
import { SchoolService } from "../services/schools.service";
import { OwlCarouselDirective } from "../directives/owl-carousel-index/owl-carousel.index";

@NgModule({
  imports: [ IndexRoutingModule, CommonModule ],
  declarations: [ IndexComponent, OwlCarouselDirective ],
  providers: [ SchoolService ]
})

export class IndexModule {}
