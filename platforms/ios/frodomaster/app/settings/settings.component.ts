/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";


import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
  

   


    constructor(private translate: TranslateService) {
       
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
