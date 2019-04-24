"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-calendar/angular");
var angular_4 = require("nativescript-ui-chart/angular");
var angular_5 = require("nativescript-ui-dataform/angular");
var angular_6 = require("nativescript-ui-autocomplete/angular");
var angular_7 = require("nativescript-ui-gauge/angular");
var forms_1 = require("nativescript-angular/forms");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var shard_module_1 = require("../shared/shard.module");
var cards_routing_module_1 = require("./cards-routing.module");
var cards_component_1 = require("./cards.component");
// import { TransactionsListComponent } from "../shared/components/transactions-list.component";
var cards_slide_component_1 = require("../shared/components/cards-slide.component");
var card_component_1 = require("../shared/components/card.component");
var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIChartModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIAutoCompleteTextViewModule,
                angular_7.NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule,
                cards_routing_module_1.CardsRoutingModule,
                forms_1.NativeScriptFormsModule,
                core_10_0_2_1.TranslateModule.forChild(),
                shard_module_1.SharedModule
            ],
            declarations: [
                cards_component_1.CardsComponent,
                // TransactionsListComponent,
                cards_slide_component_1.CardsSlideComponent,
                card_component_1.CardComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CardsModule);
    return CardsModule;
}());
exports.CardsModule = CardsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0VBR0U7O0FBRUYsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSw4REFBb0Y7QUFDcEYsNERBQWdGO0FBQ2hGLDREQUFnRjtBQUNoRix5REFBMEU7QUFDMUUsNERBQWdGO0FBQ2hGLGdFQUFnRztBQUNoRyx5REFBMEU7QUFDMUUsb0RBQXFFO0FBRXJFLDZEQUFnRTtBQUVoRSx1REFBc0Q7QUFFdEQsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCxnR0FBZ0c7QUFDaEcsb0ZBQWlGO0FBQ2pGLHNFQUFvRTtBQTZCcEU7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQTNCdkIsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNSLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1QixrREFBd0M7Z0JBQ3hDLG1DQUF5QjtnQkFDekIsaUNBQXdCO2dCQUN4Qix5Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFFdkIsNkJBQWUsQ0FBQyxRQUFRLEVBQUU7Z0JBRTFCLDJCQUFZO2FBQ1o7WUFDRCxZQUFZLEVBQUU7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsNkJBQTZCO2dCQUM3QiwyQ0FBbUI7Z0JBQ25CLDhCQUFhO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IsdUJBQWdCO2FBQ2hCO1NBQ0QsQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBAYXV0aG9yIEJhenppdGUgKGh0dHBzOi8vd3d3LmJhenppdGUuY29tKVxuKiBAbGljZW5zZSBNSVQgTGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMTggQmF6eml0ZVxuKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICcuLi9Abmd4LXRyYW5zbGF0ZS9jb3JlQDEwLjAuMic7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmQubW9kdWxlXCI7XG5cbmltcG9ydCB7IENhcmRzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NhcmRzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBDYXJkc0NvbXBvbmVudCB9IGZyb20gXCIuL2NhcmRzLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgVHJhbnNhY3Rpb25zTGlzdENvbXBvbmVudCB9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy90cmFuc2FjdGlvbnMtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRzU2xpZGVDb21wb25lbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZHMtc2xpZGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuXHRcdENhcmRzUm91dGluZ01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcblxuXHRcdFRyYW5zbGF0ZU1vZHVsZS5mb3JDaGlsZCgpLFxuXG5cdFx0U2hhcmVkTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENhcmRzQ29tcG9uZW50LFxuXHRcdC8vIFRyYW5zYWN0aW9uc0xpc3RDb21wb25lbnQsXG5cdFx0Q2FyZHNTbGlkZUNvbXBvbmVudCxcblx0XHRDYXJkQ29tcG9uZW50XG5cdF0sXG5cdHNjaGVtYXM6IFtcblx0XHROT19FUlJPUlNfU0NIRU1BXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZHNNb2R1bGUgeyB9XG4iXX0=