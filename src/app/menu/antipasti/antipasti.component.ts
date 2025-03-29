import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientFooterComponent} from "../../shared/client-footer/client-footer.component";

interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

@Component({
  selector: 'app-antipasti',
  standalone: true,
    imports: [CommonModule, ClientFooterComponent],
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
  contorni: Dish[] = [
    { name: 'Brezza di Terra', ingredients: 'Patate novelle al forno con erbe aromatiche e sale rosa', price: 40.00 },
    { name: 'Eco di Orto', ingredients: 'Verdure di stagione grigliate con olio extravergine e timo', price: 42.00 },
    { name: 'Idillio di Foglie', ingredients: 'Insalata mista con dressing allo yogurt e semi di chia', price: 45.00 },
    { name: 'Miraggio di Campo', ingredients: 'Spinaci saltati con aglio e pinoli tostati', price: 43.00 },
    { name: 'Armonia di Radici', ingredients: 'Carote e barbabietole glassate al miele con timo fresco', price: 46.00 },
    { name: 'Carezza dell’Orto', ingredients: 'Zucchine trifolate con menta e scorza di limone', price: 44.00 },
    { name: 'Vento di Collina', ingredients: 'Funghi porcini saltati con prezzemolo e aglio dorato', price: 48.00 }
  ];
}

