/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";


import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';
import { RouterExtensions } from "nativescript-angular/router";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { Injectable } from '@angular/core';
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { Image } from "tns-core-modules/ui/image";
import { NavigationEnd,ActivatedRoute,Params } from "@angular/router";
import { Location } from "@angular/common";
import { MyHttpPostService } from "./provisioning.service";
import { SecureStorage } from "nativescript-secure-storage";
//import {platformNames} from "tns-core-modules/platform"
import * as platformModule from "tns-core-modules/platform";
@Component({
    selector: "Provisioning",
    moduleId: module.id,
    templateUrl: "./provisioning.component.html",
    providers: [MyHttpPostService]
})
export class ProvisioningComponent implements OnInit {
  

   

  
    constructor(private translate: TranslateService,
    private routerExtensions: RouterExtensions,public acRoute:ActivatedRoute,
    private myPostService: MyHttpPostService,private location: Location) {
      this.showingProvisioning=true
      this.showingLongListPicker=false
     
    
   // console.log(acRoute.params)
   // console.log(this.number)
    }
    public showingProvisioning: any = true;
    public showingLongListPicker: any = false;
    public selectedCountry: string ="Select Country"
    public country:any[]=[]
    public index: number;
    public number:string
    public countryCode:string
    ngOnInit(): void {
        // Init your component properties here.
        let secureStorage = new SecureStorage();
        var value = secureStorage.getSync({
          key: "sip_user"
        });
        if(value){
        /*  this.routerExtensions.navigate(['home'], {
                      
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
        this.onTap("")
        }
        this.country=[
         "Select Country","Spain","United Kingdom"
        ]
        this.countryCode="41"
        this.acRoute.queryParams.subscribe(params => {

          
          if(params["name"]){
          this.selectedCountry=params["name"]
          this.countryCode =  params["code"]	
          //this.number=this.countryCode	
        }
          //	console.log("EntityComponent queryParams with id : " + params["name"]);

        //console.log(params)
      });
        //console.log(this.location.path())
    }
    private openSelect()
    {
      //this.getCountry()
     // this.showingLongListPicker=true
      //this.showingProvisioning=false
      this.routerExtensions.navigate(['country'], {
            
        transition: {
          name: "fade"
        },
        clearHistory: true
      });
    }
    public onTap(args){
       
          let cc=String(this.countryCode)
          let pn=String(this.number)
          let udid=platformModule.device.uuid
          //900C6D4737B9F7D5
          console.log(udid)
          let data="udid="+udid+"&cc="+cc+"&os=IOS&app_id=1&deviceBrand=Apple&deviceModel=Iphone&osVersion=7.0&pn="+pn
          
      this.myPostService

            .postData(data)
            .subscribe(res => {
              //  this.message = (<any>res).json.data.username;
             // console.log(res)
              let code=(<any>res).code
              if(code==202 || code==201){
              //let data=(<any>res).data.code
              this.routerExtensions.navigate(['confirmation'], {
            
                  transition: {
                    name: "fade"
                  },
                  queryParams: {
                    number:String(this.number),
                    cc:String(this.countryCode)
                    
                    
                    
                },
                  clearHistory: true
                } 
              );
             // alert(data)
              }
             if(code==204){

                
                let secureStorage = new SecureStorage();
                var value = secureStorage.getSync({
                  key: "sip_user"
                });
                if(!value){
                          let data=(<any>res).data
                          secureStorage.set({
                            key: "sip_user",
                            value: data.user
                          }).then(success => console.log("Saved User" + success))
                          secureStorage.set({
                            key: "sip_password",
                            value: data.password
                          }).then(success => console.log("Saved password" + success))
                          secureStorage.set({
                            key: "sip_proxy",
                            value: data.proxy
                          }).then(success => console.log("Saved proxy" + success))
                          secureStorage.set({
                            key: "sip_transport", 
                            value: data.transport
                          }).then(success => console.log("Saved transport" + success))
                          secureStorage.set({
                            key: "sip_port",
                            value: data.port
                          }).then(success => console.log("Saved password" + success));
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
                        );
                    }
                    else{
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
                        );
                    }
              }
              else
              {
                alert("error: "+code+ " "+(<any>res).error)
              }
            });
          
        
    }
    public onTapLabel(args){
       // console.log(args)
        alert("Just a Prototipe App")
    }
    selectedIndexChanged(data){
   //   this.showingLongListPicker=true
    //  this.showingProvisioning=false
      console.log("enable")
    }
    closeLongListPicker(){
      this.showingLongListPicker = false;
      this.showingProvisioning=true
    }
    onReturnPress(e){
      console.log("pre")
      getJSON("https://restcountries.eu/rest/v2/all").then((r: any) => {
       this.country=r
       console.log(r.length)
       for(let x=0;x<r.length;x++){
         if(r[x].callingCodes[0]==this.countryCode){
           this.selectedCountry=r[x].name
         }
       }
      }, (e) => {
      });
    }
    getCountry(){
      
      getJSON("https://restcountries.eu/rest/v2/all").then((r: any) => {
       this.country=r
      }, (e) => {
      });
      
     
     // console.log(data)
    }
    getImage(data){
      if(data.alpha2Code!=undefined){
        let ster=data.alpha2Code.toLowerCase()
        return "~/images/"+ster+".png"
      }
      return ""
    }
    selectCn(dat){
      console.log(dat.callingCodes[0])
    }
    
}
