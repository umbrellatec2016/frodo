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
        console.log(this.cnts.length)
        this.screenScale = screen.mainScreen.heightDIPs+100
        //let screenScale = screen.mainScreen.heightDIPs
        console.log(this.screenScale + "-")
        for(let x=0;x<this.cnts.length;x++){
            //this.cnts.push(JSON.parse(t))
            //console.log(this.cnts[x])
        }
        // Init your component properties here.
     //   this.cnts= this.contacts.getAllContacts(['id','name','phoneNumbers','emailAddresses'])
        //console.log(this.cnts.data)
        //console.log(this.contacts.getAllContacts(['name']).data)
       
        //console.log(list)
    }
    public onTap(args){
        alert("This is just a prototype app!")
    }
    onItemTap(e){
       // alert(this.cnts.length)
        console.log(this.cnts)
    }
    public selectedIndexChanged(e){

    }
}
