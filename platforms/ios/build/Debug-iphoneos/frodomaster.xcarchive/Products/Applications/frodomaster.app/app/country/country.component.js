"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../shared/data.service");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var http_1 = require("tns-core-modules/http");
var router_1 = require("nativescript-angular/router");
var CountryComponent = /** @class */ (function () {
    function CountryComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.transactions = [];
        this.expensesChartDataEn = [];
        this.expensesChartDataEs = [];
        this.currentLanguage = 'en';
        this.country = [];
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
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init your component properties here.
        http_1.getJSON("https://restcountries.eu/rest/v2/all").then(function (r) {
            _this.country = r;
        }, function (e) {
        });
    };
    CountryComponent.prototype.selectCn = function (value) {
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
    CountryComponent = __decorate([
        core_1.Component({
            selector: "Country",
            moduleId: module.id,
            templateUrl: "./country.component.html"
        }),
        __metadata("design:paramtypes", [core_10_0_2_1.TranslateService, router_1.RouterExtensions])
    ], CountryComponent);
    return CountryComponent;
}());
exports.CountryComponent = CountryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VudHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztFQUdFOztBQUVGLHNDQUFrRDtBQUVsRCx1REFBcUQ7QUFDckQsNkRBQWtGO0FBQ2xGLDhDQUF1RjtBQUV2RixzREFBK0Q7QUFNL0Q7SUFXSSwwQkFBb0IsU0FBMkIsRUFBUSxNQUF3QjtRQUEvRSxpQkF1QkM7UUF2Qm1CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVEsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQL0UsaUJBQVksR0FBRyxFQUFFLENBQUE7UUFDakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUVsQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQTJCdkIsWUFBTyxHQUFPLEVBQUUsQ0FBQTtRQXZCbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQTtRQUU3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFFL0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHO1lBQ3ZCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzdCLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDekMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDdEMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7U0FDakMsQ0FBQTtRQUVELElBQUksQ0FBQyxtQkFBbUIsR0FBRztZQUN2QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNuQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNyQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtTQUNqQyxDQUFBO1FBRUQsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFzQjtZQUNwRCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTEcsdUNBQXVDO1FBQ3ZDLGNBQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU07WUFDeEQsS0FBSSxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUE7UUFDZixDQUFDLEVBQUUsVUFBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QsbUNBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixJQUFJLGdCQUFtQyxDQUFBO1FBQ3pDLGlEQUFpRDtRQUMvQyxJQUFJLEVBQUUsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLElBQUksRUFBRSxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUIsa0JBQWtCO1FBQ2hCLGdCQUFnQixHQUFDO1lBQ2IsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBQyxFQUFFO2dCQUNQLElBQUksRUFBQyxFQUFFO2FBR1Y7U0FDSixDQUFBO1FBRUosZ0NBQWdDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUN6RCw0Q0FBNEM7SUFDaEQsQ0FBQztJQTlEUSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBWWlDLDhCQUFnQixFQUFnQix5QkFBZ0I7T0FYdEUsZ0JBQWdCLENBK0Q1QjtJQUFELHVCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIEBhdXRob3IgQmF6eml0ZSAoaHR0cHM6Ly93d3cuYmF6eml0ZS5jb20pXG4qIEBsaWNlbnNlIE1JVCBMaWNlbnNlIENvcHlyaWdodCAoYykgMjAxOCBCYXp6aXRlXG4qL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJy4uL0BuZ3gtdHJhbnNsYXRlL2NvcmVAMTAuMC4yJztcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ291bnRyeVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb3VudHJ5LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgXG4gICAgZGF0YTogRGF0YVNlcnZpY2U7XG4gICAgdHJhbnNhY3Rpb25zID0gW11cbiAgICBleHBlbnNlc0NoYXJ0RGF0YUVuID0gW107XG4gICAgZXhwZW5zZXNDaGFydERhdGFFcyA9IFtdO1xuXG4gICAgcHVibGljIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLHB1YmxpYyByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IERhdGFTZXJ2aWNlKClcblxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IHRoaXMuZGF0YS5nZXRUcmFuc2FjdGlvbnMoKVxuXG4gICAgICAgIHRoaXMuZXhwZW5zZXNDaGFydERhdGFFbiA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJIb21lXCIsIGFtbW91bnQ6IDkwIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiQXV0byAmIFRyYW5zcG9ydFwiLCBhbW1vdW50OiA3NiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvbW11bmljYXRpb25cIiwgYW1tb3VudDogNjAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJIb3RlbFwiLCBhbW1vdW50OiA0NCB9XG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLmV4cGVuc2VzQ2hhcnREYXRhRXMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiSG9nYXJcIiwgYW1tb3VudDogMjAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJUcmFuc3BvcnRlXCIsIGFtbW91bnQ6IDc2IH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiQ29tdW5pY2FjacOzblwiLCBhbW1vdW50OiA2MCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkhvdGVsXCIsIGFtbW91bnQ6IDQ0IH1cbiAgICAgICAgXVxuXG4gICAgICAgIHRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZSA9IGV2ZW50Lmxhbmc7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIGNvdW50cnk6YW55W109W11cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgICAgICBnZXRKU09OKFwiaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsXCIpLnRoZW4oKHI6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb3VudHJ5PXJcbiAgICAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlbGVjdENuKHZhbHVlKXtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6ICBOYXZpZ2F0aW9uRXh0cmFzXG4gICAgICAvLyAgY29uc29sZS5sb2coT2JqZWN0LmtleXModmFsdWUuY2FsbGluZ0NvZGVzKSk7XG4gICAgICAgIGxldCB4cz1TdHJpbmcodmFsdWUuY2FsbGluZ0NvZGVzWzBdKVxuICAgICAgICBsZXQgeGE9U3RyaW5nKHZhbHVlLm5hbWUpXG4gICAgICAgLy8gY29uc29sZS5sb2coeHMpXG4gICAgICAgICBuYXZpZ2F0aW9uRXh0cmFzPXtcbiAgICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgICBjb2RlOnhzLFxuICAgICAgICAgICAgICAgICBuYW1lOnhhXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIFxuICAgICAgLy8gY29uc29sZS5sb2cobmF2aWdhdGlvbkV4dHJhcylcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Byb3Zpc2lvbmluZ1wiXSwgbmF2aWdhdGlvbkV4dHJhcylcbiAgICAgICAgLy9jb25zb2xlLmxvZyh2YWx1ZS5jYWxsaW5nQ29kZXMrIFwiIHZhbHVlc1wiKVxuICAgIH1cbn1cbiJdfQ==