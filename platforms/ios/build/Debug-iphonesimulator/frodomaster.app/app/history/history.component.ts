/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";


import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';
import { SearchBar } from "tns-core-modules/ui/search-bar";

@Component({
    selector: "History",
    moduleId: module.id,
    templateUrl: "./history.component.html"
})
export class HistoryComponent implements OnInit {
  

   


    constructor(private translate: TranslateService) {
       
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }
    public onTap(args){
        alert("This is just a prototype app!")
    }
}
