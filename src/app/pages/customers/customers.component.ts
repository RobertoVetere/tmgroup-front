import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton} from "@ionic/angular/standalone";
import { SectionHeaderComponent } from 'src/app/components/section-header/section-header.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true, // Marca el componente como standalone
  imports: [IonToolbar, IonHeader, CommonModule, IonButtons, IonTitle, IonMenuButton, SectionHeaderComponent, SearchBarComponent], // Importa módulos necesarios, como CommonModule
})
export class CustomersComponent {

  items = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
    // more items
  ];

  filters = [
    { label: 'Nombre', key: 'name' },
    { label: 'Correo', key: 'email' },
    { label: 'Teléfono', key: 'phone' },
    // more filters if needed
  ];

  public section: string = 'clientes';
  constructor() {}

  handleSearchResults(filteredItems: any[]) {
    // Handle the search results here, e.g., update the UI
    console.log('Filtered Items:', filteredItems);
  }
  

}
