"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var MyregisterPostService = /** @class */ (function () {
    function MyregisterPostService(http) {
        this.http = http;
        this.serverUrl = "https://app-prov-01.callfrodo.com/provisioningServer/web/webservice/provisioningregister";
    }
    MyregisterPostService.prototype.postData = function (data) {
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl, data, { headers: options });
    };
    MyregisterPostService.prototype.createRequestOptions = function () {
        var headers = new http_1.HttpHeaders({
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded; "
        });
        return headers;
    };
    MyregisterPostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MyregisterPostService);
    return MyregisterPostService;
}());
exports.MyregisterPostService = MyregisterPostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFHL0Q7SUFHSSwrQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixjQUFTLEdBQUcsMEZBQTBGLENBQUM7SUFFdkUsQ0FBQztJQUV6Qyx3Q0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRyxJQUFJLEVBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU8sb0RBQW9CLEdBQTVCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzNCLHNDQUFzQztZQUNyQyxjQUFjLEVBQUMscUNBQXFDO1NBQ3ZELENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFoQlEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBSWlCLGlCQUFVO09BSDNCLHFCQUFxQixDQWlCakM7SUFBRCw0QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE15cmVnaXN0ZXJQb3N0U2VydmljZSB7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vYXBwLXByb3YtMDEuY2FsbGZyb2RvLmNvbS9wcm92aXNpb25pbmdTZXJ2ZXIvd2ViL3dlYnNlcnZpY2UvcHJvdmlzaW9uaW5ncmVnaXN0ZXJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICBwb3N0RGF0YShkYXRhOiBhbnkpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnNlcnZlclVybCwgIGRhdGEgLCB7IGhlYWRlcnM6IG9wdGlvbnMgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IFwiXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59Il19