import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

@Component({
  selector: 'app-bevande',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bevande.component.html',
  styleUrls: ['./bevande.component.sass']
})
export class BevandeComponent {
  bevande: Dish[] = [
    { name: 'Coca Cola', ingredients: 'Water, Sugar, Carbon Dioxide, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine', price: 2.5 },
    { name: 'Sprite', ingredients: 'Water, Sugar, Carbon Dioxide, Citric Acid, Natural Flavors', price: 2.5 },
    { name: 'Fanta', ingredients: 'Water, Sugar, Carbon Dioxide, Orange Juice, Citric Acid, Natural Flavors', price: 2.5 },
    { name: 'Pepsi', ingredients: 'Water, Sugar, Carbon Dioxide, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine', price: 2.5 },
    { name: 'Mountain Dew', ingredients: 'Water, Sugar, Carbon Dioxide, Citric Acid, Natural Flavors, Caffeine', price: 2.5 },
    { name: 'Dr Pepper', ingredients: 'Water, Sugar, Carbon Dioxide, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine', price: 2.5 }
  ];
}
