"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var btc_service_1 = require("../services/btc.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(btc) {
        this.btc = btc;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.totalAmount$ = this.btc.getTotalAmount();
        this.btc.recalculateTotal();
    };
    DashboardComponent.prototype.getGaugeMax = function (amount) {
        if (amount < 1) {
            return 1;
        }
        else if (amount < 10) {
            return 10;
        }
        else if (amount < 100) {
            return 100;
        }
        else if (amount < 1000) {
            return 1000;
        }
        else {
            return 100000;
        }
    };
    DashboardComponent.prototype.onRefresh = function () {
        this.btc.refresh();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "Dashboard",
            moduleId: module.id,
            templateUrl: "./dashboard.component.html",
            styleUrls: ["./dashboard.component.css"]
        }),
        __metadata("design:paramtypes", [btc_service_1.BtcService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsdURBQXFEO0FBU3JEO0lBR0UsNEJBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUcsQ0FBQztJQUV0QyxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLE1BQWM7UUFDeEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUN0QixPQUFPLEVBQUUsQ0FBQztTQUNYO2FBQU0sSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7YUFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBMUJVLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FJd0Isd0JBQVU7T0FIdkIsa0JBQWtCLENBMkI5QjtJQUFELHlCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCdGNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2J0Yy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiRGFzaGJvYXJkXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0b3RhbEFtb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGJ0YzogQnRjU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdGFsQW1vdW50JCA9IHRoaXMuYnRjLmdldFRvdGFsQW1vdW50KCk7XHJcbiAgICB0aGlzLmJ0Yy5yZWNhbGN1bGF0ZVRvdGFsKCk7XHJcbiAgfVxyXG5cclxuICBnZXRHYXVnZU1heChhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoYW1vdW50IDwgMSkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0gZWxzZSBpZiAoYW1vdW50IDwgMTApIHtcclxuICAgICAgcmV0dXJuIDEwO1xyXG4gICAgfSBlbHNlIGlmIChhbW91bnQgPCAxMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDtcclxuICAgIH0gZWxzZSBpZiAoYW1vdW50IDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAxMDAwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlZnJlc2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ0Yy5yZWZyZXNoKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==