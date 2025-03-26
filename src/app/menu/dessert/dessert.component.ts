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
    { name: 'Abisso di Agrumi', ingredients: 'Mousse al limone con meringhe e zest di arancia', price: 50.00 },
    { name: 'Crepuscolo di Cioccolato', ingredients: 'Tortino al cioccolato con cuore caldo e gelato alla vaniglia', price: 55.00 },
    { name: 'Fulgore di Frutta', ingredients: 'Crostata di frutta fresca con crema pasticcera alla vaniglia', price: 48.00 },
    { name: 'Orizzonte di Dolcezza', ingredients: 'Panna cotta con salsa ai frutti di bosco e crumble croccante', price: 52.00 },
    { name: 'Zefiro di Caffè', ingredients: 'Tiramisù al caffè con scaglie di cioccolato e crema al mascarpone', price: 58.00 },
    { name: 'Nebbia di Lamponi', ingredients: 'Semifreddo ai lamponi con coulis di frutti rossi e granella di pistacchi', price: 53.00 },
    { name: 'Sogno d’Oriente', ingredients: 'Cheesecake al tè verde matcha con salsa di mango', price: 56.00 },
    { name: 'Cristallo di Miele', ingredients: 'Baklava con noci e miele servita con gelato alla cannella', price: 60.00 },
    { name: 'Luce di Vaniglia', ingredients: 'Crema catalana alla vaniglia bourbon con zucchero caramellato', price: 54.00 }
  ];
}
