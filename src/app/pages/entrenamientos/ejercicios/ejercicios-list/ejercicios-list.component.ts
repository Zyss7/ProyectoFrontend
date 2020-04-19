import { Component, OnInit } from "@angular/core";
import { EjerciciosService } from "../../ejercicios.service";
import { Ejercicios, Loading } from "../../../../models/models";

@Component({
  selector: "app-ejercicios-list",
  templateUrl: "./ejercicios-list.component.html",
  styleUrls: ["./ejercicios-list.component.css"],
})
export class EjerciciosListComponent implements OnInit {
  public ejercicios: Ejercicios[] = [];
  public ejercicioSeleccionado: Ejercicios = {};

  public loading: Loading = {
    show: true,
  };

  constructor(private srv: EjerciciosService) {}

  async ngOnInit() {
    console.log(this.ejercicios);
    await this.getEjericicios();
    this.loading.show = false;
  }

  async getEjericicios() {
    this.loading.primario = "Cargando...";
    this.ejercicios = await this.srv.getAll();
  }

  setModal(ejercicio: Ejercicios) {
    return () => {
      this.ejercicioSeleccionado = ejercicio;
    };
  }

  async eliminar() {
    this.loading.show = true;
    this.loading.primario = "Eliminando...";
    await this.srv.deleteById(this.ejercicioSeleccionado.id);
    await this.getEjericicios();
    this.loading.show = false;
  }
}
