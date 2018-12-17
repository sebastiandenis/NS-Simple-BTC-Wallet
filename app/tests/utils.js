"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFzQztBQUd0QztJQUFBO0lBZUEsQ0FBQztJQWRDLG1DQUFVLEdBQVYsVUFBVyxDQUFTLElBQVMsQ0FBQztJQUM5Qix1Q0FBYyxHQUFkO1FBQ0UsT0FBTyxTQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0UsT0FBTyxTQUFFLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxzQ0FBYSxHQUFiLGNBQXVCLENBQUM7SUFBQSxDQUFDO0lBRXpCLHlDQUFnQixHQUFoQixjQUEwQixDQUFDO0lBQUEsQ0FBQztJQUU1QixnQ0FBTyxHQUFQLGNBQWlCLENBQUM7SUFBQSxDQUFDO0lBQ3JCLHFCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgQnRjQWRkcmVzcyB9IGZyb20gXCJ+L3NlcnZpY2VzL2J0Yy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFrZUJ0Y1NlcnZpY2Uge1xyXG4gIGFkZEFkZHJlc3MoYTogc3RyaW5nKTogdm9pZCB7fVxyXG4gIGdldFRvdGFsQW1vdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gb2YoKTtcclxuICB9XHJcblxyXG4gIGdldEFkZHJlc3NlcygpOiBPYnNlcnZhYmxlPEJ0Y0FkZHJlc3NbXT4ge1xyXG4gICAgcmV0dXJuIG9mKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBZGRyZXNzKCk6IHZvaWQge307XHJcblxyXG4gIHJlY2FsY3VsYXRlVG90YWwoKTogdm9pZCB7fTtcclxuXHJcbiAgcmVmcmVzaCgpOiB2b2lkIHt9O1xyXG59XHJcbiJdfQ==