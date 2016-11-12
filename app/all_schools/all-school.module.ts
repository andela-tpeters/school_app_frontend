import { NgModule } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AllSchoolsRoutingModule } from './all-schools-routing.module';
import { AllSchoolsComponent } from './all.schools.component';

@NgModule({
  imports: [ AllSchoolsRoutingModule, CommonModule],
  declarations: [AllSchoolsComponent]
})

export class AllSchoolModule{}
