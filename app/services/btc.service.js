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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRjLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidGMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBbUQ7QUFDbkQsNkNBQWtEO0FBUWxEO0lBS0ksb0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFINUIsaUJBQVksR0FBRyxJQUFJLHNCQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksc0JBQWUsQ0FBZSxFQUFFLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBRXZDLG1DQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsaUNBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsQ0FBYTtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBRUQsa0NBQWEsR0FBYixVQUFjLENBQWE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBZ0IsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBMUIsQ0FBMEIsQ0FBQyxDQUN0RixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxrQ0FBYSxHQUFiLFVBQWMsQ0FBYTtRQUEzQixpQkFNQztRQUxHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDM0YsU0FBUyxDQUFDLFVBQUMsSUFBWTtZQUNwQixDQUFDLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyw2QkFBNkI7WUFDckUsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQscUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO2FBQ3JCLEdBQUcsQ0FBQyxVQUFDLElBQWdCLElBQUssT0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQzthQUN2QyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsRUFBTCxDQUFLLEVBQUUsQ0FBQyxDQUFDLENBQ2xDLENBQUM7SUFDTixDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNJLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixDQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBWTtnQkFDdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQztvQkFDWixPQUFPLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsSUFBSTtpQkFDaEIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQTdEUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBTWlCLGlCQUFVO09BTDNCLFVBQVUsQ0ErRHRCO0lBQUQsaUJBQUM7Q0FBQSxBQS9ERCxJQStEQztBQS9EWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ0Y0FkZHJlc3Mge1xyXG4gICAgYmFsYW5jZTogbnVtYmVyO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCdGNTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigwKTtcclxuICAgIHByaXZhdGUgYWRkcmVzc2VzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnRjQWRkcmVzc1tdPihbXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXt9XHJcblxyXG4gICAgZ2V0VG90YWxBbW91bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEFtb3VudCQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QnRjQWRkcmVzc1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc2VzJC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBZGRyZXNzKGE6IEJ0Y0FkZHJlc3MpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZHJlc3NlcyQuZ2V0VmFsdWUoKS5wdXNoKGEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmFsYW5jZShhKTtcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWRkcmVzcyhhOiBCdGNBZGRyZXNzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZGRyZXNzZXMkLm5leHQoXHJcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzc2VzJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogQnRjQWRkcmVzcykgPT4gaXRlbS5hZGRyZXNzICE9PSBhLmFkZHJlc3MpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlVG90YWwoKTtcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCYWxhbmNlKGE6IEJ0Y0FkZHJlc3MpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KCdodHRwczovL2Jsb2NrY2hhaW4uaW5mby9xL2FkZHJlc3NiYWxhbmNlLycgKyBhLmFkZHJlc3MsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhLmJhbGFuY2UgPSBwYXJzZUludChyZXNwKSAvIDEwMDAwMDAwMDsgLy8xIEJUQyA9IDEwMCAwMDAgMDAwIFNhdG9zaGlcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjdWxhdGVUb3RhbCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVjYWxjdWxhdGVUb3RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50JC5uZXh0KFxyXG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NlcyQuZ2V0VmFsdWUoKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbTogQnRjQWRkcmVzcykgPT4gaXRlbS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdidGMnLCB0aGlzLmFkZHJlc3NlcyQuZ2V0VmFsdWUoKS5tYXAoaXRlbSA9PiBpdGVtLmFkZHJlc3MpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnRjJyk7XHJcbiAgICAgICAgaWYgKGEgJiYgYS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IGEuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQWRkcmVzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBpdGVtXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==