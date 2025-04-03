import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientFooterComponent} from '../../shared/client-footer/client-footer.component';

interface Dish {
  name: string;
  ingredients: string;
  price: number;
  image: string; // Aggiungi questa proprietà
}

@Component({
  selector: 'app-primi-piatti',
  standalone: true,
  imports: [CommonModule, ClientFooterComponent],
  templateUrl: './primi-piatti.component.html',
  styleUrls: ['./primi-piatti.component.sass']
})
export class PrimiComponent {
  primi: Dish[] = [
    { name: 'Fulgore di Grano', ingredients: 'Risotto con asparagi e gamberi, mantecato al limone', price: 85, image: 'assets/images/fulgore-di-grano.png' },
    { name: 'Orizzonte di Mare', ingredients: 'Linguine allo scoglio con frutti di mare freschi e pomodorini', price: 95, image: 'assets/images/orizzonte-di-mare.png' },
    { name: 'Zefiro di Montagna', ingredients: 'Tagliatelle al ragù di cervo con funghi porcini e ginepro', price: 90, image: 'assets/images/zefiro-di-montagna.png' },
    { name: 'Assioma di Terra', ingredients: 'Ravioli ripieni di ricotta e spinaci con burro fuso e salvia', price: 80, image: 'assets/images/assioma-di-terra.png' },
    { name: 'Corollario di Orto', ingredients: 'Lasagne vegetariane con verdure di stagione e besciamella leggera', price: 75, image: 'assets/images/corollario-di-orto.png' },
    { name: 'Dicotomia di Spezie', ingredients: 'Couscous con verdure e spezie orientali, servito con yogurt greco', price: 82, image: 'assets/images/dicotomia-di-spezie.png' },
    { name: 'Enigma di Lenticchie', ingredients: 'Zuppa di lenticchie con crostini e rosmarino', price: 70, image: 'assets/images/enigma-di-lenticchie.png' },
    { name: 'Iperbole di Farro', ingredients: 'Insalata di farro con tonno, olive, capperi e pomodorini secchi', price: 72, image: 'assets/images/iperbole-di-farro.png' },
    { name: 'Aura di Riso', ingredients: 'Risotto al nero di seppia con calamari e piselli', price: 88, image: 'assets/images/aura-di-riso.png' },
    { name: 'Brezza di Pasta', ingredients: 'Paccheri con ragù di polpo e olive taggiasche', price: 92, image: 'assets/images/brezza-di-pasta.png' },
    { name: 'Eco di Legumi', ingredients: 'Minestrone di verdure fresche con pesto leggero', price: 78, image: 'assets/images/eco-di-legumi.png' },
    { name: 'Idillio di Crema', ingredients: 'Crema di patate con porri e crostini al formaggio', price: 80, image: 'assets/images/idillio-di-crema.png' }
  ];
}
