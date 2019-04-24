"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var SocialShare = require("nativescript-social-share");
var core_10_0_2_1 = require("../../../@ngx-translate/core@10.0.2");
var data_service_1 = require("../../data.service");
var date_service_1 = require("../../date.service");
var DetailModalComponent = /** @class */ (function () {
    function DetailModalComponent(params, translate) {
        var _this = this;
        this.params = params;
        this.translate = translate;
        this.webViewSrc = '';
        this.data = new data_service_1.DataService();
        this.dateFormat = new date_service_1.DateService();
        this.transactionData = params.context;
        this.categoryIcon = this.data.getCategoriesIcons()[this.transactionData.category];
        this.companyData = this.data.getCompanies().find(function (i) { return i.id === _this.transactionData.companyId; });
        this.webViewSrc = '<!DOCTYPE html><html><body>';
        this.webViewSrc += "<iframe src=\"" + this.companyData.mapUrl + "\" width=\"100%\" height=\"200\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>";
        this.webViewSrc += '</body></html>';
    }
    DetailModalComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    Object.defineProperty(DetailModalComponent.prototype, "ammount", {
        get: function () {
            if (this.transactionData.ammount >= 0) {
                return "$" + this.transactionData.ammount;
            }
            else {
                return "- $" + Math.abs(this.transactionData.ammount);
            }
        },
        enumerable: true,
        configurable: true
    });
    DetailModalComponent.prototype.onClose = function () {
        this.params.closeCallback();
    };
    DetailModalComponent.prototype.onShare = function () {
        SocialShare.shareText("I love MyGold App, www.mygold.fun!", "How would you like to share this text?");
    };
    DetailModalComponent.prototype.onWebViewLoaded = function (webargs) {
        var webview = webargs.object;
        if (platform_1.isAndroid) {
            webview.android.getSettings().setDisplayZoomControls(false);
        }
    };
    DetailModalComponent.prototype.formatDate = function (value) {
        return this.dateFormat.longDate(value, this.translate.currentLang);
    };
    DetailModalComponent = __decorate([
        core_1.Component({
            selector: "app-detail-modal",
            moduleId: module.id,
            templateUrl: "./detail-modal.component.html"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            core_10_0_2_1.TranslateService])
    ], DetailModalComponent);
    return DetailModalComponent;
}());
exports.DetailModalComponent = DetailModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7RUFHRTs7QUFFRixzQ0FBa0Q7QUFDbEQsc0RBQXNEO0FBQ3RELGtFQUFzRTtBQUN0RSx1REFBeUQ7QUFFekQsbUVBQXVFO0FBRXZFLG1EQUFpRDtBQUNqRCxtREFBaUQ7QUFRakQ7SUFRSSw4QkFDWSxNQUF5QixFQUN6QixTQUEyQjtRQUZ2QyxpQkFhQztRQVpXLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBVGhDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFVbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLE9BQThCLENBQUM7UUFDN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxVQUFVLEdBQUcsNkJBQTZCLENBQUE7UUFDL0MsSUFBSSxDQUFDLFVBQVUsSUFBSSxtQkFBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLG9HQUF3RixDQUFBO1FBQ2xKLElBQUksQ0FBQyxVQUFVLElBQUksZ0JBQWdCLENBQUE7SUFDdkMsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELHNCQUFXLHlDQUFPO2FBQWxCO1lBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sTUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQVMsQ0FBQTthQUM1QztpQkFBTTtnQkFDSCxPQUFPLFFBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBRyxDQUFBO2FBQ3hEO1FBQ0wsQ0FBQzs7O09BQUE7SUFFTSxzQ0FBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sc0NBQU8sR0FBZDtRQUNJLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0NBQW9DLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRU0sOENBQWUsR0FBdEIsVUFBdUIsT0FBTztRQUMxQixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksb0JBQVMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0Q7SUFDTCxDQUFDO0lBRU0seUNBQVUsR0FBakIsVUFBa0IsS0FBVztRQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFwRFEsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBVXNCLGdDQUFpQjtZQUNkLDhCQUFnQjtPQVY5QixvQkFBb0IsQ0FxRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQGF1dGhvciBCYXp6aXRlIChodHRwczovL3d3dy5iYXp6aXRlLmNvbSlcbiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDE4IEJhenppdGVcbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQG5neC10cmFuc2xhdGUvY29yZUAxMC4wLjInO1xuXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgSUxpc3RUcmFzYWN0aW9uSXRlbSwgSUNvbXBhbnkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtZGV0YWlsLW1vZGFsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbC1tb2RhbC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgd2ViVmlld1NyYyA9ICcnO1xuICAgIGRhdGE6IERhdGFTZXJ2aWNlO1xuICAgIHRyYW5zYWN0aW9uRGF0YTogSUxpc3RUcmFzYWN0aW9uSXRlbTtcbiAgICBjYXRlZ29yeUljb246IHN0cmluZztcbiAgICBjb21wYW55RGF0YTogSUNvbXBhbnk7XG4gICAgZGF0ZUZvcm1hdDogRGF0ZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YVNlcnZpY2UoKVxuICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSBuZXcgRGF0ZVNlcnZpY2UoKTtcblxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uRGF0YSA9IHBhcmFtcy5jb250ZXh0IGFzIElMaXN0VHJhc2FjdGlvbkl0ZW07XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJY29uID0gdGhpcy5kYXRhLmdldENhdGVnb3JpZXNJY29ucygpW3RoaXMudHJhbnNhY3Rpb25EYXRhLmNhdGVnb3J5XTtcbiAgICAgICAgdGhpcy5jb21wYW55RGF0YSA9IHRoaXMuZGF0YS5nZXRDb21wYW5pZXMoKS5maW5kKGkgPT4gaS5pZCA9PT0gdGhpcy50cmFuc2FjdGlvbkRhdGEuY29tcGFueUlkKTtcblxuICAgICAgICB0aGlzLndlYlZpZXdTcmMgPSAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGJvZHk+J1xuICAgICAgICB0aGlzLndlYlZpZXdTcmMgKz0gYDxpZnJhbWUgc3JjPVwiJHt0aGlzLmNvbXBhbnlEYXRhLm1hcFVybH1cIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIyMDBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzdHlsZT1cImJvcmRlcjowXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPmBcbiAgICAgICAgdGhpcy53ZWJWaWV3U3JjICs9ICc8L2JvZHk+PC9odG1sPidcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zYWN0aW9uRGF0YS5hbW1vdW50ID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgJCR7dGhpcy50cmFuc2FjdGlvbkRhdGEuYW1tb3VudH1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYC0gJCR7TWF0aC5hYnModGhpcy50cmFuc2FjdGlvbkRhdGEuYW1tb3VudCl9YFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TaGFyZSgpOiB2b2lkIHtcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVUZXh0KFwiSSBsb3ZlIE15R29sZCBBcHAsIHd3dy5teWdvbGQuZnVuIVwiLCBcIkhvdyB3b3VsZCB5b3UgbGlrZSB0byBzaGFyZSB0aGlzIHRleHQ/XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbldlYlZpZXdMb2FkZWQod2ViYXJncykge1xuICAgICAgICBjb25zdCB3ZWJ2aWV3ID0gd2ViYXJncy5vYmplY3Q7XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHdlYnZpZXcuYW5kcm9pZC5nZXRTZXR0aW5ncygpLnNldERpc3BsYXlab29tQ29udHJvbHMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1hdERhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdC5sb25nRGF0ZSh2YWx1ZSwgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcpXG4gICAgfVxufVxuIl19