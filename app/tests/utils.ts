import { Observable, of } from "rxjs";
import { BtcAddress } from "~/services/btc.service";

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
