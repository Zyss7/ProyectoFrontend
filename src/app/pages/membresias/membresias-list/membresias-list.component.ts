import { Component, OnInit } from "@angular/core";
import { Loading, Membresia } from "src/app/models/models";
import { MembresiasService } from "../membresias.service";

@Component({
  selector: "app-membresias-list",
  templateUrl: "./membresias-list.component.html",
  styleUrls: ["./membresias-list.component.css"],
})
export class MembresiasListComponent implements OnInit {
  public membresias: Membresia[] = [];
  public membresiaSeleccionada: Membresia = {};

  public loading: Loading = {
    show: true,
  };

  constructor(private srv: MembresiasService) {}

  async ngOnInit() {
    console.log(this.membresias);
    await this.getMembresias();
  }

  async getMembresias() {
    this.membresias = await this.srv.getAll();
    this.loading.show = false;
  }

  setModal(membresias: Membresia) {
    return () => {
      this.membresiaSeleccionada = membresias;
    };
  }

  async eliminar() {
    this.loading.show = true;
    this.loading.primario = "Eliminando...";
    await this.srv.deleteById(this.membresiaSeleccionada.id);
    await this.getMembresias();
    this.loading.show = false;
  }
}
