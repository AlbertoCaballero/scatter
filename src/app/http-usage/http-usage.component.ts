import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs';
 
@Component({
  selector: 'app-http-usage',
  templateUrl: './http-usage.component.html',
  styleUrls: ['./http-usage.component.scss']
})

export class HttpUsageComponent implements OnInit {

  private url : string = 'http://httpbin.org/ip';
  private dataGet : any;

  constructor(http : HttpClient) { 
    this.dataGet = http.get(this.url);
    console.log('Data: ', this.dataGet.origin);
  }

  ngOnInit() {
    
  }

}
