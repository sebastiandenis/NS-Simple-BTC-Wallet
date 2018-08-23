import { ItemEventData } from "ui/list-view"
import { Component, OnInit } from "@angular/core";
import { BtcService, BtcAddress } from "../services/btc.service";
import { Observable } from "rxjs";

@Component({
	selector: "Addresses",
	moduleId: module.id,
	templateUrl: "./addresses.component.html",
	styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
   

    
 
	newAddress: string = "";
	totalAmount$: Observable<number>;
	addresses$: Observable<BtcAddress[]>;


	constructor(private btc: BtcService) {
	}

	ngOnInit(): void {
		this.totalAmount$ = this.btc.getTotalAmount();
		this.addresses$ = this.btc.getAddresses();
	}

	onAdd(): void {
		this.btc.addAddress({
			balance: 0,
			address: this.newAddress
		});
		this.newAddress = '';
    }

    onDel(a: BtcAddress): void {
		this.btc.removeAddress(a);
	}

	getShortAddress(a: string): string {
		return a.substr(0, 10) + "..." + a.substr(20);
	}

}