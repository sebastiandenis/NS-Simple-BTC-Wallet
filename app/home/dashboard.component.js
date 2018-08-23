"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var btc_service_1 = require("../services/btc.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(btc) {
        this.btc = btc;
        this.gaugeValue = 2;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.totalAmount$ = this.btc.getTotalAmount();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsdURBQXFEO0FBU3JEO0lBTUMsNEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBTGhDLGVBQVUsR0FBVyxDQUFDLENBQUM7SUFPMUIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDVixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDWCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDWixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDYixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2YsQ0FBQztJQUNGLENBQUM7SUExQlcsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN4QyxDQUFDO3lDQU93Qix3QkFBVTtPQU52QixrQkFBa0IsQ0EyQjlCO0lBQUQseUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCdGNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2J0Yy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkRhc2hib2FyZFwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZ2F1Z2VWYWx1ZTogbnVtYmVyID0gMjtcblxuXG5cdHRvdGFsQW1vdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYnRjOiBCdGNTZXJ2aWNlKSB7XG5cblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMudG90YWxBbW91bnQkID0gdGhpcy5idGMuZ2V0VG90YWxBbW91bnQoKTtcblx0fVxuXG5cdGdldEdhdWdlTWF4KGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRpZiAoYW1vdW50IDwgMSkge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fSBlbHNlIGlmIChhbW91bnQgPCAxMCkge1xuXHRcdFx0cmV0dXJuIDEwO1xuXHRcdH0gZWxzZSBpZiAoYW1vdW50IDwgMTAwKSB7XG5cdFx0XHRyZXR1cm4gMTAwO1xuXHRcdH0gZWxzZSBpZiAoYW1vdW50IDwgMTAwMCkge1xuXHRcdFx0cmV0dXJuIDEwMDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAxMDAwMDA7XG5cdFx0fVxuXHR9XG59Il19