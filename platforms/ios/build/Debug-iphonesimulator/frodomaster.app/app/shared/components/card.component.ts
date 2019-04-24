import { Component, Input } from "@angular/core";

@Component({
    selector: "app-card",
    moduleId: module.id,
    templateUrl: "./card.component.html"
})
export class CardComponent {
    @Input() data = [];
}
