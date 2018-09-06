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
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "Dashboard",
            moduleId: module.id,
            templateUrl: "./dashboard.component.html",
            styleUrls: ['./dashboard.component.css']
        }),
        __metadata("design:paramtypes", [btc_service_1.BtcService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsdURBQXFEO0FBU3JEO0lBS0MsNEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBRW5DLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLE1BQWM7UUFDekIsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNWLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNYLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNaLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDZixDQUFDO0lBQ0YsQ0FBQztJQTFCVyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7eUNBTXdCLHdCQUFVO09BTHZCLGtCQUFrQixDQTJCOUI7SUFBRCx5QkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQnRjU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9idGMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIkRhc2hib2FyZFwiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcblx0dG90YWxBbW91bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYnRjOiBCdGNTZXJ2aWNlKSB7XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLnRvdGFsQW1vdW50JCA9IHRoaXMuYnRjLmdldFRvdGFsQW1vdW50KCk7XHJcblx0XHR0aGlzLmJ0Yy5yZWNhbGN1bGF0ZVRvdGFsKCk7XHJcblx0fVxyXG5cclxuXHRnZXRHYXVnZU1heChhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRpZiAoYW1vdW50IDwgMSkge1xyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdH0gZWxzZSBpZiAoYW1vdW50IDwgMTApIHtcclxuXHRcdFx0cmV0dXJuIDEwO1xyXG5cdFx0fSBlbHNlIGlmIChhbW91bnQgPCAxMDApIHtcclxuXHRcdFx0cmV0dXJuIDEwMDtcclxuXHRcdH0gZWxzZSBpZiAoYW1vdW50IDwgMTAwMCkge1xyXG5cdFx0XHRyZXR1cm4gMTAwMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAxMDAwMDA7XHJcblx0XHR9XHJcblx0fVxyXG59Il19