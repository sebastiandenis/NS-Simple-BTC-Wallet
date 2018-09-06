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
        this.btc.addAddress({
            balance: 0,
            address: this.newAddress
        });
        this.newAddress = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZHJlc3Nlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBa0Q7QUFDbEQsdURBQWlFO0FBU2pFO0lBVUMsNEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBTG5DLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFNeEIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFLLEdBQUwsVUFBTSxDQUFhO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLENBQVM7UUFDeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFoQ1csa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN4QyxDQUFDO3lDQVd3Qix3QkFBVTtPQVZ2QixrQkFBa0IsQ0FrQzlCO0lBQUQseUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQnRjU2VydmljZSwgQnRjQWRkcmVzcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9idGMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIkFkZHJlc3Nlc1wiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9hZGRyZXNzZXMuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9hZGRyZXNzZXMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICBcclxuXHJcbiAgICBcclxuIFxyXG5cdG5ld0FkZHJlc3M6IHN0cmluZyA9IFwiXCI7XHJcblx0dG90YWxBbW91bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblx0YWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxCdGNBZGRyZXNzW10+O1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBidGM6IEJ0Y1NlcnZpY2UpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy50b3RhbEFtb3VudCQgPSB0aGlzLmJ0Yy5nZXRUb3RhbEFtb3VudCgpO1xyXG5cdFx0dGhpcy5hZGRyZXNzZXMkID0gdGhpcy5idGMuZ2V0QWRkcmVzc2VzKCk7XHJcblx0fVxyXG5cclxuXHRvbkFkZCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYnRjLmFkZEFkZHJlc3Moe1xyXG5cdFx0XHRiYWxhbmNlOiAwLFxyXG5cdFx0XHRhZGRyZXNzOiB0aGlzLm5ld0FkZHJlc3NcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5uZXdBZGRyZXNzID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWwoYTogQnRjQWRkcmVzcyk6IHZvaWQge1xyXG5cdFx0dGhpcy5idGMucmVtb3ZlQWRkcmVzcyhhKTtcclxuXHR9XHJcblxyXG5cdGdldFNob3J0QWRkcmVzcyhhOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIGEuc3Vic3RyKDAsIDEwKSArIFwiLi4uXCIgKyBhLnN1YnN0cigyMCk7XHJcblx0fVxyXG5cclxufSJdfQ==