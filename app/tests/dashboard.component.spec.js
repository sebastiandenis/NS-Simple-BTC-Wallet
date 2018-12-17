"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("nativescript-angular/zone-js/testing.jasmine");
var testing_1 = require("nativescript-angular/testing");
var testing_2 = require("@angular/core/testing");
var btc_service_1 = require("~/services/btc.service");
var dashboard_component_1 = require("~/home/dashboard.component");
var utils_1 = require("./utils");
describe("DashboardComponent", function () {
    beforeEach(testing_1.nsTestBedBeforeEach([dashboard_component_1.DashboardComponent], [{ provide: btc_service_1.BtcService, useValue: new utils_1.FakeBtcService() }]));
    afterEach(testing_1.nsTestBedAfterEach(false));
    it("Component should exist", testing_2.async(function () {
        return testing_1.nsTestBedRender(dashboard_component_1.DashboardComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            expect(componentRef).toBeDefined();
        });
    }));
    it("properties should be defined at component start", testing_2.async(function () {
        return testing_1.nsTestBedRender(dashboard_component_1.DashboardComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            expect(componentRef.instance.totalAmount$).toBeDefined();
        });
    }));
    it("BtcService.recalculateTotal and getTotalAmount function should be called when ngOnInit() is called", function () {
        return testing_1.nsTestBedRender(dashboard_component_1.DashboardComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            var service = componentRef.instance.btc;
            spyOn(service, "recalculateTotal");
            spyOn(service, "getTotalAmount");
            componentRef.instance.ngOnInit();
            expect(service.recalculateTotal).toHaveBeenCalled();
            expect(service.getTotalAmount).toHaveBeenCalled();
        });
    });
    it("BtcService.refresh() should be called when onRefresh() was called", function () {
        return testing_1.nsTestBedRender(dashboard_component_1.DashboardComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            var service = componentRef.instance.btc;
            spyOn(service, "refresh");
            componentRef.instance.onRefresh();
            expect(service.refresh).toHaveBeenCalled();
        });
    });
    it("it should return proper value when getGaugeMax is called", function () {
        return testing_1.nsTestBedRender(dashboard_component_1.DashboardComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            var gMax = componentRef.instance.getGaugeMax(-100);
            expect(gMax).toEqual(1);
            gMax = componentRef.instance.getGaugeMax(-2.6);
            expect(gMax).toEqual(1);
            gMax = componentRef.instance.getGaugeMax(0);
            expect(gMax).toEqual(1);
            gMax = componentRef.instance.getGaugeMax(0.9);
            expect(gMax).toEqual(1);
            gMax = componentRef.instance.getGaugeMax(1);
            expect(gMax).toEqual(10);
            gMax = componentRef.instance.getGaugeMax(1.1);
            expect(gMax).toEqual(10);
            gMax = componentRef.instance.getGaugeMax(10);
            expect(gMax).toEqual(100);
            gMax = componentRef.instance.getGaugeMax(10.3);
            expect(gMax).toEqual(100);
            gMax = componentRef.instance.getGaugeMax(100);
            expect(gMax).toEqual(1000);
            gMax = componentRef.instance.getGaugeMax(100.09);
            expect(gMax).toEqual(1000);
            gMax = componentRef.instance.getGaugeMax(1000);
            expect(gMax).toEqual(100000);
            gMax = componentRef.instance.getGaugeMax(1000000000);
            expect(gMax).toEqual(100000);
            gMax = componentRef.instance.getGaugeMax(null);
            expect(gMax).toEqual(1);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaGJvYXJkLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXNEO0FBQ3RELHdEQUlzQztBQUV0QyxpREFBOEM7QUFFOUMsc0RBQW9EO0FBQ3BELGtFQUFnRTtBQUNoRSxpQ0FBeUM7QUFHekMsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzdCLFVBQVUsQ0FDUiw2QkFBbUIsQ0FDakIsQ0FBQyx3Q0FBa0IsQ0FBQyxFQUNwQixDQUFDLEVBQUUsT0FBTyxFQUFFLHdCQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksc0JBQWMsRUFBRSxFQUFFLENBQUMsQ0FDMUQsQ0FDRixDQUFDO0lBRUYsU0FBUyxDQUFDLDRCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFckMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLGVBQUssQ0FBQztRQUNqQyxPQUFPLHlCQUFlLENBQUMsd0NBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ3JELElBQU0sWUFBWSxHQUNoQixPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsaURBQWlELEVBQUUsZUFBSyxDQUFDO1FBQzFELE9BQU8seUJBQWUsQ0FBQyx3Q0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDckQsSUFBTSxZQUFZLEdBQ2hCLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFD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QUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUtMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvem9uZS1qcy90ZXN0aW5nLmphc21pbmVcIjtcclxuaW1wb3J0IHtcclxuICBuc1Rlc3RCZWRCZWZvcmVFYWNoLFxyXG4gIG5zVGVzdEJlZEFmdGVyRWFjaCxcclxuICBuc1Rlc3RCZWRSZW5kZXJcclxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvdGVzdGluZ1wiO1xyXG5cclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS90ZXN0aW5nXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJ0Y1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9idGMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwifi9ob21lL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmFrZUJ0Y1NlcnZpY2UgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuXHJcbmRlc2NyaWJlKFwiRGFzaGJvYXJkQ29tcG9uZW50XCIsICgpID0+IHtcclxuICBiZWZvcmVFYWNoKFxyXG4gICAgbnNUZXN0QmVkQmVmb3JlRWFjaChcclxuICAgICAgW0Rhc2hib2FyZENvbXBvbmVudF0sXHJcbiAgICAgIFt7IHByb3ZpZGU6IEJ0Y1NlcnZpY2UsIHVzZVZhbHVlOiBuZXcgRmFrZUJ0Y1NlcnZpY2UoKSB9XVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIGFmdGVyRWFjaChuc1Rlc3RCZWRBZnRlckVhY2goZmFsc2UpKTtcclxuXHJcbiAgaXQoXCJDb21wb25lbnQgc2hvdWxkIGV4aXN0XCIsIGFzeW5jKCgpID0+IHtcclxuICAgIHJldHVybiBuc1Rlc3RCZWRSZW5kZXIoRGFzaGJvYXJkQ29tcG9uZW50KS50aGVuKGZpeHR1cmUgPT4ge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxEYXNoYm9hcmRDb21wb25lbnQ+ID1cclxuICAgICAgICBmaXh0dXJlLmNvbXBvbmVudFJlZjtcclxuICAgICAgZXhwZWN0KGNvbXBvbmVudFJlZikudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG4gIH0pKTtcclxuXHJcbiAgaXQoXCJwcm9wZXJ0aWVzIHNob3VsZCBiZSBkZWZpbmVkIGF0IGNvbXBvbmVudCBzdGFydFwiLCBhc3luYygoKSA9PiB7XHJcbiAgICByZXR1cm4gbnNUZXN0QmVkUmVuZGVyKERhc2hib2FyZENvbXBvbmVudCkudGhlbihmaXh0dXJlID0+IHtcclxuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8RGFzaGJvYXJkQ29tcG9uZW50PiA9XHJcbiAgICAgICAgZml4dHVyZS5jb21wb25lbnRSZWY7XHJcbiAgICAgIGV4cGVjdChjb21wb25lbnRSZWYuaW5zdGFuY2UudG90YWxBbW91bnQkKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcbiAgfSkpO1xyXG5cclxuICBpdChcIkJ0Y1NlcnZpY2UucmVjYWxjdWxhdGVUb3RhbCBhbmQgZ2V0VG90YWxBbW91bnQgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCB3aGVuIG5nT25Jbml0KCkgaXMgY2FsbGVkXCIsICgpID0+IHtcclxuICAgIHJldHVybiBuc1Rlc3RCZWRSZW5kZXIoRGFzaGJvYXJkQ29tcG9uZW50KS50aGVuKGZpeHR1cmUgPT4ge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxEYXNoYm9hcmRDb21wb25lbnQ+ID1cclxuICAgICAgICBmaXh0dXJlLmNvbXBvbmVudFJlZjtcclxuICAgICAgY29uc3Qgc2VydmljZTogQnRjU2VydmljZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5idGM7XHJcbiAgICAgIHNweU9uKHNlcnZpY2UsIFwicmVjYWxjdWxhdGVUb3RhbFwiKTtcclxuICAgICAgc3B5T24oc2VydmljZSwgXCJnZXRUb3RhbEFtb3VudFwiKTtcclxuICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLm5nT25Jbml0KCk7XHJcbiAgICAgIGV4cGVjdChzZXJ2aWNlLnJlY2FsY3VsYXRlVG90YWwpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcclxuICAgICAgZXhwZWN0KHNlcnZpY2UuZ2V0VG90YWxBbW91bnQpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcclxuXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgaXQoXCJCdGNTZXJ2aWNlLnJlZnJlc2goKSBzaG91bGQgYmUgY2FsbGVkIHdoZW4gb25SZWZyZXNoKCkgd2FzIGNhbGxlZFwiLCAoKSA9PiB7XHJcbiAgICByZXR1cm4gbnNUZXN0QmVkUmVuZGVyKERhc2hib2FyZENvbXBvbmVudCkudGhlbihmaXh0dXJlID0+IHtcclxuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8RGFzaGJvYXJkQ29tcG9uZW50PiA9XHJcbiAgICAgICAgZml4dHVyZS5jb21wb25lbnRSZWY7XHJcbiAgICAgIGNvbnN0IHNlcnZpY2U6IEJ0Y1NlcnZpY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuYnRjO1xyXG4gICAgICBzcHlPbihzZXJ2aWNlLCBcInJlZnJlc2hcIik7XHJcbiAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vblJlZnJlc2goKTtcclxuICAgICAgZXhwZWN0KHNlcnZpY2UucmVmcmVzaCkudG9IYXZlQmVlbkNhbGxlZCgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGl0KFwiaXQgc2hvdWxkIHJldHVybiBwcm9wZXIgdmFsdWUgd2hlbiBnZXRHYXVnZU1heCBpcyBjYWxsZWRcIiwgKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5zVGVzdEJlZFJlbmRlcihEYXNoYm9hcmRDb21wb25lbnQpLnRoZW4oZml4dHVyZSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPERhc2hib2FyZENvbXBvbmVudD4gPVxyXG4gICAgICAgIGZpeHR1cmUuY29tcG9uZW50UmVmO1xyXG4gICAgICBsZXQgZ01heCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5nZXRHYXVnZU1heCgtMTAwKTtcclxuICAgICAgZXhwZWN0KGdNYXgpLnRvRXF1YWwoMSk7XHJcbiAgICAgIGdNYXggPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0R2F1Z2VNYXgoLTIuNik7XHJcbiAgICAgIGV4cGVjdChnTWF4KS50b0VxdWFsKDEpO1xyXG4gICAgICBnTWF4ID0gY29tcG9uZW50UmVmLmluc3RhbmNlLmdldEdhdWdlTWF4KDApO1xyXG4gICAgICBleHBlY3QoZ01heCkudG9FcXVhbCgxKTtcclxuICAgICAgZ01heCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5nZXRHYXVnZU1heCgwLjkpO1xyXG4gICAgICBleHBlY3QoZ01heCkudG9FcXVhbCgxKTtcclxuICAgICAgZ01heCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5nZXRHYXVnZU1heCgxKTtcclxuICAgICAgZXhwZWN0KGdNYXgpLnRvRXF1YWwoMTApO1xyXG4gICAgICBnTWF4ID0gY29tcG9uZW50UmVmLmluc3RhbmNlLmdldEdhdWdlTWF4KDEuMSk7XHJcbiAgICAgIGV4cGVjdChnTWF4KS50b0VxdWFsKDEwKTtcclxuICAgICAgZ01heCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5nZXRHYXVnZU1heCgxMCk7XHJcbiAgICAgIGV4cGVjdChnTWF4KS50b0VxdWFsKDEwMCk7XHJcbiAgICAgIGdNYXggPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0R2F1Z2VNYXgoMTAuMyk7XHJcbiAgICAgIGV4cGVjdChnTWF4KS50b0VxdWFsKDEwMCk7XHJcbiAgICAgIGdNYXggPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0R2F1Z2VNYXgoMTAwKTtcclxuICAgICAgZXhwZWN0KGdNYXgpLnRvRXF1YWwoMTAwMCk7XHJcbiAgICAgIGdNYXggPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0R2F1Z2VNYXgoMTAwLjA5KTtcclxuICAgICAgZXhwZWN0KGdNYXgpLnRvRXF1YWwoMTAwMCk7XHJcbiAgICAgIGdNYXggPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0R2F1Z2VNYXgoMTAwMCk7XHJcbiAgICAgIGV4cGVjdChnTWF4KS50b0VxdWFsKDEwMDAwMCk7XHJcbiAgICAgIGdNYXggPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0R2F1Z2VNYXgoMTAwMDAwMDAwMCk7XHJcbiAgICAgIGV4cGVjdChnTWF4KS50b0VxdWFsKDEwMDAwMCk7XHJcbiAgICAgIGdNYXggPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0R2F1Z2VNYXgobnVsbCk7XHJcbiAgICAgIGV4cGVjdChnTWF4KS50b0VxdWFsKDEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiBcclxufSk7XHJcbiJdfQ==