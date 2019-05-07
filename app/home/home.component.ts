/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';

import { listenToElementOutputs } from "@angular/core/src/view/element";
import { screen, ScreenMetrics } from "tns-core-modules/platform";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout"
import { Button } from "tns-core-modules/ui/button";
import * as connectivity from "tns-core-modules/connectivity";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as permissions from "nativescript-permissions";
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { prompt, PromptResult, PromptOptions, inputType, capitalizationType } from "tns-core-modules/ui/dialogs";
//import {Contacts} from "nativescript-contacts-lite"

declare var android: any;
declare var tt;
//var Contacts = require("nativescript-contacts-lite");
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    

    public currentLanguage = 'en';
  
    public cnts:any[] = [];
    public letter="C" 
      public country:any[]=[]
    private id = setInterval(() => {
        this.internetCheck()
    }, 2000);
    constructor(private translate: TranslateService, ) {
        
        let Contacts = require("nativescript-contacts-lite");
       Contacts.getContacts(['display_name', 'phone','thumbnail'])
       .then(res=>{
           //console.log(res)
           
           for(let x=0; x <res.length;x++){
               //console.log(res[x].thumbnail)
               let number=' '
               for(let xx=0;xx<res[x].phone.length;xx++){ 
                   number=res[x].phone[xx].number
               }
               this.cnts.push({user:res[x].display_name,
                  element:number,
                 thumbnail:res.thumbnail
              })
           }
          
              //element => {
             // console.log(element)
             //this.cnts.push({user:element.display_name,
              //  element:number,
            //    thumbnail:res.thumbnail
            //})
       //   });
        //console.log(res.phone.length)
            
           //console.log(vals)
        
        //console.log(this.cnts)
       })

        var list: any[] = [];
      
        //this.cnts.push(list)
        // this.cnts=list;
       
       // console.log("abc "+this.cnts)
       

        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLanguage = event.lang;
        });
    }
    //public contacts = require("nativescript-contacts")
  
    //public countries: Array<Country>;
    testWidth = 0;
    public heights=0;
    getSize(args) {
        setTimeout(() => {
            let stack= <StackLayout>args.object;
            var stackSize = args.object.getActualSize();
            var stackWidth = stackSize.width;
            var stackHeight = stackSize.height;
            this.heights+=stackHeight
            console.log("stackWidth: " + stackWidth);
            console.log("stackHeight: " + stackHeight);
            this.testWidth = stackWidth;
        }, 200);
    }
    public screenScale = screen.mainScreen.heightDIPs
    ngOnInit(): void {
        
        this.screenScale = screen.mainScreen.heightDIPs+100
        //let screenScale = screen.mainScreen.heightDIPs
    
       
       
        
    }
    public onTap(args){
        
        let options: PromptOptions = { 
            title: "Add Extension Number",
            defaultText: " Number ",
            message: "How you doin'",
            okButtonText: "Add",
            cancelButtonText: "Cancel",
          //  neutralButtonText: "Neutral",
            cancelable: true,
            inputType: inputType.number, // email, number, text, password, or email
            capitalizationType: capitalizationType.sentences // all. none, sentences or words
            
        };
        prompt(options).then((result: PromptResult) => {
            console.log("Hello, " + result.text);
        });
    }
    onItemTap(e){
       // alert(this.cnts.length)
        console.log(this.cnts)
    }
    public selectedIndexChanged(e){

    }
    internetCheck(){
        let conn=connectivity.getConnectionType()
         //console.log("Connection type "+conn)
         clearInterval(this.id);

         if(conn===0){
          dialogs.alert({
              title: "Internet Error",
              message: "No internet connection",
              okButtonText: "Close"
          }).then(() => {
              console.log("Dialog closed!");
          });
         }
      }
}
