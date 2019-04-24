/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";

@Component({
	selector: "Cards",
	moduleId: module.id,
	templateUrl: "./cards.component.html"
})
export class CardsComponent implements OnInit {
	data: DataService;
	transactions = []

	constructor() {
		this.data = new DataService()

		this.transactions = this.data.getTransactions()
	}

	ngOnInit(): void {
		// Init your component properties here.
	}
}
