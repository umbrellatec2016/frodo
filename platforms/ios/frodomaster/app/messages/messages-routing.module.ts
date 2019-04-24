/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MessagesComponent } from "./messages.component";

const routes: Routes = [
    { path: "", component: MessagesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MessagesRoutingModule { }
