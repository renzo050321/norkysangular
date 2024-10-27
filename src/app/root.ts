import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConcactoComponent } from './concacto/concacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'contacto', component: ConcactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }