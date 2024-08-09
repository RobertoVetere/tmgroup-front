import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSearchbar, IonToolbar, IonTitle, IonItem, IonLabel, IonList, IonSegment } from '@ionic/angular/standalone';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [IonSegment, CommonModule, FormsModule, IonContent, IonHeader, IonSearchbar, IonToolbar, IonTitle, IonItem, IonLabel, IonList],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnChanges {
  @Input() placeholder: string = 'Buscar...';
  @Input() items: any[] = [];
  @Input() filters: { label: string; key: string }[] = []; // dynamic filters
  @Output() search = new EventEmitter<any[]>();

  searchTerm: string = '';
  filteredItems: any[] = [];
  selectedFilter: string = '';

  constructor() {}

  ngOnChanges() {
    // Initialize filtered items with all items
    this.filteredItems = this.items;
    // Set the default selected filter to the first one if available
    if (this.filters.length > 0) {
      this.selectedFilter = this.filters[0].key;
    }
  }

  onFilterChange(event: any) {
    this.selectedFilter = event.detail.value;
    this.onSearch(); // trigger search when filter changes
  }

  onSearch() {
    if (this.searchTerm) {
      this.filteredItems = this.items.filter(item =>
        item[this.selectedFilter]?.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredItems = [...this.items];
    }
    this.search.emit(this.filteredItems);
  }
}