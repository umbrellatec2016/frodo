"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var platform_1 = require("tns-core-modules/platform");
var connectivity = require("connectivity");
var dialogs = require("tns-core-modules/ui/dialogs");
var timer_1 = require("tns-core-modules/timer");
//var Contacts = require("nativescript-contacts-lite");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.currentLanguage = 'en';
        this.cnts = [];
        this.letter = "C";
        this.country = [];
        this.id = timer_1.setInterval(function () {
            _this.internetCheck();
        }, 2000);
        //public contacts = require("nativescript-contacts")
        //public countries: Array<Country>;
        this.testWidth = 0;
        this.heights = 0;
        this.screenScale = platform_1.screen.mainScreen.heightDIPs;
        var Contacts = require("nativescript-contacts-lite");
        Contacts.getContacts(['display_name', 'phone', 'thumbnail'])
            .then(function (res) {
            //console.log(res)
            for (var x = 0; x < res.length; x++) {
                //console.log(res[x].thumbnail)
                var number = ' ';
                for (var xx = 0; xx < res[x].phone.length; xx++) {
                    number = res[x].phone[xx].number;
                }
                _this.cnts.push({ user: res[x].display_name,
                    element: number,
                    thumbnail: res.thumbnail
                });
            }
            //element => {
            // console.log(element)
            //this.cnts.push({user:element.display_name,
            //  element:number,
            //    thumbnail:res.thumbnail
            //})
            //   });
            //console.log(res.phone.length)
            //console.log(vals)
            //console.log(this.cnts)
        });
        var list = [];
        //this.cnts.push(list)
        // this.cnts=list;
        // console.log("abc "+this.cnts)
        translate.onLangChange.subscribe(function (event) {
            _this.currentLanguage = event.lang;
        });
    }
    HomeComponent.prototype.getSize = function (args) {
        var _this = this;
        setTimeout(function () {
            var stack = args.object;
            var stackSize = args.object.getActualSize();
            var stackWidth = stackSize.width;
            var stackHeight = stackSize.height;
            _this.heights += stackHeight;
            console.log("stackWidth: " + stackWidth);
            console.log("stackHeight: " + stackHeight);
            _this.testWidth = stackWidth;
        }, 200);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.screenScale = platform_1.screen.mainScreen.heightDIPs + 100;
        //let screenScale = screen.mainScreen.heightDIPs
    };
    HomeComponent.prototype.onTap = function (args) {
        alert("This is just a prototype app!");
    };
    HomeComponent.prototype.onItemTap = function (e) {
        // alert(this.cnts.length)
        console.log(this.cnts);
    };
    HomeComponent.prototype.selectedIndexChanged = function (e) {
    };
    HomeComponent.prototype.internetCheck = function () {
        var conn = connectivity.getConnectionType();
        //console.log("Connection type "+conn)
        timer_1.clearInterval(this.id);
        if (conn === 0) {
            dialogs.alert({
                title: "Internet Error",
                message: "No internet connection",
                okButtonText: "Close"
            }).then(function () {
                console.log("Dialog closed!");
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [core_10_0_2_1.TranslateService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztFQUdFOztBQUVGLHNDQUFrRDtBQUdsRCw2REFBa0Y7QUFHbEYsc0RBQWtFO0FBR2xFLDJDQUE2QztBQUM3QyxxREFBdUQ7QUFFdkQsZ0RBQW9FO0FBTXBFLHVEQUF1RDtBQU12RDtJQVdJLHVCQUFvQixTQUEyQjtRQUEvQyxpQkE0Q0M7UUE1Q21CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBUnhDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRXZCLFNBQUksR0FBUyxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFDLEdBQUcsQ0FBQTtRQUNSLFlBQU8sR0FBTyxFQUFFLENBQUE7UUFDakIsT0FBRSxHQUFHLG1CQUFXLENBQUM7WUFDckIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQThDVCxvREFBb0Q7UUFFcEQsbUNBQW1DO1FBQ25DLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDUCxZQUFPLEdBQUMsQ0FBQyxDQUFDO1FBYVYsZ0JBQVcsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUE7UUE1RDdDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzFELElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxrQkFBa0I7WUFFbEIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBQzNCLCtCQUErQjtnQkFDL0IsSUFBSSxNQUFNLEdBQUMsR0FBRyxDQUFBO2dCQUNkLEtBQUksSUFBSSxFQUFFLEdB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QVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBWWlDLDhCQUFnQjtPQVh0QyxhQUFhLENBNEd6QjtJQUFELG9CQUFDO0NBQUEsQUE1R0QsSUE0R0M7QUE1R1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQGF1dGhvciBCYXp6aXRlIChodHRwczovL3d3dy5iYXp6aXRlLmNvbSlcbiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDE4IEJhenppdGVcbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnLi4vQG5neC10cmFuc2xhdGUvY29yZUAxMC4wLjInO1xuXG5pbXBvcnQgeyBsaXN0ZW5Ub0VsZW1lbnRPdXRwdXRzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL3ZpZXcvZWxlbWVudFwiO1xuaW1wb3J0IHsgc2NyZWVuLCBTY3JlZW5NZXRyaWNzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBwZXJtaXNzaW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCI7XG5pbXBvcnQgeyBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyXCI7XG5cbi8vaW1wb3J0IHtDb250YWN0c30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb250YWN0cy1saXRlXCJcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuZGVjbGFyZSB2YXIgdHQ7XG4vL3ZhciBDb250YWN0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY29udGFjdHMtbGl0ZVwiKTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuXG4gICAgcHVibGljIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XG4gIFxuICAgIHB1YmxpYyBjbnRzOmFueVtdID0gW107XG4gICAgcHVibGljIGxldHRlcj1cIkNcIiBcbiAgICAgIHB1YmxpYyBjb3VudHJ5OmFueVtdPVtdXG4gICAgcHJpdmF0ZSBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnRlcm5ldENoZWNrKClcbiAgICB9LCAyMDAwKTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgQ29udGFjdHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNvbnRhY3RzLWxpdGVcIik7XG4gICAgICAgQ29udGFjdHMuZ2V0Q29udGFjdHMoWydkaXNwbGF5X25hbWUnLCAncGhvbmUnLCd0aHVtYm5haWwnXSlcbiAgICAgICAudGhlbihyZXM9PntcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgIFxuICAgICAgICAgICBmb3IobGV0IHg9MDsgeCA8cmVzLmxlbmd0aDt4Kyspe1xuICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNbeF0udGh1bWJuYWlsKVxuICAgICAgICAgICAgICAgbGV0IG51bWJlcj0nICdcbiAgICAgICAgICAgICAgIGZvcihsZXQgeHg9MDt4eDxyZXNbeF0ucGhvbmUubGVuZ3RoO3h4KyspeyBcbiAgICAgICAgICAgICAgICAgICBudW1iZXI9cmVzW3hdLnBob25lW3h4XS5udW1iZXJcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHRoaXMuY250cy5wdXNoKHt1c2VyOnJlc1t4XS5kaXNwbGF5X25hbWUsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50Om51bWJlcixcbiAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOnJlcy50aHVtYm5haWxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAvL2VsZW1lbnQgPT4ge1xuICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgICAgICAgICAgLy90aGlzLmNudHMucHVzaCh7dXNlcjplbGVtZW50LmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgICAgLy8gIGVsZW1lbnQ6bnVtYmVyLFxuICAgICAgICAgICAgLy8gICAgdGh1bWJuYWlsOnJlcy50aHVtYm5haWxcbiAgICAgICAgICAgIC8vfSlcbiAgICAgICAvLyAgIH0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcy5waG9uZS5sZW5ndGgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWxzKVxuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNudHMpXG4gICAgICAgfSlcblxuICAgICAgICB2YXIgbGlzdDogYW55W10gPSBbXTtcbiAgICAgIFxuICAgICAgICAvL3RoaXMuY250cy5wdXNoKGxpc3QpXG4gICAgICAgIC8vIHRoaXMuY250cz1saXN0O1xuICAgICAgIFxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWJjIFwiK3RoaXMuY250cylcbiAgICAgICBcblxuICAgICAgICB0cmFuc2xhdGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2UgPSBldmVudC5sYW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9wdWJsaWMgY29udGFjdHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNvbnRhY3RzXCIpXG4gIFxuICAgIC8vcHVibGljIGNvdW50cmllczogQXJyYXk8Q291bnRyeT47XG4gICAgdGVzdFdpZHRoID0gMDtcbiAgICBwdWJsaWMgaGVpZ2h0cz0wO1xuICAgIGdldFNpemUoYXJncykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzdGFjaz0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgICAgICAgICAgdmFyIHN0YWNrU2l6ZSA9IGFyZ3Mub2JqZWN0LmdldEFjdHVhbFNpemUoKTtcbiAgICAgICAgICAgIHZhciBzdGFja1dpZHRoID0gc3RhY2tTaXplLndpZHRoO1xuICAgICAgICAgICAgdmFyIHN0YWNrSGVpZ2h0ID0gc3RhY2tTaXplLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0cys9c3RhY2tIZWlnaHRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhY2tXaWR0aDogXCIgKyBzdGFja1dpZHRoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhY2tIZWlnaHQ6IFwiICsgc3RhY2tIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy50ZXN0V2lkdGggPSBzdGFja1dpZHRoO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cbiAgICBwdWJsaWMgc2NyZWVuU2NhbGUgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjcmVlblNjYWxlID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcysxMDBcbiAgICAgICAgLy9sZXQgc2NyZWVuU2NhbGUgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzXG4gICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBwdWJsaWMgb25UYXAoYXJncyl7XG4gICAgICAgIGFsZXJ0KFwiVGhpcyBpcyBqdXN0IGEgcHJvdG90eXBlIGFwcCFcIilcbiAgICB9XG4gICAgb25JdGVtVGFwKGUpe1xuICAgICAgIC8vIGFsZXJ0KHRoaXMuY250cy5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY250cylcbiAgICB9XG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGUpe1xuXG4gICAgfVxuICAgIGludGVybmV0Q2hlY2soKXtcbiAgICAgICAgbGV0IGNvbm49Y29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKClcbiAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb25uZWN0aW9uIHR5cGUgXCIrY29ubilcbiAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XG5cbiAgICAgICAgIGlmKGNvbm49PT0wKXtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSW50ZXJuZXQgRXJyb3JcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJObyBpbnRlcm5ldCBjb25uZWN0aW9uXCIsXG4gICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiXG4gICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICB9XG4gICAgICB9XG59XG4iXX0=