import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-dynamic",
  template: `
    <h1>
      'tis a Dynamic Component ⚡
    </h1>
    <button (click)="getFruits()">Get Fruits</button>
  `
})
export class DynamicComponent implements OnInit {
  fruits: Array<string> = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log("Dynamic Component Loaded Lazily! 🚀");
  }

  getFruits() {
    this.fruits = this.dataService.getFruits();
    console.log("Fruits in the Dynamic Component: ", this.fruits);
  }
}
