import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
  standalone:true,
  imports: [IonToolbar, IonHeader, CommonModule, IonButtons, IonTitle, IonMenuButton],
})
export class SectionHeaderComponent {
  @Input() section!: string;

  constructor() { }
}
