import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

@Component({
  selector: 'app-antipasti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './antipasti.component.html',
  styleUrls: ['./antipasti.component.sass']
})
export class AntipastiComponent {
  antipasti: Dish[] = [
    { name: 'Bruschetta', ingredients: 'Pane, pomodoro, basilico', price: 6.50 },
    { name: 'Carpaccio', ingredients: 'Manzo, rucola, parmigiano', price: 10.00 },
    { name: 'Caprese', ingredients: 'Mozzarella, pomodoro, basilico', price: 8.00 },
    { name: 'Frittelle di zucchine', ingredients: 'Zucchine, uova, farina', price: 7.00 },
    { name: 'Arancini', ingredients: 'Riso, ragù, piselli', price: 6.00 },
    { name: 'Involtini di melanzane', ingredients: 'Melanzane, ricotta, pomodoro', price: 9.00 }
  ];
}
