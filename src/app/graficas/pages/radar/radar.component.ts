import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Fuerza', 'Destreza', 'Constitución', 'Inteligencia', 'Sabiduruia', 'Carisma' ];

  //Lo que ponia en la API
  // public radarChartData: ChartData = {
  //   labels: this.radarChartLabels,
  //   datasets: [
  //     { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
  //     { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
  //   ]
  // };

  // public radarChartData: ChartData = {
  //   labels: this.radarChartLabels,
  //   datasets: [
  //     { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
  //     { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
  //   ]
  // };

  //Lo que funciona
  public radarChartData: MultiDataSet = [
    [ 19, 13, 20, 10, 15, 10 ],
    [ 8, 10, 17, 19, 16, 10],
    [ 16, 20, 15, 10, 18, 13 ],
  ];

  public radarChartType: ChartType = 'radar';


  constructor() { }

  ngOnInit(): void {
  }

}
