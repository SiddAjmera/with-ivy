import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private fruits = ["🍎", "🍊", "🥭", "🍇", "🍐", "🍑"];

  constructor() {}

  getFruits() {
    return this.fruits;
  }

  setFruits(fruits: Array<string>) {
    this.fruits = fruits;
  }
}
