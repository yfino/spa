import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';
@Component ({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.component.html'
})
export class RecomendacionComponent implements OnInit {

  constructor(private router: Router) { }
    verDetalleExtracto() {
    this.router.navigate(['detalle-extracto']);
    }
  ngOnInit() {
    Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: '<b>Actividad Financiera</b>'
        },
        subtitle: {
            text: 'Aqui podrá ver su actividad financiera de los ultimos 3 meses'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Fecha de Transacciones'
            }

     },
        yAxis: {
            title: {
                text: 'Cantidad de Transacciones'
            },
            min: 0,
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Transacción {series.name}'
        },
        plotOptions: {
            spline: {
                marker: {
                    symbol: 'circle',
                    enabled: true
                },
            },
            column: {
                borderRadius: 6
            }
        },
        colors: ['#00448D', '#ffd200', '#DD001D', '#00F957', '#000'],
        series: [
            <Highcharts.SeriesColumnOptions> {
                id: 'Pago por Internet',
                name: 'Diciembre',
                cursor: 'pointer',
                data: [
                [Date.UTC(2018, 11, 1), 0],
                [Date.UTC(2018, 11, 2), 0.25],
                [Date.UTC(2018, 11, 4), 0.41],
                [Date.UTC(2018, 11, 6), 0.64],
                [Date.UTC(2018, 11, 8), 0.6],
                [Date.UTC(2018, 11, 10), 0.55],
                [Date.UTC(2018, 11, 12), 0.62],
                [Date.UTC(2018, 11, 14), 1.5],
                [Date.UTC(2018, 11, 18), 1.56],
                [Date.UTC(2018, 11, 22), 1.74],
                [Date.UTC(2018, 11, 28), 1.80],
                [Date.UTC(2018, 11, 30), 2.3], // 14 de enero al 3 de febrero
                [Date.UTC(2019, 0, 2), 2.4],
                [Date.UTC(2019, 0, 4), 2.63],
                [Date.UTC(2019, 0, 6), 2.77],
                [Date.UTC(2019, 0, 8), 2.79],
                [Date.UTC(2019, 0, 10), 2.77],
                [Date.UTC(2019, 0, 16), 2.80],
                [Date.UTC(2019, 0, 20), 2.84],
                [Date.UTC(2019, 0, 30), 2.77],
                ]
            }, {
                id: 'Transferencia',
                name: 'Enero',
                type: 'line',
                cursor: 'pointer',
                data: [
                    [Date.UTC(2018, 11,  2), 0],
                    [Date.UTC(2018, 11, 4), 0.24],
                    [Date.UTC(2018, 11,  6), 0.25],
                    [Date.UTC(2018, 11,  8), 0.26],
                    [Date.UTC(2018, 11,  10), 0.28],
                    [Date.UTC(2018, 11,  12), 0.41],
                    [Date.UTC(2018, 11,  16), 0.59], // del 9 de enero al 1 de febrero
                    [Date.UTC(2018, 11,  20), 0.63],
                    [Date.UTC(2018, 11,  24), 0.65],
                    [Date.UTC(2018, 11,  28), 0.68],
                    [Date.UTC(2019, 0,  4), 0.70],
                    [Date.UTC(2019, 0,  8), 0.73],
                    [Date.UTC(2019, 0,  12), 0.75],
                    [Date.UTC(2019, 0,  14), 0.76],
                    [Date.UTC(2019, 0,  16), 0.80],
                    [Date.UTC(2019, 0,  18), 0.82],
                    [Date.UTC(2019, 0,  20), 0.89],
                    [Date.UTC(2019, 0,  24), 1],
                    [Date.UTC(2019, 0,  26), 1.3],
                    [Date.UTC(2019, 0,  30), 1.7],
                ]
            }, {
                id: 'IVA',
                name: 'Febrero',
                type: 'line',
                cursor: 'pointer',
                marker: {fillColor: '#BF0B23', radius: 5 },
                data: [
                    [Date.UTC(2018, 11,  3), 0],
                    [Date.UTC(2018, 11,  6), 0.1],
                    [Date.UTC(2018, 11,  9), 0.17],
                    [Date.UTC(2018, 11,  11), 0.18],
                    [Date.UTC(2018, 11,  13), 0.19],
                    [Date.UTC(2018, 11,  15), 0.20],
                    [Date.UTC(2018, 11,  20), 0.21],
                    [Date.UTC(2018, 11,  27), 0.27],
                    [Date.UTC(2019, 0,  4), 0.29],
                    [Date.UTC(2019, 0,  14), 0.30],
                    [Date.UTC(2019, 0,  16), 0.37],
                    [Date.UTC(2019, 0,  18), 0.48],
                    [Date.UTC(2019, 0,  20), 0.55],
                    [Date.UTC(2019, 0,  23), 0.60],
                    [Date.UTC(2019, 0,  25), 0.64],
                    [Date.UTC(2019, 0,  27), 0.69],
                    [Date.UTC(2019, 0,  28), 0.70],
                    [Date.UTC(2019, 0,  29), 0.72],
                    [Date.UTC(2019, 0,  30), 0.73],
                    [Date.UTC(2019, 0,  31), 0.74],
                ]
            }]
    });
    Highcharts.chart('contenedor', {
        chart: {
          type: 'column'
        },
        title: {
          text: '<b>Estadistica de Productos por  Bancos</b>'
        },
        xAxis: {
          categories: [
            'Cuenta de Ahorros',
            'Cuenta Corriente',
            'Tarjeta de Crédito',
            'Cuenta de Inversión'
          ],
          crosshair: true
        },
        yAxis: {
         maxRange: 3,
          minRange: 1,
          title: {
            text: 'Cantidad de Productos'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        colors: ['#00448D', '#ffd200', '#DD001D', '#BFBCAE', '#000'],
        series: [
        <Highcharts.SeriesColumnOptions>{
          name: 'Bancolombia',
          type: 'column',
          cursor: 'pointer',
          data: [1, 1, 1, 1]
        }, {
          cursor: 'pointer',
          type: 'column',
          name: 'Banco de Bogotá',
          data: [1, 1, 0, 1]
        }, {
        cursor: 'pointer',
        type: 'column',
        name: 'Banco de Occidente',
        data: [1, 1, 0, 0]
        }, {
        cursor: 'pointer',
        type: 'column',
        name: 'BBVA',
        data: [2, 2, 0, 0]
        }, {
        cursor: 'pointer',
        type: 'column',
        name: 'CitiBank',
        data: [0, 0, 1, 0]
          }]
      });
    }
}