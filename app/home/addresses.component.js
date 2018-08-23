"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var btc_service_1 = require("../services/btc.service");
var AddressesComponent = /** @class */ (function () {
    function AddressesComponent(btc) {
        this.btc = btc;
        this.newAddress = "1sdenispaL9bgBCyvQLXHY7YvfCDDMYVE";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZHJlc3Nlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBa0Q7QUFDbEQsdURBQWlFO0FBU2pFO0lBVUMsNEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBTG5DLGVBQVUsR0FBVyxtQ0FBbUMsQ0FBQztJQU16RCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELGtDQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNuQixPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVTtTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLENBQWE7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRDQUFlLEdBQWYsVUFBZ0IsQ0FBUztRQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQWhDVyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7eUNBV3dCLHdCQUFVO09BVnZCLGtCQUFrQixDQWtDOUI7SUFBRCx5QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidWkvbGlzdC12aWV3XCJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJ0Y1NlcnZpY2UsIEJ0Y0FkZHJlc3MgfSBmcm9tIFwiLi4vc2VydmljZXMvYnRjLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiQWRkcmVzc2VzXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vYWRkcmVzc2VzLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2FkZHJlc3Nlcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIFxuXG4gICAgXG4gXG5cdG5ld0FkZHJlc3M6IHN0cmluZyA9IFwiMXNkZW5pc3BhTDliZ0JDeXZRTFhIWTdZdmZDRERNWVZFXCI7XG5cdHRvdGFsQW1vdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXHRhZGRyZXNzZXMkOiBPYnNlcnZhYmxlPEJ0Y0FkZHJlc3NbXT47XG5cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGJ0YzogQnRjU2VydmljZSkge1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy50b3RhbEFtb3VudCQgPSB0aGlzLmJ0Yy5nZXRUb3RhbEFtb3VudCgpO1xuXHRcdHRoaXMuYWRkcmVzc2VzJCA9IHRoaXMuYnRjLmdldEFkZHJlc3NlcygpO1xuXHR9XG5cblx0b25BZGQoKTogdm9pZCB7XG5cdFx0dGhpcy5idGMuYWRkQWRkcmVzcyh7XG5cdFx0XHRiYWxhbmNlOiAwLFxuXHRcdFx0YWRkcmVzczogdGhpcy5uZXdBZGRyZXNzXG5cdFx0fSk7XG5cdFx0dGhpcy5uZXdBZGRyZXNzID0gJyc7XG4gICAgfVxuXG4gICAgb25EZWwoYTogQnRjQWRkcmVzcyk6IHZvaWQge1xuXHRcdHRoaXMuYnRjLnJlbW92ZUFkZHJlc3MoYSk7XG5cdH1cblxuXHRnZXRTaG9ydEFkZHJlc3MoYTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYS5zdWJzdHIoMCwgMTApICsgXCIuLi5cIiArIGEuc3Vic3RyKDIwKTtcblx0fVxuXG59Il19