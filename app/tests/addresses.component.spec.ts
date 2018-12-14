import "nativescript-angular/zone-js/testing.jasmine";
import {
  nsTestBedInit,
  nsTestBedBeforeEach,
  nsTestBedAfterEach,
  nsTestBedRender
} from "nativescript-angular/testing";

import { async } from "@angular/core/testing";
import { ComponentRef } from "@angular/core";
import { BtcService, BtcAddress } from "~/services/btc.service";
import { AddressesComponent } from "~/home/addresses.component";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { of, Observable } from "rxjs";

nsTestBedInit();

export class FakeBtcService {
  addAddress(a: string): void {}
  getTotalAmount(): Observable<number> {
    return of();
  }

  getAddresses(): Observable<BtcAddress[]> {
    return of();
  }
}

describe("AddressesComponent", () => {
  beforeEach(
    nsTestBedBeforeEach(
      [AddressesComponent],
      [{ provide: BtcService, useValue: new FakeBtcService() }]
    )
  );
  afterEach(nsTestBedAfterEach(false));

  it("Component should exist", async(() => {
    return nsTestBedRender(AddressesComponent).then(fixture => {
      const componentRef: ComponentRef<AddressesComponent> =
        fixture.componentRef;
      expect(componentRef).toBeDefined();
    });
  }));


  it("property newAddress should be empty at component start", async(() => {
    return nsTestBedRender(AddressesComponent).then(fixture => {
      const componentRef: ComponentRef<AddressesComponent> =
        fixture.componentRef;
      expect(componentRef.instance.newAddress).toEqual("");
    });
  }));

  it("property newAddress should be empty after onAdd() call", async(() => {
    return nsTestBedRender(AddressesComponent).then(fixture => {
      const componentRef: ComponentRef<AddressesComponent> =
        fixture.componentRef;
      componentRef.instance.newAddress = "test";
      componentRef.instance.onAdd();
      expect(componentRef.instance.newAddress).toEqual("");

      componentRef.instance.newAddress = "";
      componentRef.instance.onAdd();
      expect(componentRef.instance.newAddress).toEqual("");
    });
  }));



  it("getShortAddress should return short address", async(() => {
    return nsTestBedRender(AddressesComponent).then(fixture => {
      const componentRef: ComponentRef<AddressesComponent> =
        fixture.componentRef;
      componentRef.instance.newAddress =
        "12345678901234567890123456789012345678901234567890";
      let shortAddress = componentRef.instance.getShortAddress(
        "1234567890-10-1234567890-20-1234567890-30-1234567890-40-1234567890-50"
      );
      expect(shortAddress).toContain("...");

      shortAddress = componentRef.instance.getShortAddress(
        ""
      );
      expect(shortAddress).toContain("...");
    });
  }));
});
