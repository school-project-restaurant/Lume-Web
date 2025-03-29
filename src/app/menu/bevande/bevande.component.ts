import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientFooterComponent} from "../../shared/client-footer/client-footer.component";

interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

@Component({
  selector: 'app-bevande',
  standalone: true,
    imports: [CommonModule, ClientFooterComponent],
  templateUrl: './bevande.component.html',
  styleUrls: ['./bevande.component.sass']
})
export class BevandeComponent {
  bevande: Dish[] = [
    { name: 'Sorgente di cristallo', ingredients: 'Acqua naturale liscia', price: 12 },
    { name: 'Brezza di perla', ingredients: 'Acqua leggermente frizzante', price: 12.50 },
    { name: 'Cascata di diamante', ingredients: 'Acqua frizzante intensa', price: 13 },
    { name: 'Echi di Rubino Calice', ingredients: 'Calice di vino rosso corposo e intenso', price: 35 },
    { name: 'Echi di Rubino Bottiglia', ingredients: 'Bottiglia di vino rosso corposo e intenso', price: 220 },
    { name: 'Sussurri d Ambra calice', ingredients: 'Calice di vino bianco aromatico e avvolgente', price: 30 },
    { name: 'Sussurri d Ambra Bottiglia', ingredients: 'Bottiglia di vino bianco aromatico e avvolgente', price: 170 },
    { name: 'Veli di cristallo Calice', ingredients: 'Calice di vino frizzante leggero e raffinato', price: 27.50 },
    { name: 'Veli di cristallo Bottiglia', ingredients: 'Bottiglia di vino frizzante leggero e raffinato', price: 120 },
    { name: 'Soffio di Zaffiro Calice', ingredients: 'Calice di vino rosato fresco e fruttato', price: 25 },
    { name: 'Soffio di Zaffiro Bottiglia', ingredients: 'Bottiglia di vino rosato fresco e fruttato', price: 140 },
    { name: 'Rugiada di Perla Calice', ingredients: 'Calice di vino bianco secco e minerale', price: 23.50 },
    { name: 'Rugiada di Perla Bottiglia', ingredients: 'Bottiglia di vino bianco secco e minerale', price: 135 },
    { name: 'Sentieri di Seta Calice', ingredients: 'Calice di vino bianco secco e fruttato', price: 22 },
    { name: 'Sentieri di Seta Bottiglia', ingredients: 'Bottiglia di vino bianco secco e fruttato', price: 123.98 },
    { name: 'Nettare d Oro di atlantide', ingredients: 'Calice di vino bianco con spezie rare, fiori esotici e leggero sentore salmastro', price: 56 },
    { name: 'Nettare d Oro di atlantide', ingredients: 'Bottiglia di vino bianco con spezie rare, fiori esotici e leggero sentore salmastro', price: 390 },
    { name: 'Abissi di Velluto Calice', ingredients: 'Calice di vino rosso giovane e fruttato', price: 20 },
    { name: 'Abissi di Velluto Bottiglia', ingredients: 'Bottiglia di vino rosso giovane e fruttato', price: 110 },
    { name: 'Orizzonti di Sole Calice', ingredients: 'Calice di vino da dessert intenso e liquoroso', price: 22 },
    { name: 'Orizzonti di Sole Bottiglia', ingredients: 'Bottiglia di vino da dessert intenso e liquoroso', price: 120 },
    { name: 'Vento di Luna Calice', ingredients: 'Calice di vino bianco dolce e fruttato', price: 25 },
    { name: 'Vento di Luna Bottiglia', ingredients: 'Bottiglia di vino bianco dolce e fruttato', price: 140 },
    { name: 'Armonie di Terra Calice', ingredients: 'Calice di vino da dessert robusto e speziato', price: 40 },
    { name: 'Armonie di Terra Bottiglia', ingredients: 'Bottiglia di vino da dessert robusto e speziato', price: 260 },
    { name: 'Effervescenza di Zaffiro', ingredients: 'Bibita frizzante con note agrumate', price: 16 },
    { name: 'Cromatismi di Corallo', ingredients: 'Bibita frizzante con note floreali', price: 19 },
    { name: 'Nebulosa di Smeraldo', ingredients: 'Bibita frizzante con sentori di erbe aromatiche', price: 17 },
    { name: 'Aura di Ambra', ingredients: 'Bibita frizzante con sentori speziati', price: 15 },
    { name: 'Scintille di Topazio', ingredients: 'Bibita frizzante con aromi di frutti rossi', price: 15.50 },
  ];
}
