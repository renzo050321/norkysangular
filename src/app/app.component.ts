import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartaComponent } from './carta/carta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConcactoComponent } from './concacto/concacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,HomeComponent,FooterComponent,CartaComponent,FormularioComponent,ConcactoComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'norkysangular';
}
