"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var platform_1 = require("tns-core-modules/platform");
var connectivity = require("tns-core-modules/connectivity");
var dialogs = require("tns-core-modules/ui/dialogs");
var timer_1 = require("tns-core-modules/timer");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
//import {Contacts} from "nativescript-contacts-lite"
var appSettings = require("tns-core-modules/application-settings");
//var Contacts = require("nativescript-contacts-lite");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.currentLanguage = 'en';
        this.cnts = [];
        this.activated = false;
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
        Contacts.getContacts(['display_name', 'phone', 'photo', 'contact_id'])
            .then(function (res) {
            //  console.log(res)
            for (var x = 0; x < res.length; x++) {
                //console.log(res[x].thumbnail)
                var number = ' ';
                var ext = "+ Extension";
                for (var xx = 0; xx < res[x].phone.length; xx++) {
                    number = res[x].phone[xx].number;
                }
                if (appSettings.hasKey(res[x].contact_id)) {
                    ext = appSettings.getString(res[x].contact_id);
                }
                _this.cnts.push({ user: res[x].display_name,
                    element: number,
                    thumbnail: res[x].photo,
                    extension: ext,
                    contact_id: res[x].contact_id
                });
                console.log(_this.cnts);
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
    HomeComponent.prototype.onTap = function (args, id) {
        console.log("Id: " + id);
        var options = {
            title: "Add Extension Number",
            defaultText: "",
            message: "Extension Number for internal Calls",
            okButtonText: "Add",
            cancelButtonText: "Cancel",
            //  neutralButtonText: "Neutral",
            cancelable: true,
            inputType: dialogs_1.inputType.number,
            capitalizationType: dialogs_1.capitalizationType.sentences // all. none, sentences or words
        };
        console.log("Id:" + id);
        dialogs_1.prompt(options).then(function (result) {
            console.log("Hello, " + result.text);
            appSettings.setString(id, result.text);
        });
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
    HomeComponent.prototype.search = function () {
        if (this.activated)
            this.activated = false;
        else
            this.activated = true;
    };
    HomeComponent.prototype.filtere = function () {
        var _this = this;
        var Contacts = require("nativescript-contacts-lite");
        this.cnts = [];
        console.log("COnsole " + this.user);
        if (this.activated)
            Contacts.getContacts(['display_name', 'phone', 'photo', 'contact_id'], this.user)
                //else
                //  Contacts.getContacts(['display_name', 'phone','photo','contact_id'])
                .then(function (res) {
                console.log(res);
                for (var x = 0; x < res.length; x++) {
                    //console.log(res[x].thumbnail)
                    var number = ' ';
                    var ext = "+ Extension";
                    for (var xx = 0; xx < res[x].phone.length; xx++) {
                        number = res[x].phone[xx].number;
                    }
                    if (appSettings.hasKey(res[x].contact_id)) {
                        ext = appSettings.getString(res[x].contact_id);
                    }
                    _this.cnts.push({ user: res[x].display_name,
                        element: number,
                        thumbnail: res[x].photo,
                        extension: ext,
                        contact_id: res[x].contact_id
                    });
                    console.log(_this.cnts);
                }
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztFQUdFOztBQUVGLHNDQUFrRDtBQUdsRCw2REFBa0Y7QUFHbEYsc0RBQWtFO0FBR2xFLDREQUE4RDtBQUM5RCxxREFBdUQ7QUFFdkQsZ0RBQW9FO0FBQ3BFLHVEQUFpSDtBQUNqSCxxREFBcUQ7QUFDckQsbUVBQXFFO0FBSXJFLHVEQUF1RDtBQU12RDtJQWFJLHVCQUFvQixTQUEyQjtRQUEvQyxpQkFxREM7UUFyRG1CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBVnhDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRXZCLFNBQUksR0FBUyxFQUFFLENBQUM7UUFFaEIsY0FBUyxHQUFDLEtBQUssQ0FBQTtRQUNmLFdBQU0sR0FBQyxHQUFHLENBQUE7UUFDUixZQUFPLEdBQU8sRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxtQkFBVyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUF1RFQsb0RBQW9EO1FBRXBELG1DQUFtQztRQUNuQyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsWUFBTyxHQUFDLENBQUMsQ0FBQztRQWFWLGdCQUFXLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFBO1FBckU3QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUVyRCxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUM7YUFDcEUsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNSLG9CQUFvQjtZQUVqQixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsR0FBRyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUs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QUMsQ0FBQyxVQUFVLENBQUMsRUFBQzt3QkFDckMsR0FBRyxHQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO3FCQUMvQztvQkFDRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTt3QkFDckMsT0FBTyxFQUFDLE1BQU07d0JBQ2YsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO3dCQUN0QixTQUFTLEVBQUMsR0FBRzt3QkFDYixVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7cUJBQzlCLENBQUMsQ0FBQTtvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDeEI7WUFHTCxDQUFDLENBQUMsQ0FBQTtJQUVQLENBQUM7SUFoTE0sYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FjaUMsOEJBQWdCO09BYnRDLGFBQWEsQ0FpTHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpMRCxJQWlMQztBQWpMWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBAYXV0aG9yIEJhenppdGUgKGh0dHBzOi8vd3d3LmJhenppdGUuY29tKVxuKiBAbGljZW5zZSBNSVQgTGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMTggQmF6eml0ZVxuKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICcuLi9Abmd4LXRyYW5zbGF0ZS9jb3JlQDEwLjAuMic7XG5cbmltcG9ydCB7IGxpc3RlblRvRWxlbWVudE91dHB1dHMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvdmlldy9lbGVtZW50XCI7XG5pbXBvcnQgeyBzY3JlZW4sIFNjcmVlbk1ldHJpY3MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcbmltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgcGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuaW1wb3J0IHsgcHJvbXB0LCBQcm9tcHRSZXN1bHQsIFByb21wdE9wdGlvbnMsIGlucHV0VHlwZSwgY2FwaXRhbGl6YXRpb25UeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuLy9pbXBvcnQge0NvbnRhY3RzfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNvbnRhY3RzLWxpdGVcIlxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuZGVjbGFyZSB2YXIgdHQ7XG4vL3ZhciBDb250YWN0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY29udGFjdHMtbGl0ZVwiKTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuXG4gICAgcHVibGljIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XG4gIFxuICAgIHB1YmxpYyBjbnRzOmFueVtdID0gW107XG4gICAgcHVibGljIHVzZXI6c3RyaW5nXG4gICAgcHVibGljIGFjdGl2YXRlZD1mYWxzZVxuICAgIHB1YmxpYyBsZXR0ZXI9XCJDXCIgXG4gICAgICBwdWJsaWMgY291bnRyeTphbnlbXT1bXVxuICAgIHByaXZhdGUgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW50ZXJuZXRDaGVjaygpXG4gICAgfSwgMjAwMCk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsICkge1xuICAgICAgICBcbiAgICAgICAgbGV0IENvbnRhY3RzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jb250YWN0cy1saXRlXCIpO1xuICAgICAgICBcbiAgICAgICAgQ29udGFjdHMuZ2V0Q29udGFjdHMoWydkaXNwbGF5X25hbWUnLCAncGhvbmUnLCdwaG90bycsJ2NvbnRhY3RfaWQnXSlcbiAgICAgICAudGhlbihyZXM9PntcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgXG4gICAgICAgICAgIGZvcihsZXQgeD0wOyB4IDxyZXMubGVuZ3RoO3grKyl7XG4gICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc1t4XS50aHVtYm5haWwpXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIGxldCBudW1iZXI9JyAnXG4gICAgICAgICAgICAgICBsZXQgZXh0PVwiKyBFeHRlbnNpb25cIlxuICAgICAgICAgICAgICAgZm9yKGxldCB4eD0wO3h4PHJlc1t4XS5waG9uZS5sZW5ndGg7eHgrKyl7IFxuICAgICAgICAgICAgICAgICAgIG51bWJlcj1yZXNbeF0ucGhvbmVbeHhdLm51bWJlclxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgaWYoYXBwU2V0dGluZ3MuaGFzS2V5KHJlc1t4XS5jb250YWN0X2lkKSl7XG4gICAgICAgICAgICAgICAgICAgZXh0PWFwcFNldHRpbmdzLmdldFN0cmluZyhyZXNbeF0uY29udGFjdF9pZClcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHRoaXMuY250cy5wdXNoKHt1c2VyOnJlc1t4XS5kaXNwbGF5X25hbWUsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50Om51bWJlcixcbiAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOnJlc1t4XS5waG90byxcbiAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOmV4dCxcbiAgICAgICAgICAgICAgICAgY29udGFjdF9pZDpyZXNbeF0uY29udGFjdF9pZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNudHMpXG4gICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgLy9lbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgICAgICAgICAgIC8vdGhpcy5jbnRzLnB1c2goe3VzZXI6ZWxlbWVudC5kaXNwbGF5X25hbWUsXG4gICAgICAgICAgICAgIC8vICBlbGVtZW50Om51bWJlcixcbiAgICAgICAgICAgIC8vICAgIHRodW1ibmFpbDpyZXMudGh1bWJuYWlsXG4gICAgICAgICAgICAvL30pXG4gICAgICAgLy8gICB9KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMucGhvbmUubGVuZ3RoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgIC8vY29uc29sZS5sb2codmFscylcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jbnRzKVxuICAgICAgIH0pXG5cbiAgICAgICAgdmFyIGxpc3Q6IGFueVtdID0gW107XG4gICAgICBcbiAgICAgICAgLy90aGlzLmNudHMucHVzaChsaXN0KVxuICAgICAgICAvLyB0aGlzLmNudHM9bGlzdDtcbiAgICAgICBcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImFiYyBcIit0aGlzLmNudHMpXG4gICAgICAgXG5cbiAgICAgICAgdHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlID0gZXZlbnQubGFuZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vcHVibGljIGNvbnRhY3RzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jb250YWN0c1wiKVxuICBcbiAgICAvL3B1YmxpYyBjb3VudHJpZXM6IEFycmF5PENvdW50cnk+O1xuICAgIHRlc3RXaWR0aCA9IDA7XG4gICAgcHVibGljIGhlaWdodHM9MDtcbiAgICBnZXRTaXplKGFyZ3MpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RhY2s9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcbiAgICAgICAgICAgIHZhciBzdGFja1NpemUgPSBhcmdzLm9iamVjdC5nZXRBY3R1YWxTaXplKCk7XG4gICAgICAgICAgICB2YXIgc3RhY2tXaWR0aCA9IHN0YWNrU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIHZhciBzdGFja0hlaWdodCA9IHN0YWNrU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmhlaWdodHMrPXN0YWNrSGVpZ2h0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YWNrV2lkdGg6IFwiICsgc3RhY2tXaWR0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YWNrSGVpZ2h0OiBcIiArIHN0YWNrSGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMudGVzdFdpZHRoID0gc3RhY2tXaWR0aDtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgcHVibGljIHNjcmVlblNjYWxlID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQc1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zY3JlZW5TY2FsZSA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMrMTAwXG4gICAgICAgIC8vbGV0IHNjcmVlblNjYWxlID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQc1xuICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIG9uVGFwKGFyZ3MsaWQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIklkOiBcIitpZClcbiAgICAgICAgbGV0IG9wdGlvbnM6IFByb21wdE9wdGlvbnMgPSB7IFxuICAgICAgICAgICAgdGl0bGU6IFwiQWRkIEV4dGVuc2lvbiBOdW1iZXJcIixcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJFeHRlbnNpb24gTnVtYmVyIGZvciBpbnRlcm5hbCBDYWxsc1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFkZFwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAvLyAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiTmV1dHJhbFwiLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGlucHV0VHlwZTogaW5wdXRUeXBlLm51bWJlciwgLy8gZW1haWwsIG51bWJlciwgdGV4dCwgcGFzc3dvcmQsIG9yIGVtYWlsXG4gICAgICAgICAgICBjYXBpdGFsaXphdGlvblR5cGU6IGNhcGl0YWxpemF0aW9uVHlwZS5zZW50ZW5jZXMgLy8gYWxsLiBub25lLCBzZW50ZW5jZXMgb3Igd29yZHNcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIklkOlwiK2lkKVxuICAgICAgICBwcm9tcHQob3B0aW9ucykudGhlbigocmVzdWx0OiBQcm9tcHRSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG8sIFwiICsgcmVzdWx0LnRleHQpO1xuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKGlkLHJlc3VsdC50ZXh0KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25JdGVtVGFwKGUpe1xuICAgICAgIC8vIGFsZXJ0KHRoaXMuY250cy5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY250cylcbiAgICB9XG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGUpe1xuXG4gICAgfVxuICAgIGludGVybmV0Q2hlY2soKXtcbiAgICAgICAgbGV0IGNvbm49Y29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKClcbiAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb25uZWN0aW9uIHR5cGUgXCIrY29ubilcbiAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XG5cbiAgICAgICAgIGlmKGNvbm49PT0wKXtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSW50ZXJuZXQgRXJyb3JcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJObyBpbnRlcm5ldCBjb25uZWN0aW9uXCIsXG4gICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiXG4gICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICBwdWJsaWMgc2VhcmNoKCl7XG4gICAgICAgICAgaWYodGhpcy5hY3RpdmF0ZWQpXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWQ9ZmFsc2VcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWQ9dHJ1ZVxuICAgICAgfVxuICAgICAgcHVibGljIGZpbHRlcmUoKXtcbiAgICAgICAgbGV0IENvbnRhY3RzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jb250YWN0cy1saXRlXCIpO1xuICAgICAgICB0aGlzLmNudHM9W11cbiAgICAgICAgY29uc29sZS5sb2coXCJDT25zb2xlIFwiK3RoaXMudXNlcilcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGVkKVxuICAgICAgICBDb250YWN0cy5nZXRDb250YWN0cyhbJ2Rpc3BsYXlfbmFtZScsICdwaG9uZScsJ3Bob3RvJywnY29udGFjdF9pZCddLHRoaXMudXNlcilcbiAgICAgICAgLy9lbHNlXG4gICAgICAvLyAgQ29udGFjdHMuZ2V0Q29udGFjdHMoWydkaXNwbGF5X25hbWUnLCAncGhvbmUnLCdwaG90bycsJ2NvbnRhY3RfaWQnXSlcbiAgICAgICAgLnRoZW4ocmVzPT57XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgZm9yKGxldCB4PTA7IHggPHJlcy5sZW5ndGg7eCsrKXtcbiAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc1t4XS50aHVtYm5haWwpXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgbGV0IG51bWJlcj0nICdcbiAgICAgICAgICAgICAgICAgICBsZXQgZXh0PVwiKyBFeHRlbnNpb25cIlxuICAgICAgICAgICAgICAgICAgIGZvcihsZXQgeHg9MDt4eDxyZXNbeF0ucGhvbmUubGVuZ3RoO3h4KyspeyBcbiAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXJlc1t4XS5waG9uZVt4eF0ubnVtYmVyXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGlmKGFwcFNldHRpbmdzLmhhc0tleShyZXNbeF0uY29udGFjdF9pZCkpe1xuICAgICAgICAgICAgICAgICAgICAgICBleHQ9YXBwU2V0dGluZ3MuZ2V0U3RyaW5nKHJlc1t4XS5jb250YWN0X2lkKVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB0aGlzLmNudHMucHVzaCh7dXNlcjpyZXNbeF0uZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6bnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOnJlc1t4XS5waG90byxcbiAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjpleHQsXG4gICAgICAgICAgICAgICAgICAgICBjb250YWN0X2lkOnJlc1t4XS5jb250YWN0X2lkXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jbnRzKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICB9KVxuXG4gICAgICB9XG59XG4iXX0=