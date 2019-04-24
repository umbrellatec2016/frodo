/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { NavigationEnd,NavigationExtras } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: "Country",
    moduleId: module.id,
    templateUrl: "./country.component.html"
})
export class CountryComponent implements OnInit {
    
    
    data: DataService;
    transactions = []
    expensesChartDataEn = [];
    expensesChartDataEs = [];

    public currentLanguage = 'en';


    constructor(private translate: TranslateService,public router: RouterExtensions) {
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
    public country:any[]=[]
    ngOnInit(): void {
        
        // Init your component properties here.
        getJSON("https://restcountries.eu/rest/v2/all").then((r: any) => {
            this.country=r
           }, (e) => {
           });
    }
    selectCn(value){
        let navigationExtras:  NavigationExtras
      //  console.log(Object.keys(value.callingCodes));
        let xs=String(value.callingCodes[0])
        let xa=String(value.name)
       // console.log(xs)
         navigationExtras={
             queryParams: {
                 code:xs,
                 name:xa
                 
                 
             }
         }
        
      // console.log(navigationExtras)
        this.router.navigate(["/provisioning"], navigationExtras)
        //console.log(value.callingCodes+ " values")
    }
}
