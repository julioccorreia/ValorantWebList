import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  showfilter: boolean = true;

  openFilter() {
    if (this.showfilter) {
      this.showfilter = false;
    } else {
      this.showfilter = true;
    }
  }
}
