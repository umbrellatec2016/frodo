/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: "", component: HomeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {
    ngOnInit():void{
        var app = require( "tns-core-modules/application" );
        var contacts = require( "tns-core-modules/nativescript-contacts" );
        var contactFields = ['name','phoneNumbers']
        contacts.getAllContacts(contactFields).then(function(args){
            console.log("getAllContacts Complete");
            console.log(JSON.stringify(args));
            /// Returns args:
            /// args.data: Generic cross platform JSON object, null if no contacts were found.
            /// args.reponse: "fetch"
        }, function(err){
            console.log("Error: " + err);
        });
    }
 }
