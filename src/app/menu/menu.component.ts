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
      name: 'Antipasti & Contorni',
      dishes: [
        { name: 'Eco Agromato', ingredients: 'Carpaccio di pesce spada con salsa di zafferano e petali di fiori', price: 80.00 },
        { name: 'Idillio di Foglie', ingredients: 'Insalata mista con dressing allo yogurt e semi di chia', price: 45.00 },
        { name: 'Miraggio di Zucca', ingredients: 'Vellutata di zucca con amaretti e olio al rosmarino', price: 65.00 }
      ]
    },
    {
      name: 'Primi piatti',
      dishes: [
        { name: 'Assioma di Terra', ingredients: 'Ravioli ripieni di ricotta e spinaci con burro fuso e salvia', price: 80 },
        { name: 'Corollario di Orto', ingredients: 'Lasagne vegetariane con verdure di stagione e besciamella leggera', price: 75 },
        { name: 'Dicotomia di Spezie', ingredients: 'Couscous con verdure e spezie orientali, servito con yogurt greco', price: 82 }
      ]
    },
    {
      name: 'Secondi piatti',
      dishes: [
        { name: 'Fulgore di Bosco', ingredients: 'Anatra all\'arancia con purè di sedano rapa e riduzione al Grand Marnier', price: 125.00 },
        { name: 'Orizzonte di Gusto', ingredients: 'Costolette di agnello con salsa alla menta e cous cous speziato', price: 140.00 },
        { name: 'Essenza Mediterranea', ingredients: 'Spiedini di pesce spada con pomodorini e salsa alle erbe', price: 118.00 }
      ]
    },
    {
      name: 'Dessert',
      dishes: [
        { name: 'Orizzonte di Dolcezza', ingredients: 'Panna cotta con salsa ai frutti di bosco e crumble croccante', price: 52.00 },
        { name: 'Zefiro di Caffè', ingredients: 'Tiramisù al caffè con scaglie di cioccolato e crema al mascarpone', price: 58.00 },
        { name: 'Nebbia di Lamponi', ingredients: 'Semifreddo ai lamponi con coulis di frutti rossi e granella di pistacchi', price: 53.00 },
      ]
    },
    {
      name: 'Bevande',
      dishes: [
        { name: 'Sorgente di cristallo', ingredients: 'Acqua naturale liscia', price: 12 },
        { name: 'Nettare d Oro di atlantide', ingredients: 'Bottiglia di vino bianco con spezie rare, fiori esotici e leggero sentore salmastro', price: 390 },
        { name: 'Scintille di Topazio', ingredients: 'Bibita frizzante con aromi di frutti rossi', price: 15.50 },
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
