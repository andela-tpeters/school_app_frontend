import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SingleSchoolRoutingModule } from "./single-school.routing";
import { SingleSchoolService } from "./single-school.service";
import { SingleSchoolComponent } from "./single-school.component";


@NgModule({
	imports: [SingleSchoolRoutingModule, CommonModule],
	declarations: [SingleSchoolComponent],
	providers: [SingleSchoolService]
})

export class SingleSchoolModule {}