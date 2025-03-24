import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.sass']
})
export class DessertComponent {
  dessert: Dish[] = [
    { name: 'Tiramisu', ingredients: 'Mascarpone, caffè, savoiardi', price: 5.50 },
    { name: 'Panna Cotta', ingredients: 'Panna, zucchero, vaniglia', price: 4.00 },
    { name: 'Cannoli', ingredients: 'Ricotta, zucchero, cioccolato', price: 3.50 },
    { name: 'Gelato', ingredients: 'Latte, zucchero, vari gusti', price: 2.50 },
    { name: 'Zabaglione', ingredients: 'Uova, zucchero, marsala', price: 4.50 },
    { name: 'Sfogliatella', ingredients: 'Pasta sfoglia, ricotta, zucchero', price: 3.00 }
  ];
}
