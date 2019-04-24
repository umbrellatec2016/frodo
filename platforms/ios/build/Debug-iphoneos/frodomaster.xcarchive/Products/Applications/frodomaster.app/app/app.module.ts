/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { TranslateModule } from './@ngx-translate/core@10.0.2';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BottomNavigationComponent } from "./shared/components/bottom-navigation.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,

        TranslateModule.forRoot(),
        NativeScriptHttpClientModule
      
    ],
    declarations: [
        AppComponent,

        BottomNavigationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    
})
export class AppModule { }
