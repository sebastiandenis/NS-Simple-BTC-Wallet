"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var BtcService = /** @class */ (function () {
    function BtcService(http) {
        this.http = http;
        this.totalAmount$ = new rxjs_1.BehaviorSubject(0);
        this.addresses$ = new rxjs_1.BehaviorSubject([]);
    }
    BtcService.prototype.getTotalAmount = function () {
        return this.totalAmount$.asObservable();
    };
    BtcService.prototype.getAddresses = function () {
        return this.addresses$.asObservable();
    };
    BtcService.prototype.addAddress = function (a) {
        this.addresses$.getValue().push(a);
        this.updateBalance(a);
        this.save();
    };
    BtcService.prototype.removeAddress = function (a) {
        this.addresses$.next(this.addresses$.getValue().filter(function (item) { return item.address !== a.address; }));
        this.recalculateTotal();
        this.save();
    };
    BtcService.prototype.updateBalance = function (a) {
        var _this = this;
        this.http.get('https://blockchain.info/q/addressbalance/' + a.address, { responseType: 'text' })
            .subscribe(function (resp) {
            a.balance = parseInt(resp) / 100000000; //1 BTC = 100 000 000 Satoshi
            _this.recalculateTotal();
        });
    };
    BtcService.prototype.recalculateTotal = function () {
        this.totalAmount$.next(this.addresses$.getValue()
            .map(function (item) { return item.balance; })
            .reduce(function (a, b) { return a + b; }, 0));
    };
    BtcService.prototype.save = function () {
        localStorage.setItem('btc', this.addresses$.getValue().map(function (item) { return item.address; }).toString());
    };
    BtcService.prototype.load = function () {
        var _this = this;
        var a = localStorage.getItem('btc');
        if (a && a.length > 0) {
            var array = a.split(",");
            array.forEach(function (item) {
                _this.addAddress({
                    balance: 0,
                    address: item
                });
            });
        }
    };
    BtcService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BtcService);
    return BtcService;
}());
exports.BtcService = BtcService;
