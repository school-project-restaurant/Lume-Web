import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  menu = [
    {
      nome: 'Antipasti', piatti: [
        { nome: 'Bruschetta', ingredienti: 'Pomodoro, basilico, aglio', prezzo: 5.99, img: '' },
        { nome: 'Carpaccio di manzo', ingredienti: 'Manzo, rucola, grana', prezzo: 9.99, img: '' }
      ]
    },
    {
      nome: 'Primi Piatti', piatti: [
        { nome: 'Tagliatelle al ragù', ingredienti: 'Pasta fresca, ragù di carne', prezzo: 12.99, img: '' },
        { nome: 'Risotto ai funghi', ingredienti: 'Riso, funghi porcini', prezzo: 14.50, img: '' }
      ]
    },
    {
      nome: 'Secondi Piatti', piatti: [
        { nome: 'Bistecca alla griglia', ingredienti: 'Carne di manzo, spezie', prezzo: 18.99, img: '' },
        { nome: 'Filetto di salmone', ingredienti: 'Salmone fresco, limone', prezzo: 16.50, img: '' }
      ]
    },
    {
      nome: 'Contorni', piatti: [
        { nome: 'Patate al forno', ingredienti: 'Patate, rosmarino', prezzo: 4.99, img: '' },
        { nome: 'Verdure grigliate', ingredienti: 'Zucchine, melanzane, peperoni', prezzo: 5.50, img: '' }
      ]
    },
    {
      nome: 'Dolci', piatti: [
        { nome: 'Tiramisù', ingredienti: 'Mascarpone, caffè, cacao', prezzo: 6.99, img: '' },
        { nome: 'Panna cotta', ingredienti: 'Panna, vaniglia, caramello', prezzo: 5.99, img: '' }
      ]
    }
  ];
}
