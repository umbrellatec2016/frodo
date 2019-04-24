"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var router_1 = require("nativescript-angular/router");
var http_1 = require("tns-core-modules/http");
var router_2 = require("@angular/router");
var provisioning_service_1 = require("./provisioning.service");
var nativescript_secure_storage_1 = require("nativescript-secure-storage");
//import {platformNames} from "tns-core-modules/platform"
var platformModule = require("tns-core-modules/platform");
var ProvisioningComponent = /** @class */ (function () {
    function ProvisioningComponent(translate, routerExtensions, acRoute, myPostService) {
        this.translate = translate;
        this.routerExtensions = routerExtensions;
        this.acRoute = acRoute;
        this.myPostService = myPostService;
        this.showingProvisioning = true;
        this.showingLongListPicker = false;
        this.selectedCountry = "Select Country";
        this.country = [];
        this.showingProvisioning = true;
        this.showingLongListPicker = false;
        // console.log(acRoute.params)
        // console.log(this.number)
    }
    ProvisioningComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init your component properties here.
        var secureStorage = new nativescript_secure_storage_1.SecureStorage();
        var value = secureStorage.getSync({
            key: "sip_user"
        });
        if (value) {
            this.routerExtensions.navigate(['home'], {
                transition: {
                    name: "fade"
                },
                queryParams: {
                    number: String(this.number),
                    cc: String(this.countryCode)
                },
                clearHistory: true
            });
        }
        this.country = [
            "Select Country", "Spain", "United Kingdom"
        ];
        this.countryCode = "41";
        this.acRoute.queryParams.subscribe(function (params) {
            if (params["name"]) {
                _this.selectedCountry = params["name"];
                _this.countryCode = params["code"];
                //this.number=this.countryCode	
            }
            //	console.log("EntityComponent queryParams with id : " + params["name"]);
            //console.log(params)
        });
        //console.log(this.location.path())
    };
    ProvisioningComponent.prototype.openSelect = function () {
        //this.getCountry()
        // this.showingLongListPicker=true
        //this.showingProvisioning=false
        this.routerExtensions.navigate(['country'], {
            transition: {
                name: "fade"
            },
            clearHistory: true
        });
    };
    ProvisioningComponent.prototype.onTap = function (args) {
        var _this = this;
        var cc = String(this.countryCode);
        var pn = String(this.number);
        var udid = platformModule.device.uuid;
        //900C6D4737B9F7D5
        // console.log(udid)
        var data = "udid=" + udid + "&cc=" + cc + "&os=IOS&app_id=1&deviceBrand=Apple&deviceModel=Iphone&osVersion=7.0&pn=" + pn;
        this.myPostService
            .postData(data)
            .subscribe(function (res) {
            //  this.message = (<any>res).json.data.username;
            // console.log(res)
            var code = res.code;
            //console.log(code)
            if (code == 202 || code == 201) {
                //let data=(<any>res).data.code
                _this.routerExtensions.navigate(['confirmation'], {
                    transition: {
                        name: "fade"
                    },
                    queryParams: {
                        number: String(_this.number),
                        cc: String(_this.countryCode)
                    },
                    clearHistory: true
                });
                // alert(data)
            }
            else if (code == 204) {
                var secureStorage = new nativescript_secure_storage_1.SecureStorage();
                var value = secureStorage.getSync({
                    key: "sip_user"
                });
                if (!value) {
                    var data_1 = res.data;
                    secureStorage.set({
                        key: "sip_user",
                        value: data_1.user
                    }).then(function (success) { return console.log("Saved User" + success); });
                    secureStorage.set({
                        key: "sip_password",
                        value: data_1.password
                    }).then(function (success) { return console.log("Saved password" + success); });
                    secureStorage.set({
                        key: "sip_proxy",
                        value: data_1.proxy
                    }).then(function (success) { return console.log("Saved proxy" + success); });
                    secureStorage.set({
                        key: "sip_transport",
                        value: data_1.transport
                    }).then(function (success) { return console.log("Saved transport" + success); });
                    secureStorage.set({
                        key: "sip_port",
                        value: data_1.port
                    }).then(function (success) { return console.log("Saved password" + success); });
                    _this.routerExtensions.navigate(['home'], {
                        transition: {
                            name: "fade"
                        },
                        queryParams: {
                            number: String(_this.number),
                            cc: String(_this.countryCode)
                        },
                        clearHistory: true
                    });
                }
                else {
                    _this.routerExtensions.navigate(['home'], {
                        transition: {
                            name: "fade"
                        },
                        queryParams: {
                            number: String(_this.number),
                            cc: String(_this.countryCode)
                        },
                        clearHistory: true
                    });
                }
            }
            else {
                alert("error: " + code + " " + res.error);
            }
        });
    };
    ProvisioningComponent.prototype.onTapLabel = function (args) {
        // console.log(args)
        alert("Just a Prototipe App");
    };
    ProvisioningComponent.prototype.selectedIndexChanged = function (data) {
        //   this.showingLongListPicker=true
        //  this.showingProvisioning=false
        console.log("enable");
    };
    ProvisioningComponent.prototype.closeLongListPicker = function () {
        this.showingLongListPicker = false;
        this.showingProvisioning = true;
    };
    ProvisioningComponent.prototype.onReturnPress = function (e) {
        var _this = this;
        console.log("pre");
        http_1.getJSON("https://restcountries.eu/rest/v2/all").then(function (r) {
            _this.country = r;
            console.log(r.length);
            for (var x = 0; x < r.length; x++) {
                if (r[x].callingCodes[0] == _this.countryCode) {
                    _this.selectedCountry = r[x].name;
                }
            }
        }, function (e) {
        });
    };
    ProvisioningComponent.prototype.getCountry = function () {
        var _this = this;
        http_1.getJSON("https://restcountries.eu/rest/v2/all").then(function (r) {
            _this.country = r;
        }, function (e) {
        });
        // console.log(data)
    };
    ProvisioningComponent.prototype.getImage = function (data) {
        if (data.alpha2Code != undefined) {
            var ster = data.alpha2Code.toLowerCase();
            return "~/images/" + ster + ".png";
        }
        return "";
    };
    ProvisioningComponent.prototype.selectCn = function (dat) {
        console.log(dat.callingCodes[0]);
    };
    ProvisioningComponent = __decorate([
        core_1.Component({
            selector: "Provisioning",
            moduleId: module.id,
            templateUrl: "./provisioning.component.html",
            providers: [provisioning_service_1.MyHttpPostService]
        }),
        __metadata("design:paramtypes", [core_10_0_2_1.TranslateService,
            router_1.RouterExtensions, router_2.ActivatedRoute,
            provisioning_service_1.MyHttpPostService])
    ], ProvisioningComponent);
    return ProvisioningComponent;
}());
exports.ProvisioningComponent = ProvisioningComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlzaW9uaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3Zpc2lvbmluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7RUFHRTs7QUFFRixzQ0FBa0Q7QUFHbEQsNkRBQWtGO0FBQ2xGLHNEQUErRDtBQUcvRCw4Q0FBdUY7QUFFdkYsMENBQXNFO0FBRXRFLCtEQUEyRDtBQUMzRCwyRUFBNEQ7QUFDNUQseURBQXlEO0FBQ3pELDBEQUE0RDtBQU81RDtJQU1JLCtCQUFvQixTQUEyQixFQUN2QyxnQkFBa0MsRUFBUSxPQUFzQixFQUNoRSxhQUFnQztRQUZwQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUN2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUNoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFRakMsd0JBQW1CLEdBQVEsSUFBSSxDQUFDO1FBQ2hDLDBCQUFxQixHQUFRLEtBQUssQ0FBQztRQUNuQyxvQkFBZSxHQUFVLGdCQUFnQixDQUFBO1FBQ3pDLFlBQU8sR0FBTyxFQUFFLENBQUE7UUFWckIsSUFBSSxDQUFDLG1CQUFtQixHQUFDLElBQUksQ0FBQTtRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUMsS0FBSyxDQUFBO1FBR25DLDhCQUE4QjtRQUM5QiwyQkFBMkI7SUFDMUIsQ0FBQztJQVFELHdDQUFRLEdBQVI7UUFBQSxpQkF5Q0M7UUF4Q0csdUNBQXVDO1FBQ3ZDLElBQUksYUFBYSxHQUFHLElBQUksMkNBQWEsRUFBRSxDQUFDO1FBQ3hDLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDaEMsR0FBRyxFQUFFLFVBQVU7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxLQUFLLEVBQUM7WUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBRXRDLFVB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LFdBQVcsRUFBRSxDQUFBO1lBQ3RDLE9BQU8sV0FBVyxHQUFDLElBQUksR0FBQyxNQUFNLENBQUE7U0FDL0I7UUFDRCxPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7SUFDRCx3Q0FBUSxHQUFSLFVBQVMsR0FBRztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUF0T1EscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyx3Q0FBaUIsQ0FBQztTQUNqQyxDQUFDO3lDQU9pQyw4QkFBZ0I7WUFDckIseUJBQWdCLEVBQWdCLHVCQUFjO1lBQ2pELHdDQUFpQjtPQVIvQixxQkFBcUIsQ0F3T2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXhPRCxJQXdPQztBQXhPWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQGF1dGhvciBCYXp6aXRlIChodHRwczovL3d3dy5iYXp6aXRlLmNvbSlcbiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDE4IEJhenppdGVcbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICcuLi9Abmd4LXRyYW5zbGF0ZS9jb3JlQDEwLjAuMic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCxBY3RpdmF0ZWRSb3V0ZSxQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE15SHR0cFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvdmlzaW9uaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNlY3VyZVN0b3JhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNlY3VyZS1zdG9yYWdlXCI7XG4vL2ltcG9ydCB7cGxhdGZvcm1OYW1lc30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIlxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlByb3Zpc2lvbmluZ1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm92aXNpb25pbmcuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBQb3N0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvdmlzaW9uaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG5cbiAgIFxuXG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxwdWJsaWMgYWNSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIG15UG9zdFNlcnZpY2U6IE15SHR0cFBvc3RTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnNob3dpbmdQcm92aXNpb25pbmc9dHJ1ZVxuICAgICAgdGhpcy5zaG93aW5nTG9uZ0xpc3RQaWNrZXI9ZmFsc2VcbiAgICAgXG4gICAgXG4gICAvLyBjb25zb2xlLmxvZyhhY1JvdXRlLnBhcmFtcylcbiAgIC8vIGNvbnNvbGUubG9nKHRoaXMubnVtYmVyKVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd2luZ1Byb3Zpc2lvbmluZzogYW55ID0gdHJ1ZTtcbiAgICBwdWJsaWMgc2hvd2luZ0xvbmdMaXN0UGlja2VyOiBhbnkgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRDb3VudHJ5OiBzdHJpbmcgPVwiU2VsZWN0IENvdW50cnlcIlxuICAgIHB1YmxpYyBjb3VudHJ5OmFueVtdPVtdXG4gICAgcHVibGljIGluZGV4OiBudW1iZXI7XG4gICAgcHVibGljIG51bWJlcjpzdHJpbmdcbiAgICBwdWJsaWMgY291bnRyeUNvZGU6c3RyaW5nXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgICAgICBsZXQgc2VjdXJlU3RvcmFnZSA9IG5ldyBTZWN1cmVTdG9yYWdlKCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNlY3VyZVN0b3JhZ2UuZ2V0U3luYyh7XG4gICAgICAgICAga2V5OiBcInNpcF91c2VyXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHZhbHVlKXtcbiAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2hvbWUnXSwge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgIG51bWJlcjpTdHJpbmcodGhpcy5udW1iZXIpLFxuICAgICAgICAgICAgICBjYzpTdHJpbmcodGhpcy5jb3VudHJ5Q29kZSlcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgfSBcbiAgICAgICAgKTtcbiAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvdW50cnk9W1xuICAgICAgICAgXCJTZWxlY3QgQ291bnRyeVwiLFwiU3BhaW5cIixcIlVuaXRlZCBLaW5nZG9tXCJcbiAgICAgICAgXVxuICAgICAgICB0aGlzLmNvdW50cnlDb2RlPVwiNDFcIlxuICAgICAgICB0aGlzLmFjUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cbiAgICAgICAgICBcbiAgICAgICAgICBpZihwYXJhbXNbXCJuYW1lXCJdKXtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQ291bnRyeT1wYXJhbXNbXCJuYW1lXCJdXG4gICAgICAgICAgdGhpcy5jb3VudHJ5Q29kZSA9ICBwYXJhbXNbXCJjb2RlXCJdXHRcbiAgICAgICAgICAvL3RoaXMubnVtYmVyPXRoaXMuY291bnRyeUNvZGVcdFxuICAgICAgICB9XG4gICAgICAgICAgLy9cdGNvbnNvbGUubG9nKFwiRW50aXR5Q29tcG9uZW50IHF1ZXJ5UGFyYW1zIHdpdGggaWQgOiBcIiArIHBhcmFtc1tcIm5hbWVcIl0pO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyYW1zKVxuICAgICAgfSk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5sb2NhdGlvbi5wYXRoKCkpXG4gICAgfVxuICAgIHByaXZhdGUgb3BlblNlbGVjdCgpXG4gICAge1xuICAgICAgLy90aGlzLmdldENvdW50cnkoKVxuICAgICAvLyB0aGlzLnNob3dpbmdMb25nTGlzdFBpY2tlcj10cnVlXG4gICAgICAvL3RoaXMuc2hvd2luZ1Byb3Zpc2lvbmluZz1mYWxzZVxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnY291bnRyeSddLCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBvblRhcChhcmdzKXtcbiAgICAgICBcbiAgICAgICAgICBsZXQgY2M9U3RyaW5nKHRoaXMuY291bnRyeUNvZGUpXG4gICAgICAgICAgbGV0IHBuPVN0cmluZyh0aGlzLm51bWJlcilcbiAgICAgICAgICBsZXQgdWRpZD1wbGF0Zm9ybU1vZHVsZS5kZXZpY2UudXVpZFxuICAgICAgICAgIC8vOTAwQzZENDczN0I5RjdENVxuICAgICAgICAgLy8gY29uc29sZS5sb2codWRpZClcbiAgICAgICAgICBsZXQgZGF0YT1cInVkaWQ9XCIrdWRpZCtcIiZjYz1cIitjYytcIiZvcz1JT1MmYXBwX2lkPTEmZGV2aWNlQnJhbmQ9QXBwbGUmZGV2aWNlTW9kZWw9SXBob25lJm9zVmVyc2lvbj03LjAmcG49XCIrcG5cbiAgICAgICAgICBcbiAgICAgIHRoaXMubXlQb3N0U2VydmljZVxuXG4gICAgICAgICAgICAucG9zdERhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgLy8gIHRoaXMubWVzc2FnZSA9ICg8YW55PnJlcykuanNvbi5kYXRhLnVzZXJuYW1lO1xuICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgbGV0IGNvZGU9KDxhbnk+cmVzKS5jb2RlXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29kZSlcbiAgICAgICAgICAgICAgaWYoY29kZT09MjAyIHx8IGNvZGU9PTIwMSl7XG4gICAgICAgICAgICAgIC8vbGV0IGRhdGE9KDxhbnk+cmVzKS5kYXRhLmNvZGVcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnY29uZmlybWF0aW9uJ10sIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlcjpTdHJpbmcodGhpcy5udW1iZXIpLFxuICAgICAgICAgICAgICAgICAgICBjYzpTdHJpbmcodGhpcy5jb3VudHJ5Q29kZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAvLyBhbGVydChkYXRhKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgZWxzZSBpZihjb2RlPT0yMDQpe1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHNlY3VyZVN0b3JhZ2UgPSBuZXcgU2VjdXJlU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNlY3VyZVN0b3JhZ2UuZ2V0U3luYyh7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwic2lwX3VzZXJcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmKCF2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhPSg8YW55PnJlcykuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmVTdG9yYWdlLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNpcF91c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEudXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coXCJTYXZlZCBVc2VyXCIgKyBzdWNjZXNzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlU3RvcmFnZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJzaXBfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coXCJTYXZlZCBwYXNzd29yZFwiICsgc3VjY2VzcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZVN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2lwX3Byb3h5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEucHJveHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihzdWNjZXNzID0+IGNvbnNvbGUubG9nKFwiU2F2ZWQgcHJveHlcIiArIHN1Y2Nlc3MpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmVTdG9yYWdlLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNpcF90cmFuc3BvcnRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEudHJhbnNwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oc3VjY2VzcyA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHRyYW5zcG9ydFwiICsgc3VjY2VzcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZVN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2lwX3BvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS5wb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oc3VjY2VzcyA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHBhc3N3b3JkXCIgKyBzdWNjZXNzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2hvbWUnXSwge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOlN0cmluZyh0aGlzLm51bWJlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYzpTdHJpbmcodGhpcy5jb3VudHJ5Q29kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnaG9tZSddLCB7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6U3RyaW5nKHRoaXMubnVtYmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjOlN0cmluZyh0aGlzLmNvdW50cnlDb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyb3I6IFwiK2NvZGUrIFwiIFwiKyg8YW55PnJlcykuZXJyb3IpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIG9uVGFwTGFiZWwoYXJncyl7XG4gICAgICAgLy8gY29uc29sZS5sb2coYXJncylcbiAgICAgICAgYWxlcnQoXCJKdXN0IGEgUHJvdG90aXBlIEFwcFwiKVxuICAgIH1cbiAgICBzZWxlY3RlZEluZGV4Q2hhbmdlZChkYXRhKXtcbiAgIC8vICAgdGhpcy5zaG93aW5nTG9uZ0xpc3RQaWNrZXI9dHJ1ZVxuICAgIC8vICB0aGlzLnNob3dpbmdQcm92aXNpb25pbmc9ZmFsc2VcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5hYmxlXCIpXG4gICAgfVxuICAgIGNsb3NlTG9uZ0xpc3RQaWNrZXIoKXtcbiAgICAgIHRoaXMuc2hvd2luZ0xvbmdMaXN0UGlja2VyID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dpbmdQcm92aXNpb25pbmc9dHJ1ZVxuICAgIH1cbiAgICBvblJldHVyblByZXNzKGUpe1xuICAgICAgY29uc29sZS5sb2coXCJwcmVcIilcbiAgICAgIGdldEpTT04oXCJodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9hbGxcIikudGhlbigocjogYW55KSA9PiB7XG4gICAgICAgdGhpcy5jb3VudHJ5PXJcbiAgICAgICBjb25zb2xlLmxvZyhyLmxlbmd0aClcbiAgICAgICBmb3IobGV0IHg9MDt4PHIubGVuZ3RoO3grKyl7XG4gICAgICAgICBpZihyW3hdLmNhbGxpbmdDb2Rlc1swXT09dGhpcy5jb3VudHJ5Q29kZSl7XG4gICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5PXJbeF0ubmFtZVxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgIH0sIChlKSA9PiB7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q291bnRyeSgpe1xuICAgICAgXG4gICAgICBnZXRKU09OKFwiaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsXCIpLnRoZW4oKHI6IGFueSkgPT4ge1xuICAgICAgIHRoaXMuY291bnRyeT1yXG4gICAgICB9LCAoZSkgPT4ge1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgXG4gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuICAgIGdldEltYWdlKGRhdGEpe1xuICAgICAgaWYoZGF0YS5hbHBoYTJDb2RlIT11bmRlZmluZWQpe1xuICAgICAgICBsZXQgc3Rlcj1kYXRhLmFscGhhMkNvZGUudG9Mb3dlckNhc2UoKVxuICAgICAgICByZXR1cm4gXCJ+L2ltYWdlcy9cIitzdGVyK1wiLnBuZ1wiXG4gICAgICB9XG4gICAgICByZXR1cm4gXCJcIlxuICAgIH1cbiAgICBzZWxlY3RDbihkYXQpe1xuICAgICAgY29uc29sZS5sb2coZGF0LmNhbGxpbmdDb2Rlc1swXSlcbiAgICB9XG4gICAgXG59XG4iXX0=