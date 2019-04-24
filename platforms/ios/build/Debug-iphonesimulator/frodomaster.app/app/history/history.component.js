"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(translate) {
        this.translate = translate;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HistoryComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
    };
    HistoryComponent.prototype.onTap = function (args) {
        alert("This is just a prototype app!");
    };
    HistoryComponent = __decorate([
        core_1.Component({
            selector: "History",
            moduleId: module.id,
            templateUrl: "./history.component.html"
        }),
        __metadata("design:paramtypes", [core_10_0_2_1.TranslateService])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztFQUdFOztBQUVGLHNDQUFrRDtBQUdsRCw2REFBa0Y7QUFRbEY7SUFNSSwwQkFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFL0MsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUNNLG1DQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNNLGdDQUFLLEdBQVosVUFBYSxJQUFJO1FBQ2IsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUE7SUFDMUMsQ0FBQztJQW5CUSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBT2lDLDhCQUFnQjtPQU50QyxnQkFBZ0IsQ0FvQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuKiBAYXV0aG9yIEJhenppdGUgKGh0dHBzOi8vd3d3LmJhenppdGUuY29tKVxyXG4qIEBsaWNlbnNlIE1JVCBMaWNlbnNlIENvcHlyaWdodCAoYykgMjAxOCBCYXp6aXRlXHJcbiovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnLi4vQG5neC10cmFuc2xhdGUvY29yZUAxMC4wLjInO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhpc3RvcnlcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hpc3RvcnkuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcblxyXG4gICBcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblRhcChhcmdzKXtcclxuICAgICAgICBhbGVydChcIlRoaXMgaXMganVzdCBhIHByb3RvdHlwZSBhcHAhXCIpXHJcbiAgICB9XHJcbn1cclxuIl19