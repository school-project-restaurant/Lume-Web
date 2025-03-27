import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';

interface Preview {
  name: string;
  image: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
  menu: Preview[] = [
    { name: 'Ali fatate', image: 'assets/images/ali-fatate.jpg' },
    { name: 'Antipasti', image: 'assets/images/antipasti.jpg' },
  ];
}
