import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

//Lo que habia en la API
  // public barChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: {
  //     x: {},
  //     y: {
  //       min: 10
  //     }
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //     },
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end'
  //     }
  //   }
  // };
  // public barChartType: ChartType = 'bar';
  // public barChartPlugins = [
  //   DataLabelsPlugin
  // ];

  // public barChartData: ChartData<'bar'> = {
  //   labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
  //     { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  //   ]
  // };

  //Lo que funciona
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  public barChartType: ChartType = 'bar'; //esta es la horientacion de la tabla ='horizontalBar'
  public barChartLegend = true; //Aparece la etiqueta de arriba de la tabla

  public barChartData: ChartDataSets[] = [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'green' },
    { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#fcdd96', hoverBackgroundColor: 'red' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    
    this.barChartData.forEach(element => {
      var array: number[] = [];
      for (let i = 0; i < element.data!.length; i++) {
        array.push(Math.round(Math.random() * 100));
      }
      element.data = array;
    })

    // for (let i = 0; i < this.barChartData.length; i++){
    //   for (let j = 0; j < this.barChartData[i].data!.length; j++) {
    //     console.log( `i = ` + i + `\nj= ` + j + `\nValor =` + this.barChartData[i].data![j]);
    //     this.barChartData[i].data![j] = Math.round(Math.random() * 100);
    //     console.log( `i = ` + i + `\nj= ` + j + `\nValor =` + this.barChartData[i].data![j]);
    //   }
    // }

    // this.barChartData[0].data = [
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100) 
    // ];
  }

}
