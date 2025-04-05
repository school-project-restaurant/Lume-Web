import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ IMPORTA QUESTO
import { FormsModule } from '@angular/forms';
import {ClientFooterComponent} from '../shared/client-footer/client-footer.component'; // ⬅️ IMPORTA QUESTO

@Component({
  selector: 'app-login',
  standalone: true, // ⬅️ IMPORTANTE
  imports: [CommonModule, FormsModule, ClientFooterComponent], // ⬅️ AGGIUNGI CommonModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  telefono: string = '';
  password: string = '';
  nome: string = '';
  cognome: string = '';
  telefonoReg: string = '';
  email: string = '';
  passwordReg: string = '';

  login() {
    console.log("Login con:", this.telefono, this.password);
    alert(`Accesso effettuato con ${this.telefono}`);
  }

  register() {
    console.log("Registrazione:", this.nome, this.cognome, this.telefonoReg, this.email, this.passwordReg);
    alert(`Registrazione completata per ${this.nome} ${this.cognome}`);
  }
}
