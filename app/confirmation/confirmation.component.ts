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

import { SecureStorage } from "nativescript-secure-storage";
import * as platformModule from "tns-core-modules/platform";
import * as appSettings from "tns-core-modules/application-settings";
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
    public index: number;
    public number:string
    public countryCode:string
    public currentLanguage = 'en';


    constructor(private translate: TranslateService, private routerExtensions: RouterExtensions,
      public acRoute:ActivatedRoute,private myPostService: MyregisterPostService) {
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
   // public number=""
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
              if(code==204){
                let data=(<any>res).data
                appSettings.setString("sip_user", data.user);
                appSettings.setString("password", data.password);
                appSettings.setString("sip_proxy", data.proxy);
                appSettings.setString("sip_transport", data.user);
                appSettings.setString("sip_port", data.user);
                appSettings.setString("udid", udid);
                this.routerExtensions.navigate(['home'], {
                      
                  transition: {
                    name: "fade"
                  },
                  queryParams: {
                    number:String(this.number),
                    cc:String(this.countryCode)
                    
                    
                    
                },
                  clearHistory: true
                } 
              )
                
                
              }
              else
              {
                alert("error: "+code+ " "+(<any>res).error)
              }
            });
          
    }
    
}
