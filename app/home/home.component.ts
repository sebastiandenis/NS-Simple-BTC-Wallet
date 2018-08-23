import { Component, OnInit } from "@angular/core";
import { BtcService } from "../services/btc.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private btc: BtcService) {
    }

    ngOnInit(): void {
        this.btc.load();
    }
}
