/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { NavigationEnd,NavigationExtras ,ActivatedRoute} from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { MyregisterPostService } from "./confirmation.service";
import * as platformModule from "tns-core-modules/platform";
@Component({
    selector: "Confirmation",
    moduleId: module.id,
    templateUrl: "./confirmation.component.html",
    providers: [MyregisterPostService]
})
export class ConfirmationComponent implements OnInit {
    
    
    data: DataService;
    transactions = []
    expensesChartDataEn = [];
    expensesChartDataEs = [];

    public currentLanguage = 'en';


    constructor(private translate: TranslateService,public router: RouterExtensions,public acRoute:ActivatedRoute,private myPostService: MyregisterPostService) {
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
    public number=""
    public cc="";
    public input="";
    public verifyText="Please Verify the number +"
    ngOnInit(): void {
        
        this.acRoute.queryParams.subscribe(params => {

          
            if(params["number"]){
            this.verifyText=this.verifyText+String(params["cc"])+String(params["number"])
                this.number=params['number']
                this.cc=params['cc']
          }
          
        })
        
    }
    onTap(e){
        let cc=String(this.cc)
          let pn=String(this.number)
          let udid=platformModule.device.uuid
          //900C6D4737B9F7D5
          
                let data="udid="+udid+"&cc="+cc+"&os=IOS&app_id=1&pn="+pn+"&code="+String(this.input)
            console.log(data)
            this.myPostService
            
            .postData(data)
            .subscribe(res => {
              //  this.message = (<any>res).json.data.username;
              console.log(res)
              let code=(<any>res).code
              if(code==202 || code==201){
              let data=(<any>res).data.code
              /*this.router.navigate(['confirmation'], {
            
                  transition: {
                    name: "fade"
                  },
                  queryParams: {
                    number:String(this.number),
                    cc:String(this.countryCode)
                    
                    
                    
                },
                  clearHistory: true
                }
              );*/
              alert(data)
              }
              else
              {
                alert("error: "+code+ " "+(<any>res).error)
              }
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
