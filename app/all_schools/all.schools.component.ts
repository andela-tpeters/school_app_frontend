import { Component, AfterContentInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import * as $ from "jquery";
import 'bootstrapslider';

@Component({
  templateUrl: "app/all_schools/all.schools.component.html",
  styleUrls: ["assets/css/jquery.slider.min.css", "assets/css/style.css"]
})

export class AllSchoolsComponent implements AfterContentInit {

  ngAfterContentInit() {
    $('.selection').selectize({sortField: 'text'});
    $(".selectize-input input").attr('readonly','readonly');

    //  Price slider search page
    // if( $(".price-input").length > 0) {
    //     $(".price-input").each(function() {
    //         $(this).slider({
    //             from: 0,
    //             to: 9000000,
    //             smooth: true,
    //             round: 0,
    //             dimension: ',00&nbsp;$',
    //         });
    //     });
    // }
  }
}
