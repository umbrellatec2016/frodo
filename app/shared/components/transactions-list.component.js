"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var core_10_0_2_1 = require("../../@ngx-translate/core@10.0.2");
var detail_modal_component_1 = require("./modal/detail-modal.component");
var data_service_1 = require("../data.service");
var date_service_1 = require("../date.service");
var TransactionsListComponent = /** @class */ (function () {
    function TransactionsListComponent(modal, vcRef, translate) {
        var _this = this;
        this.modal = modal;
        this.vcRef = vcRef;
        this.translate = translate;
        this.transactions = [];
        this.currentLanguage = 'en';
        this.data = new data_service_1.DataService();
        this.dateFormat = new date_service_1.DateService();
        this.companies = this.data.getCompanies();
        this.categoriesIcons = this.data.getCategoriesIcons();
        translate.onLangChange.subscribe(function (event) {
            _this.currentLanguage = event.lang;
        });
    }
    TransactionsListComponent.prototype.templateSelector = function (item) {
        return item.itemType;
    };
    TransactionsListComponent.prototype.onItemTap = function (args) {
        var itemData = args.view.bindingContext;
        var options = {
            viewContainerRef: this.vcRef,
            context: itemData,
            fullscreen: true
        };
        this.modal.showModal(detail_modal_component_1.DetailModalComponent, options)
            .then(function (result) {
            // console.log(result);
        });
    };
    TransactionsListComponent.prototype.getCompany = function (id) {
        return this.companies.find(function (i) { return i.id === id; });
    };
    TransactionsListComponent.prototype.getHeaderText = function (value) {
        return this.dateFormat.shortDate(value, this.currentLanguage);
    };
    TransactionsListComponent.prototype.mathAbs = function (value) {
        return Math.abs(value);
    };
    TransactionsListComponent.prototype.getBadgeIcon = function (id) {
        return this.categoriesIcons[id];
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TransactionsListComponent.prototype, "transactions", void 0);
    TransactionsListComponent = __decorate([
        core_1.Component({
            selector: "app-transactions-list",
            moduleId: module.id,
            templateUrl: "./transactions-list.component.html"
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService,
            core_1.ViewContainerRef,
            core_10_0_2_1.TranslateService])
    ], TransactionsListComponent);
    return TransactionsListComponent;
}());
exports.TransactionsListComponent = TransactionsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25zLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNhY3Rpb25zLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLG1FQUFpRztBQUVqRyxnRUFBcUY7QUFFckYseUVBQXNFO0FBQ3RFLGdEQUE4QztBQUM5QyxnREFBOEM7QUFROUM7SUFVSSxtQ0FDWSxLQUF5QixFQUN6QixLQUF1QixFQUN2QixTQUEyQjtRQUh2QyxpQkFjQztRQWJXLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBWjlCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBT3BCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBTzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFFckQsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFzQjtZQUNwRCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sb0RBQWdCLEdBQXZCLFVBQXdCLElBQUk7UUFDeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSw2Q0FBUyxHQUFoQixVQUFpQixJQUFTO1FBQ3RCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFBO1FBRXpDLElBQU0sT0FBTyxHQUF1QjtZQUNoQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixPQUFPLEVBQUUsUUFBUTtZQUNqQixVQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsNkNBQW9CLEVBQUUsT0FBTyxDQUFDO2FBQzlDLElBQUksQ0FBQyxVQUFDLE1BQWM7WUFDakIsdUJBQXVCO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLDhDQUFVLEdBQWpCLFVBQWtCLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFTSxpREFBYSxHQUFwQixVQUFxQixLQUFXO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBRU0sMkNBQU8sR0FBZCxVQUFlLEtBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFTSxnREFBWSxHQUFuQixVQUFvQixFQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBMURRO1FBQVIsWUFBSyxFQUFFOzttRUFBbUI7SUFEbEIseUJBQXlCO1FBTHJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1NBQ3BELENBQUM7eUNBWXFCLDRCQUFrQjtZQUNsQix1QkFBZ0I7WUFDWiw4QkFBZ0I7T0FiOUIseUJBQXlCLENBNERyQztJQUFELGdDQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9ncyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJy4uLy4uL0BuZ3gtdHJhbnNsYXRlL2NvcmVAMTAuMC4yJztcblxuaW1wb3J0IHsgRGV0YWlsTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9tb2RhbC9kZXRhaWwtbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgSUNvbXBhbnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtdHJhbnNhY3Rpb25zLWxpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdHJhbnNhY3Rpb25zLWxpc3QuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbnNMaXN0Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSB0cmFuc2FjdGlvbnMgPSBbXTtcblxuICAgIGRhdGE6IERhdGFTZXJ2aWNlO1xuICAgIGRhdGVGb3JtYXQ6IERhdGVTZXJ2aWNlO1xuICAgIGNvbXBhbmllczogSUNvbXBhbnlbXTtcbiAgICBjYXRlZ29yaWVzSWNvbnM6IHt9O1xuXG4gICAgcHVibGljIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gbmV3IERhdGVTZXJ2aWNlKCk7XG5cbiAgICAgICAgdGhpcy5jb21wYW5pZXMgPSB0aGlzLmRhdGEuZ2V0Q29tcGFuaWVzKClcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzSWNvbnMgPSB0aGlzLmRhdGEuZ2V0Q2F0ZWdvcmllc0ljb25zKClcblxuICAgICAgICB0cmFuc2xhdGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2UgPSBldmVudC5sYW5nO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGVtcGxhdGVTZWxlY3RvcihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLml0ZW1UeXBlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1EYXRhID0gYXJncy52aWV3LmJpbmRpbmdDb250ZXh0XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IGl0ZW1EYXRhLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKERldGFpbE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb21wYW55KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhbmllcy5maW5kKGkgPT4gaS5pZCA9PT0gaWQpXG4gICAgfVxuXG4gICAgcHVibGljIGdldEhlYWRlclRleHQodmFsdWU6IERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdC5zaG9ydERhdGUodmFsdWUsIHRoaXMuY3VycmVudExhbmd1YWdlKVxuICAgIH1cblxuICAgIHB1YmxpYyBtYXRoQWJzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHZhbHVlKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCYWRnZUljb24oaWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzSWNvbnNbaWRdO1xuICAgIH1cbn1cblxuIl19