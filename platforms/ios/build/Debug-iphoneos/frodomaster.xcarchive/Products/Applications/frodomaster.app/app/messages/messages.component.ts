/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";

import { NavigationEnd, Router } from "@angular/router";
import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: "Messages",
    moduleId: module.id,
    templateUrl: "./messages.component.html"
})
export class MessagesComponent implements OnInit {
  

   


    constructor(private translate: TranslateService,private router: Router,
		private routerExtensions: RouterExtensions) {
       
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    public onTap(args){
        this.routerExtensions.navigate(['customchat'], {
			transition: {
				name: "fade"
			},
			clearHistory: true
		});
    }
}
