import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientFooterComponent} from "../../shared/client-footer/client-footer.component";

interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

@Component({
  selector: 'app-secondi-piatti',
  standalone: true,
    imports: [CommonModule, ClientFooterComponent],
  templateUrl: './secondi-piatti.component.html',
  styleUrls: ['./secondi-piatti.component.sass']
})
export class SecondiComponent {
  secondi: Dish[] = [
    { name: 'Miraggio di Corallo', ingredients: 'Filetto di salmone al forno con salsa teriyaki e verdure croccanti', price: 110.00 },
    { name: 'Abisso di Carne', ingredients: 'Filetto di manzo con riduzione di vino rosso e funghi porcini', price: 130.00 },
    { name: 'Crepuscolo di Mare', ingredients: 'Polpo alla griglia con crema di ceci e peperoni confit', price: 120.00 },
    { name: 'Fulgore di Bosco', ingredients: 'Anatra all\'arancia con purè di sedano rapa e riduzione al Grand Marnier', price: 125.00 },
    { name: 'Orizzonte di Gusto', ingredients: 'Costolette di agnello con salsa alla menta e cous cous speziato', price: 140.00 },
    { name: 'Essenza Mediterranea', ingredients: 'Spiedini di pesce spada con pomodorini e salsa alle erbe', price: 118.00 },
    { name: 'Tramonto d’Oriente', ingredients: 'Petto di anatra marinato alla soia con pak choi e sesamo', price: 122.00 },
    { name: 'Respiro del Sud', ingredients: 'Involtini di melanzane con provola affumicata e pomodorini confit', price: 90.00 },
    { name: 'Battito della Terra', ingredients: 'Spezzatino di capriolo con patate al forno e salsa ai mirtilli', price: 115.00 },
    { name: 'Giardino d’Inverno', ingredients: 'Involtini di verza ripieni con crema di zucca e nocciole', price: 92.00 },
    { name: 'Sinfonia di Fuoco', ingredients: 'Spiedini misti alla brace con verdure grigliate e salsa chimichurri', price: 108.00 },
    { name: 'Carezza del Bosco', ingredients: 'Fagiano arrosto con patate novelle e salsa al tartufo', price: 125.00 }
  ];
}
