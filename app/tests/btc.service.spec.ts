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

let service: BtcService;
let httpMock: HttpTestingController;

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
});
