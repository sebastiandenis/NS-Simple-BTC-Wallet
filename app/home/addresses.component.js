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
