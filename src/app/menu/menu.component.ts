import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

interface MenuCategory {
  name: string;
  dishes: Dish[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  menuCategories: MenuCategory[] = [
    {
      name: 'Antipasti',
      dishes: [
        { name: 'Bruschetta', ingredients: 'Pane, pomodoro, basilico', price: 6.50 },
        { name: 'Carpaccio', ingredients: 'Manzo, rucola, parmigiano', price: 10.00 },
        { name: 'Caprese', ingredients: 'Mozzarella, pomodoro, basilico', price: 8.00 }
      ]
    },
    {
      name: 'Primi piatti',
      dishes: [
        { name: 'Tagliatelle al Ragù', ingredients: 'Tagliatelle, ragù', price: 12.50 },
        { name: 'Risotto ai Funghi', ingredients: 'Riso, funghi, parmigiano', price: 14.00 },
        { name: 'Lasagna', ingredients: 'Pasta, ragù, besciamella, parmigiano', price: 13.00 }
      ]
    },
    {
      name: 'Secondi piatti',
      dishes: [
        { name: 'Bistecca alla Fiorentina', ingredients: 'Bistecca, sale, pepe', price: 25.00 },
        { name: 'Pollo alla Cacciatora', ingredients: 'Pollo, pomodoro, olive', price: 18.00 },
        { name: 'Salmone al Forno', ingredients: 'Salmone, limone, prezzemolo', price: 20.00 }
      ]
    },
    {
      name: 'Dessert',
      dishes: [
        { name: 'Tiramisù', ingredients: 'Savoiardi, mascarpone, caffè', price: 6.00 },
        { name: 'Panna Cotta', ingredients: 'Panna, zucchero, vaniglia', price: 5.50 },
        { name: 'Cantucci con Vin Santo', ingredients: 'Cantucci, vin santo', price: 7.00 }
      ]
    },
    {
      name: 'Bevande',
      dishes: [
        { name: 'Acqua', ingredients: 'Naturale o frizzante', price: 2.00 },
        { name: 'Vino', ingredients: 'Bianco o rosso', price: 4.00 },
        { name: 'Caffè', ingredients: 'Espresso o macchiato', price: 1.50 }
      ]
    }
  ];

  getRouteForCategory(category: string): string {
    switch (category) {
      case 'Antipasti': return '/menu/antipasti';
      case 'Primi piatti': return '/menu/primi-piatti';
      case 'Secondi piatti': return '/menu/secondi-piatti';
      case 'Dessert': return '/menu/dessert';
      case 'Bevande': return '/menu/bevande';
      default: return '/menu';
    }
  }
}
