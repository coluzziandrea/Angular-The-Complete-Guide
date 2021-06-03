import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false })
  nameInput!: ElementRef;

  @ViewChild('amountInput', { static: false })
  amountInput!: ElementRef;

  @Output()
  itemAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddIngredient() {
    const nameVal = this.nameInput.nativeElement.value;
    const amountVal = this.amountInput.nativeElement.value;
    if (!amountVal || !nameVal) {
      alert('Input Not Valid!');
      return;
    }
    this.itemAdded.emit(new Ingredient(nameVal, amountVal));
  }
}
