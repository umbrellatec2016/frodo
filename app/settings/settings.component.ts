/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";


import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';

import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
  

   


    constructor(private translate: TranslateService) {
       
    }
    public username:string
    public password:string
    public proxy:string
    ngOnInit(): void {
        // Init your component properties here.
        //let secureStorage = new SecureStorage()
        this.username="mama"
        this.username=appSettings.getString("sip_user")
        this.password=appSettings.getString("password")
        this.proxy=appSettings.getString("sip_proxy")
        console.log(this.username)
        
    }
}
