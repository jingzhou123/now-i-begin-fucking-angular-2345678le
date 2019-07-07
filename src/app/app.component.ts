import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products = [
    {
      id: 1
    }
  ];
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
}
