import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Paladines', 'Clerigos', 'Brujos', 'Druidas'];

  //Lo que ponia en la API
  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     { data: [ 350, 450, 100 ] },
  //     { data: [ 50, 150, 120 ] },
  //     { data: [ 250, 130, 70 ] }
  //   ]
  // };

  //Lo que funciona
  public doughnutChartData: MultiDataSet = [
    [ 440, 150, 88, 288 ],
    [ 50, 150, 120, 88 ],
    [ 250, 130, 70, 88 ]
  ];

  public doughnutChartData1: MultiDataSet = [
    [ 2700, 2000, 1400, 1350, 1123 ],
  ];

  public doughnutChartType: ChartType = `doughnut`;

  public colors: Color[] = [
    {
      backgroundColor: [
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
        '#00ff8c',
      ]
    },
    {
      backgroundColor: [
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    },
    {
      backgroundColor: [
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
