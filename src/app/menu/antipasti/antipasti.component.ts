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
    { name: 'Aura Marina', ingredients: 'Ostriche con spuma di mare e perle di caviali', price: 70.00 },
    { name: 'Brezza di Bosco', ingredients: 'Tartare di funghi con germogli selvatici e crumble di nocciole', price: 60.00 },
    { name: 'Eco Agromato', ingredients: 'Carpaccio di pesce spada con salsa di zafferano e petali di fiori', price: 80.00 },
    { name: 'Idillio Estivo', ingredients: 'Insalata di melone e prosciutto con sfere di mozzarella e menta', price: 55.00 },
    { name: 'Miraggio di Zucca', ingredients: 'Vellutata di zucca con amaretti e olio al rosmarino', price: 65.00 },
    { name: 'Abisso di radici', ingredients: 'Carciofi alla giuda con riduzione di aceto balsamico e pecorino', price: 75.00 },
    { name: 'Crepuscolo di Agrumi', ingredients: 'Insalata di arance e finocchi con olive taggiasche e mandorle', price: 68.00 }
  ];
}
