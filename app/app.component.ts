/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";

import { TranslateService, LangChangeEvent } from './@ngx-translate/core@10.0.2';

import enLang from './locale/en'
import esLang from './locale/es'

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    public currentLanguage = 'en';
   
    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private translate: TranslateService) {
        // Add translations
        translate.setTranslation('en', enLang);
        translate.setTranslation('es', esLang);
            
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');

        // 
        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLanguage = event.lang;
        });
    }

    ngOnInit(): void {
        //this._activatedUrl = "/provisioning";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }
    getPath(ruta) {
        //router.url!='/provisioning' && router.url!='/country' 
        let rt=ruta.split('?')
        //console.log(ruta + "   "+rt)
        if(rt[0]=="/provisioning" || rt[0]=="/country" || rt[0]=="/confirmation" )
        {
            return false
        }
        return true
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            },
            clearHistory: true
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    changeLanguage(locale: string): void {
        this.translate.use(locale);
    }

   

    
}
