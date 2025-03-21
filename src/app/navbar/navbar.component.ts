import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ⬅️ IMPORTA QUESTO

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // ⬅️ AGGIUNGI QUESTO
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent { }
