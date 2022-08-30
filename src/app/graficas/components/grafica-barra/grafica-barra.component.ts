import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: Label[] = [
    //'2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];
  public barChartType: ChartType = 'bar'; //esta es la horientacion de la tabla ='horizontalBar'
  public barChartLegend = true; //Aparece la etiqueta de arriba de la tabla

  @Input() barChartData: ChartDataSets[] = [
    // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'green' },
    // { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#fcdd96', hoverBackgroundColor: 'red' },
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = `horizontalBar`;
    }
  }

}
