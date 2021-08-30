import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;

  recipesSubscription!: Subscription;

  constructor(private dataService: DataStorageService) {}

  ngOnInit(): void {}

  onSaveData() {
    this.dataService.storeRecipes();
  }

  onFetchData() {
    this.destroySubscription();
    this.recipesSubscription = this.dataService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.destroySubscription();
  }

  private destroySubscription() {
    if (this.recipesSubscription != null) {
      this.recipesSubscription.unsubscribe();
    }
  }
}
