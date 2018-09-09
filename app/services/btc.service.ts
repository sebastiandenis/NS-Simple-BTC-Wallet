import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface BtcAddress {
    balance: number;
    address: string;
}

@Injectable()
export class BtcService {

    private totalAmount$ = new BehaviorSubject<number>(0);
    private addresses$ = new BehaviorSubject<BtcAddress[]>([]);

    constructor(private http: HttpClient){}

    getTotalAmount(): Observable<number> {
        return this.totalAmount$.asObservable();
    }

    getAddresses(): Observable<BtcAddress[]> {
        return this.addresses$.asObservable();
    }

    addAddress(a: BtcAddress): void {
        this.addresses$.getValue().push(a);
        this.updateBalance(a);
        this.save();

    }

    removeAddress(a: BtcAddress): void {
        this.addresses$.next(
            this.addresses$.getValue().filter((item: BtcAddress) => item.address !== a.address)
        );
        this.recalculateTotal();
        this.save();
    }

    updateBalance(a: BtcAddress): void {
        this.http.get('https://blockchain.info/q/addressbalance/' + a.address, { responseType: 'text' })
            .subscribe((resp: string) => {
                a.balance = parseInt(resp) / 100000000; //1 BTC = 100 000 000 Satoshi
                this.recalculateTotal();
        })
    }

    recalculateTotal(): void {
        this.totalAmount$.next(
            this.addresses$.getValue()
                .map((item: BtcAddress) => item.balance)
                .reduce((a, b) => a + b, 0)
        );
    }

    save(): void {
        localStorage.setItem('btc', this.addresses$.getValue().map(item => item.address).toString());
    }

    refresh(): void {
        this.totalAmount$.next(0);
        const temp = this.addresses$.getValue().slice();
        this.addresses$.next([]);
        temp.forEach((item: BtcAddress) => {
            this.addAddress(item);
        });
        this.addresses$.next(temp);
        this.recalculateTotal();
    }

    load(): void {
        let a = localStorage.getItem('btc');
        if (a && a.length > 0) {
            let array = a.split(",");
            array.forEach((item: string) => {
                this.addAddress({
                    balance: 0,
                    address: item
                });
            });
        }
    }

}