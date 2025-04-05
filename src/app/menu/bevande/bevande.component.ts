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
  selector: 'app-bevande',
  standalone: true,
    imports: [CommonModule, ClientFooterComponent],
  templateUrl: './bevande.component.html',
  styleUrls: ['./bevande.component.sass']
})
export class BevandeComponent {
  bevande: Dish[] = [
    { name: 'Sorgente di cristallo', ingredients: 'Acqua naturale liscia', price: 12, image: 'assets/images/sorgente-di-cristallo.png' },
    { name: 'Brezza di perla', ingredients: 'Acqua leggermente frizzante', price: 12.50, image: 'assets/images/brezza-di-perla.png' },
    { name: 'Cascata di diamante', ingredients: 'Acqua frizzante intensa', price: 13, image: 'assets/images/cascata-di-diamante.png' },
    { name: 'Echi di Rubino Calice', ingredients: 'Calice di vino rosso corposo e intenso', price: 35, image: 'assets/images/echi-di-rubino-calice.png' },
    { name: 'Echi di Rubino Bottiglia', ingredients: 'Bottiglia di vino rosso corposo e intenso', price: 220, image: 'assets/images/echi-di-rubino-bottiglia.png' },
    { name: 'Sussurri d Ambra calice', ingredients: 'Calice di vino bianco aromatico e avvolgente', price: 30, image: 'assets/images/sussurri-d-ambra-calice.png' },
    { name: 'Sussurri d Ambra Bottiglia', ingredients: 'Bottiglia di vino bianco aromatico e avvolgente', price: 170, image: 'assets/images/sussurri-d-ambra-bottiglia.png' },
    { name: 'Veli di cristallo Calice', ingredients: 'Calice di vino frizzante leggero e raffinato', price: 27.50, image: 'assets/images/veli-di-cristallo-calice.png' },
    { name: 'Veli di cristallo Bottiglia', ingredients: 'Bottiglia di vino frizzante leggero e raffinato', price: 120, image: 'assets/images/veli-di-cristallo-bottiglia.png' },
    { name: 'Soffio di Zaffiro Calice', ingredients: 'Calice di vino rosato fresco e fruttato', price: 25, image: 'assets/images/soffio-di-zaffiro-calice.png' },
    { name: 'Soffio di Zaffiro Bottiglia', ingredients: 'Bottiglia di vino rosato fresco e fruttato', price: 140, image: 'assets/images/soffio-di-zaffiro-bottiglia.png' },
    { name: 'Rugiada di Perla Calice', ingredients: 'Calice di vino bianco secco e minerale', price: 23.50, image: 'assets/images/rugiada-di-perla-calice.png' },
    { name: 'Rugiada di Perla Bottiglia', ingredients: 'Bottiglia di vino bianco secco e minerale', price: 135, image: 'assets/images/rugiada-di-perla-bottiglia.png' },
    { name: 'Sentieri di Seta Calice', ingredients: 'Calice di vino bianco secco e fruttato', price: 22, image: 'assets/images/sentieri-di-seta-calice.png' },
    { name: 'Sentieri di Seta Bottiglia', ingredients: 'Bottiglia di vino bianco secco e fruttato', price: 123.98, image: 'assets/images/sentieri-di-seta-bottiglia.png' },
    { name: 'Nettare d Oro di atlantide', ingredients: 'Calice di vino bianco con spezie rare, fiori esotici e leggero sentore salmastro', price: 56, image: 'assets/images/nettare-d-oro-di-atlantide-calice.png' },
    { name: 'Nettare d Oro di atlantide', ingredients: 'Bottiglia di vino bianco con spezie rare, fiori esotici e leggero sentore salmastro', price: 390, image: 'assets/images/nettare-d-oro-di-atlantide-bottiglia.png' },
    { name: 'Abissi di Velluto Calice', ingredients: 'Calice di vino rosso giovane e fruttato', price: 20, image: 'assets/images/abissi-di-velluto-calice.png' },
    { name: 'Abissi di Velluto Bottiglia', ingredients: 'Bottiglia di vino rosso giovane e fruttato', price: 110, image: 'assets/images/abissi-di-velluto-bottiglia.png' },
    { name: 'Orizzonti di Sole Calice', ingredients: 'Calice di vino da dessert intenso e liquoroso', price: 22, image: 'assets/images/orizzonti-di-sole-calice.png' },
    { name: 'Orizzonti di Sole Bottiglia', ingredients: 'Bottiglia di vino da dessert intenso e liquoroso', price: 120, image: 'assets/images/orizzonti-di-sole-bottiglia.png' },
    { name: 'Vento di Luna Calice', ingredients: 'Calice di vino bianco dolce e fruttato', price: 25, image: 'assets/images/vento-di-luna-calice.png' },
    { name: 'Vento di Luna Bottiglia', ingredients: 'Bottiglia di vino bianco dolce e fruttato', price: 140, image: 'assets/images/vento-di-luna-bottiglia.png' },
    { name: 'Armonie di Terra Calice', ingredients: 'Calice di vino da dessert robusto e speziato', price: 40, image: 'assets/images/armonie-di-terra-calice.png' },
    { name: 'Armonie di Terra Bottiglia', ingredients: 'Bottiglia di vino da dessert robusto e speziato', price: 260, image: 'assets/images/armonie-di-terra-bottiglia.png' },
    { name: 'Effervescenza di Zaffiro', ingredients: 'Bibita frizzante con note agrumate', price: 16, image: 'assets/images/effervescenza-di-zaffiro.png' },
    { name: 'Cromatismi di Corallo', ingredients: 'Bibita frizzante con note floreali', price: 19, image: 'assets/images/cromatismi-di-corallo.png' },
    { name: 'Nebulosa di Smeraldo', ingredients: 'Bibita frizzante con sentori di erbe aromatiche', price: 17, image: 'assets/images/nebulosa-di-smeraldo.png' },
    { name: 'Aura di Ambra', ingredients: 'Bibita frizzante con sentori speziati', price: 15, image: 'assets/images/aura-di-ambra.png' },
    { name: 'Scintille di Topazio', ingredients: 'Bibita frizzante con aromi di frutti rossi', price: 15.50, image: 'assets/images/scintille-di-topazio.png' },
  ];
}
