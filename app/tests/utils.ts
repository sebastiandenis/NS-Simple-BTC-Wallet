import { Observable, of } from "rxjs";
import { BtcAddress } from "~/services/btc.service";
require("../nativescript-localstorage");

export class FakeBtcService {
  addAddress(a: string): void {}
  getTotalAmount(): Observable<number> {
    return of();
  }

  getAddresses(): Observable<BtcAddress[]> {
    return of();
  }

  removeAddress(): void {};

  recalculateTotal(): void {};

  refresh(): void {};
}

export class FakeLocalStorage extends Storage {
  storage = {};
  constructor(){
    super();
  };
  setItem(key: string, value: any): void {
    this.storage[key]= value || "";
  }

  getItem(key: string): any {
    return key in this.storage ? this.storage[key] : null;
  }

  removeItem(key: string): void {
    delete this.storage[key];
  }

  get length() {
    return Object.keys(this.storage).length;
  }

  key(i: any) {
    const keys = Object.keys(this.storage);
    return keys[i] || null;
  }


}
