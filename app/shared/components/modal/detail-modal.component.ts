/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import * as SocialShare from "nativescript-social-share";

import { TranslateService } from '../../../@ngx-translate/core@10.0.2';

import { DataService } from "../../data.service";
import { DateService } from "../../date.service";
import { IListTrasactionItem, ICompany } from "../../interfaces";

@Component({
    selector: "app-detail-modal",
    moduleId: module.id,
    templateUrl: "./detail-modal.component.html"
})
export class DetailModalComponent implements OnInit {
    public webViewSrc = '';
    data: DataService;
    transactionData: IListTrasactionItem;
    categoryIcon: string;
    companyData: ICompany;
    dateFormat: DateService;

    constructor(
        private params: ModalDialogParams,
        private translate: TranslateService) {
        this.data = new DataService()
        this.dateFormat = new DateService();

        this.transactionData = params.context as IListTrasactionItem;
        this.categoryIcon = this.data.getCategoriesIcons()[this.transactionData.category];
        this.companyData = this.data.getCompanies().find(i => i.id === this.transactionData.companyId);

        this.webViewSrc = '<!DOCTYPE html><html><body>'
        this.webViewSrc += `<iframe src="${this.companyData.mapUrl}" width="100%" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>`
        this.webViewSrc += '</body></html>'
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public get ammount(): string {
        if (this.transactionData.ammount >= 0) {
            return `$${this.transactionData.ammount}`
        } else {
            return `- $${Math.abs(this.transactionData.ammount)}`
        }
    }

    public onClose(): void {
        this.params.closeCallback();
    }

    public onShare(): void {
        SocialShare.shareText("I love MyGold App, www.mygold.fun!", "How would you like to share this text?");
    }

    public onWebViewLoaded(webargs) {
        const webview = webargs.object;
        if (isAndroid) {
            webview.android.getSettings().setDisplayZoomControls(false);
        }
    }

    public formatDate(value: Date) {
        return this.dateFormat.longDate(value, this.translate.currentLang)
    }
}
