import { Component, Input, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/directives/dialogs';

import { TranslateService, LangChangeEvent } from '../../@ngx-translate/core@10.0.2';

import { DetailModalComponent } from "./modal/detail-modal.component";
import { DataService } from "../data.service";
import { DateService } from "../date.service";
import { ICompany } from "../interfaces";

@Component({
    selector: "app-transactions-list",
    moduleId: module.id,
    templateUrl: "./transactions-list.component.html"
})
export class TransactionsListComponent {
    @Input() transactions = [];

    data: DataService;
    dateFormat: DateService;
    companies: ICompany[];
    categoriesIcons: {};

    public currentLanguage = 'en';

    constructor(
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
        private translate: TranslateService
    ) {
        this.data = new DataService();
        this.dateFormat = new DateService();

        this.companies = this.data.getCompanies()
        this.categoriesIcons = this.data.getCategoriesIcons()

        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLanguage = event.lang;
        });
    }

    public templateSelector(item) {
        return item.itemType;
    }

    public onItemTap(args: any) {
        const itemData = args.view.bindingContext

        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: itemData,
            fullscreen: true
        };

        this.modal.showModal(DetailModalComponent, options)
            .then((result: string) => {
                // console.log(result);
            });
    }

    public getCompany(id) {
        return this.companies.find(i => i.id === id)
    }

    public getHeaderText(value: Date) {
        return this.dateFormat.shortDate(value, this.currentLanguage)
    }

    public mathAbs(value: number) {
        return Math.abs(value)
    }

    public getBadgeIcon(id: string) {
        return this.categoriesIcons[id];
    }
}

