"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var MyHttpPostService = /** @class */ (function () {
    function MyHttpPostService(http) {
        this.http = http;
        this.serverUrl = "https://app-prov-01.callfrodo.com/provisioningServer/web/webservice/provisioningrequest";
    }
    MyHttpPostService.prototype.postData = function (data) {
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl, data, { headers: options });
    };
    MyHttpPostService.prototype.createRequestOptions = function () {
        var headers = new http_1.HttpHeaders({
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded; "
        });
        return headers;
    };
    MyHttpPostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MyHttpPostService);
    return MyHttpPostService;
}());
exports.MyHttpPostService = MyHttpPostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlzaW9uaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm92aXNpb25pbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFHL0Q7SUFHSSwyQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixjQUFTLEdBQUcseUZBQXlGLENBQUM7SUFFdEUsQ0FBQztJQUV6QyxvQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRyxJQUFJLEVBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU8sZ0RBQW9CLEdBQTVCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzNCLHNDQUFzQztZQUNyQyxjQUFjLEVBQUMscUNBQXFDO1NBQ3ZELENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFoQlEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBSWlCLGlCQUFVO09BSDNCLGlCQUFpQixDQWlCN0I7SUFBRCx3QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE15SHR0cFBvc3RTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9hcHAtcHJvdi0wMS5jYWxsZnJvZG8uY29tL3Byb3Zpc2lvbmluZ1NlcnZlci93ZWIvd2Vic2VydmljZS9wcm92aXNpb25pbmdyZXF1ZXN0XCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgcG9zdERhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwsICBkYXRhICwgeyBoZWFkZXJzOiBvcHRpb25zIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBcIlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxufVxuIl19