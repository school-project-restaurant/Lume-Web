import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ClientFooterComponent} from '../shared/client-footer/client-footer.component';
import {RouterLink} from '@angular/router';

interface Preview {
  name: string;
  image: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ClientFooterComponent, NgOptimizedImage, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
  menu: Preview[] = [
    { name: 'Ali fatate', image: 'assets/images/ali-fatate.jpg' },
    { name: 'Antipasti', image: 'assets/images/antipasti.jpg' },
  ];
}
