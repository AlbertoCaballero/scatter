import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
 
@Component({
  selector: 'app-http-usage',
  templateUrl: './http-usage.component.html',
  styleUrls: ['./http-usage.component.scss']
})
export class HttpUsageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
