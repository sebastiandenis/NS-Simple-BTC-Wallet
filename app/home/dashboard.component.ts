import { Component, OnInit } from "@angular/core";
import { BtcService } from "../services/btc.service";
import { Observable } from "rxjs";

@Component({
	selector: "Dashboard",
	moduleId: module.id,
	templateUrl: "./dashboard.component.html",
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


	totalAmount$: Observable<number>;

	constructor(private btc: BtcService) {

	}

	ngOnInit(): void {
		this.totalAmount$ = this.btc.getTotalAmount();
		this.btc.recalculateTotal();
	}

	getGaugeMax(amount: number): number {
		if (amount < 1) {
			return 1;
		} else if (amount < 10) {
			return 10;
		} else if (amount < 100) {
			return 100;
		} else if (amount < 1000) {
			return 1000;
		} else {
			return 100000;
		}
	}
}