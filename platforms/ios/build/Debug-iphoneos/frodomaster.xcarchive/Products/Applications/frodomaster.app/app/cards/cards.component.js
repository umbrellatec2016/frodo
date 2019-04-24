"use strict";
/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../shared/data.service");
var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
        this.transactions = [];
        this.data = new data_service_1.DataService();
        this.transactions = this.data.getTransactions();
    }
    CardsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    CardsComponent = __decorate([
        core_1.Component({
            selector: "Cards",
            moduleId: module.id,
            templateUrl: "./cards.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0VBR0U7O0FBRUYsc0NBQWtEO0FBRWxELHVEQUFxRDtBQU9yRDtJQUlDO1FBRkEsaUJBQVksR0FBRyxFQUFFLENBQUE7UUFHaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQTtRQUU3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDaEQsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDQyx1Q0FBdUM7SUFDeEMsQ0FBQztJQVpXLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3JDLENBQUM7O09BQ1csY0FBYyxDQWExQjtJQUFELHFCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQGF1dGhvciBCYXp6aXRlIChodHRwczovL3d3dy5iYXp6aXRlLmNvbSlcbiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDE4IEJhenppdGVcbiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2RhdGEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiQ2FyZHNcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9jYXJkcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0ZGF0YTogRGF0YVNlcnZpY2U7XG5cdHRyYW5zYWN0aW9ucyA9IFtdXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5kYXRhID0gbmV3IERhdGFTZXJ2aWNlKClcblxuXHRcdHRoaXMudHJhbnNhY3Rpb25zID0gdGhpcy5kYXRhLmdldFRyYW5zYWN0aW9ucygpXG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cblx0fVxufVxuIl19