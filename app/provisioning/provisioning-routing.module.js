"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var provisioning_component_1 = require("./provisioning.component");
var routes = [
    { path: "", component: provisioning_component_1.ProvisioningComponent }
];
var ProvisioningRoutingModule = /** @class */ (function () {
    function ProvisioningRoutingModule() {
    }
    ProvisioningRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ProvisioningRoutingModule);
    return ProvisioningRoutingModule;
}());
exports.ProvisioningRoutingModule = ProvisioningRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlzaW9uaW5nLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdmlzaW9uaW5nLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0VBR0U7O0FBRUYsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxtRUFBaUU7QUFFakUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBRTtDQUNqRCxDQUFDO0FBTUY7SUFBQTtJQUF5QyxDQUFDO0lBQTdCLHlCQUF5QjtRQUpyQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHlCQUF5QixDQUFJO0lBQUQsZ0NBQUM7Q0FBQSxBQUExQyxJQUEwQztBQUE3Qiw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQGF1dGhvciBCYXp6aXRlIChodHRwczovL3d3dy5iYXp6aXRlLmNvbSlcbiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDE4IEJhenppdGVcbiovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUHJvdmlzaW9uaW5nQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvdmlzaW9uaW5nLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogUHJvdmlzaW9uaW5nQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBQcm92aXNpb25pbmdSb3V0aW5nTW9kdWxlIHsgfVxuIl19