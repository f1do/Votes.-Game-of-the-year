import { Component, OnDestroy, Input } from '@angular/core';


@Component({
  selector: 'app-graphics-bar-horizontal',
  templateUrl: './graphics-bar-horizontal.component.html',
  styleUrls: ['./graphics-bar-horizontal.component.css']
})
export class GraphicsBarHorizontalComponent implements OnDestroy {
  @Input() results: any = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';

  constructor() {

  }

  ngOnDestroy(): void {
  }

  onSelect(event: any): void {
    console.log(event);
  }
}
