import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-chart',
  templateUrl: './tabs-chart.component.html',
  styleUrls: ['./tabs-chart.component.scss']
})
export class TabsChartComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
     
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
        pausedtheirnotifications:100,
          labels: ['Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1'],
          datasets: [
              {
                  label: 'My First dataset',
                  
                  backgroundColor: documentStyle.getPropertyValue('--orange-400'),
                  borderColor: documentStyle.getPropertyValue('--orange-400'),
                  data: [65, 59, 80, 81, 56, 55, 40],
                  
              }
             
          ]
      };

    
  }
}
