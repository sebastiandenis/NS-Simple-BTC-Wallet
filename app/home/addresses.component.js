"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var btc_service_1 = require("../services/btc.service");
var AddressesComponent = /** @class */ (function () {
    function AddressesComponent(btc) {
        this.btc = btc;
        this.newAddress = "";
    }
    AddressesComponent.prototype.ngOnInit = function () {
        this.totalAmount$ = this.btc.getTotalAmount();
        this.addresses$ = this.btc.getAddresses();
    };
    AddressesComponent.prototype.onAdd = function () {
        if (this.newAddress) {
            this.btc.addAddress({
                balance: 0,
                address: this.newAddress
            });
            this.newAddress = '';
        }
    };
    AddressesComponent.prototype.onDel = function (a) {
        this.btc.removeAddress(a);
    };
    AddressesComponent.prototype.getShortAddress = function (a) {
        return a.substr(0, 10) + "..." + a.substr(20);
    };
    AddressesComponent = __decorate([
        core_1.Component({
            selector: "Addresses",
            moduleId: module.id,
            templateUrl: "./addresses.component.html",
            styleUrls: ['./addresses.component.css']
        }),
        __metadata("design:paramtypes", [btc_service_1.BtcService])
    ], AddressesComponent);
    return AddressesComponent;
}());
exports.AddressesComponent = AddressesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZHJlc3Nlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBa0Q7QUFDbEQsdURBQWlFO0FBU2pFO0lBVUMsNEJBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBTGxDLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFNeEIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0MsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDeEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDckI7SUFDQyxDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLENBQWE7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRDQUFlLEdBQWYsVUFBZ0IsQ0FBUztRQUN4QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFsQ1csa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN4QyxDQUFDO3lDQVd1Qix3QkFBVTtPQVZ0QixrQkFBa0IsQ0FvQzlCO0lBQUQseUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQnRjU2VydmljZSwgQnRjQWRkcmVzcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9idGMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIkFkZHJlc3Nlc1wiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9hZGRyZXNzZXMuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9hZGRyZXNzZXMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICBcclxuXHJcbiAgICBcclxuIFxyXG5cdG5ld0FkZHJlc3M6IHN0cmluZyA9IFwiXCI7XHJcblx0dG90YWxBbW91bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblx0YWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxCdGNBZGRyZXNzW10+O1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIGJ0YzogQnRjU2VydmljZSkge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLnRvdGFsQW1vdW50JCA9IHRoaXMuYnRjLmdldFRvdGFsQW1vdW50KCk7XHJcblx0XHR0aGlzLmFkZHJlc3NlcyQgPSB0aGlzLmJ0Yy5nZXRBZGRyZXNzZXMoKTtcclxuXHR9XHJcblxyXG5cdG9uQWRkKCk6IHZvaWQge1xyXG5cdFx0aWYodGhpcy5uZXdBZGRyZXNzKXtcclxuXHRcdFx0dGhpcy5idGMuYWRkQWRkcmVzcyh7XHJcblx0XHRcdFx0YmFsYW5jZTogMCxcclxuXHRcdFx0XHRhZGRyZXNzOiB0aGlzLm5ld0FkZHJlc3NcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMubmV3QWRkcmVzcyA9ICcnO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVsKGE6IEJ0Y0FkZHJlc3MpOiB2b2lkIHtcclxuXHRcdHRoaXMuYnRjLnJlbW92ZUFkZHJlc3MoYSk7XHJcblx0fVxyXG5cclxuXHRnZXRTaG9ydEFkZHJlc3MoYTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBhLnN1YnN0cigwLCAxMCkgKyBcIi4uLlwiICsgYS5zdWJzdHIoMjApO1xyXG5cdH1cclxuXHJcbn0iXX0=