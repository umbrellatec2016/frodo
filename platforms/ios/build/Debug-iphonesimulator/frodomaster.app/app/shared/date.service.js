"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesEs = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var DateService = /** @class */ (function () {
    function DateService() {
    }
    DateService.prototype.longDate = function (date, lang) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        if (lang === 'en') {
            return day + " " + monthNamesEn[monthIndex] + " " + year;
        }
        else {
            return day + " " + monthNamesEs[monthIndex] + " " + year;
        }
    };
    DateService.prototype.shortDate = function (date, lang) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        if (lang === 'en') {
            return day + " " + monthNamesEn[monthIndex];
        }
        else {
            return day + " " + monthNamesEs[monthIndex];
        }
    };
    return DateService;
}());
exports.DateService = DateService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxZQUFZLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hKLElBQU0sWUFBWSxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVuSjtJQUFBO0lBdUJBLENBQUM7SUF0QkcsOEJBQVEsR0FBUixVQUFTLElBQVUsRUFBRSxJQUFZO1FBQzdCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWhDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNmLE9BQVUsR0FBRyxTQUFJLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBSSxJQUFNLENBQUM7U0FDdkQ7YUFBTTtZQUNILE9BQVUsR0FBRyxTQUFJLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBSSxJQUFNLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLElBQVUsRUFBRSxJQUFZO1FBQzlCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFbkMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2YsT0FBVSxHQUFHLFNBQUksWUFBWSxDQUFDLFVBQVUsQ0FBRyxDQUFDO1NBQy9DO2FBQU07WUFDSCxPQUFVLEdBQUcsU0FBSSxZQUFZLENBQUMsVUFBVSxDQUFHLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9udGhOYW1lc0VuID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5jb25zdCBtb250aE5hbWVzRXMgPSBbJ0VuZXJvJywgJ0ZlYnJlcm8nLCAnTWFyem8nLCAnQWJyaWwnLCAnTWF5bycsICdKdW5pbycsICdKdWxpbycsICdBZ29zdG8nLCAnU2VwdGllbWJyZScsICdPY3R1YnJlJywgJ05vdmllbWJyZScsICdEaWNpZW1icmUnXTtcblxuZXhwb3J0IGNsYXNzIERhdGVTZXJ2aWNlIHtcbiAgICBsb25nRGF0ZShkYXRlOiBEYXRlLCBsYW5nOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYgKGxhbmcgPT09ICdlbicpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtkYXl9ICR7bW9udGhOYW1lc0VuW21vbnRoSW5kZXhdfSAke3llYXJ9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtkYXl9ICR7bW9udGhOYW1lc0VzW21vbnRoSW5kZXhdfSAke3llYXJ9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3J0RGF0ZShkYXRlOiBEYXRlLCBsYW5nOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG5cbiAgICAgICAgaWYgKGxhbmcgPT09ICdlbicpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtkYXl9ICR7bW9udGhOYW1lc0VuW21vbnRoSW5kZXhdfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7ZGF5fSAke21vbnRoTmFtZXNFc1ttb250aEluZGV4XX1gO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==