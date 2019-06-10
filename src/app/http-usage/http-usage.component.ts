import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs';
 
@Component({
  selector: 'app-http-usage',
  templateUrl: './http-usage.component.html',
  styleUrls: ['./http-usage.component.scss']
})
export class HttpUsageComponent implements OnInit {

  private ip : string;

  constructor(http : HttpClient) { 
    http.get('http://httpbin.org/ip')
        .toPromise()
        .then(response => this.ip = response.json().origin)
        .catch(error => console.log(error));
  }

  ngOnInit() {
    
  }

}
