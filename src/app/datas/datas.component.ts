import { Component } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css'],
  standalone: false
})
export class DatasComponent {
  datas: any[] = [];
  cols: any[] = ['ID', 'Name', 'Value', 'Category', 'Timestamp'];

  constructor(private simple: SimpleService) {
    this.simple.getDatas().subscribe(
      (res: any[]) => {  
        this.datas = res;
      }
    );
  }
}
