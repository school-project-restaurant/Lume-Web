// Importazione dei moduli Angular essenziali e del footer condiviso
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientFooterComponent } from "../shared/client-footer/client-footer.component";

// Interfaccia che definisce un piatto del menù
interface Dish {
  name: string;         // Nome del piatto
  ingredients: string;  // Descrizione o lista ingredienti
  price: number;        // Prezzo in euro
  image: string;        // Percorso immagine del piatto
}

// Ogni categoria contiene un nome e un array di piatti
interface MenuCategory {
  name: string;
  dishes: Dish[];
}

// Componente standalone Angular per la pagina del menù
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, ClientFooterComponent], // Import dei moduli necessari
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

  // Lista delle categorie del menù con i rispettivi piatti
  menuCategories: MenuCategory[] = [
    {
      name: 'Antipasti',
      dishes: [
        {
          name: 'Eco Agrumato',
          ingredients: 'Carpaccio di pesce spada con salsa di zafferano e petali di fiori',
          price: 80.00,
          image: 'assets/images/eco-agromato.png'
        },
        {
          name: 'Idillio di Foglie',
          ingredients: 'Insalata mista con dressing allo yogurt e semi di chia',
          price: 45.00,
          image: 'assets/images/idillio-di-foglie.png'
        },
        {
          name: 'Miraggio di Zucca',
          ingredients: 'Vellutata di zucca con amaretti e olio al rosmarino',
          price: 65.00,
          image: 'assets/images/miraggio-di-zucca.png'
        }
      ]
    },
    {
      name: 'Primi piatti',
      dishes: [
        {
          name: 'Assioma di Terra',
          ingredients: 'Ravioli ripieni di ricotta e spinaci con burro fuso e salvia',
          price: 80,
          image: 'assets/images/assioma-di-terra.png'
        },
        {
          name: 'Corollario di Orto',
          ingredients: 'Lasagne vegetariane con verdure di stagione e besciamella leggera',
          price: 75,
          image: 'assets/images/corollario-di-orto.png'
        },
        {
          name: 'Dicotomia di Spezie',
          ingredients: 'Couscous con verdure e spezie orientali, servito con yogurt greco',
          price: 82,
          image: 'assets/images/dicotomia-di-spezie.png'
        }
      ]
    },
    {
      name: 'Secondi piatti',
      dishes: [
        {
          name: 'Fulgore di Bosco',
          ingredients: 'Anatra all\'arancia con purè di sedano rapa e riduzione al Grand Marnier',
          price: 125.00,
          image: 'assets/images/fulgore-di-bosco.png'
        },
        {
          name: 'Orizzonte di Gusto',
          ingredients: 'Costolette di agnello con salsa alla menta e cous cous speziato',
          price: 140.00,
          image: 'assets/images/orizzonte-di-gusto.png'
        },
        {
          name: 'Crepuscolo di Mare',
          ingredients: 'Polpo alla griglia con crema di ceci e peperoni confit',
          price: 120.00,
          image: 'assets/images/crepuscolo-di-mare.png'
        }
      ]
    },
    {
      name: 'Dessert',
      dishes: [
        {
          name: 'Orizzonte di Dolcezza',
          ingredients: 'Panna cotta con salsa ai frutti di bosco e crumble croccante',
          price: 52.00,
          image: 'assets/images/orizzonte-di-dolcezza.png'
        },
        {
          name: 'Zefiro di Caffè',
          ingredients: 'Tiramisù al caffè con scaglie di cioccolato e crema al mascarpone',
          price: 58.00,
          image: 'assets/images/zefiro-di-caffe.png'
        },
        {
          name: 'Abisso di Agrumi',
          ingredients: 'Mousse al limone con meringhe e zest di arancia',
          price: 50.00,
          image: 'assets/images/abisso-di-agrumi.png'
        }
      ]
    },
    {
      name: 'Bevande',
      dishes: [
        {
          name: 'Sorgente di cristallo',
          ingredients: 'Acqua naturale liscia',
          price: 12,
          image: 'assets/images/sorgente-di-cristallo.png'
        },
        {
          name: 'Sussurri d Ambra Bottiglia',
          ingredients: 'Bottiglia di vino bianco aromatico e avvolgente',
          price: 170,
          image: 'assets/images/sussurri-d-ambra-bottiglia.png'
        },
        {
          name: 'Scintille di Topazio',
          ingredients: 'Bibita frizzante con aromi di frutti rossi',
          price: 15.50,
          image: 'assets/images/scintille-di-topazio.png'
        }
      ]
    }
  ];

  // Metodo per restituire la route corretta in base alla categoria selezionata
  getRouteForCategory(category: string): string {
    switch (category) {
      case 'Antipasti': return '/menu/antipasti';
      case 'Primi piatti': return '/menu/primi-piatti';
      case 'Secondi piatti': return '/menu/secondi-piatti';
      case 'Dessert': return '/menu/dessert';
      case 'Bevande': return '/menu/bevande';
      default: return '/menu'; // Fallback
    }
  }
}
