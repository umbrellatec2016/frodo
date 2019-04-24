"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var transactions_list_component_1 = require("./components/transactions-list.component");
var detail_modal_component_1 = require("./components/modal/detail-modal.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, core_10_0_2_1.TranslateModule.forChild()],
            declarations: [transactions_list_component_1.TransactionsListComponent, detail_modal_component_1.DetailModalComponent],
            exports: [transactions_list_component_1.TransactionsListComponent, detail_modal_component_1.DetailModalComponent],
            entryComponents: [detail_modal_component_1.DetailModalComponent],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSw2REFBZ0U7QUFHaEUsd0ZBQXFGO0FBQ3JGLG9GQUFpRjtBQVFqRjtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQU54QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsRUFBRSw2QkFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQy9ELFlBQVksRUFBRSxDQUFDLHVEQUF5QixFQUFFLDZDQUFvQixDQUFDO1lBQy9ELE9BQU8sRUFBRSxDQUFDLHVEQUF5QixFQUFFLDZDQUFvQixDQUFDO1lBQzFELGVBQWUsRUFBRSxDQUFDLDZDQUFvQixDQUFDO1NBQzFDLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnLi4vQG5neC10cmFuc2xhdGUvY29yZUAxMC4wLjInO1xuXG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uc0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RyYW5zYWN0aW9ucy1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGV0YWlsTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsL2RldGFpbC1tb2RhbC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGUuZm9yQ2hpbGQoKV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVHJhbnNhY3Rpb25zTGlzdENvbXBvbmVudCwgRGV0YWlsTW9kYWxDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtUcmFuc2FjdGlvbnNMaXN0Q29tcG9uZW50LCBEZXRhaWxNb2RhbENvbXBvbmVudF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbRGV0YWlsTW9kYWxDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XG4iXX0=