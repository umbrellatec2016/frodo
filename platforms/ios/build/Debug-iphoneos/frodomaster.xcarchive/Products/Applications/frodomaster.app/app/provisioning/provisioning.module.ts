/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { TranslateModule } from '../@ngx-translate/core@10.0.2';

import { SharedModule } from "../shared/shard.module";

import { ProvisioningRoutingModule } from "./provisioning-routing.module";
import { ProvisioningComponent } from "./provisioning.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";


@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule,
        ProvisioningRoutingModule,
        NativeScriptFormsModule,

        TranslateModule.forChild(),
        NativeScriptHttpClientModule,
        SharedModule
    ],
    declarations: [
        ProvisioningComponent,
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProvisioningModule { }
