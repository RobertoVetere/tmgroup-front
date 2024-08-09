import { Component } from '@angular/core';
import { SectionHeaderComponent } from 'src/app/components/section-header/section-header.component';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss'],
})
export class BudgetsComponent  {

  public section: string = 'presupuestos';

  constructor() { }

}
