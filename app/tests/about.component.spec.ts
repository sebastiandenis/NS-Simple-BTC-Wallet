import "nativescript-angular/zone-js/testing.jasmine";
import {
  nsTestBedBeforeEach,
  nsTestBedAfterEach,
  nsTestBedRender
} from "nativescript-angular/testing";

import { async } from "@angular/core/testing";
import { ComponentRef } from "@angular/core";
import { AboutComponent } from "~/home/about.component";

// nsTestBedInit();

describe("AboutComponent", () => {
  beforeEach(nsTestBedBeforeEach([AboutComponent]));

  afterEach(nsTestBedAfterEach(false));

  it("Component should exist", async(() => {
    return nsTestBedRender(AboutComponent).then(fixture => {
      const componentRef: ComponentRef<AboutComponent> = fixture.componentRef;
      expect(componentRef).toBeDefined();
    });
  }));

  it("animationTrigger should be false at component start", async(() => {
    return nsTestBedRender(AboutComponent).then(fixture => {
      const componentRef: ComponentRef<AboutComponent> = fixture.componentRef;
      let animationTrigger = componentRef.instance.animationTrigger;
      expect(animationTrigger).toBeFalsy();
    });
  }));

  it("animationTrigger should change when onButtonTap was called", async(() => {
    return nsTestBedRender(AboutComponent).then(fixture => {
      const componentRef: ComponentRef<AboutComponent> = fixture.componentRef;
      componentRef.instance.onButtonTap();
      expect(componentRef.instance.animationTrigger).toBeTruthy();
      componentRef.instance.onButtonTap();
      expect(componentRef.instance.animationTrigger).toBeFalsy();
    });
  }));
});
