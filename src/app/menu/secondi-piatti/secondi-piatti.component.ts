import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

@Component({
  selector: 'app-secondi-piatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondi-piatti.component.html',
  styleUrls: ['./secondi-piatti.component.sass']
})
export class SecondiComponent {
  secondi: Dish[] = [
    { name: 'Pollo alla cacciatora', ingredients: 'Pollo, pomodoro, cipolla, vino bianco', price: 12.00 },
    { name: 'Bistecca alla fiorentina', ingredients: 'Bistecca di manzo, rosmarino, aglio', price: 25.00 },
    { name: 'Saltimbocca alla romana', ingredients: 'Vitello, prosciutto crudo, salvia, vino bianco', price: 15.00 },
    { name: 'Ossobuco', ingredients: 'Vitello, carote, sedano, cipolla, vino bianco', price: 18.00 },
    { name: 'Frittura di calamari', ingredients: 'Calamari, farina, limone', price: 14.00 },
    { name: 'Scaloppine al limone', ingredients: 'Vitello, limone, burro, vino bianco', price: 13.00 }
  ];
}
