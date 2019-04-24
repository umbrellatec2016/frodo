/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";

import { NavigationEnd, Router } from "@angular/router";
import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';
import { screen, ScreenMetrics } from "tns-core-modules/platform";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout"

@Component({
    selector: "Customchat",
    moduleId: module.id,
    templateUrl: "./customchat.component.html"
})
export class CustomchatComponent implements OnInit {
  

   

    public cnts: any;
    public pns: any;
    constructor(private translate: TranslateService) {
        this.cnts=[{
            user:"Me",
            text:"Hello how are you Today",
            position:"right"
        },{
            user:"Steven Springield",
            text:"Fine, but I'm tired",
            position:"left"
        },{
            user:"Me",
            text:"Oh sorry, can help you",
            position:"right"
        },{
            user:"Steven Springield",
            text:"Fine, but I'm tired",
            position:"left"
        },{
            user:"Me",
            text:"Oh sorry, can help you",
            position:"right"}
            ,{
                user:"Steven Springield",
                text:"Fine, but I'm tired",
                position:"left"
            },{
                user:"Me",
                text:"Oh sorry, can help you",
                position:"right"}
                ,{
                    user:"Steven Springield",
                    text:"Fine, but I'm tired",
                    position:"left"
                },{
                    user:"Me",
                    text:"Oh sorry, can help you",
                    position:"right"}]
        this.pns=[{
            user:"Me",
            text:"Hello! I'm fine"
        }]
    }

    ngOnInit(): void {
        // Init your component properties here.
       
        this.screenScale = screen.mainScreen.heightDIPs+100
        //let screenScale = screen.mainScreen.heightDIPs
        console.log(this.screenScale + "-")
        
    }
    public onTap(args){
        alert("This is just a prototype app!")
    }
    public heights=0;
    testWidth = 0;

    public screenScale = screen.mainScreen.heightDIPs
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
}
