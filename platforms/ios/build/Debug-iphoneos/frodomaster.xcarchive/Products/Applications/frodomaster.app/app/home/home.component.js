"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var platform_1 = require("tns-core-modules/platform");
//var Contacts = require("nativescript-contacts-lite");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.currentLanguage = 'en';
        this.cnts = [];
        this.letter = "C";
        this.country = [];
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
        console.log(this.cnts.length);
        this.screenScale = platform_1.screen.mainScreen.heightDIPs + 100;
        //let screenScale = screen.mainScreen.heightDIPs
        console.log(this.screenScale + "-");
        for (var x = 0; x < this.cnts.length; x++) {
            //this.cnts.push(JSON.parse(t))
            //console.log(this.cnts[x])
        }
        // Init your component properties here.
        //   this.cnts= this.contacts.getAllContacts(['id','name','phoneNumbers','emailAddresses'])
        //console.log(this.cnts.data)
        //console.log(this.contacts.getAllContacts(['name']).data)
        //console.log(list)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztFQUdFOztBQUVGLHNDQUFrRDtBQUdsRCw2REFBa0Y7QUFHbEYsc0RBQWtFO0FBT2xFLHVEQUF1RDtBQU12RDtJQVNJLHVCQUFvQixTQUEyQjtRQUEvQyxpQkE0Q0M7UUE1Q21CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTnhDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRXZCLFNBQUksR0FBUyxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFDLEdBQUcsQ0FBQTtRQUNSLFlBQU8sR0FBTyxFQUFFLENBQUE7UUErQ3pCLG9EQUFvRDtRQUVwRCxtQ0FBbUM7UUFDbkMsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNQLFlBQU8sR0FBQyxDQUFDLENBQUM7UUFhVixnQkFBVyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQTtRQTVEN0MsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDdEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUMsV0FBVyxDQUFDLENBQUM7YUFDMUQsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLGtCQUFrQjtZQUVsQixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsR0FBRyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFDM0IsK0JBQStCO2dCQUMvQixJQUFJLE1BQU0sR0FBQyxHQUFHLENBQUE7Z0JBQ2QsS0FBSSxJQUFJLEVBQUUsR0FBQyxDQUFDLEVBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLEVBQUUsRUFBRSxFQUFDO29CQUNyQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtB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IjpbIi8qKlxuKiBAYXV0aG9yIEJhenppdGUgKGh0dHBzOi8vd3d3LmJhenppdGUuY29tKVxuKiBAbGljZW5zZSBNSVQgTGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMTggQmF6eml0ZVxuKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICcuLi9Abmd4LXRyYW5zbGF0ZS9jb3JlQDEwLjAuMic7XG5cbmltcG9ydCB7IGxpc3RlblRvRWxlbWVudE91dHB1dHMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvdmlldy9lbGVtZW50XCI7XG5pbXBvcnQgeyBzY3JlZW4sIFNjcmVlbk1ldHJpY3MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcbi8vaW1wb3J0IHtDb250YWN0c30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb250YWN0cy1saXRlXCJcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuZGVjbGFyZSB2YXIgdHQ7XG4vL3ZhciBDb250YWN0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY29udGFjdHMtbGl0ZVwiKTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuXG4gICAgcHVibGljIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XG4gIFxuICAgIHB1YmxpYyBjbnRzOmFueVtdID0gW107XG4gICAgcHVibGljIGxldHRlcj1cIkNcIiBcbiAgICAgIHB1YmxpYyBjb3VudHJ5OmFueVtdPVtdXG4gICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgQ29udGFjdHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNvbnRhY3RzLWxpdGVcIik7XG4gICAgICAgQ29udGFjdHMuZ2V0Q29udGFjdHMoWydkaXNwbGF5X25hbWUnLCAncGhvbmUnLCd0aHVtYm5haWwnXSlcbiAgICAgICAudGhlbihyZXM9PntcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgIFxuICAgICAgICAgICBmb3IobGV0IHg9MDsgeCA8cmVzLmxlbmd0aDt4Kyspe1xuICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNbeF0udGh1bWJuYWlsKVxuICAgICAgICAgICAgICAgbGV0IG51bWJlcj0nICdcbiAgICAgICAgICAgICAgIGZvcihsZXQgeHg9MDt4eDxyZXNbeF0ucGhvbmUubGVuZ3RoO3h4KyspeyBcbiAgICAgICAgICAgICAgICAgICBudW1iZXI9cmVzW3hdLnBob25lW3h4XS5udW1iZXJcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHRoaXMuY250cy5wdXNoKHt1c2VyOnJlc1t4XS5kaXNwbGF5X25hbWUsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50Om51bWJlcixcbiAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOnJlcy50aHVtYm5haWxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAvL2VsZW1lbnQgPT4ge1xuICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgICAgICAgICAgLy90aGlzLmNudHMucHVzaCh7dXNlcjplbGVtZW50LmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgICAgLy8gIGVsZW1lbnQ6bnVtYmVyLFxuICAgICAgICAgICAgLy8gICAgdGh1bWJuYWlsOnJlcy50aHVtYm5haWxcbiAgICAgICAgICAgIC8vfSlcbiAgICAgICAvLyAgIH0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcy5waG9uZS5sZW5ndGgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWxzKVxuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNudHMpXG4gICAgICAgfSlcblxuICAgICAgICB2YXIgbGlzdDogYW55W10gPSBbXTtcbiAgICAgIFxuICAgICAgICAvL3RoaXMuY250cy5wdXNoKGxpc3QpXG4gICAgICAgIC8vIHRoaXMuY250cz1saXN0O1xuICAgICAgIFxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWJjIFwiK3RoaXMuY250cylcbiAgICAgICBcblxuICAgICAgICB0cmFuc2xhdGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2UgPSBldmVudC5sYW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9wdWJsaWMgY29udGFjdHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNvbnRhY3RzXCIpXG4gIFxuICAgIC8vcHVibGljIGNvdW50cmllczogQXJyYXk8Q291bnRyeT47XG4gICAgdGVzdFdpZHRoID0gMDtcbiAgICBwdWJsaWMgaGVpZ2h0cz0wO1xuICAgIGdldFNpemUoYXJncykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzdGFjaz0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgICAgICAgICAgdmFyIHN0YWNrU2l6ZSA9IGFyZ3Mub2JqZWN0LmdldEFjdHVhbFNpemUoKTtcbiAgICAgICAgICAgIHZhciBzdGFja1dpZHRoID0gc3RhY2tTaXplLndpZHRoO1xuICAgICAgICAgICAgdmFyIHN0YWNrSGVpZ2h0ID0gc3RhY2tTaXplLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0cys9c3RhY2tIZWlnaHRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhY2tXaWR0aDogXCIgKyBzdGFja1dpZHRoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhY2tIZWlnaHQ6IFwiICsgc3RhY2tIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy50ZXN0V2lkdGggPSBzdGFja1dpZHRoO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cbiAgICBwdWJsaWMgc2NyZWVuU2NhbGUgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY250cy5sZW5ndGgpXG4gICAgICAgIHRoaXMuc2NyZWVuU2NhbGUgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzKzEwMFxuICAgICAgICAvL2xldCBzY3JlZW5TY2FsZSA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHNcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zY3JlZW5TY2FsZSArIFwiLVwiKVxuICAgICAgICBmb3IobGV0IHg9MDt4PHRoaXMuY250cy5sZW5ndGg7eCsrKXtcbiAgICAgICAgICAgIC8vdGhpcy5jbnRzLnB1c2goSlNPTi5wYXJzZSh0KSlcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jbnRzW3hdKVxuICAgICAgICB9XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgICAvLyAgIHRoaXMuY250cz0gdGhpcy5jb250YWN0cy5nZXRBbGxDb250YWN0cyhbJ2lkJywnbmFtZScsJ3Bob25lTnVtYmVycycsJ2VtYWlsQWRkcmVzc2VzJ10pXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jbnRzLmRhdGEpXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb250YWN0cy5nZXRBbGxDb250YWN0cyhbJ25hbWUnXSkuZGF0YSlcbiAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsaXN0KVxuICAgIH1cbiAgICBwdWJsaWMgb25UYXAoYXJncyl7XG4gICAgICAgIGFsZXJ0KFwiVGhpcyBpcyBqdXN0IGEgcHJvdG90eXBlIGFwcCFcIilcbiAgICB9XG4gICAgb25JdGVtVGFwKGUpe1xuICAgICAgIC8vIGFsZXJ0KHRoaXMuY250cy5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY250cylcbiAgICB9XG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGUpe1xuXG4gICAgfVxufVxuIl19