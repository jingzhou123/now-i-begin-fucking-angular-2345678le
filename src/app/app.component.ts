import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  products = [];
  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/products').subscribe(resp => {
      console.log('resp:', resp);
      this.products = resp;
    });
  }
}
