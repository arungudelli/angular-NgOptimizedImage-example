import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagesCount: string[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.imagesCount.push("class-" + i);
    }
  }
}
