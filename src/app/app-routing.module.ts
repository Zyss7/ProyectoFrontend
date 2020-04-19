import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientesFormComponent } from "./pages/clientes/clientes-form/clientes-form.component";
import { EntrenadoresFormComponent } from "./pages/entrenadores/entrenadores-form/entrenadores-form.component";
import { MembresiasFormComponent } from "./pages/membresias/membresias-form/membresias-form.component";
import { EtapasFormComponent } from "./pages/entrenamientos/etapas/etapas-form/etapas-form.component";
import { MusculosFormComponent } from "./pages/entrenamientos/musculos/musculos-form/musculos-form.component";
import { EjerciciosFormComponent } from "./pages/entrenamientos/ejercicios/ejercicios-form/ejercicios-form.component";
import { RutinasFormComponent } from "./pages/rutinas/rutinas-form/rutinas-form.component";
import { RutinasListComponent } from "./pages/rutinas/rutinas-list/rutinas-list.component";
import { EtapasListComponent } from "./pages/entrenamientos/etapas/etapas-list/etapas-list.component";
import { ClientesListComponent } from "./pages/clientes/clientes-list/clientes-list.component";
import { EntrenadoresListComponent } from "./pages/entrenadores/entrenadores-list/entrenadores-list.component";
import { MembresiasListComponent } from "./pages/membresias/membresias-list/membresias-list.component";
import { MusculosListComponent } from "./pages/entrenamientos/musculos/musculos-list/musculos-list.component";
import { EjerciciosListComponent } from "./pages/entrenamientos/ejercicios/ejercicios-list/ejercicios-list.component";

const routes: Routes = [
  { path: "clientes-form", component: ClientesFormComponent },
  { path: "clientes-list", component: ClientesListComponent },
  { path: "entrenadores-form", component: EntrenadoresFormComponent },
  { path: "entrenadores-list", component: EntrenadoresListComponent },
  { path: "membresias-form", component: MembresiasFormComponent },
  { path: "membresias-list", component: MembresiasListComponent },
  { path: "etapas-form", component: EtapasFormComponent },
  { path: "etapas-form/edit/:id", component: EtapasFormComponent },
  { path: "etapas-list", component: EtapasListComponent },
  { path: "musculos-form", component: MusculosFormComponent },
  { path: "musculos-form/edit/:id", component: MusculosFormComponent },
  { path: "musculos-list", component: MusculosListComponent },
  { path: "ejercicios-form", component: EjerciciosFormComponent },
  { path: "ejercicios-form/edit/:id", component: EjerciciosFormComponent },
  { path: "ejercicios-list", component: EjerciciosListComponent },
  { path: "rutinas-form", component: RutinasFormComponent },
  { path: "rutinas-list", component: RutinasListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
