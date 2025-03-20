import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chef',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.sass']
})
export class ChefComponent {
  ordini = [
    { tavolo: 1, piatti: ['Pasta al Pomodoro', 'Tiramisù'], pronto: false },
    { tavolo: 3, piatti: ['Pizza Margherita'], pronto: true },
    { tavolo: 5, piatti: ['Risotto ai Funghi'], pronto: false }
  ];

  nuovoTavolo: number = 1;
  nuoviPiatti: string = '';

  completaOrdine(ordine: any) {
    ordine.pronto = !ordine.pronto;
  }

  rimuoviOrdine(ordine: any) {
    this.ordini = this.ordini.filter(o => o !== ordine);
  }

  aggiungiOrdine() {
    if (this.nuovoTavolo && this.nuoviPiatti.trim() !== '') {
      const nuovoOrdine = {
        tavolo: this.nuovoTavolo,
        piatti: this.nuoviPiatti.split(',').map(p => p.trim()),
        pronto: false
      };
      this.ordini.push(nuovoOrdine);
      this.nuovoTavolo = 1;
      this.nuoviPiatti = '';
    } else {
      alert('Compila tutti i campi!');
    }
  }
}
