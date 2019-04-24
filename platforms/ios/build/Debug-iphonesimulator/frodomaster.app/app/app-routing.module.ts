/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/provisioning", pathMatch: "full" },
    { path: "provisioning", loadChildren: "./provisioning/provisioning.module#ProvisioningModule" },
    { path: "confirmation", loadChildren: "./confirmation/confirmation.module#ConfirmationModule" },
    { path: "country", loadChildren: "./country/country.module#CountryModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "dialpad", loadChildren: "./dialpad/dialpad.module#DialpadModule" },
    { path: "messages", loadChildren: "./messages/messages.module#MessagesModule" },
    { path: "history", loadChildren: "./history/history.module#HistoryModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "customchat", loadChildren: "./customchat/customchat.module#customchatModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
