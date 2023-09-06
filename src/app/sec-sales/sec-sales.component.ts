import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-sales',
  templateUrl: './sec-sales.component.html',
  styleUrls: ['./sec-sales.component.scss']
})
export class SecSalesComponent implements OnInit  {
  data: any;

  options: any;

  ngOnInit() {
      // const documentStyle = getComputedStyle(document.documentElement);
      // const textColor = documentStyle.getPropertyValue('--text-color');
      // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      
      this.data = {
          labels: ["24:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
          datasets: [
            {
            
              data: [80, 120, 80, 60, 70, 70, 80, 80, 80, 80, 80]
            },
            {
             
              data: [20, 30, 40, 80, 20, 80, 76, 78, 13, 43, 10]
            }
          ]
      };
      
      // this.options = {
      //     plugins: {
      //         legend: {
      //             labels: {
      //                 color: textColor
      //             }
      //         }
      //     },
      //     scales: {
      //         r: {
      //             grid: {
      //                 color: textColorSecondary
      //             },
      //             pointLabels: {
      //                 color: textColorSecondary
      //             }
      //         }
      //     }
      // };
  }
}
