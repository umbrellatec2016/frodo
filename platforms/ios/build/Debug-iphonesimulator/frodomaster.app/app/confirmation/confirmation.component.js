"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../shared/data.service");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var confirmation_service_1 = require("./confirmation.service");
var platformModule = require("tns-core-modules/platform");
var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(translate, router, acRoute, myPostService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.acRoute = acRoute;
        this.myPostService = myPostService;
        this.transactions = [];
        this.expensesChartDataEn = [];
        this.expensesChartDataEs = [];
        this.currentLanguage = 'en';
        this.country = [];
        this.number = "";
        this.cc = "";
        this.input = "";
        this.verifyText = "Please Verify the number +";
        this.data = new data_service_1.DataService();
        this.transactions = this.data.getTransactions();
        this.expensesChartDataEn = [
            { name: "Home", ammount: 90 },
            { name: "Auto & Transport", ammount: 76 },
            { name: "Communication", ammount: 60 },
            { name: "Hotel", ammount: 44 }
        ];
        this.expensesChartDataEs = [
            { name: "Hogar", ammount: 20 },
            { name: "Transporte", ammount: 76 },
            { name: "Comunicación", ammount: 60 },
            { name: "Hotel", ammount: 44 }
        ];
        translate.onLangChange.subscribe(function (event) {
            _this.currentLanguage = event.lang;
        });
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.queryParams.subscribe(function (params) {
            if (params["number"]) {
                _this.verifyText = _this.verifyText + String(params["cc"]) + String(params["number"]);
                _this.number = params['number'];
                _this.cc = params['cc'];
            }
        });
    };
    ConfirmationComponent.prototype.onTap = function (e) {
        var cc = String(this.cc);
        var pn = String(this.number);
        var udid = platformModule.device.uuid;
        //900C6D4737B9F7D5
        var data = "udid=" + udid + "&cc=" + cc + "&os=IOS&app_id=1&pn=" + pn + "&code=" + String(this.input);
        console.log(data);
        this.myPostService
            .postData(data)
            .subscribe(function (res) {
            //  this.message = (<any>res).json.data.username;
            console.log(res);
            var code = res.code;
            if (code == 202 || code == 201) {
                var data_1 = res.data.code;
                /*this.router.navigate(['confirmation'], {
              
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
                alert(data_1);
            }
            else {
                alert("error: " + code + " " + res.error);
            }
        });
    };
    ConfirmationComponent.prototype.selectCn = function (value) {
        var navigationExtras;
        //  console.log(Object.keys(value.callingCodes));
        var xs = String(value.callingCodes[0]);
        var xa = String(value.name);
        // console.log(xs)
        navigationExtras = {
            queryParams: {
                code: xs,
                name: xa
            }
        };
        // console.log(navigationExtras)
        this.router.navigate(["/provisioning"], navigationExtras);
        //console.log(value.callingCodes+ " values")
    };
    ConfirmationComponent = __decorate([
        core_1.Component({
            selector: "Confirmation",
            moduleId: module.id,
            templateUrl: "./confirmation.component.html",
            providers: [confirmation_service_1.MyregisterPostService]
        }),
        __metadata("design:paramtypes", [core_10_0_2_1.TranslateService, router_2.RouterExtensions, router_1.ActivatedRoute, confirmation_service_1.MyregisterPostService])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());
exports.ConfirmationComponent = ConfirmationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7RUFHRTs7QUFFRixzQ0FBa0Q7QUFFbEQsdURBQXFEO0FBQ3JELDZEQUFrRjtBQUVsRiwwQ0FBZ0Y7QUFDaEYsc0RBQStEO0FBQy9ELCtEQUErRDtBQUMvRCwwREFBNEQ7QUFPNUQ7SUFXSSwrQkFBb0IsU0FBMkIsRUFBUSxNQUF3QixFQUFRLE9BQXNCLEVBQVMsYUFBb0M7UUFBMUosaUJBdUJDO1FBdkJtQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFRLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQVAxSixpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQUNqQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBRWxCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBMkJ2QixZQUFPLEdBQU8sRUFBRSxDQUFBO1FBQ2hCLFdBQU0sR0FBQyxFQUFFLENBQUE7UUFDVCxPQUFFLEdBQUMsRUFBRSxDQUFDO1FBQ04sVUFBSyxHQUFDLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBQyw0QkFBNEIsQ0FBQTtRQTNCMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQTtRQUU3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFFL0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHO1lBQ3ZCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzdCLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDekMsRUFBRSxJ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QyxJQUFJLEVBQUUsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFCLGtCQUFrQjtRQUNoQixnQkFBZ0IsR0FBQztZQUNiLFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUMsRUFBRTtnQkFDUCxJQUFJLEVBQUMsRUFBRTthQUdWO1NBQ0osQ0FBQTtRQUVKLGdDQUFnQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFDekQsNENBQTRDO0lBQ2hELENBQUM7SUFqSFEscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw0Q0FBcUIsQ0FBQztTQUNyQyxDQUFDO3lDQVlpQyw4QkFBZ0IsRUFBZ0IseUJBQWdCLEVBQWdCLHVCQUFjLEVBQXdCLDRDQUFxQjtPQVhqSixxQkFBcUIsQ0FrSGpDO0lBQUQsNEJBQUM7Q0FBQSxBQWxIRCxJQWtIQztBQWxIWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQGF1dGhvciBCYXp6aXRlIChodHRwczovL3d3dy5iYXp6aXRlLmNvbSlcbiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDE4IEJhenppdGVcbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnLi4vQG5neC10cmFuc2xhdGUvY29yZUAxMC4wLjInO1xuaW1wb3J0IHsgcmVxdWVzdCwgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsTmF2aWdhdGlvbkV4dHJhcyAsQWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBNeXJlZ2lzdGVyUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi9jb25maXJtYXRpb24uc2VydmljZVwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNvbmZpcm1hdGlvblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtNeXJlZ2lzdGVyUG9zdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgXG4gICAgZGF0YTogRGF0YVNlcnZpY2U7XG4gICAgdHJhbnNhY3Rpb25zID0gW11cbiAgICBleHBlbnNlc0NoYXJ0RGF0YUVuID0gW107XG4gICAgZXhwZW5zZXNDaGFydERhdGFFcyA9IFtdO1xuXG4gICAgcHVibGljIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLHB1YmxpYyByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMscHVibGljIGFjUm91dGU6QWN0aXZhdGVkUm91dGUscHJpdmF0ZSBteVBvc3RTZXJ2aWNlOiBNeXJlZ2lzdGVyUG9zdFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IERhdGFTZXJ2aWNlKClcblxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IHRoaXMuZGF0YS5nZXRUcmFuc2FjdGlvbnMoKVxuXG4gICAgICAgIHRoaXMuZXhwZW5zZXNDaGFydERhdGFFbiA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJIb21lXCIsIGFtbW91bnQ6IDkwIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiQXV0byAmIFRyYW5zcG9ydFwiLCBhbW1vdW50OiA3NiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvbW11bmljYXRpb25cIiwgYW1tb3VudDogNjAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJIb3RlbFwiLCBhbW1vdW50OiA0NCB9XG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLmV4cGVuc2VzQ2hhcnREYXRhRXMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiSG9nYXJcIiwgYW1tb3VudDogMjAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJUcmFuc3BvcnRlXCIsIGFtbW91bnQ6IDc2IH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiQ29tdW5pY2FjacOzblwiLCBhbW1vdW50OiA2MCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkhvdGVsXCIsIGFtbW91bnQ6IDQ0IH1cbiAgICAgICAgXVxuXG4gICAgICAgIHRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZSA9IGV2ZW50Lmxhbmc7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIGNvdW50cnk6YW55W109W11cbiAgICBwdWJsaWMgbnVtYmVyPVwiXCJcbiAgICBwdWJsaWMgY2M9XCJcIjtcbiAgICBwdWJsaWMgaW5wdXQ9XCJcIjtcbiAgICBwdWJsaWMgdmVyaWZ5VGV4dD1cIlBsZWFzZSBWZXJpZnkgdGhlIG51bWJlciArXCJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWNSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcblxuICAgICAgICAgIFxuICAgICAgICAgICAgaWYocGFyYW1zW1wibnVtYmVyXCJdKXtcbiAgICAgICAgICAgIHRoaXMudmVyaWZ5VGV4dD10aGlzLnZlcmlmeVRleHQrU3RyaW5nKHBhcmFtc1tcImNjXCJdKStTdHJpbmcocGFyYW1zW1wibnVtYmVyXCJdKVxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyPXBhcmFtc1snbnVtYmVyJ11cbiAgICAgICAgICAgICAgICB0aGlzLmNjPXBhcmFtc1snY2MnXVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuICAgIG9uVGFwKGUpe1xuICAgICAgICBsZXQgY2M9U3RyaW5nKHRoaXMuY2MpXG4gICAgICAgICAgbGV0IHBuPVN0cmluZyh0aGlzLm51bWJlcilcbiAgICAgICAgICBsZXQgdWRpZD1wbGF0Zm9ybU1vZHVsZS5kZXZpY2UudXVpZFxuICAgICAgICAgIC8vOTAwQzZENDczN0I5RjdENVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBkYXRhPVwidWRpZD1cIit1ZGlkK1wiJmNjPVwiK2NjK1wiJm9zPUlPUyZhcHBfaWQ9MSZwbj1cIitwbitcIiZjb2RlPVwiK1N0cmluZyh0aGlzLmlucHV0KVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHRoaXMubXlQb3N0U2VydmljZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAucG9zdERhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgLy8gIHRoaXMubWVzc2FnZSA9ICg8YW55PnJlcykuanNvbi5kYXRhLnVzZXJuYW1lO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgIGxldCBjb2RlPSg8YW55PnJlcykuY29kZVxuICAgICAgICAgICAgICBpZihjb2RlPT0yMDIgfHwgY29kZT09MjAxKXtcbiAgICAgICAgICAgICAgbGV0IGRhdGE9KDxhbnk+cmVzKS5kYXRhLmNvZGVcbiAgICAgICAgICAgICAgLyp0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NvbmZpcm1hdGlvbiddLCB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXI6U3RyaW5nKHRoaXMubnVtYmVyKSxcbiAgICAgICAgICAgICAgICAgICAgY2M6U3RyaW5nKHRoaXMuY291bnRyeUNvZGUpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTsqL1xuICAgICAgICAgICAgICBhbGVydChkYXRhKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyb3I6IFwiK2NvZGUrIFwiIFwiKyg8YW55PnJlcykuZXJyb3IpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgIH1cbiAgICBzZWxlY3RDbih2YWx1ZSl7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiAgTmF2aWdhdGlvbkV4dHJhc1xuICAgICAgLy8gIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHZhbHVlLmNhbGxpbmdDb2RlcykpO1xuICAgICAgICBsZXQgeHM9U3RyaW5nKHZhbHVlLmNhbGxpbmdDb2Rlc1swXSlcbiAgICAgICAgbGV0IHhhPVN0cmluZyh2YWx1ZS5uYW1lKVxuICAgICAgIC8vIGNvbnNvbGUubG9nKHhzKVxuICAgICAgICAgbmF2aWdhdGlvbkV4dHJhcz17XG4gICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgY29kZTp4cyxcbiAgICAgICAgICAgICAgICAgbmFtZTp4YVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5hdmlnYXRpb25FeHRyYXMpXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wcm92aXNpb25pbmdcIl0sIG5hdmlnYXRpb25FeHRyYXMpXG4gICAgICAgIC8vY29uc29sZS5sb2codmFsdWUuY2FsbGluZ0NvZGVzKyBcIiB2YWx1ZXNcIilcbiAgICB9XG59XG4iXX0=