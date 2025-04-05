import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFooterComponent } from "../../shared/client-footer/client-footer.component";

interface Dish {
  name: string;
  ingredients: string;
  price: number;
  image: string; // Aggiungi la proprietà image
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
    { name: 'Miraggio di Corallo', ingredients: 'Filetto di salmone al forno con salsa teriyaki e verdure croccanti', price: 110.00, image: 'assets/images/miraggio-di-corallo.png' },
    { name: 'Abisso di Carne', ingredients: 'Filetto di manzo con riduzione di vino rosso e funghi porcini', price: 130.00, image: 'assets/images/abisso-di-carne.png' },
    { name: 'Crepuscolo di Mare', ingredients: 'Polpo alla griglia con crema di ceci e peperoni confit', price: 120.00, image: 'assets/images/crepuscolo-di-mare.png' },
    { name: 'Fulgore di Bosco', ingredients: 'Anatra all\'arancia con purè di sedano rapa e riduzione al Grand Marnier', price: 125.00, image: 'assets/images/fulgore-di-bosco.png' },
    { name: 'Orizzonte di Gusto', ingredients: 'Costolette di agnello con salsa alla menta e cous cous speziato', price: 140.00, image: 'assets/images/orizzonte-di-gusto.png' },
    { name: 'Zefiro di Pesce', ingredients: 'Spigola al sale con verdure grigliate e salsa al limone', price: 118.00, image: 'assets/images/zefiro-di-pesce.png' },
    { name: 'Assioma di Pollo', ingredients: 'Pollo al curry con riso basmati e verdure esotiche', price: 122.00, image: 'assets/images/assioma-di-pollo.png' },
    { name: 'Corollario di Cacciagione', ingredients: 'Coniglio in umido con polenta taragna e funghi misti', price: 90.00, image: 'assets/images/corollario-di-cacciagione.png' },
    { name: 'Dicotomia di Sapori', ingredients: 'Tofu grigliato con salsa agrodolce e verdure saltate', price: 115.00, image: 'assets/images/dicotomia-di-sapori.png' },
    { name: 'Enigma di Tradizione', ingredients: 'Baccalà alla livornese con pomodoro, olive e capperi', price: 92.00, image: 'assets/images/enigma-di-tradizione.png' },
    { name: 'Iperbole di Latte', ingredients: 'Stracotto di vitello al Barolo con purè di patate e carote glassate', price: 108.00, image: 'assets/images/iperbole-di-latte.png' },
    { name: 'Brezza di Mare', ingredients: 'Zuppa di pesce con crostini e prezzemolo', price: 125.00, image: 'assets/images/brezza-di-mare.png' }

  ];
}
