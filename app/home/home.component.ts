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
import * as appSettings from "tns-core-modules/application-settings";

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
    public user:string
    public activated=false
    public letter="C" 
      public country:any[]=[]
    private id = setInterval(() => {
        this.internetCheck()
    }, 2000);
    constructor(private translate: TranslateService, ) {
        
        let Contacts = require("nativescript-contacts-lite");
        
        Contacts.getContacts(['display_name', 'phone','photo','contact_id'])
       .then(res=>{
        //  console.log(res)
           
           for(let x=0; x <res.length;x++){
               //console.log(res[x].thumbnail)
               
               let number=' '
               let ext="+ Extension"
               for(let xx=0;xx<res[x].phone.length;xx++){ 
                   number=res[x].phone[xx].number
               }
               if(appSettings.hasKey(res[x].contact_id)){
                   ext=appSettings.getString(res[x].contact_id)
               }
               this.cnts.push({user:res[x].display_name,
                  element:number,
                 thumbnail:res[x].photo,
                 extension:ext,
                 contact_id:res[x].contact_id
              })
              console.log(this.cnts)
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
    public onTap(args,id){
        console.log("Id: "+id)
        let options: PromptOptions = { 
            title: "Add Extension Number",
            defaultText: "",
            message: "Extension Number for internal Calls",
            okButtonText: "Add",
            cancelButtonText: "Cancel",
          //  neutralButtonText: "Neutral",
            cancelable: true,
            inputType: inputType.number, // email, number, text, password, or email
            capitalizationType: capitalizationType.sentences // all. none, sentences or words
            
        };
        console.log("Id:"+id)
        prompt(options).then((result: PromptResult) => {
            console.log("Hello, " + result.text);
            appSettings.setString(id,result.text)
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
      public search(){
          if(this.activated)
          this.activated=false
          else
          this.activated=true
      }
      public filtere(){
        let Contacts = require("nativescript-contacts-lite");
        this.cnts=[]
        console.log("COnsole "+this.user)
        if (this.activated)
        Contacts.getContacts(['display_name', 'phone','photo','contact_id'],this.user)
        //else
      //  Contacts.getContacts(['display_name', 'phone','photo','contact_id'])
        .then(res=>{
              console.log(res)
               
               for(let x=0; x <res.length;x++){
                   //console.log(res[x].thumbnail)
                   
                   let number=' '
                   let ext="+ Extension"
                   for(let xx=0;xx<res[x].phone.length;xx++){ 
                       number=res[x].phone[xx].number
                   }
                   if(appSettings.hasKey(res[x].contact_id)){
                       ext=appSettings.getString(res[x].contact_id)
                   }
                   this.cnts.push({user:res[x].display_name,
                      element:number,
                     thumbnail:res[x].photo,
                     extension:ext,
                     contact_id:res[x].contact_id
                  })
                  console.log(this.cnts)
               }
              
                  
           })

      }
}
