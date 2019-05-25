import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataviewerComponent } from './dataviewer/dataviewer.component';
import { FormsModule } from '@angular/forms';
import { DataviewerRowComponent } from './dataviewer-row/dataviewer-row.component';
//import { MatTableModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    DataviewerComponent,
    DataviewerRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
