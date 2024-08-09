import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent  {

  public section: string = 'presupuestos';

  constructor() { }

}
