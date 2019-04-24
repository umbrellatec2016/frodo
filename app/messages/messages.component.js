"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var router_2 = require("nativescript-angular/router");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(translate, router, routerExtensions) {
        this.translate = translate;
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    MessagesComponent.prototype.onTap = function (args) {
        this.routerExtensions.navigate(['customchat'], {
            transition: {
                name: "fade"
            },
            clearHistory: true
        });
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: "Messages",
            moduleId: module.id,
            templateUrl: "./messages.component.html"
        }),
        __metadata("design:paramtypes", [core_10_0_2_1.TranslateService, router_1.Router,
            router_2.RouterExtensions])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0VBR0U7O0FBRUYsc0NBQWtEO0FBRWxELDBDQUF3RDtBQUN4RCw2REFBa0Y7QUFDbEYsc0RBQStEO0FBTS9EO0lBTUksMkJBQW9CLFNBQTJCLEVBQVMsTUFBYyxFQUNoRSxnQkFBa0M7UUFEcEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFeEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUNNLGlDQUFLLEdBQVosVUFBYSxJQUFJO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3BELFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsTUFBTTthQUNaO1lBQ0QsWUFBWSxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0QsQ0FBQztJQXJCUSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7eUNBT2lDLDhCQUFnQixFQUFpQixlQUFNO1lBQzlDLHlCQUFnQjtPQVAvQixpQkFBaUIsQ0FzQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuKiBAYXV0aG9yIEJhenppdGUgKGh0dHBzOi8vd3d3LmJhenppdGUuY29tKVxyXG4qIEBsaWNlbnNlIE1JVCBMaWNlbnNlIENvcHlyaWdodCAoYykgMjAxOCBCYXp6aXRlXHJcbiovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJy4uL0BuZ3gtdHJhbnNsYXRlL2NvcmVAMTAuMC4yJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJNZXNzYWdlc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWVzc2FnZXMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG5cclxuICAgXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uVGFwKGFyZ3Mpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2N1c3RvbWNoYXQnXSwge1xyXG5cdFx0XHR0cmFuc2l0aW9uOiB7XHJcblx0XHRcdFx0bmFtZTogXCJmYWRlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xlYXJIaXN0b3J5OiB0cnVlXHJcblx0XHR9KTtcclxuICAgIH1cclxufVxyXG4iXX0=