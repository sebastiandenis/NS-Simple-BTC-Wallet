"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var btc_service_1 = require("../services/btc.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(btc) {
        this.btc = btc;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.btc.load();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [btc_service_1.BtcService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx1REFBcUQ7QUFRckQ7SUFFSSx1QkFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFDbkMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFQUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUcyQix3QkFBVTtPQUYxQixhQUFhLENBUXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJ0Y1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYnRjLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ0YzogQnRjU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJ0Yy5sb2FkKCk7XG4gICAgfVxufVxuIl19