import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ Importa CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, FormsModule], // ⬅️ Aggiungi CommonModule qui
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent {
  prenotazioni = [
    { nome: "Mario Rossi", data: "21/03/2025", orario: "18:30", tavolo: 1, persone: 5, telefono: "+39 123 456 7890" },
    { nome: "Luca Bianchi", data: "21/03/2025", orario: "19:00", tavolo: 2, persone: 4, telefono: "+39 987 654 3210" }
  ];

  tavoliAssegnati: any[] = [];

  nuovaPrenotazione = {
    nome: "",
    data: "",
    orario: "",
    tavolo: 0,
    persone: 0,
    telefono: "",
  };

  aggiungiPrenotazione() {
    console.log("Dati inseriti prima del controllo:", this.nuovaPrenotazione);

    // Assicuriamoci che tavolo e persone siano numeri
    this.nuovaPrenotazione.tavolo = Number(this.nuovaPrenotazione.tavolo);
    this.nuovaPrenotazione.persone = Number(this.nuovaPrenotazione.persone);

    // Controllo se la data è nel formato corretto
    const dataRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
    if (!this.nuovaPrenotazione.data.match(dataRegex)) {
      alert("Formato data non valido! Usa YYYY-MM-DD.");
      return;
    }

    // Controllo che tutti i campi siano compilati correttamente
    if (
      this.nuovaPrenotazione.nome.trim() === "" ||
      this.nuovaPrenotazione.data.trim() === "" ||
      this.nuovaPrenotazione.orario.trim() === "" ||
      isNaN(this.nuovaPrenotazione.tavolo) ||
      this.nuovaPrenotazione.tavolo <= 0 ||
      isNaN(this.nuovaPrenotazione.persone) ||
      this.nuovaPrenotazione.persone <= 0 ||
      this.nuovaPrenotazione.telefono.trim() === ""
    ) {
      alert("Compila tutti i campi correttamente!");
      return;
    }

    console.log("Tentativo di aggiunta prenotazione...", this.nuovaPrenotazione);

    // Aggiunge la prenotazione all'elenco
    this.prenotazioni.push({ ...this.nuovaPrenotazione });

    // Reset dei campi
    this.nuovaPrenotazione = {
      nome: "",
      data: "",
      orario: "",
      tavolo: 0,
      persone: 0,
      telefono: "",
    };
  }


  prendiPrenotazione(prenotazione: any) {
    this.tavoliAssegnati.push(prenotazione);
    this.prenotazioni = this.prenotazioni.filter(p => p !== prenotazione);
  }

  aggiungiOrdine(tavolo: any, ordine: string) {
    if (!tavolo.ordini) {
      tavolo.ordini = [];
    }
    tavolo.ordini.push(ordine);
  }
}
