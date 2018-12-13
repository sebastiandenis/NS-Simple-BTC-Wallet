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
    BtcService.prototype.refresh = function () {
        var _this = this;
        this.totalAmount$.next(0);
        var temp = this.addresses$.getValue().slice();
        this.addresses$.next([]);
        temp.forEach(function (item) {
            _this.addAddress(item);
        });
        this.addresses$.next(temp);
        this.recalculateTotal();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRjLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidGMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBbUQ7QUFDbkQsNkNBQWtEO0FBUWxEO0lBS0ksb0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFINUIsaUJBQVksR0FBRyxJQUFJLHNCQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksc0JBQWUsQ0FBZSxFQUFFLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBRXZDLG1DQUFjLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxDQUFhO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhCLENBQUM7SUFFRCxrQ0FBYSxHQUFiLFVBQWMsQ0FBYTtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFnQixJQUFLLE9BQUEsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsT0FBTyxFQUExQixDQUEwQixDQUFDLENBQ3RGLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELGtDQUFhLEdBQWIsVUFBYyxDQUFhO1FBQTNCLGlCQU1DO1FBTEcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUMzRixTQUFTLENBQUMsVUFBQyxJQUFZO1lBQ3BCLENBQUMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLDZCQUE2QjtZQUNyRSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxxQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7YUFDckIsR0FBRyxDQUFDLFVBQUMsSUFBZ0IsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDO2FBQ3ZDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssRUFBRSxDQUFDLENBQUMsQ0FDbEMsQ0FBQztJQUNOLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWdCO1lBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQseUJBQUksR0FBSjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFZO2dCQUN2QixLQUFJLENBQUMsVUFBVSxDQUFDO29CQUNaLE9BQU8sRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxJQUFJO2lCQUNoQixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQXhFUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBTWlCLGlCQUFVO09BTDNCLFVBQVUsQ0EwRXRCO0lBQUQsaUJBQUM7Q0FBQSxBQTFFRCxJQTBFQztBQTFFWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ0Y0FkZHJlc3Mge1xyXG4gICAgYmFsYW5jZTogbnVtYmVyO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCdGNTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigwKTtcclxuICAgIHByaXZhdGUgYWRkcmVzc2VzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnRjQWRkcmVzc1tdPihbXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXt9XHJcblxyXG4gICAgZ2V0VG90YWxBbW91bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEFtb3VudCQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QnRjQWRkcmVzc1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc2VzJC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBZGRyZXNzKGE6IEJ0Y0FkZHJlc3MpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZHJlc3NlcyQuZ2V0VmFsdWUoKS5wdXNoKGEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmFsYW5jZShhKTtcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWRkcmVzcyhhOiBCdGNBZGRyZXNzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZGRyZXNzZXMkLm5leHQoXHJcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzc2VzJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogQnRjQWRkcmVzcykgPT4gaXRlbS5hZGRyZXNzICE9PSBhLmFkZHJlc3MpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlVG90YWwoKTtcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCYWxhbmNlKGE6IEJ0Y0FkZHJlc3MpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KCdodHRwczovL2Jsb2NrY2hhaW4uaW5mby9xL2FkZHJlc3NiYWxhbmNlLycgKyBhLmFkZHJlc3MsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhLmJhbGFuY2UgPSBwYXJzZUludChyZXNwKSAvIDEwMDAwMDAwMDsgLy8xIEJUQyA9IDEwMCAwMDAgMDAwIFNhdG9zaGlcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjdWxhdGVUb3RhbCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVjYWxjdWxhdGVUb3RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50JC5uZXh0KFxyXG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NlcyQuZ2V0VmFsdWUoKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbTogQnRjQWRkcmVzcykgPT4gaXRlbS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdidGMnLCB0aGlzLmFkZHJlc3NlcyQuZ2V0VmFsdWUoKS5tYXAoaXRlbSA9PiBpdGVtLmFkZHJlc3MpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCQubmV4dCgwKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy5hZGRyZXNzZXMkLmdldFZhbHVlKCkuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLmFkZHJlc3NlcyQubmV4dChbXSk7XHJcbiAgICAgICAgdGVtcC5mb3JFYWNoKChpdGVtOiBCdGNBZGRyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQWRkcmVzcyhpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZHJlc3NlcyQubmV4dCh0ZW1wKTtcclxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlVG90YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2J0YycpO1xyXG4gICAgICAgIGlmIChhICYmIGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBhLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFkZHJlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogaXRlbVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=