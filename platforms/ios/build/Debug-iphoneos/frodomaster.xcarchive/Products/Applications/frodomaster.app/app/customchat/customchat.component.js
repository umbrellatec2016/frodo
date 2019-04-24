"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_10_0_2_1 = require("../@ngx-translate/core@10.0.2");
var platform_1 = require("tns-core-modules/platform");
var CustomchatComponent = /** @class */ (function () {
    function CustomchatComponent(translate) {
        this.translate = translate;
        this.heights = 0;
        this.testWidth = 0;
        this.screenScale = platform_1.screen.mainScreen.heightDIPs;
        this.cnts = [{
                user: "Me",
                text: "Hello how are you Today",
                position: "right"
            }, {
                user: "Steven Springield",
                text: "Fine, but I'm tired",
                position: "left"
            }, {
                user: "Me",
                text: "Oh sorry, can help you",
                position: "right"
            }, {
                user: "Steven Springield",
                text: "Fine, but I'm tired",
                position: "left"
            }, {
                user: "Me",
                text: "Oh sorry, can help you",
                position: "right"
            },
            {
                user: "Steven Springield",
                text: "Fine, but I'm tired",
                position: "left"
            }, {
                user: "Me",
                text: "Oh sorry, can help you",
                position: "right"
            },
            {
                user: "Steven Springield",
                text: "Fine, but I'm tired",
                position: "left"
            }, {
                user: "Me",
                text: "Oh sorry, can help you",
                position: "right"
            }];
        this.pns = [{
                user: "Me",
                text: "Hello! I'm fine"
            }];
    }
    CustomchatComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.screenScale = platform_1.screen.mainScreen.heightDIPs + 100;
        //let screenScale = screen.mainScreen.heightDIPs
        console.log(this.screenScale + "-");
    };
    CustomchatComponent.prototype.onTap = function (args) {
        alert("This is just a prototype app!");
    };
    CustomchatComponent.prototype.getSize = function (args) {
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
    CustomchatComponent = __decorate([
        core_1.Component({
            selector: "Customchat",
            moduleId: module.id,
            templateUrl: "./customchat.component.html"
        }),
        __metadata("design:paramtypes", [core_10_0_2_1.TranslateService])
    ], CustomchatComponent);
    return CustomchatComponent;
}());
exports.CustomchatComponent = CustomchatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXN0b21jaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztFQUdFOztBQUVGLHNDQUFrRDtBQUdsRCw2REFBa0Y7QUFDbEYsc0RBQWtFO0FBUWxFO0lBT0ksNkJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBc0R4QyxZQUFPLEdBQUMsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFFUCxnQkFBVyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQTtRQXhEN0MsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDO2dCQUNQLElBQUksRUFBQyxJQUFJO2dCQUNULElBQUksRUFBQyx5QkFBeUI7Z0JBQzlCLFFBQVEsRUFBQyxPQUFPO2FBQ25CLEVBQUM7Z0JBQ0UsSUFBSSxFQUFDLG1CQUFtQjtnQkFDeEIsSUFBSSxFQUFDLHFCQUFxQjtnQkFDMUIsUUFBUSxFQUFDLE1BQU07YUFDbEIsRUFBQztnQkFDRSxJQUFJLEVBQUMsSUFBSTtnQkFDVCxJQUFJLEVBQUMsd0JBQXdCO2dCQUM3QixRQUFRLEVBQUMsT0FBTzthQUNuQixFQUFDO2dCQUNFLElBQUksRUFBQyxtQkFBbUI7Z0JBQ3hCLElBQUksRUFBQyxxQkFBcUI7Z0JBQzFCLFFBQVEsRUFBQyxNQUFNO2FBQ2xCLEVBQUM7Z0JBQ0UsSUFBSSxFQUFDLElBQUk7Z0JBQ1QsSUFBSSxFQUFDLHdCQUF3QjtnQkFDN0IsUUFBUSxFQUFDLE9BQU87YUFBQztZQUNoQjtnQkFDRyxJQUFJLEVBQUMsbUJBQW1CO2dCQUN4QixJQUFJLEVBQUMscUJBQXFCO2dCQUMxQixRQUFRLEVBQUMsTUFBTTthQUNsQixFQUFDO2dCQUNFLElBQUksRUFBQyxJQUFJO2dCQUNULElBQUksRUFBQyx3QkFBd0I7Z0JBQzdCLFFBQVEsRUFBQyxPQUFPO2FBQUM7WUFDaEI7Z0JBQ0csSUFBSSxFQUFDLG1CQUFtQjtnQkFDeEIsSUFBSSxFQUFDLHFCQUFxQjtnQkFDMUIsUUFBUSxFQUFDLE1BQU07YUFDbEIsRUFBQztnQkFDRSxJQUFJLEVBQUMsSUFBSTtnQkFDVCxJQUFJLEVBQUMsd0JBQXdCO2dCQUM3QixRQUFRLEVBQUMsT0FBTzthQUFDLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFDLENBQUM7Z0JBQ04sSUFBSSxFQUFDLElBQUk7Z0JBQ1QsSUFBSSxFQUFDLGlCQUFpQjthQUN6QixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLHVDQUF1QztRQUV2QyxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBQyxHQUFHLENBQUE7UUFDbkQsZ0RBQWdEO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUV2QyxDQUFDO0lBQ00sbUNBQUssR0FBWixVQUFhLElBQUk7UUFDYixLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBS0QscUNBQU8sR0FBUCxVQUFRLElBQUk7UUFBWixpQkFXQztRQVZHLFVBQVUsQ0FBQztZQUNQLElBQUksS0FBSyxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM1QyxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDbkMsS0FBSSxDQUFDLE9BQU8sSUFBRSxXQUFXLENBQUE7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDaEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQTVFUSxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBUWlDLDhCQUFnQjtPQVB0QyxtQkFBbUIsQ0E2RS9CO0lBQUQsMEJBQUM7Q0FBQSxBQTdFRCxJQTZFQztBQTdFWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuKiBAYXV0aG9yIEJhenppdGUgKGh0dHBzOi8vd3d3LmJhenppdGUuY29tKVxyXG4qIEBsaWNlbnNlIE1JVCBMaWNlbnNlIENvcHlyaWdodCAoYykgMjAxOCBCYXp6aXRlXHJcbiovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJy4uL0BuZ3gtdHJhbnNsYXRlL2NvcmVAMTAuMC4yJztcclxuaW1wb3J0IHsgc2NyZWVuLCBTY3JlZW5NZXRyaWNzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkN1c3RvbWNoYXRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbWNoYXQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tY2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcblxyXG4gICBcclxuXHJcbiAgICBwdWJsaWMgY250czogYW55O1xyXG4gICAgcHVibGljIHBuczogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNudHM9W3tcclxuICAgICAgICAgICAgdXNlcjpcIk1lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCJIZWxsbyBob3cgYXJlIHlvdSBUb2RheVwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjpcInJpZ2h0XCJcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgdXNlcjpcIlN0ZXZlbiBTcHJpbmdpZWxkXCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCJGaW5lLCBidXQgSSdtIHRpcmVkXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOlwibGVmdFwiXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHVzZXI6XCJNZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OlwiT2ggc29ycnksIGNhbiBoZWxwIHlvdVwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjpcInJpZ2h0XCJcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgdXNlcjpcIlN0ZXZlbiBTcHJpbmdpZWxkXCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCJGaW5lLCBidXQgSSdtIHRpcmVkXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOlwibGVmdFwiXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHVzZXI6XCJNZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OlwiT2ggc29ycnksIGNhbiBoZWxwIHlvdVwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjpcInJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICx7XHJcbiAgICAgICAgICAgICAgICB1c2VyOlwiU3RldmVuIFNwcmluZ2llbGRcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6XCJGaW5lLCBidXQgSSdtIHRpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpcImxlZnRcIlxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIHVzZXI6XCJNZVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDpcIk9oIHNvcnJ5LCBjYW4gaGVscCB5b3VcIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOlwicmlnaHRcIn1cclxuICAgICAgICAgICAgICAgICx7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjpcIlN0ZXZlbiBTcHJpbmdpZWxkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDpcIkZpbmUsIGJ1dCBJJ20gdGlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpcImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjpcIk1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDpcIk9oIHNvcnJ5LCBjYW4gaGVscCB5b3VcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpcInJpZ2h0XCJ9XVxyXG4gICAgICAgIHRoaXMucG5zPVt7XHJcbiAgICAgICAgICAgIHVzZXI6XCJNZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OlwiSGVsbG8hIEknbSBmaW5lXCJcclxuICAgICAgICB9XVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5zY3JlZW5TY2FsZSA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMrMTAwXHJcbiAgICAgICAgLy9sZXQgc2NyZWVuU2NhbGUgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zY3JlZW5TY2FsZSArIFwiLVwiKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uVGFwKGFyZ3Mpe1xyXG4gICAgICAgIGFsZXJ0KFwiVGhpcyBpcyBqdXN0IGEgcHJvdG90eXBlIGFwcCFcIilcclxuICAgIH1cclxuICAgIHB1YmxpYyBoZWlnaHRzPTA7XHJcbiAgICB0ZXN0V2lkdGggPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzY3JlZW5TY2FsZSA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHNcclxuICAgIGdldFNpemUoYXJncykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3RhY2s9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcclxuICAgICAgICAgICAgdmFyIHN0YWNrU2l6ZSA9IGFyZ3Mub2JqZWN0LmdldEFjdHVhbFNpemUoKTtcclxuICAgICAgICAgICAgdmFyIHN0YWNrV2lkdGggPSBzdGFja1NpemUud2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBzdGFja0hlaWdodCA9IHN0YWNrU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0cys9c3RhY2tIZWlnaHRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFja1dpZHRoOiBcIiArIHN0YWNrV2lkdGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YWNrSGVpZ2h0OiBcIiArIHN0YWNrSGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy50ZXN0V2lkdGggPSBzdGFja1dpZHRoO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9XHJcbn1cclxuIl19