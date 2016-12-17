import { NgModule, OnInit, AfterContentInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { singleSchoolRouting } from "./single-school.routing";
import { SingleSchoolService } from "./single-school.service";
import { SingleSchoolComponent } from "./single-school.component";
import { SchoolResolver } from './school-resolver';
import { SingleSchoolPictureSlider } from "../directives/single-school-owl/owl.component";
import { SingleSchoolTabs } from "../directives/single-school-tabs/tabs.component";

@NgModule({
	imports: [CommonModule, singleSchoolRouting],
	declarations: [SingleSchoolComponent, SingleSchoolPictureSlider, SingleSchoolTabs],
	providers: [SingleSchoolService, SchoolResolver]
})

export class SingleSchoolModule implements AfterContentInit {
	constructor() {

	}

	ngAfterContentInit() {
	}

	ngOnInit() {
	}
}