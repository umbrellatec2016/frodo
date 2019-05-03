"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var appSettings = require("tns-core-modules/application-settings");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(translate) {
        this.translate = translate;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        //let secureStorage = new SecureStorage()
        this.username = "mama";
        this.username = appSettings.getString("sip_user");
        this.password = appSettings.getString("password");
        this.proxy = appSettings.getString("sip_proxy");
        console.log(this.username);
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: "Settings",
            moduleId: module.id,
            templateUrl: "./settings.component.html"
        }),
        __metadata("design:paramtypes", [core_10_0_2_1.TranslateService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0VBR0U7O0FBRUYsc0NBQWtEO0FBR2xELDZEQUFrRjtBQUVsRixtRUFBcUU7QUFNckU7SUFNSSwyQkFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFL0MsQ0FBQztJQUlELG9DQUFRLEdBQVI7UUFDSSx1Q0FBdUM7UUFDdkMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRTlCLENBQUM7SUFyQlEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQU9pQyw4QkFBZ0I7T0FOdEMsaUJBQWlCLENBc0I3QjtJQUFELHdCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiogQGF1dGhvciBCYXp6aXRlIChodHRwczovL3d3dy5iYXp6aXRlLmNvbSlcclxuKiBAbGljZW5zZSBNSVQgTGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMTggQmF6eml0ZVxyXG4qL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuXHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJy4uL0BuZ3gtdHJhbnNsYXRlL2NvcmVAMTAuMC4yJztcclxuXHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU2V0dGluZ3NcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuXHJcbiAgIFxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXNlcm5hbWU6c3RyaW5nXHJcbiAgICBwdWJsaWMgcGFzc3dvcmQ6c3RyaW5nXHJcbiAgICBwdWJsaWMgcHJveHk6c3RyaW5nXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgICAgICAvL2xldCBzZWN1cmVTdG9yYWdlID0gbmV3IFNlY3VyZVN0b3JhZ2UoKVxyXG4gICAgICAgIHRoaXMudXNlcm5hbWU9XCJtYW1hXCJcclxuICAgICAgICB0aGlzLnVzZXJuYW1lPWFwcFNldHRpbmdzLmdldFN0cmluZyhcInNpcF91c2VyXCIpXHJcbiAgICAgICAgdGhpcy5wYXNzd29yZD1hcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwYXNzd29yZFwiKVxyXG4gICAgICAgIHRoaXMucHJveHk9YXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic2lwX3Byb3h5XCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VybmFtZSlcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=