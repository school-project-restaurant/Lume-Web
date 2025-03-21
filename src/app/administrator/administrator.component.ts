import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-administrator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.sass']
})
export class AdministratorComponent {
  utenti = [
    { nome: 'Mario Rossi', ruolo: 'Chef' },
    { nome: 'Luca Bianchi', ruolo: 'Cameriere' },
    { nome: 'Giulia Verdi', ruolo: 'Responsabile' }
  ];

  ruoliDisponibili = ['Chef', 'Cameriere', 'Responsabile', 'Amministratore'];

  nuovoNome: string = '';
  nuovoRuolo: string = 'Chef';

  rimuoviUtente(utente: any) {
    this.utenti = this.utenti.filter(u => u !== utente);
  }

  aggiungiUtente() {
    if (this.nuovoNome) {
      this.utenti.push({ nome: this.nuovoNome, ruolo: this.nuovoRuolo });
      this.nuovoNome = '';
      this.nuovoRuolo = 'Chef';
    } else {
      alert('Compila tutti i campi!');
    }
  }
}
