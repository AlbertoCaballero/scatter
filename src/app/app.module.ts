import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataviewerComponent } from './dataviewer/dataviewer.component';
import { FormsModule } from '@angular/forms';
import { DataviewerRowComponent } from './dataviewer-row/dataviewer-row.component';
import { HttpUsageComponent } from './http-usage/http-usage.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataviewerComponent,
    DataviewerRowComponent,
    HttpUsageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
