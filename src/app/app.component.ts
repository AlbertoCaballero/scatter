import { Component } from '@angular/core';

export interface Datapoint {
  x: number;
  y: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  public Datapoints: Datapoint[] = [
    { x: 1.1, y: 0.2 },
    { x: 2.2, y: 0.4 },
    { x: 3.3, y: 0.6 },
    { x: 4.4, y: 0.8 },
    { x: 5.5, y: 1.0 },
    { x: 6.6, y: 1.2 },
    { x: 7.7, y: 1.4 },
    { x: 8.8, y: 1.6 },
    { x: 9.9, y: 1.8 },
    { x: 10.1, y: 2.0 }
  ];

  displayedColumns: string[] = ['x', 'y'];

  public count: number = 0;
  public dataVisible: boolean = false;          //Toggels the data viewer

  private file: any;
  public content: any;
  public chartVisible: boolean = false;         //Toggels the chart and editing

  fileChanged(e) {
    this.file = e.target.files[0];
  }

  //Recives the document path from UI and reads it
  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result)
      this.content = fileReader.result
      this.dataVisible = true
    }
    fileReader.readAsText(this.file);
  }


  //Creation of the data visualization, charting the data
  createChart() {
    this.chartVisible = !this.chartVisible

    var require : any;
    
    var Chart = require('chart.js');
    var ctx = document.getElementById('line-chart');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        datasets: [{ 
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [168,170,178,190,203,276,408,547,675,734],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [40,20,10,16,24,38,74,167,508,784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
          }, { 
            data: [6,3,2,2,7,26,82,172,312,433],
            label: "North America",
            borderColor: "#c45850",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    })
  }

  manageProfiles() {
    //Profile management logic
    //TODO: Implement logic
  }

}
