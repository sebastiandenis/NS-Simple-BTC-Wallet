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
            selector: 'Dashboard',
            moduleId: module.id,
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        __metadata("design:paramtypes", [btc_service_1.BtcService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUc7QUFDbkcsdURBQXFEO0FBVXJEO0lBR0UsNEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUcsQ0FBQztJQUV2QyxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLE1BQWM7UUFDeEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUN0QixPQUFPLEVBQUUsQ0FBQztTQUNYO2FBQU0sSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7YUFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBMUJVLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FJeUIsd0JBQVU7T0FIeEIsa0JBQWtCLENBNEI5QjtJQUFELHlCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJ0Y1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9idGMuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSYWRpYWxOZWVkbGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZ2F1Z2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdEYXNoYm9hcmQnLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0b3RhbEFtb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidGM6IEJ0Y1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3RhbEFtb3VudCQgPSB0aGlzLmJ0Yy5nZXRUb3RhbEFtb3VudCgpO1xyXG4gICAgdGhpcy5idGMucmVjYWxjdWxhdGVUb3RhbCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0R2F1Z2VNYXgoYW1vdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKGFtb3VudCA8IDEpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2UgaWYgKGFtb3VudCA8IDEwKSB7XHJcbiAgICAgIHJldHVybiAxMDtcclxuICAgIH0gZWxzZSBpZiAoYW1vdW50IDwgMTAwKSB7XHJcbiAgICAgIHJldHVybiAxMDA7XHJcbiAgICB9IGVsc2UgaWYgKGFtb3VudCA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMTAwMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25SZWZyZXNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5idGMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19