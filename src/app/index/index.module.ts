import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { IndexRoutingModule } from "./index-routing.module";
import { IndexComponent } from "./index.component";
import { SchoolService } from "../services/schools.service";
import { OwlCarouselDirective } from "../directives/owl-carousel-index/owl-carousel.index";
import { SearchDirective } from "../directives/search-index/search-directive.component";

@NgModule({
  imports: [ IndexRoutingModule, CommonModule, BrowserModule, FormsModule ],
  declarations: [ IndexComponent, OwlCarouselDirective, SearchDirective ],
  providers: [ SchoolService ]
})

export class IndexModule {}
