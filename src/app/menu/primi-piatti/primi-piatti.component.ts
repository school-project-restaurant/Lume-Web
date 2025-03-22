import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

@Component({
  selector: 'app-primi-piatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primi-piatti.component.html',
  styleUrls: ['./primi-piatti.component.sass']
})
export class PrimiComponent {
  primi: Dish[] = [
    { name: 'Spaghetti alla Carbonara', ingredients: 'Spaghetti, uova, pancetta, pecorino', price: 12.00 },
    { name: 'Lasagna', ingredients: 'Pasta, ragù, besciamella, parmigiano', price: 14.00 },
    { name: 'Risotto ai Funghi', ingredients: 'Riso, funghi, parmigiano, brodo', price: 13.00 },
    { name: 'Gnocchi al Pesto', ingredients: 'Gnocchi, pesto, parmigiano', price: 11.00 },
    { name: 'Penne all\'Arrabbiata', ingredients: 'Penne, pomodoro, peperoncino, aglio', price: 10.00 },
    { name: 'Tagliatelle al Ragù', ingredients: 'Tagliatelle, ragù, parmigiano', price: 15.00 }
  ];
}
