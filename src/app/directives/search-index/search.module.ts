import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SearchDirective } from "./search-directive.component";

@NgModule({
	imports: [CommonModule, FormsModule, BrowserModule],
	declarations: [SearchDirective]
})

export class SearchModule {}