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
var common_1 = require("@angular/common");
var provisioning_service_1 = require("./provisioning.service");
var nativescript_secure_storage_1 = require("nativescript-secure-storage");
//import {platformNames} from "tns-core-modules/platform"
var platformModule = require("tns-core-modules/platform");
var ProvisioningComponent = /** @class */ (function () {
    function ProvisioningComponent(translate, routerExtensions, acRoute, myPostService, location) {
        this.translate = translate;
        this.routerExtensions = routerExtensions;
        this.acRoute = acRoute;
        this.myPostService = myPostService;
        this.location = location;
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
            /*  this.routerExtensions.navigate(['home'], {
                          
                transition: {
                  name: "fade"
                },
                queryParams: {
                  number:String(this.number),
                  cc:String(this.countryCode)
                  
                  
                  
              },
                clearHistory: true
              }
            );*/
            this.onTap("");
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
        console.log(udid);
        var data = "udid=" + udid + "&cc=" + cc + "&os=IOS&app_id=1&deviceBrand=Apple&deviceModel=Iphone&osVersion=7.0&pn=" + pn;
        this.myPostService
            .postData(data)
            .subscribe(function (res) {
            //  this.message = (<any>res).json.data.username;
            // console.log(res)
            var code = res.code;
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
            if (code == 204) {
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
            provisioning_service_1.MyHttpPostService, common_1.Location])
    ], ProvisioningComponent);
    return ProvisioningComponent;
}());
exports.ProvisioningComponent = ProvisioningComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlzaW9uaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3Zpc2lvbmluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7RUFHRTs7QUFFRixzQ0FBa0Q7QUFHbEQsNkRBQWtGO0FBQ2xGLHNEQUErRDtBQUcvRCw4Q0FBdUY7QUFFdkYsMENBQXNFO0FBQ3RFLDBDQUEyQztBQUMzQywrREFBMkQ7QUFDM0QsMkVBQTREO0FBQzVELHlEQUF5RDtBQUN6RCwwREFBNEQ7QUFPNUQ7SUFNSSwrQkFBb0IsU0FBMkIsRUFDdkMsZ0JBQWtDLEVBQVEsT0FBc0IsRUFDaEUsYUFBZ0MsRUFBUyxRQUFrQjtRQUYvQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUN2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUNoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUTVELHdCQUFtQixHQUFRLElBQUksQ0FBQztRQUNoQywwQkFBcUIsR0FBUSxLQUFLLENBQUM7UUFDbkMsb0JBQWUsR0FBVSxnQkFBZ0IsQ0FBQTtRQUN6QyxZQUFPLEdBQU8sRUFBRSxDQUFBO1FBVnJCLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxJQUFJLENBQUE7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFDLEtBQUssQ0FBQTtRQUduQyw4QkFBOEI7UUFDOUIsMkJBQTJCO0lBQzFCLENBQUM7SUFRRCx3Q0FBUSxHQUFSO1FBQUEsaUJBeUNDO1FBeENHLHVDQUF1QztRQUN2QyxJQUFJLGFBQWEsR0FBRyxJQUFJLDJDQUFhLEVBQUUsQ0FBQztRQUN4QyxJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ2hDLEdBQUcsRUFBRSxVQUFVO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUcsS0FBSyxFQUFDO1lBQ1Q7Ozs7Ozs7Ozs7Ozs7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TyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQXJPUSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLHdDQUFpQixDQUFDO1NBQ2pDLENBQUM7eUNBT2lDLDhCQUFnQjtZQUNyQix5QkFBZ0IsRUFBZ0IsdUJBQWM7WUFDakQsd0NBQWlCLEVBQW1CLGlCQUFRO09BUjFELHFCQUFxQixDQXVPakM7SUFBRCw0QkFBQztDQUFBLEFBdk9ELElBdU9DO0FBdk9ZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBAYXV0aG9yIEJhenppdGUgKGh0dHBzOi8vd3d3LmJhenppdGUuY29tKVxuKiBAbGljZW5zZSBNSVQgTGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMTggQmF6eml0ZVxuKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJy4uL0BuZ3gtdHJhbnNsYXRlL2NvcmVAMTAuMC4yJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLEFjdGl2YXRlZFJvdXRlLFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi9wcm92aXNpb25pbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgU2VjdXJlU3RvcmFnZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2VjdXJlLXN0b3JhZ2VcIjtcbi8vaW1wb3J0IHtwbGF0Zm9ybU5hbWVzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUHJvdmlzaW9uaW5nXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb3Zpc2lvbmluZy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW015SHR0cFBvc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQcm92aXNpb25pbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcblxuICAgXG5cbiAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLHB1YmxpYyBhY1JvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbXlQb3N0U2VydmljZTogTXlIdHRwUG9zdFNlcnZpY2UscHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAgICAgIHRoaXMuc2hvd2luZ1Byb3Zpc2lvbmluZz10cnVlXG4gICAgICB0aGlzLnNob3dpbmdMb25nTGlzdFBpY2tlcj1mYWxzZVxuICAgICBcbiAgICBcbiAgIC8vIGNvbnNvbGUubG9nKGFjUm91dGUucGFyYW1zKVxuICAgLy8gY29uc29sZS5sb2codGhpcy5udW1iZXIpXG4gICAgfVxuICAgIHB1YmxpYyBzaG93aW5nUHJvdmlzaW9uaW5nOiBhbnkgPSB0cnVlO1xuICAgIHB1YmxpYyBzaG93aW5nTG9uZ0xpc3RQaWNrZXI6IGFueSA9IGZhbHNlO1xuICAgIHB1YmxpYyBzZWxlY3RlZENvdW50cnk6IHN0cmluZyA9XCJTZWxlY3QgQ291bnRyeVwiXG4gICAgcHVibGljIGNvdW50cnk6YW55W109W11cbiAgICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtYmVyOnN0cmluZ1xuICAgIHB1YmxpYyBjb3VudHJ5Q29kZTpzdHJpbmdcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgICAgIGxldCBzZWN1cmVTdG9yYWdlID0gbmV3IFNlY3VyZVN0b3JhZ2UoKTtcbiAgICAgICAgdmFyIHZhbHVlID0gc2VjdXJlU3RvcmFnZS5nZXRTeW5jKHtcbiAgICAgICAgICBrZXk6IFwic2lwX3VzZXJcIlxuICAgICAgICB9KTtcbiAgICAgICAgaWYodmFsdWUpe1xuICAgICAgICAvKiAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnaG9tZSddLCB7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgbnVtYmVyOlN0cmluZyh0aGlzLm51bWJlciksXG4gICAgICAgICAgICAgIGNjOlN0cmluZyh0aGlzLmNvdW50cnlDb2RlKVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICB9IFxuICAgICAgICApOyovXG4gICAgICAgIHRoaXMub25UYXAoXCJcIilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvdW50cnk9W1xuICAgICAgICAgXCJTZWxlY3QgQ291bnRyeVwiLFwiU3BhaW5cIixcIlVuaXRlZCBLaW5nZG9tXCJcbiAgICAgICAgXVxuICAgICAgICB0aGlzLmNvdW50cnlDb2RlPVwiNDFcIlxuICAgICAgICB0aGlzLmFjUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cbiAgICAgICAgICBcbiAgICAgICAgICBpZihwYXJhbXNbXCJuYW1lXCJdKXtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQ291bnRyeT1wYXJhbXNbXCJuYW1lXCJdXG4gICAgICAgICAgdGhpcy5jb3VudHJ5Q29kZSA9ICBwYXJhbXNbXCJjb2RlXCJdXHRcbiAgICAgICAgICAvL3RoaXMubnVtYmVyPXRoaXMuY291bnRyeUNvZGVcdFxuICAgICAgICB9XG4gICAgICAgICAgLy9cdGNvbnNvbGUubG9nKFwiRW50aXR5Q29tcG9uZW50IHF1ZXJ5UGFyYW1zIHdpdGggaWQgOiBcIiArIHBhcmFtc1tcIm5hbWVcIl0pO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyYW1zKVxuICAgICAgfSk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5sb2NhdGlvbi5wYXRoKCkpXG4gICAgfVxuICAgIHByaXZhdGUgb3BlblNlbGVjdCgpXG4gICAge1xuICAgICAgLy90aGlzLmdldENvdW50cnkoKVxuICAgICAvLyB0aGlzLnNob3dpbmdMb25nTGlzdFBpY2tlcj10cnVlXG4gICAgICAvL3RoaXMuc2hvd2luZ1Byb3Zpc2lvbmluZz1mYWxzZVxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnY291bnRyeSddLCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBvblRhcChhcmdzKXtcbiAgICAgICBcbiAgICAgICAgICBsZXQgY2M9U3RyaW5nKHRoaXMuY291bnRyeUNvZGUpXG4gICAgICAgICAgbGV0IHBuPVN0cmluZyh0aGlzLm51bWJlcilcbiAgICAgICAgICBsZXQgdWRpZD1wbGF0Zm9ybU1vZHVsZS5kZXZpY2UudXVpZFxuICAgICAgICAgIC8vOTAwQzZENDczN0I5RjdENVxuICAgICAgICAgIGNvbnNvbGUubG9nKHVkaWQpXG4gICAgICAgICAgbGV0IGRhdGE9XCJ1ZGlkPVwiK3VkaWQrXCImY2M9XCIrY2MrXCImb3M9SU9TJmFwcF9pZD0xJmRldmljZUJyYW5kPUFwcGxlJmRldmljZU1vZGVsPUlwaG9uZSZvc1ZlcnNpb249Ny4wJnBuPVwiK3BuXG4gICAgICAgICAgXG4gICAgICB0aGlzLm15UG9zdFNlcnZpY2VcblxuICAgICAgICAgICAgLnBvc3REYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vICB0aGlzLm1lc3NhZ2UgPSAoPGFueT5yZXMpLmpzb24uZGF0YS51c2VybmFtZTtcbiAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgIGxldCBjb2RlPSg8YW55PnJlcykuY29kZVxuICAgICAgICAgICAgICBpZihjb2RlPT0yMDIgfHwgY29kZT09MjAxKXtcbiAgICAgICAgICAgICAgLy9sZXQgZGF0YT0oPGFueT5yZXMpLmRhdGEuY29kZVxuICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydjb25maXJtYXRpb24nXSwge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyOlN0cmluZyh0aGlzLm51bWJlciksXG4gICAgICAgICAgICAgICAgICAgIGNjOlN0cmluZyh0aGlzLmNvdW50cnlDb2RlKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgIC8vIGFsZXJ0KGRhdGEpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBpZihjb2RlPT0yMDQpe1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHNlY3VyZVN0b3JhZ2UgPSBuZXcgU2VjdXJlU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNlY3VyZVN0b3JhZ2UuZ2V0U3luYyh7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwic2lwX3VzZXJcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmKCF2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhPSg8YW55PnJlcykuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmVTdG9yYWdlLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNpcF91c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEudXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coXCJTYXZlZCBVc2VyXCIgKyBzdWNjZXNzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlU3RvcmFnZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJzaXBfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coXCJTYXZlZCBwYXNzd29yZFwiICsgc3VjY2VzcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZVN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2lwX3Byb3h5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEucHJveHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihzdWNjZXNzID0+IGNvbnNvbGUubG9nKFwiU2F2ZWQgcHJveHlcIiArIHN1Y2Nlc3MpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmVTdG9yYWdlLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNpcF90cmFuc3BvcnRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEudHJhbnNwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oc3VjY2VzcyA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHRyYW5zcG9ydFwiICsgc3VjY2VzcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZVN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2lwX3BvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS5wb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oc3VjY2VzcyA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHBhc3N3b3JkXCIgKyBzdWNjZXNzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2hvbWUnXSwge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOlN0cmluZyh0aGlzLm51bWJlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYzpTdHJpbmcodGhpcy5jb3VudHJ5Q29kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnaG9tZSddLCB7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6U3RyaW5nKHRoaXMubnVtYmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjOlN0cmluZyh0aGlzLmNvdW50cnlDb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyb3I6IFwiK2NvZGUrIFwiIFwiKyg8YW55PnJlcykuZXJyb3IpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIG9uVGFwTGFiZWwoYXJncyl7XG4gICAgICAgLy8gY29uc29sZS5sb2coYXJncylcbiAgICAgICAgYWxlcnQoXCJKdXN0IGEgUHJvdG90aXBlIEFwcFwiKVxuICAgIH1cbiAgICBzZWxlY3RlZEluZGV4Q2hhbmdlZChkYXRhKXtcbiAgIC8vICAgdGhpcy5zaG93aW5nTG9uZ0xpc3RQaWNrZXI9dHJ1ZVxuICAgIC8vICB0aGlzLnNob3dpbmdQcm92aXNpb25pbmc9ZmFsc2VcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5hYmxlXCIpXG4gICAgfVxuICAgIGNsb3NlTG9uZ0xpc3RQaWNrZXIoKXtcbiAgICAgIHRoaXMuc2hvd2luZ0xvbmdMaXN0UGlja2VyID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dpbmdQcm92aXNpb25pbmc9dHJ1ZVxuICAgIH1cbiAgICBvblJldHVyblByZXNzKGUpe1xuICAgICAgY29uc29sZS5sb2coXCJwcmVcIilcbiAgICAgIGdldEpTT04oXCJodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9hbGxcIikudGhlbigocjogYW55KSA9PiB7XG4gICAgICAgdGhpcy5jb3VudHJ5PXJcbiAgICAgICBjb25zb2xlLmxvZyhyLmxlbmd0aClcbiAgICAgICBmb3IobGV0IHg9MDt4PHIubGVuZ3RoO3grKyl7XG4gICAgICAgICBpZihyW3hdLmNhbGxpbmdDb2Rlc1swXT09dGhpcy5jb3VudHJ5Q29kZSl7XG4gICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5PXJbeF0ubmFtZVxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgIH0sIChlKSA9PiB7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q291bnRyeSgpe1xuICAgICAgXG4gICAgICBnZXRKU09OKFwiaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsXCIpLnRoZW4oKHI6IGFueSkgPT4ge1xuICAgICAgIHRoaXMuY291bnRyeT1yXG4gICAgICB9LCAoZSkgPT4ge1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgXG4gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuICAgIGdldEltYWdlKGRhdGEpe1xuICAgICAgaWYoZGF0YS5hbHBoYTJDb2RlIT11bmRlZmluZWQpe1xuICAgICAgICBsZXQgc3Rlcj1kYXRhLmFscGhhMkNvZGUudG9Mb3dlckNhc2UoKVxuICAgICAgICByZXR1cm4gXCJ+L2ltYWdlcy9cIitzdGVyK1wiLnBuZ1wiXG4gICAgICB9XG4gICAgICByZXR1cm4gXCJcIlxuICAgIH1cbiAgICBzZWxlY3RDbihkYXQpe1xuICAgICAgY29uc29sZS5sb2coZGF0LmNhbGxpbmdDb2Rlc1swXSlcbiAgICB9XG4gICAgXG59XG4iXX0=