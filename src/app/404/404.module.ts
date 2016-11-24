import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./404.component";
import { NotFoundRouting } from "./404.routing";

@NgModule({
	imports: [NotFoundRouting],
	declarations: [NotFoundComponent]
})

export class NotFoundModule {}