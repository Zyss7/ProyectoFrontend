import { Component, OnInit } from "@angular/core";
import { Musculo } from "src/app/models/models";
import { MusculosService } from "../../musculos.service";

@Component({
  selector: "app-musculos-list",
  templateUrl: "./musculos-list.component.html",
  styleUrls: ["./musculos-list.component.css"],
})
export class MusculosListComponent implements OnInit {
  public musculos: Musculo[] = [];
  public musculoSeleccionado: Musculo = {};
  constructor(private srv: MusculosService) {}

  async ngOnInit() {
    await this.getMusculos();
  }

  async getMusculos() {
    this.musculos = await this.srv.getAll();
  }

  setModal(musculo: Musculo) {
    return () => {
      this.musculoSeleccionado = musculo;
    };
  }

  sort() {
    this.musculos.sort((a1, a2) => a1.nombre.localeCompare(a2.nombre));
  }

  async eliminarMusculo() {
    await this.srv.deleteById(this.musculoSeleccionado.id);
    await this.getMusculos();
  }
}
