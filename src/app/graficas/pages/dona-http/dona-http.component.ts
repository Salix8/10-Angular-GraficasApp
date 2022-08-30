import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 
    //'Paladines', 'Clerigos', 'Brujos', 'Druidas'
  ];

  //Lo que funciona
  public doughnutChartData: MultiDataSet = [
    // [ 440, 150, 88, 288 ],
    // [ 50, 150, 120, 88 ],
    // [ 250, 130, 70, 88 ]
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
    }
  ]

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe( data => {
      
    //   console.log(data);

    //   const labels = Object.keys( data );
    //   const values = Object.values( data );

    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push( values );

    // });

    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe( ({ labels, values }) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push( values );
    });
  }

}
