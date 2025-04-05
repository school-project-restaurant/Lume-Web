import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ClientFooterComponent} from '../shared/client-footer/client-footer.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule, ClientFooterComponent],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.sass']
})
export class ReservationsComponent {
  orario: string = '';
  persone: number = 1;
  note: string = '';

  prenotazioni: { data: string; persone: number; note?: string }[] = [];

  prenota() {
    if (this.orario && this.persone > 0) {
      const nuovaPrenotazione = {
        data: this.orario,
        persone: this.persone,
        note: this.note
      };
      this.prenotazioni.push(nuovaPrenotazione);
      this.orario = '';
      this.persone = 1;
      this.note = '';
      alert('Prenotazione effettuata!');
    } else {
      alert('Compila tutti i campi!');
    }
  }

  cancellaPrenotazione(prenotazione: any) {
    this.prenotazioni = this.prenotazioni.filter(p => p !== prenotazione);
  }
}
