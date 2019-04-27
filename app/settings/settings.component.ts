/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";


import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';
import { SecureStorage } from "nativescript-secure-storage";
@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
  

   


    constructor(private translate: TranslateService) {
       
    }
    public usernmae:string
    public pasword:string
    public proxy:string
    ngOnInit(): void {
        // Init your component properties here.
        let secureStorage = new SecureStorage();
        
        secureStorage.get({
          key: "username"
        }).then(
          function(value) {
              this.username=value
          });
          secureStorage.get({
            key: "password"
          }).then(
            function(value) {
                this.password=value
            });
            secureStorage.get({
                key: "proxy"
              }).then(
                function(value) {
                    this.proxy=value
                    console.log(this.proxy)
                });
    }
}
