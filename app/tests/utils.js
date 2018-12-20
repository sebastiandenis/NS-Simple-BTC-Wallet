"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
require("../nativescript-localstorage");
var FakeBtcService = /** @class */ (function () {
    function FakeBtcService() {
    }
    FakeBtcService.prototype.addAddress = function (a) { };
    FakeBtcService.prototype.getTotalAmount = function () {
        return rxjs_1.of();
    };
    FakeBtcService.prototype.getAddresses = function () {
        return rxjs_1.of();
    };
    FakeBtcService.prototype.removeAddress = function () { };
    ;
    FakeBtcService.prototype.recalculateTotal = function () { };
    ;
    FakeBtcService.prototype.refresh = function () { };
    ;
    return FakeBtcService;
}());
exports.FakeBtcService = FakeBtcService;
var FakeLocalStorage = /** @class */ (function (_super) {
    __extends(FakeLocalStorage, _super);
    function FakeLocalStorage() {
        var _this = _super.call(this) || this;
        _this.storage = {};
        return _this;
    }
    ;
    FakeLocalStorage.prototype.setItem = function (key, value) {
        this.storage[key] = value || "";
    };
    FakeLocalStorage.prototype.getItem = function (key) {
        return key in this.storage ? this.storage[key] : null;
    };
    FakeLocalStorage.prototype.removeItem = function (key) {
        delete this.storage[key];
    };
    Object.defineProperty(FakeLocalStorage.prototype, "length", {
        get: function () {
            return Object.keys(this.storage).length;
        },
        enumerable: true,
        configurable: true
    });
    FakeLocalStorage.prototype.key = function (i) {
        var keys = Object.keys(this.storage);
        return keys[i] || null;
    };
    return FakeLocalStorage;
}(Storage));
exports.FakeLocalStorage = FakeLocalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFzQztBQUV0QyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUV4QztJQUFBO0lBZUEsQ0FBQztJQWRDLG1DQUFVLEdBQVYsVUFBVyxDQUFTLElBQVMsQ0FBQztJQUM5Qix1Q0FBYyxHQUFkO1FBQ0UsT0FBTyxTQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0UsT0FBTyxTQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxzQ0FBYSxHQUFiLGNBQXVCLENBQUM7SUFBQSxDQUFDO0lBRXpCLHlDQUFnQixHQUFoQixjQUEwQixDQUFDO0lBQUEsQ0FBQztJQUU1QixnQ0FBTyxHQUFQLGNBQWlCLENBQUM7SUFBQSxDQUFDO0lBQ3JCLHFCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSx3Q0FBYztBQWlCM0I7SUFBc0Msb0NBQU87SUFFM0M7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFIRCxhQUFPLEdBQUcsRUFBRSxDQUFDOztJQUdiLENBQUM7SUFBQSxDQUFDO0lBQ0Ysa0NBQU8sR0FBUCxVQUFRLEdBQVcsRUFBRSxLQUFVO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLEdBQVc7UUFDakIsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hELENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsR0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFJLG9DQUFNO2FBQVY7WUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELDhCQUFHLEdBQUgsVUFBSSxDQUFNO1FBQ1IsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFHSCx1QkFBQztBQUFELENBQUMsQUEzQkQsQ0FBc0MsT0FBTyxHQTJCNUM7QUEzQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBCdGNBZGRyZXNzIH0gZnJvbSBcIn4vc2VydmljZXMvYnRjLnNlcnZpY2VcIjtcclxucmVxdWlyZShcIi4uL25hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFrZUJ0Y1NlcnZpY2Uge1xyXG4gIGFkZEFkZHJlc3MoYTogc3RyaW5nKTogdm9pZCB7fVxyXG4gIGdldFRvdGFsQW1vdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gb2YoKTtcclxuICB9XHJcblxyXG4gIGdldEFkZHJlc3NlcygpOiBPYnNlcnZhYmxlPEJ0Y0FkZHJlc3NbXT4ge1xyXG4gICAgcmV0dXJuIG9mKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBZGRyZXNzKCk6IHZvaWQge307XHJcblxyXG4gIHJlY2FsY3VsYXRlVG90YWwoKTogdm9pZCB7fTtcclxuXHJcbiAgcmVmcmVzaCgpOiB2b2lkIHt9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFrZUxvY2FsU3RvcmFnZSBleHRlbmRzIFN0b3JhZ2Uge1xyXG4gIHN0b3JhZ2UgPSB7fTtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICB9O1xyXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcmFnZVtrZXldPSB2YWx1ZSB8fCBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4ga2V5IGluIHRoaXMuc3RvcmFnZSA/IHRoaXMuc3RvcmFnZVtrZXldIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGRlbGV0ZSB0aGlzLnN0b3JhZ2Vba2V5XTtcclxuICB9XHJcblxyXG4gIGdldCBsZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdG9yYWdlKS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBrZXkoaTogYW55KSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zdG9yYWdlKTtcclxuICAgIHJldHVybiBrZXlzW2ldIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19