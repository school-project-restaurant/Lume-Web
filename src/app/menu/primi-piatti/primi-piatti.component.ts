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
    { name: 'Fulgore di Grano', ingredients: 'Risotto con asparagi e gamberi, mantecato al limone', price: 85 },
    { name: 'Orizzonte di Mare', ingredients: 'Linguine allo scoglio con frutti di mare freschi e pomodorini', price: 95 },
    { name: 'Zefiro di Montagna', ingredients: 'Tagliatelle al ragù di cervo con funghi porcini e ginepro', price: 90 },
    { name: 'Assioma di Terra', ingredients: 'Ravioli ripieni di ricotta e spinaci con burro fuso e salvia', price: 80 },
    { name: 'Corollario di Orto', ingredients: 'Lasagne vegetariane con verdure di stagione e besciamella leggera', price: 75 },
    { name: 'Dicotomia di Spezie', ingredients: 'Couscous con verdure e spezie orientali, servito con yogurt greco', price: 82 },
    { name: 'Enigma di Lenticchie', ingredients: 'Zuppa di lenticchie con crostini e rosmarino', price: 70 },
    { name: 'Iperbole di Farro', ingredients: 'Insalata di farro con tonno, olive, capperi e pomodorini secchi', price: 72 },
    { name: 'Aura di Riso', ingredients: 'Risotto al nero di seppia con calamari e piselli', price: 88 },
    { name: 'Brezza di Pasta', ingredients: 'Paccheri con ragù di polpo e olive taggiasche', price: 92 },
    { name: 'Eco di Legumi', ingredients: 'Minestrone di verdure fresche con pesto leggero', price: 78 },
    { name: 'Idillio di Crema', ingredients: 'Crema di patate con porri e crostini al formaggio', price: 80 }
  ];
}
