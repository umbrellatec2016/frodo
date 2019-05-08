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
var appSettings = require("tns-core-modules/application-settings");
var connectivity = require("tns-core-modules/connectivity");
var dialogs = require("tns-core-modules/ui/dialogs");
var ProvisioningComponent = /** @class */ (function () {
    function ProvisioningComponent(translate, routerExtensions, acRoute, myPostService) {
        var _this = this;
        this.translate = translate;
        this.routerExtensions = routerExtensions;
        this.acRoute = acRoute;
        this.myPostService = myPostService;
        this.id = setInterval(function () {
            _this.internetCheck();
        }, 2000);
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
        var udid = platformModule.device.uuid;
        console.log("uuid " + platformModule.device.uuid);
        if (appSettings.hasKey("udid")) {
            if (appSettings.getString("udid") == udid) {
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
        this.internetCheck();
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
        var data = "udid=" + udid + "&cc=" + cc + "&os=IOS&app_id=1&deviceBrand=Apple&deviceModel=Iphone&osVersion=7.0&pn=" + pn;
        this.myPostService
            .postData(data)
            .subscribe(function (res) {
            //  this.message = (<any>res).json.data.username;
            console.log(res);
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
                var value = appSettings.getString("udid");
                if (!value) {
                    var data_1 = res.data;
                    appSettings.setString("sip_user", data_1.user);
                    appSettings.setString("password", data_1.password);
                    appSettings.setString("sip_proxy", data_1.proxy);
                    appSettings.setString("sip_transport", data_1.user);
                    appSettings.setString("sip_port", data_1.user);
                    appSettings.setString("udid", udid);
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
            else if (code >= 500) {
                alert("Your phone number was already logged in, please contact with your administrator  for instructions");
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
    ProvisioningComponent.prototype.internetCheck = function () {
        clearInterval(this.id);
        var conn = connectivity.getConnectionType();
        //console.log("Connection type "+conn)
        if (conn === 0) {
            dialogs.alert({
                title: "Internet Error",
                message: "No internet connection",
                okButtonText: "Close"
            }).then(function () {
                console.log("Dialog closed!");
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlzaW9uaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3Zpc2lvbmluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7RUFHRTs7QUFFRixzQ0FBa0Q7QUFHbEQsNkRBQWtGO0FBQ2xGLHNEQUErRDtBQUcvRCw4Q0FBdUY7QUFFdkYsMENBQXNFO0FBRXRFLCtEQUEyRDtBQUMzRCwyRUFBNEQ7QUFDNUQseURBQXlEO0FBQ3pELDBEQUE0RDtBQUM1RCxtRUFBcUU7QUFDckUsNERBQThEO0FBQzlELHFEQUF1RDtBQU92RDtJQVFJLCtCQUFvQixTQUEyQixFQUN2QyxnQkFBa0MsRUFBUSxPQUFzQixFQUNoRSxhQUFnQztRQUZ4QyxpQkFVQztRQVZtQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUN2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUNoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFObEMsT0FBRSxHQUFHLFdBQVcsQ0FBQztZQUN2QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBYUUsd0JBQW1CLEdBQVEsSUFBSSxDQUFDO1FBQ2hDLDBCQUFxQixHQUFRLEtBQUssQ0FBQztRQUNuQyxvQkFBZSxHQUFVLGdCQUFnQixDQUFBO1FBQ3pDLFlBQU8sR0FBTyxFQUFFLENBQUE7UUFYckIsSUFBSSxDQUFDLG1CQUFtQixHQUFDLElBQUksQ0FBQTtRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUMsS0FBSyxDQUFBO1FBSW5DLDhCQUE4QjtRQUM5QiwyQkFBMkI7SUFDMUIsQ0FBQztJQVNELHdDQUFRLEdBQVI7UUFBQSxpQkE4Q0M7UUExQ0csdUNBQXVDO1FBQ3ZDLElBQUksSUFBSSxHQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ3BDLE9BQU8sQ0FBQyxH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LGlCQUFpQixFQUFFLENBQUE7UUFDeEMsc0NBQXNDO1FBQ3RDLElBQUcsSUFBSSxLQUFHLENBQUMsRUFBQztZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsWUFBWSxFQUFFLE9BQU87YUFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNKLENBQUM7SUEvT1EscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyx3Q0FBaUIsQ0FBQztTQUNqQyxDQUFDO3lDQVNpQyw4QkFBZ0I7WUFDckIseUJBQWdCLEVBQWdCLHVCQUFjO1lBQ2pELHdDQUFpQjtPQVYvQixxQkFBcUIsQ0FnUGpDO0lBQUQsNEJBQUM7Q0FBQSxBQWhQRCxJQWdQQztBQWhQWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQGF1dGhvciBCYXp6aXRlIChodHRwczovL3d3dy5iYXp6aXRlLmNvbSlcbiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDE4IEJhenppdGVcbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICcuLi9Abmd4LXRyYW5zbGF0ZS9jb3JlQDEwLjAuMic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCxBY3RpdmF0ZWRSb3V0ZSxQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE15SHR0cFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvdmlzaW9uaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNlY3VyZVN0b3JhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNlY3VyZS1zdG9yYWdlXCI7XG4vL2ltcG9ydCB7cGxhdGZvcm1OYW1lc30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIlxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlByb3Zpc2lvbmluZ1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm92aXNpb25pbmcuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBQb3N0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvdmlzaW9uaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG5cbiAgIFxuICBwcml2YXRlIGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHRoaXMuaW50ZXJuZXRDaGVjaygpXG59LCAyMDAwKTtcbiAgICBwcml2YXRlIGNvbm5lY3Rpb25UeXBlOiBzdHJpbmdcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMscHVibGljIGFjUm91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBteVBvc3RTZXJ2aWNlOiBNeUh0dHBQb3N0U2VydmljZSkge1xuICAgICAgdGhpcy5zaG93aW5nUHJvdmlzaW9uaW5nPXRydWVcbiAgICAgIHRoaXMuc2hvd2luZ0xvbmdMaXN0UGlja2VyPWZhbHNlXG4gICAgICBcbiAgICBcbiAgICAgIFxuICAgLy8gY29uc29sZS5sb2coYWNSb3V0ZS5wYXJhbXMpXG4gICAvLyBjb25zb2xlLmxvZyh0aGlzLm51bWJlcilcbiAgICB9XG4gICAgcHVibGljIHNob3dpbmdQcm92aXNpb25pbmc6IGFueSA9IHRydWU7XG4gICAgcHVibGljIHNob3dpbmdMb25nTGlzdFBpY2tlcjogYW55ID0gZmFsc2U7XG4gICAgcHVibGljIHNlbGVjdGVkQ291bnRyeTogc3RyaW5nID1cIlNlbGVjdCBDb3VudHJ5XCJcbiAgICBwdWJsaWMgY291bnRyeTphbnlbXT1bXVxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuICAgIHB1YmxpYyBudW1iZXI6c3RyaW5nXG4gICAgcHVibGljIGNvdW50cnlDb2RlOnN0cmluZ1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBcbiAgICAgIFxuICAgICAgIFxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICAgICAgbGV0IHVkaWQ9cGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnV1aWRcbiAgICAgICBjb25zb2xlLmxvZyhcInV1aWQgXCIrcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnV1aWQpXG4gICAgICAgIGlmKGFwcFNldHRpbmdzLmhhc0tleShcInVkaWRcIikgKXtcbiAgICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1ZGlkXCIpPT11ZGlkKXtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2hvbWUnXSwge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBudW1iZXI6U3RyaW5nKHRoaXMubnVtYmVyKSxcbiAgICAgICAgICAgICAgICBjYzpTdHJpbmcodGhpcy5jb3VudHJ5Q29kZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5jb3VudHJ5PVtcbiAgICAgICAgIFwiU2VsZWN0IENvdW50cnlcIixcIlNwYWluXCIsXCJVbml0ZWQgS2luZ2RvbVwiXG4gICAgICAgIF1cbiAgICAgICAgdGhpcy5jb3VudHJ5Q29kZT1cIjQxXCJcbiAgICAgICAgdGhpcy5hY1JvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXG4gICAgICAgICAgXG4gICAgICAgICAgaWYocGFyYW1zW1wibmFtZVwiXSl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnk9cGFyYW1zW1wibmFtZVwiXVxuICAgICAgICAgIHRoaXMuY291bnRyeUNvZGUgPSAgcGFyYW1zW1wiY29kZVwiXVx0XG4gICAgICAgICAgLy90aGlzLm51bWJlcj10aGlzLmNvdW50cnlDb2RlXHRcbiAgICAgICAgfVxuICAgICAgICAgIC8vXHRjb25zb2xlLmxvZyhcIkVudGl0eUNvbXBvbmVudCBxdWVyeVBhcmFtcyB3aXRoIGlkIDogXCIgKyBwYXJhbXNbXCJuYW1lXCJdKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHBhcmFtcylcbiAgICAgIH0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubG9jYXRpb24ucGF0aCgpKVxuICAgICAgICB0aGlzLmludGVybmV0Q2hlY2soKVxuICAgIH1cbiAgICBwcml2YXRlIG9wZW5TZWxlY3QoKVxuICAgIHtcbiAgICAgIC8vdGhpcy5nZXRDb3VudHJ5KClcbiAgICAgLy8gdGhpcy5zaG93aW5nTG9uZ0xpc3RQaWNrZXI9dHJ1ZVxuICAgICAgLy90aGlzLnNob3dpbmdQcm92aXNpb25pbmc9ZmFsc2VcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2NvdW50cnknXSwge1xuICAgICAgICAgICAgXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICB9LFxuICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgb25UYXAoYXJncyl7XG4gICAgICAgXG4gICAgICAgICAgbGV0IGNjPVN0cmluZyh0aGlzLmNvdW50cnlDb2RlKVxuICAgICAgICAgIGxldCBwbj1TdHJpbmcodGhpcy5udW1iZXIpXG4gICAgICAgICAgbGV0IHVkaWQ9cGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnV1aWRcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgZGF0YT1cInVkaWQ9XCIrdWRpZCtcIiZjYz1cIitjYytcIiZvcz1JT1MmYXBwX2lkPTEmZGV2aWNlQnJhbmQ9QXBwbGUmZGV2aWNlTW9kZWw9SXBob25lJm9zVmVyc2lvbj03LjAmcG49XCIrcG5cbiAgICAgICAgICBcbiAgICAgIHRoaXMubXlQb3N0U2VydmljZVxuXG4gICAgICAgICAgICAucG9zdERhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgLy8gIHRoaXMubWVzc2FnZSA9ICg8YW55PnJlcykuanNvbi5kYXRhLnVzZXJuYW1lO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgIGxldCBjb2RlPSg8YW55PnJlcykuY29kZVxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvZGUpXG4gICAgICAgICAgICAgIGlmKGNvZGU9PTIwMiB8fCBjb2RlPT0yMDEpe1xuICAgICAgICAgICAgICAvL2xldCBkYXRhPSg8YW55PnJlcykuZGF0YS5jb2RlXG4gICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2NvbmZpcm1hdGlvbiddLCB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXI6U3RyaW5nKHRoaXMubnVtYmVyKSxcbiAgICAgICAgICAgICAgICAgICAgY2M6U3RyaW5nKHRoaXMuY291bnRyeUNvZGUpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgLy8gYWxlcnQoZGF0YSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2UgaWYoY29kZT09MjA0KXtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzZWN1cmVTdG9yYWdlID0gbmV3IFNlY3VyZVN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1ZGlkXCIpXG4gICAgICAgICAgICAgICAgaWYoIXZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGE9KDxhbnk+cmVzKS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInNpcF91c2VyXCIsIGRhdGEudXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInBhc3N3b3JkXCIsIGRhdGEucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJzaXBfcHJveHlcIiwgZGF0YS5wcm94eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInNpcF90cmFuc3BvcnRcIiwgZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic2lwX3BvcnRcIiwgZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidWRpZFwiLCB1ZGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnaG9tZSddLCB7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6U3RyaW5nKHRoaXMubnVtYmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjOlN0cmluZyh0aGlzLmNvdW50cnlDb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydob21lJ10sIHtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjpTdHJpbmcodGhpcy5udW1iZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2M6U3RyaW5nKHRoaXMuY291bnRyeUNvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihjb2RlPj01MDApe1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBwaG9uZSBudW1iZXIgd2FzIGFscmVhZHkgbG9nZ2VkIGluLCBwbGVhc2UgY29udGFjdCB3aXRoIHlvdXIgYWRtaW5pc3RyYXRvciAgZm9yIGluc3RydWN0aW9uc1wiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyb3I6IFwiK2NvZGUrIFwiIFwiKyg8YW55PnJlcykuZXJyb3IpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIG9uVGFwTGFiZWwoYXJncyl7XG4gICAgICAgLy8gY29uc29sZS5sb2coYXJncylcbiAgICAgICAgYWxlcnQoXCJKdXN0IGEgUHJvdG90aXBlIEFwcFwiKVxuICAgIH1cbiAgICBzZWxlY3RlZEluZGV4Q2hhbmdlZChkYXRhKXtcbiAgIC8vICAgdGhpcy5zaG93aW5nTG9uZ0xpc3RQaWNrZXI9dHJ1ZVxuICAgIC8vICB0aGlzLnNob3dpbmdQcm92aXNpb25pbmc9ZmFsc2VcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5hYmxlXCIpXG4gICAgfVxuICAgIGNsb3NlTG9uZ0xpc3RQaWNrZXIoKXtcbiAgICAgIHRoaXMuc2hvd2luZ0xvbmdMaXN0UGlja2VyID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dpbmdQcm92aXNpb25pbmc9dHJ1ZVxuICAgIH1cbiAgICBvblJldHVyblByZXNzKGUpe1xuICAgICAgY29uc29sZS5sb2coXCJwcmVcIilcbiAgICAgIGdldEpTT04oXCJodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9hbGxcIikudGhlbigocjogYW55KSA9PiB7XG4gICAgICAgdGhpcy5jb3VudHJ5PXJcbiAgICAgICBjb25zb2xlLmxvZyhyLmxlbmd0aClcbiAgICAgICBmb3IobGV0IHg9MDt4PHIubGVuZ3RoO3grKyl7XG4gICAgICAgICBpZihyW3hdLmNhbGxpbmdDb2Rlc1swXT09dGhpcy5jb3VudHJ5Q29kZSl7XG4gICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5PXJbeF0ubmFtZVxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgIH0sIChlKSA9PiB7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q291bnRyeSgpe1xuICAgICAgXG4gICAgICBnZXRKU09OKFwiaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsXCIpLnRoZW4oKHI6IGFueSkgPT4ge1xuICAgICAgIHRoaXMuY291bnRyeT1yXG4gICAgICB9LCAoZSkgPT4ge1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgXG4gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuICAgIGdldEltYWdlKGRhdGEpe1xuICAgICAgaWYoZGF0YS5hbHBoYTJDb2RlIT11bmRlZmluZWQpe1xuICAgICAgICBsZXQgc3Rlcj1kYXRhLmFscGhhMkNvZGUudG9Mb3dlckNhc2UoKVxuICAgICAgICByZXR1cm4gXCJ+L2ltYWdlcy9cIitzdGVyK1wiLnBuZ1wiXG4gICAgICB9XG4gICAgICByZXR1cm4gXCJcIlxuICAgIH1cbiAgICBzZWxlY3RDbihkYXQpe1xuICAgICAgY29uc29sZS5sb2coZGF0LmNhbGxpbmdDb2Rlc1swXSlcbiAgICB9XG4gICAgaW50ZXJuZXRDaGVjaygpe1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcbiAgICAgIGxldCBjb25uPWNvbm5lY3Rpdml0eS5nZXRDb25uZWN0aW9uVHlwZSgpXG4gICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gdHlwZSBcIitjb25uKVxuICAgICAgIGlmKGNvbm49PT0wKXtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJJbnRlcm5ldCBFcnJvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJObyBpbnRlcm5ldCBjb25uZWN0aW9uXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ2xvc2VcIlxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgIH0pO1xuICAgICAgIH1cbiAgICB9XG59XG4iXX0=