import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent {
  staff = [
    { nome: 'Mario Rossi', ruolo: 'Chef', attivo: true },
    { nome: 'Luca Bianchi', ruolo: 'Cameriere', attivo: false },
    { nome: 'Giulia Verdi', ruolo: 'Responsabile sala', attivo: true }
  ];

  nuovoNome: string = '';
  nuovoRuolo: string = '';

  toggleStato(membro: any) {
    membro.attivo = !membro.attivo;
  }

  rimuoviMembro(membro: any) {  // ⬅️ IL METODO CHE MANCAVA!
    this.staff = this.staff.filter(m => m !== membro);
  }

  aggiungiMembro() {
    if (this.nuovoNome && this.nuovoRuolo) {
      this.staff.push({ nome: this.nuovoNome, ruolo: this.nuovoRuolo, attivo: true });
      this.nuovoNome = '';
      this.nuovoRuolo = '';
    } else {
      alert('Compila tutti i campi!');
    }
  }
}
