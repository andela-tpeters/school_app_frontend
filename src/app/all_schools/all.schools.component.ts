import { Component, AfterContentInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  templateUrl: "./all.schools.component.html"
})

export class AllSchoolsComponent implements AfterContentInit {

  ngAfterContentInit() {
    // $('.selection').selectize({sortField: 'text'});
    // $(".selectize-input input").attr('readonly','readonly');

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
