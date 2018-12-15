"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("nativescript-angular/zone-js/testing.jasmine");
var testing_1 = require("nativescript-angular/testing");
var testing_2 = require("@angular/core/testing");
var btc_service_1 = require("~/services/btc.service");
var addresses_component_1 = require("~/home/addresses.component");
var rxjs_1 = require("rxjs");
testing_1.nsTestBedInit();
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
    return FakeBtcService;
}());
exports.FakeBtcService = FakeBtcService;
describe("AddressesComponent", function () {
    beforeEach(function () {
        testing_1.nsTestBedBeforeEach([addresses_component_1.AddressesComponent], [{ provide: btc_service_1.BtcService, useValue: new FakeBtcService() }]);
    });
    afterEach(testing_1.nsTestBedAfterEach(false));
    it("Component should exist", testing_2.async(function () {
        return testing_1.nsTestBedRender(addresses_component_1.AddressesComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            expect(componentRef).toBeDefined();
        });
    }));
    it("property newAddress should be empty at component start", testing_2.async(function () {
        return testing_1.nsTestBedRender(addresses_component_1.AddressesComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            expect(componentRef.instance.newAddress).toEqual("");
        });
    }));
    it("property newAddress should be empty after onAdd() call", testing_2.async(function () {
        return testing_1.nsTestBedRender(addresses_component_1.AddressesComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            componentRef.instance.newAddress = "test";
            componentRef.instance.onAdd();
            expect(componentRef.instance.newAddress).toEqual("");
            componentRef.instance.newAddress = "";
            componentRef.instance.onAdd();
            expect(componentRef.instance.newAddress).toEqual("");
        });
    }));
    it("BtcService.addAddress() function should be called when onAdd() and newAddress is not empty", function () {
        return testing_1.nsTestBedRender(addresses_component_1.AddressesComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            var service = componentRef.instance.btc;
            spyOn(service, "addAddress");
            componentRef.instance.newAddress = "test";
            componentRef.instance.onAdd();
            expect(service.addAddress).toHaveBeenCalled();
            //  componentRef.instance.newAddress = "";
            //  componentRef.instance.onAdd();
            //  expect(service.addAddress).toHaveBeenCalledTimes(1);
        });
    });
    it("getShortAddress should return short address", testing_2.async(function () {
        return testing_1.nsTestBedRender(addresses_component_1.AddressesComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            componentRef.instance.newAddress =
                "12345678901234567890123456789012345678901234567890";
            var shortAddress = componentRef.instance.getShortAddress("1234567890-10-1234567890-20-1234567890-30-1234567890-40-1234567890-50");
            expect(shortAddress).toContain("...");
            shortAddress = componentRef.instance.getShortAddress("");
            expect(shortAddress).toContain("...");
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkcmVzc2VzLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXNEO0FBQ3RELHdEQUtzQztBQUV0QyxpREFBOEM7QUFFOUMsc0RBQWdFO0FBQ2hFLGtFQUFnRTtBQUVoRSw2QkFBc0M7QUFFdEMsdUJBQWEsRUFBRSxDQUFDO0FBRWhCO0lBQUE7SUFTQSxDQUFDO0lBUkMsbUNBQVUsR0FBVixVQUFXLENBQVMsSUFBUyxDQUFDO0lBQzlCLHVDQUFjLEdBQWQ7UUFDRSxPQUFPLFNBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDRSxPQUFPLFNBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSx3Q0FBYztBQVczQixRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFDN0IsVUFBVSxDQUFDO1FBQ1QsNkJBQW1CLENBQ2pCLENBQUMsd0NBQWtCLENBQUMsRUFDcEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSx3QkFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FDMUQsQ0FBQztJQUVKLENBQUMsQ0FHQSxDQUFDO0lBQ0YsU0FBUyxDQUFDLDRCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFckMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLGVBQUssQ0FBQztRQUNqQyxPQUFPLHlCQUFlLENBQUMsd0NBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ3JELElBQU0sWUFBWSxHQUNoQixPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHSixFQUFFLENBQUMsd0RBQXdELEVBQUUsZUFBSyxDQUFDO1FBQ2pFLE9BQU8seUJBQWUsQ0FBQyx3Q0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDckQsSUFBTSxZQUFZLEdBQ2hCLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxlQUFLLENBQUM7UUFDakUsT0FBTyx5QkFBZSxDQUFDLHdDQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNyRCxJQUFNLFlBQVksR0FDaEIsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN2QixZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDMUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFckQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFOUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyw0RkFBNEYsRUFBRTtRQUMvRixPQUFPLHlCQUFlLENBQUMsd0NBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ3JELElBQU0sWUFBWSxHQUNoQixPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLElBQU0sT0FBTyxHQUFlLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3RELEtBQUssQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQzFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2hELDBDQUEwQztZQUMxQyxrQ0FBa0M7WUFDbEMsd0RBQXdEO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFJSCxFQUFFLENBQUMsNkNBQTZDLEVBQUUsZUFBSyxDQUFDO1FBQ3RELE9BQU8seUJBQWUsQ0FBQyx3Q0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDckQsSUFBTSxZQUFZLEdBQ2hCLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVO2dCQUM5QixvREFBb0QsQ0FBQztZQUN2RCxJQUFJLFlBQVksR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FDdEQsdUVBQXVFLENBQ3hFLENBQUM7WUFDRixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXRDLFlBQVksR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FDbEQsRUFBRSxDQUNILENBQUM7WUFDRixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvem9uZS1qcy90ZXN0aW5nLmphc21pbmVcIjtcclxuaW1wb3J0IHtcclxuICBuc1Rlc3RCZWRJbml0LFxyXG4gIG5zVGVzdEJlZEJlZm9yZUVhY2gsXHJcbiAgbnNUZXN0QmVkQWZ0ZXJFYWNoLFxyXG4gIG5zVGVzdEJlZFJlbmRlclxyXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci90ZXN0aW5nXCI7XHJcblxyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3Rlc3RpbmdcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQnRjU2VydmljZSwgQnRjQWRkcmVzcyB9IGZyb20gXCJ+L3NlcnZpY2VzL2J0Yy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZHJlc3Nlc0NvbXBvbmVudCB9IGZyb20gXCJ+L2hvbWUvYWRkcmVzc2VzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5uc1Rlc3RCZWRJbml0KCk7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFrZUJ0Y1NlcnZpY2Uge1xyXG4gIGFkZEFkZHJlc3MoYTogc3RyaW5nKTogdm9pZCB7fVxyXG4gIGdldFRvdGFsQW1vdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gb2YoKTtcclxuICB9XHJcblxyXG4gIGdldEFkZHJlc3NlcygpOiBPYnNlcnZhYmxlPEJ0Y0FkZHJlc3NbXT4ge1xyXG4gICAgcmV0dXJuIG9mKCk7XHJcbiAgfVxyXG59XHJcblxyXG5kZXNjcmliZShcIkFkZHJlc3Nlc0NvbXBvbmVudFwiLCAoKSA9PiB7XHJcbiAgYmVmb3JlRWFjaCgoKT0+e1xyXG4gICAgbnNUZXN0QmVkQmVmb3JlRWFjaChcclxuICAgICAgW0FkZHJlc3Nlc0NvbXBvbmVudF0sXHJcbiAgICAgIFt7IHByb3ZpZGU6IEJ0Y1NlcnZpY2UsIHVzZVZhbHVlOiBuZXcgRmFrZUJ0Y1NlcnZpY2UoKSB9XVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG4gICBcclxuXHJcbiAgKTtcclxuICBhZnRlckVhY2gobnNUZXN0QmVkQWZ0ZXJFYWNoKGZhbHNlKSk7XHJcblxyXG4gIGl0KFwiQ29tcG9uZW50IHNob3VsZCBleGlzdFwiLCBhc3luYygoKSA9PiB7XHJcbiAgICByZXR1cm4gbnNUZXN0QmVkUmVuZGVyKEFkZHJlc3Nlc0NvbXBvbmVudCkudGhlbihmaXh0dXJlID0+IHtcclxuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8QWRkcmVzc2VzQ29tcG9uZW50PiA9XHJcbiAgICAgICAgZml4dHVyZS5jb21wb25lbnRSZWY7XHJcbiAgICAgIGV4cGVjdChjb21wb25lbnRSZWYpLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuICB9KSk7XHJcblxyXG5cclxuICBpdChcInByb3BlcnR5IG5ld0FkZHJlc3Mgc2hvdWxkIGJlIGVtcHR5IGF0IGNvbXBvbmVudCBzdGFydFwiLCBhc3luYygoKSA9PiB7XHJcbiAgICByZXR1cm4gbnNUZXN0QmVkUmVuZGVyKEFkZHJlc3Nlc0NvbXBvbmVudCkudGhlbihmaXh0dXJlID0+IHtcclxuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8QWRkcmVzc2VzQ29tcG9uZW50PiA9XHJcbiAgICAgICAgZml4dHVyZS5jb21wb25lbnRSZWY7XHJcbiAgICAgIGV4cGVjdChjb21wb25lbnRSZWYuaW5zdGFuY2UubmV3QWRkcmVzcykudG9FcXVhbChcIlwiKTtcclxuICAgIH0pO1xyXG4gIH0pKTtcclxuXHJcbiAgaXQoXCJwcm9wZXJ0eSBuZXdBZGRyZXNzIHNob3VsZCBiZSBlbXB0eSBhZnRlciBvbkFkZCgpIGNhbGxcIiwgYXN5bmMoKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5zVGVzdEJlZFJlbmRlcihBZGRyZXNzZXNDb21wb25lbnQpLnRoZW4oZml4dHVyZSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEFkZHJlc3Nlc0NvbXBvbmVudD4gPVxyXG4gICAgICAgIGZpeHR1cmUuY29tcG9uZW50UmVmO1xyXG4gICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubmV3QWRkcmVzcyA9IFwidGVzdFwiO1xyXG4gICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Uub25BZGQoKTtcclxuICAgICAgZXhwZWN0KGNvbXBvbmVudFJlZi5pbnN0YW5jZS5uZXdBZGRyZXNzKS50b0VxdWFsKFwiXCIpO1xyXG5cclxuICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLm5ld0FkZHJlc3MgPSBcIlwiO1xyXG4gICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Uub25BZGQoKTtcclxuICAgICAgXHJcbiAgICAgIGV4cGVjdChjb21wb25lbnRSZWYuaW5zdGFuY2UubmV3QWRkcmVzcykudG9FcXVhbChcIlwiKTtcclxuICAgIH0pO1xyXG4gIH0pKTtcclxuXHJcbiAgaXQoXCJCdGNTZXJ2aWNlLmFkZEFkZHJlc3MoKSBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIHdoZW4gb25BZGQoKSBhbmQgbmV3QWRkcmVzcyBpcyBub3QgZW1wdHlcIiwgKCk9PntcclxuICAgIHJldHVybiBuc1Rlc3RCZWRSZW5kZXIoQWRkcmVzc2VzQ29tcG9uZW50KS50aGVuKGZpeHR1cmUgPT4ge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxBZGRyZXNzZXNDb21wb25lbnQ+ID1cclxuICAgICAgICBmaXh0dXJlLmNvbXBvbmVudFJlZjtcclxuICAgICAgY29uc3Qgc2VydmljZTogQnRjU2VydmljZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5idGM7ICBcclxuICAgICAgc3B5T24oc2VydmljZSxcImFkZEFkZHJlc3NcIik7XHJcbiAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5uZXdBZGRyZXNzID0gXCJ0ZXN0XCI7XHJcbiAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vbkFkZCgpO1xyXG4gICAgICBleHBlY3Qoc2VydmljZS5hZGRBZGRyZXNzKS50b0hhdmVCZWVuQ2FsbGVkKCk7XHJcbiAgICAvLyAgY29tcG9uZW50UmVmLmluc3RhbmNlLm5ld0FkZHJlc3MgPSBcIlwiO1xyXG4gICAgLy8gIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vbkFkZCgpO1xyXG4gICAgLy8gIGV4cGVjdChzZXJ2aWNlLmFkZEFkZHJlc3MpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gIGl0KFwiZ2V0U2hvcnRBZGRyZXNzIHNob3VsZCByZXR1cm4gc2hvcnQgYWRkcmVzc1wiLCBhc3luYygoKSA9PiB7XHJcbiAgICByZXR1cm4gbnNUZXN0QmVkUmVuZGVyKEFkZHJlc3Nlc0NvbXBvbmVudCkudGhlbihmaXh0dXJlID0+IHtcclxuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8QWRkcmVzc2VzQ29tcG9uZW50PiA9XHJcbiAgICAgICAgZml4dHVyZS5jb21wb25lbnRSZWY7XHJcbiAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5uZXdBZGRyZXNzID1cclxuICAgICAgICBcIjEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwXCI7XHJcbiAgICAgIGxldCBzaG9ydEFkZHJlc3MgPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0U2hvcnRBZGRyZXNzKFxyXG4gICAgICAgIFwiMTIzNDU2Nzg5MC0xMC0xMjM0NTY3ODkwLTIwLTEyMzQ1Njc4OTAtMzAtMTIzNDU2Nzg5MC00MC0xMjM0NTY3ODkwLTUwXCJcclxuICAgICAgKTtcclxuICAgICAgZXhwZWN0KHNob3J0QWRkcmVzcykudG9Db250YWluKFwiLi4uXCIpO1xyXG5cclxuICAgICAgc2hvcnRBZGRyZXNzID0gY29tcG9uZW50UmVmLmluc3RhbmNlLmdldFNob3J0QWRkcmVzcyhcclxuICAgICAgICBcIlwiXHJcbiAgICAgICk7XHJcbiAgICAgIGV4cGVjdChzaG9ydEFkZHJlc3MpLnRvQ29udGFpbihcIi4uLlwiKTtcclxuICAgIH0pO1xyXG4gIH0pKTtcclxufSk7XHJcbiJdfQ==