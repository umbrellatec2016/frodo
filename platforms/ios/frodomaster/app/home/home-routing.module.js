"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home.component");
var routes = [
    { path: "", component: home_component_1.HomeComponent }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule.prototype.ngOnInit = function () {
        var app = require("tns-core-modules/application");
        var contacts = require("tns-core-modules/nativescript-contacts");
        var contactFields = ['name', 'phoneNumbers'];
        contacts.getAllContacts(contactFields).then(function (args) {
            console.log("getAllContacts Complete");
            console.log(JSON.stringify(args));
            /// Returns args:
            /// args.data: Generic cross platform JSON object, null if no contacts were found.
            /// args.reponse: "fetch"
        }, function (err) {
            console.log("Error: " + err);
        });
    };
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7RUFHRTs7QUFFRixzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLG1EQUFpRDtBQUVqRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Q0FDekMsQ0FBQztBQU1GO0lBQUE7SUFlQyxDQUFDO0lBZEUsb0NBQVEsR0FBUjtRQUNJLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBRSw4QkFBOEIsQ0FBRSxDQUFDO1FBQ3BELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBRSx3Q0FBd0MsQ0FBRSxDQUFDO1FBQ25FLElBQUksYUFBYSxHQUFHLENBQUMsTUFBTSxFQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsaUJBQWlCO1lBQ2pCLGtGQUFrRjtZQUNsRix5QkFBeUI7UUFDN0IsQ0FBQyxFQUFFLFVBQVMsR0FBRztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWRRLGlCQUFpQjtRQUo3QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQWU1QjtJQUFELHdCQUFDO0NBQUEsQUFmRixJQWVFO0FBZlcsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIEBhdXRob3IgQmF6eml0ZSAoaHR0cHM6Ly93d3cuYmF6eml0ZS5jb20pXG4qIEBsaWNlbnNlIE1JVCBMaWNlbnNlIENvcHlyaWdodCAoYykgMjAxOCBCYXp6aXRlXG4qL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUge1xuICAgIG5nT25Jbml0KCk6dm9pZHtcbiAgICAgICAgdmFyIGFwcCA9IHJlcXVpcmUoIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiICk7XG4gICAgICAgIHZhciBjb250YWN0cyA9IHJlcXVpcmUoIFwidG5zLWNvcmUtbW9kdWxlcy9uYXRpdmVzY3JpcHQtY29udGFjdHNcIiApO1xuICAgICAgICB2YXIgY29udGFjdEZpZWxkcyA9IFsnbmFtZScsJ3Bob25lTnVtYmVycyddXG4gICAgICAgIGNvbnRhY3RzLmdldEFsbENvbnRhY3RzKGNvbnRhY3RGaWVsZHMpLnRoZW4oZnVuY3Rpb24oYXJncyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEFsbENvbnRhY3RzIENvbXBsZXRlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYXJncykpO1xuICAgICAgICAgICAgLy8vIFJldHVybnMgYXJnczpcbiAgICAgICAgICAgIC8vLyBhcmdzLmRhdGE6IEdlbmVyaWMgY3Jvc3MgcGxhdGZvcm0gSlNPTiBvYmplY3QsIG51bGwgaWYgbm8gY29udGFjdHMgd2VyZSBmb3VuZC5cbiAgICAgICAgICAgIC8vLyBhcmdzLnJlcG9uc2U6IFwiZmV0Y2hcIlxuICAgICAgICB9LCBmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gfVxuIl19