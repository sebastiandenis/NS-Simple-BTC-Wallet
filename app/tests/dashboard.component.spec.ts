import "nativescript-angular/zone-js/testing.jasmine";
import {
  nsTestBedBeforeEach,
  nsTestBedAfterEach,
  nsTestBedRender
} from "nativescript-angular/testing";

import { async } from "@angular/core/testing";
import { ComponentRef } from "@angular/core";
import { BtcService } from "~/services/btc.service";
import { DashboardComponent } from "~/home/dashboard.component";
import { FakeBtcService } from "./utils";


describe("DashboardComponent", () => {
  beforeEach(
    nsTestBedBeforeEach(
      [DashboardComponent],
      [{ provide: BtcService, useValue: new FakeBtcService() }]
    )
  );

  afterEach(nsTestBedAfterEach(false));

  it("Component should exist", async(() => {
    return nsTestBedRender(DashboardComponent).then(fixture => {
      const componentRef: ComponentRef<DashboardComponent> =
        fixture.componentRef;
      expect(componentRef).toBeDefined();
    });
  }));

  it("properties should be defined at component start", async(() => {
    return nsTestBedRender(DashboardComponent).then(fixture => {
      const componentRef: ComponentRef<DashboardComponent> =
        fixture.componentRef;
      expect(componentRef.instance.totalAmount$).toBeDefined();
    });
  }));

  it("BtcService.recalculateTotal and getTotalAmount function should be called when ngOnInit() is called", () => {
    return nsTestBedRender(DashboardComponent).then(fixture => {
      const componentRef: ComponentRef<DashboardComponent> =
        fixture.componentRef;
      const service: BtcService = componentRef.instance.btc;
      spyOn(service, "recalculateTotal");
      spyOn(service, "getTotalAmount");
      componentRef.instance.ngOnInit();
      expect(service.recalculateTotal).toHaveBeenCalled();
      expect(service.getTotalAmount).toHaveBeenCalled();

    });
  });




  it("BtcService.refresh() should be called when onRefresh() was called", () => {
    return nsTestBedRender(DashboardComponent).then(fixture => {
      const componentRef: ComponentRef<DashboardComponent> =
        fixture.componentRef;
      const service: BtcService = componentRef.instance.btc;
      spyOn(service, "refresh");
      componentRef.instance.onRefresh();
      expect(service.refresh).toHaveBeenCalled();
    });
  });

  it("it should return proper value when getGaugeMax is called", () => {
    return nsTestBedRender(DashboardComponent).then(fixture => {
      const componentRef: ComponentRef<DashboardComponent> =
        fixture.componentRef;
      let gMax = componentRef.instance.getGaugeMax(-100);
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
