import { BtcService, BtcAddress } from "~/services/btc.service";
import {
  nsTestBedBeforeEach,
  nsTestBedAfterEach
} from "nativescript-angular/testing";
import { async, TestBed } from "@angular/core/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ApplicationInitStatus } from "@angular/core";
import { FakeLocalStorage } from "./utils";

require("../nativescript-localstorage");

localStorage = new FakeLocalStorage();

let service: BtcService;
let httpMock: HttpTestingController;

const btcAddress: BtcAddress = {
  balance: 0,
  address: "testowyadres"
};

const btcAddress2: BtcAddress = {
  balance: 0.48,
  address: "testowyadres2"
};

const LOCALSTORAGE_KEY = "btc";

describe("BtcService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BtcService, ApplicationInitStatus]
    });

    service = TestBed.get(BtcService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    service = null;
    httpMock = null;
  });

  // afterEach(nsTestBedAfterEach(false));

  it("Service should be created", () => {
    expect(service).toBeDefined();
  });

  it("should initialize totalAmount$ with 0", async(() => {
    service.getTotalAmount().subscribe((total: number) => {
      expect(total).toEqual(0);
    });
  }));

  it("should initialize addresses$ with empty array", async(() => {
    service.getAddresses().subscribe((a: BtcAddress[]) => {
      expect(a).toBeDefined();
      expect(a.length).toEqual(0);
    });
  }));

  it("should add new address to the list", async(() => {
    spyOn(service, "updateBalance");
    spyOn(service, "save");
    service.addAddress(btcAddress);
    service.getAddresses().subscribe((a: BtcAddress[]) => {
      expect(a.length).toEqual(1);
      expect(a[0].address).toEqual(btcAddress.address);
      expect(a[0].balance).toEqual(0);
    });
    expect(service.updateBalance).toHaveBeenCalled();
    expect(service.save).toHaveBeenCalled();
  }));

  it("should add another address to the not empty list", async(() => {
    spyOn(service, "updateBalance");
    spyOn(service, "save");
    service.addAddress(btcAddress);
    service.addAddress(btcAddress2);
    service.getAddresses().subscribe((a: BtcAddress[]) => {
      expect(a.length).toEqual(2);
      expect(a[0].address).toEqual(btcAddress.address);
      expect(a[0].balance).toEqual(btcAddress.balance);
      expect(a[1].address).toEqual(btcAddress2.address);
      expect(a[1].balance).toEqual(btcAddress2.balance);
    });
    expect(service.updateBalance).toHaveBeenCalled();
    expect(service.save).toHaveBeenCalled();
  }));

  it("should add new address to the localStorage", async(() => {
    spyOn(service, "updateBalance");
    service.addAddress(btcAddress);
    service.getAddresses().subscribe((a: BtcAddress[]) => {
      const addedAddress: string = localStorage.getItem(LOCALSTORAGE_KEY);
      expect(addedAddress).toEqual("testowyadres");
    });
  }));

  it("should remove address from the list", async(() => {}));
});
