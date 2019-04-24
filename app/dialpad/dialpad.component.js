"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../shared/data.service");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var DialpadComponent = /** @class */ (function () {
    function DialpadComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.expensesCategories = [
            {
                color: 'red',
                label: 'Home'
            },
            {
                color: 'blue',
                label: 'Auto & Transport'
            },
            {
                color: 'green',
                label: 'Cellular'
            },
            {
                color: 'orange',
                label: 'Hotel & Restaurant'
            }
        ];
        this.transactions = [];
        this.expensesChartDataEn = [];
        this.expensesChartDataEs = [];
        this.currentLanguage = 'en';
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
    DialpadComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    DialpadComponent = __decorate([
        core_1.Component({
            selector: "Dialpad",
            moduleId: module.id,
            templateUrl: "./dialpad.component.html"
        }),
        __metadata("design:paramtypes", [core_10_0_2_1.TranslateService])
    ], DialpadComponent);
    return DialpadComponent;
}());
exports.DialpadComponent = DialpadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbHBhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFscGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztFQUdFOztBQUVGLHNDQUFrRDtBQUVsRCx1REFBcUQ7QUFDckQsNkRBQWtGO0FBT2xGO0lBNEJJLDBCQUFvQixTQUEyQjtRQUEvQyxpQkFzQkM7UUF0Qm1CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBM0IvQyx1QkFBa0IsR0FBRztZQUNqQjtnQkFDSSxLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsTUFBTTthQUNoQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxrQkFBa0I7YUFDNUI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsVUFBVTthQUNwQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxvQkFBb0I7YUFDOUI7U0FDSixDQUFBO1FBR0QsaUJBQVksR0FBRyxFQUFFLENBQUE7UUFDakIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUVsQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUkxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFBO1FBRTdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUUvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUc7WUFDdkIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN6QyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtTQUNqQyxDQUFBO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHO1lBQ3ZCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzlCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ25DLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3JDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1NBQ2pDLENBQUE7UUFFRCxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQXNCO1lBQ3BELEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUF0RFEsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQTZCaUMsOEJBQWdCO09BNUJ0QyxnQkFBZ0IsQ0F1RDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXZERCxJQXVEQztBQXZEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuKiBAYXV0aG9yIEJhenppdGUgKGh0dHBzOi8vd3d3LmJhenppdGUuY29tKVxyXG4qIEBsaWNlbnNlIE1JVCBMaWNlbnNlIENvcHlyaWdodCAoYykgMjAxOCBCYXp6aXRlXHJcbiovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJy4uL0BuZ3gtdHJhbnNsYXRlL2NvcmVAMTAuMC4yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiRGlhbHBhZFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGlhbHBhZC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFscGFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGV4cGVuc2VzQ2F0ZWdvcmllcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdIb21lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0F1dG8gJiBUcmFuc3BvcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0NlbGx1bGFyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnSG90ZWwgJiBSZXN0YXVyYW50J1xyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICBkYXRhOiBEYXRhU2VydmljZTtcclxuICAgIHRyYW5zYWN0aW9ucyA9IFtdXHJcbiAgICBleHBlbnNlc0NoYXJ0RGF0YUVuID0gW107XHJcbiAgICBleHBlbnNlc0NoYXJ0RGF0YUVzID0gW107XHJcblxyXG4gICAgcHVibGljIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IERhdGFTZXJ2aWNlKClcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSB0aGlzLmRhdGEuZ2V0VHJhbnNhY3Rpb25zKClcclxuXHJcbiAgICAgICAgdGhpcy5leHBlbnNlc0NoYXJ0RGF0YUVuID0gW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwiSG9tZVwiLCBhbW1vdW50OiA5MCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQXV0byAmIFRyYW5zcG9ydFwiLCBhbW1vdW50OiA3NiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQ29tbXVuaWNhdGlvblwiLCBhbW1vdW50OiA2MCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiSG90ZWxcIiwgYW1tb3VudDogNDQgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgdGhpcy5leHBlbnNlc0NoYXJ0RGF0YUVzID0gW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwiSG9nYXJcIiwgYW1tb3VudDogMjAgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIlRyYW5zcG9ydGVcIiwgYW1tb3VudDogNzYgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvbXVuaWNhY2nDs25cIiwgYW1tb3VudDogNjAgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkhvdGVsXCIsIGFtbW91bnQ6IDQ0IH1cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlID0gZXZlbnQubGFuZztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxufVxyXG4iXX0=