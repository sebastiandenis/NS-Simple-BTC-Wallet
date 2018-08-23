import { Component, OnInit } from "@angular/core";

@Component({
	selector: "About",
	moduleId: module.id,
	templateUrl: "./about.component.html",
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    
	animationTrigger = false;

	constructor() {
	}

	ngOnInit(): void {
	}

	onButtonTap(): void {
		this.animationTrigger = !this.animationTrigger;
	}
}