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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUc7QUFDbkcsdURBQXFEO0FBVXJEO0lBR0UsNEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUcsQ0FBQztJQUV2QyxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLE1BQWM7UUFDeEIsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUExQlUsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQUl5Qix3QkFBVTtPQUh4QixrQkFBa0IsQ0E0QjlCO0lBQUQseUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnRjU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2J0Yy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJhZGlhbE5lZWRsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1nYXVnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ0Rhc2hib2FyZCcsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRvdGFsQW1vdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ0YzogQnRjU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdGFsQW1vdW50JCA9IHRoaXMuYnRjLmdldFRvdGFsQW1vdW50KCk7XHJcbiAgICB0aGlzLmJ0Yy5yZWNhbGN1bGF0ZVRvdGFsKCk7XHJcbiAgfVxyXG5cclxuICBnZXRHYXVnZU1heChhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoYW1vdW50IDwgMSkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0gZWxzZSBpZiAoYW1vdW50IDwgMTApIHtcclxuICAgICAgcmV0dXJuIDEwO1xyXG4gICAgfSBlbHNlIGlmIChhbW91bnQgPCAxMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDtcclxuICAgIH0gZWxzZSBpZiAoYW1vdW50IDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAxMDAwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlZnJlc2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ0Yy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=