"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var app = require("tns-core-modules/application");
var BottomNavigationComponent = /** @class */ (function () {
    function BottomNavigationComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    BottomNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = "/home";
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
    };
    BottomNavigationComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    BottomNavigationComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    BottomNavigationComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            },
            clearHistory: true
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    BottomNavigationComponent = __decorate([
        core_1.Component({
            selector: "app-bottom-navigation",
            moduleId: module.id,
            templateUrl: "./bottom-navigation.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions])
    ], BottomNavigationComponent);
    return BottomNavigationComponent;
}());
exports.BottomNavigationComponent = BottomNavigationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm90dG9tLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0VBR0U7O0FBRUYsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFDL0QsNENBQXdDO0FBQ3hDLGtEQUFvRDtBQVFwRDtJQUdDLG1DQUNTLE1BQWMsRUFDZCxnQkFBa0M7UUFEbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDM0MsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNoQixJQUFJLENBQUMsa0JBQU0sQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUssWUFBWSxzQkFBYSxFQUE5QixDQUE4QixDQUFDLENBQUM7YUFDNUQsU0FBUyxDQUFDLFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELHFEQUFpQixHQUFqQjtRQUNDLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1REFBbUIsR0FBbkIsVUFBb0IsR0FBVztRQUM5QixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFRCxnREFBWSxHQUFaLFVBQWEsWUFBb0I7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzlDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsTUFBTTthQUNaO1lBQ0QsWUFBWSxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQW5DVyx5QkFBeUI7UUFMckMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxvQ0FBb0M7U0FDakQsQ0FBQzt5Q0FLZ0IsZUFBTTtZQUNJLHlCQUFnQjtPQUwvQix5QkFBeUIsQ0FvQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQGF1dGhvciBCYXp6aXRlIChodHRwczovL3d3dy5iYXp6aXRlLmNvbSlcbiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDE4IEJhenppdGVcbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiYXBwLWJvdHRvbS1uYXZpZ2F0aW9uXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vYm90dG9tLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21OYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cHJpdmF0ZSBfYWN0aXZhdGVkVXJsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuX2FjdGl2YXRlZFVybCA9IFwiL2hvbWVcIjtcblxuXHRcdHRoaXMucm91dGVyLmV2ZW50c1xuXHRcdFx0LnBpcGUoZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHRoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKTtcblx0fVxuXG5cdG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcblx0XHRzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcblx0fVxuXG5cdGlzQ29tcG9uZW50U2VsZWN0ZWQodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZhdGVkVXJsID09PSB1cmw7XG5cdH1cblxuXHRvbk5hdkl0ZW1UYXAobmF2SXRlbVJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW25hdkl0ZW1Sb3V0ZV0sIHtcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0bmFtZTogXCJmYWRlXCJcblx0XHRcdH0sXG5cdFx0XHRjbGVhckhpc3Rvcnk6IHRydWVcblx0XHR9KTtcblxuXHRcdGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcblx0XHRzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG5cdH1cbn1cblxuIl19