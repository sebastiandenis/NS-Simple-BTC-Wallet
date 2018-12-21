import { BtcService, BtcAddress } from "~/services/btc.service";
import {
  nsTestBedBeforeEach,
  nsTestBedAfterEach
} from "nativescript-angular/testing";
import { async, TestBed, tick, fakeAsync } from "@angular/core/testing";
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

const btcAddress3: BtcAddress = {
  balance: 1,
  address: "testowyadres3"
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

  it("should add the same address to the not empty list", async(() => {
    spyOn(service, "updateBalance");
    spyOn(service, "save");
    service.addAddress(btcAddress);
    service.addAddress(btcAddress);
    service.getAddresses().subscribe((a: BtcAddress[]) => {
      expect(a.length).toEqual(2);
      expect(a[0].address).toEqual(btcAddress.address);
      expect(a[0].balance).toEqual(btcAddress.balance);
      expect(a[1].address).toEqual(btcAddress.address);
      expect(a[1].balance).toEqual(btcAddress.balance);
    });
    expect(service.updateBalance).toHaveBeenCalled();
    expect(service.save).toHaveBeenCalled();
  }));

  it("should remove address from the list when there is one elementy only", async(() => {
    spyOn(service, "recalculateTotal");
    spyOn(service, "updateBalance");
    spyOn(service, "save");
    service.addAddress(btcAddress);
    service.removeAddress(btcAddress);
    service.getAddresses().subscribe((a: BtcAddress[]) => {
      expect(a.length).toEqual(0);
    });
    expect(service.recalculateTotal).toHaveBeenCalled();
    expect(service.save).toHaveBeenCalled();
    expect(service.updateBalance).toHaveBeenCalled();
  }));

  it("should remove address from the list when there is more than one elementy", async(() => {
    spyOn(service, "recalculateTotal");
    spyOn(service, "updateBalance");
    spyOn(service, "save");
    service.addAddress(btcAddress);
    service.addAddress(btcAddress2);
    service.removeAddress(btcAddress);
    service.getAddresses().subscribe((a: BtcAddress[]) => {
      expect(a.length).toEqual(1);
      expect(a[0].address).toEqual(btcAddress2.address);
      expect(a[0].balance).toEqual(btcAddress2.balance);
    });
    expect(service.recalculateTotal).toHaveBeenCalled();
    expect(service.save).toHaveBeenCalled();
    expect(service.updateBalance).toHaveBeenCalled();
  }));

  it("should recalculate total amount when new address has been added", async(() => {
    spyOn(service, "updateBalance");
    spyOn(service, "save");
    service.addAddress(btcAddress2);
    service.addAddress(btcAddress3);
    service.recalculateTotal();
    service.getTotalAmount().subscribe((total: number) => {
      expect(total).toEqual(btcAddress2.balance+btcAddress3.balance);
    });
    expect(service.save).toHaveBeenCalled();
    expect(service.updateBalance).toHaveBeenCalled();
  }));

  it("should save to  localStorage", () => {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    expect(localStorage.getItem(LOCALSTORAGE_KEY)).toBeNull();

    spyOn(service,"updateBalance");
    spyOn(service,"save").and.callThrough();

    service.addAddress(btcAddress2);
    service.addAddress(btcAddress3);
    expect(service.save).toHaveBeenCalledTimes(2);

    let s = localStorage.getItem(LOCALSTORAGE_KEY);
    expect(s).toBeDefined();
    expect(s).toEqual(btcAddress2.address+","+btcAddress3.address);

    service.addAddress(btcAddress);
    s = localStorage.getItem(LOCALSTORAGE_KEY);
    expect(s).toEqual(btcAddress2.address+","+btcAddress3.address+","+btcAddress.address);

  });

  it("should load from localStorage", async(()=>{
    localStorage.removeItem(LOCALSTORAGE_KEY);
    expect(localStorage.getItem(LOCALSTORAGE_KEY)).toBeNull();

    spyOn(service,"updateBalance");
    spyOn(service, "save").and.callThrough();

    localStorage.setItem(LOCALSTORAGE_KEY,btcAddress2.address+","+btcAddress3.address);

    service.load();

    service.getAddresses().subscribe((a: Array<BtcAddress>)=>{
      expect(a).toBeDefined();
      expect(a.length).toEqual(2);
      expect(a[0].address).toEqual(btcAddress2.address);
      expect(a[1].address).toEqual(btcAddress3.address);
      expect(a[0].balance).toEqual(0); // zero when loaded from localStorage
      expect(a[1].balance).toEqual(0);
    });

  }));

  it("should refresh all addresses", async(()=>{
    spyOn(service, "recalculateTotal");
    spyOn(service, "updateBalance");
    spyOn(service, "save");

    // lets add couple addresses
    service.addAddress(btcAddress2);
    service.addAddress(btcAddress3);

    service.refresh();
    expect(service.recalculateTotal).toHaveBeenCalled();

    service.getAddresses().subscribe((a: Array<BtcAddress>)=>{
      expect(a).toBeDefined();
      expect(a.length).toEqual(2);
      expect(a[0].address).toEqual(btcAddress2.address);
      expect(a[1].address).toEqual(btcAddress3.address);
      expect(a[0].balance).toEqual(btcAddress2.balance); 
      expect(a[1].balance).toEqual(btcAddress3.balance);
    });
  }));

  it("should update the balance", async(()=>{
    let testBtcAddress = {
      balance: 0,
      address: "testBtcAddress"
    };
    service.updateBalance(testBtcAddress);
    const req = httpMock.expectOne(service.URL+testBtcAddress.address);
    expect(req.request.method).toEqual('GET');

    req.flush("100000000"); // 1 BTC = 100 000 000 Satoshi

    expect(testBtcAddress.balance).toEqual(1);
    expect(testBtcAddress.address).toEqual("testBtcAddress");
  }));
});
