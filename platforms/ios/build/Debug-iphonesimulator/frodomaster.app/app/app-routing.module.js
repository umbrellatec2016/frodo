"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0VBR0U7O0FBRUYsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzVELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsdURBQXVELEVBQUU7SUFDL0YsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSx1REFBdUQsRUFBRTtJQUMvRixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLHdDQUF3QyxFQUFFO0lBQzNFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSx3Q0FBd0MsRUFBRTtJQUMzRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLDJDQUEyQyxFQUFFO0lBQy9FLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0NBQXdDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBRTtJQUMvRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGlEQUFpRCxFQUFFO0NBQzFGLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBAYXV0aG9yIEJhenppdGUgKGh0dHBzOi8vd3d3LmJhenppdGUuY29tKVxuKiBAbGljZW5zZSBNSVQgTGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMTggQmF6eml0ZVxuKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3Byb3Zpc2lvbmluZ1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInByb3Zpc2lvbmluZ1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9wcm92aXNpb25pbmcvcHJvdmlzaW9uaW5nLm1vZHVsZSNQcm92aXNpb25pbmdNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJjb25maXJtYXRpb25cIiwgbG9hZENoaWxkcmVuOiBcIi4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5tb2R1bGUjQ29uZmlybWF0aW9uTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiY291bnRyeVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb3VudHJ5L2NvdW50cnkubW9kdWxlI0NvdW50cnlNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImRpYWxwYWRcIiwgbG9hZENoaWxkcmVuOiBcIi4vZGlhbHBhZC9kaWFscGFkLm1vZHVsZSNEaWFscGFkTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwibWVzc2FnZXNcIiwgbG9hZENoaWxkcmVuOiBcIi4vbWVzc2FnZXMvbWVzc2FnZXMubW9kdWxlI01lc3NhZ2VzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiaGlzdG9yeVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9oaXN0b3J5L2hpc3RvcnkubW9kdWxlI0hpc3RvcnlNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUjU2V0dGluZ3NNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJjdXN0b21jaGF0XCIsIGxvYWRDaGlsZHJlbjogXCIuL2N1c3RvbWNoYXQvY3VzdG9tY2hhdC5tb2R1bGUjY3VzdG9tY2hhdE1vZHVsZVwiIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19