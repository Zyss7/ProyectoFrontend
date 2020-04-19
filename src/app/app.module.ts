import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelRequeridoComponent } from './components/label-requerido/label-requerido.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableActionsComponent } from './components/table-layout/table-actions.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';
import { TituloListaComponent } from './components/titulo-lista/titulo-lista.component';
import { ClientesFormComponent } from './pages/clientes/clientes-form/clientes-form.component';
import { ClientesListComponent } from './pages/clientes/clientes-list/clientes-list.component';
import { EntrenadoresFormComponent } from './pages/entrenadores/entrenadores-form/entrenadores-form.component';
import { EntrenadoresListComponent } from './pages/entrenadores/entrenadores-list/entrenadores-list.component';
import { EjerciciosFormComponent } from './pages/entrenamientos/ejercicios/ejercicios-form/ejercicios-form.component';
import { EjerciciosListComponent } from './pages/entrenamientos/ejercicios/ejercicios-list/ejercicios-list.component';
import { EtapasFormComponent } from './pages/entrenamientos/etapas/etapas-form/etapas-form.component';
import { EtapasListComponent } from './pages/entrenamientos/etapas/etapas-list/etapas-list.component';
import { MusculosFormComponent } from './pages/entrenamientos/musculos/musculos-form/musculos-form.component';
import { MusculosListComponent } from './pages/entrenamientos/musculos/musculos-list/musculos-list.component';
import { MembresiasFormComponent } from './pages/membresias/membresias-form/membresias-form.component';
import { MembresiasListComponent } from './pages/membresias/membresias-list/membresias-list.component';
import { RutinasFormComponent } from './pages/rutinas/rutinas-form/rutinas-form.component';
import { RutinasListComponent } from './pages/rutinas/rutinas-list/rutinas-list.component';
import { ArrayPipe } from './pipes/array.pipe';
import { LoadingComponent } from './components/loading/loading.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesFormComponent,
    ClientesListComponent,
    EntrenadoresFormComponent,
    EntrenadoresListComponent,
    MembresiasFormComponent,
    MembresiasListComponent,
    RutinasFormComponent,
    RutinasListComponent,
    MusculosFormComponent,
    MusculosListComponent,
    EjerciciosFormComponent,
    EjerciciosListComponent,
    EtapasFormComponent,
    EtapasListComponent,
    LabelRequeridoComponent,
    TituloListaComponent,
    TableLayoutComponent,
    TableActionsComponent,
    ArrayPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
