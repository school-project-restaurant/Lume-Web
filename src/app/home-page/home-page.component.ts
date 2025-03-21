import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent { }
