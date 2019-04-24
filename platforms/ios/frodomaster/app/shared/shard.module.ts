import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TranslateModule } from '../@ngx-translate/core@10.0.2';


import { TransactionsListComponent } from "./components/transactions-list.component";
import { DetailModalComponent } from "./components/modal/detail-modal.component";

@NgModule({
    imports: [NativeScriptCommonModule, TranslateModule.forChild()],
    declarations: [TransactionsListComponent, DetailModalComponent],
    exports: [TransactionsListComponent, DetailModalComponent],
    entryComponents: [DetailModalComponent],
})
export class SharedModule { }
