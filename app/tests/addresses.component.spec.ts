import "nativescript-angular/zone-js/testing.jasmine";
import {
  nsTestBedInit,
  nsTestBedBeforeEach,
  nsTestBedAfterEach,
  nsTestBedRender
} from "nativescript-angular/testing";

import { async } from "@angular/core/testing";
import { ComponentRef } from "@angular/core";
import { BtcService } from "~/services/btc.service";
import { AddressesComponent } from "~/home/addresses.component";
import { HttpClient, HttpHandler } from "@angular/common/http";
nsTestBedInit();

describe("AddressesComponent", () => {
  beforeEach(nsTestBedBeforeEach([AddressesComponent], [BtcService, HttpClient, HttpHandler]));
  afterEach(nsTestBedAfterEach(false));

  it('Component should exist', async(() => {
    return nsTestBedRender(AddressesComponent).then((fixture) => {
      const componentRef: ComponentRef<AddressesComponent> = fixture.componentRef;
      expect(componentRef).toBeUndefined();
     
    });
  }));
});