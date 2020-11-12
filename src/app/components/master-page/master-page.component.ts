import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $("#menu-sidenav").click((e) => {
        e.preventDefault();
        $("#wrapper").toggleClass("menuDisplayed");
      });
    });
  }

}
