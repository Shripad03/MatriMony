import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
    selector: 'app-plans',
    templateUrl: './plans.component.html',
    styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
    constructor() {
        this.openMenu();

    }

    // tslint:disable-next-line: typedef
    openMenu() {
        $('body').removeClass('noScroll');
        if ($('.collapse').hasClass('collapse-active')) {
            $('.collapse').removeClass('collapse-active');
        }
        else {
            $('.collapse').addClass('collapse-active');
        }
    }
}
