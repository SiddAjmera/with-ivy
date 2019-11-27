import { DataService } from "./data.service";
import {
  Component,
  Injector,
  ɵLifecycleHooksFeature,
  ɵrenderComponent
} from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <span>Hey there! {{ title }} here</span>
      <app-child *ngIf="show"></app-child>
      <br />
      <button (click)="printFruits()">
        Print Fruits
      </button>
      |
      <button (click)="changeFruits()">
        Change Fruits
      </button>
      |
      <button (click)="loadComponentLazily()">
        Dynamically Load a Lazy Component
      </button>
      <dynamic></dynamic>
    </div>
  `
})
export class AppComponent {
  title = "Sidd 👨‍💻";
  show = true;

  constructor(private dataService: DataService, private injector: Injector) {}

  printFruits() {
    console.log("Got the fruits as: ", this.dataService.getFruits());
  }

  changeFruits() {
    console.log("Fruits were: ", this.dataService.getFruits());
    const updatedFruits = ["🍈", "🍐", "🥑", "🥝", "🍉", "🍋", "🍍", "🍌"];
    this.dataService.setFruits(updatedFruits);
    console.log("Fruits are: ", this.dataService.getFruits());
  }

  loadComponentLazily() {
    import("./dynamic/dynamic.component").then(({ DynamicComponent }) => {
      ɵrenderComponent(DynamicComponent, {
        host: "dynamic",
        // Source: https://youtu.be/aJ5n2MKuXgQ?t=2306
        // Credits: Sumit Arora - RangleIO
        hostFeatures: [ɵLifecycleHooksFeature],
        injector: this.injector
      });
    });
  }
}
