import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientFooterComponent} from "../../shared/client-footer/client-footer.component";

interface Dish {
  name: string;
  ingredients: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-dessert',
  standalone: true,
    imports: [CommonModule, ClientFooterComponent],
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.sass']
})

export class DessertComponent {
  dessert: Dish[] = [
    { name: 'Abisso di Agrumi', ingredients: 'Mousse al limone con meringhe e zest di arancia', price: 50.00, image: 'assets/images/abisso-di-agrumi.png' },
    { name: 'Crepuscolo di Cioccolato', ingredients: 'Tortino al cioccolato con cuore caldo e gelato alla vaniglia', price: 55.00, image: 'assets/images/crepuscolo-di-cioccolato.png' },
    { name: 'Fulgore di Frutta', ingredients: 'Crostata di frutta fresca con crema pasticcera alla vaniglia', price: 48.00, image: 'assets/images/fulgore-di-frutta.png' },
    { name: 'Orizzonte di Dolcezza', ingredients: 'Panna cotta con salsa ai frutti di bosco e crumble croccante', price: 52.00, image: 'assets/images/orizzonte-di-dolcezza.png' },
    { name: 'Zefiro di Caffè', ingredients: 'Tiramisù al caffè con scaglie di cioccolato e crema al mascarpone', price: 58.00, image: 'assets/images/zefiro-di-caffe.png' },
    { name: 'Assioma di Miele', ingredients: 'Cheesecake al miele con noci pecan e salsa al caramello', price: 56.00, image: 'assets/images/assioma-di-miele.png' },
    { name: 'Cristallo di Lavanda', ingredients: 'Crème brûlée alla lavanda con biscotti alle spezie', price: 60.00, image: 'assets/images/cristallo-di-lavanda.png' },
    { name: 'Enigma di Freschezza', ingredients: 'Sorbetto al mango con menta e lime', price: 46.00, image: 'assets/images/enigma-di-freschezza.png' }
  ];
}
