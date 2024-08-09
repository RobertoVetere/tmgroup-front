import { Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from 'src/app/components/section-header/section-header.component';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent{
  
  public section: string = 'facturas';

  constructor() { }



}
