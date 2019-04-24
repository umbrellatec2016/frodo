import { Component, Input } from "@angular/core";

@Component({
    selector: "app-cards-slide",
    moduleId: module.id,
    templateUrl: "./cards-slide.component.html"
})
export class CardsSlideComponent {
    @Input() data = [];
}
