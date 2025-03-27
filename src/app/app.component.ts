import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ⬅️ IMPORTA RouterModule
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule, FooterComponent], // ⬅️ AGGIUNGI RouterModule QUI
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Lume-Web';
}
