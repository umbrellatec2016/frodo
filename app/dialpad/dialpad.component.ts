/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';

@Component({
    selector: "Dialpad",
    moduleId: module.id,
    templateUrl: "./dialpad.component.html"
})
export class DialpadComponent implements OnInit {
    expensesCategories = [
        {
            color: 'red',
            label: 'Home'
        },
        {
            color: 'blue',
            label: 'Auto & Transport'
        },
        {
            color: 'green',
            label: 'Cellular'
        },
        {
            color: 'orange',
            label: 'Hotel & Restaurant'
        }
    ]

    data: DataService;
    transactions = []
    expensesChartDataEn = [];
    expensesChartDataEs = [];

    public currentLanguage = 'en';


    constructor(private translate: TranslateService) {
        this.data = new DataService()

        this.transactions = this.data.getTransactions()

        this.expensesChartDataEn = [
            { name: "Home", ammount: 90 },
            { name: "Auto & Transport", ammount: 76 },
            { name: "Communication", ammount: 60 },
            { name: "Hotel", ammount: 44 }
        ]

        this.expensesChartDataEs = [
            { name: "Hogar", ammount: 20 },
            { name: "Transporte", ammount: 76 },
            { name: "Comunicación", ammount: 60 },
            { name: "Hotel", ammount: 44 }
        ]

        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLanguage = event.lang;
        });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
