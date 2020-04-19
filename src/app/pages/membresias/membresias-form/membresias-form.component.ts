import { Component, OnInit } from "@angular/core";
import { Membresia, Loading } from "src/app/models/models";
import { Router, ActivatedRoute } from "@angular/router";
import { MembresiasService } from "../membresias.service";

@Component({
  selector: "app-membresias-form",
  templateUrl: "./membresias-form.component.html",
  styleUrls: ["./membresias-form.component.css"],
})
export class MembresiasFormComponent implements OnInit {
  public membresia: Membresia = {
    nombre: "",
    descripcion: "",
    extra: "",
    duracion: 1,
    tipoDuracion: "",
    precio: 1,
  };

  public loading: Loading = {
    show: true,
  };

  private id: number = null;

  constructor(
    private srv: MembresiasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    console.log("HOLA MUNDO");
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.membresia = await this.srv.getById(this.id);
    }
    this.loading.show = false;
  }

  goList() {
    this.router.navigate(["/membresias-list"]);
  }

  async guardar() {
    this.loading.show = true;

    if (this.id) {
      this.loading.primario = "EDITANDO...";
      await this.srv.putById(this.id, this.membresia);
    } else {
      this.loading.primario = "GUARDANDO NUEVO...";
      await this.srv.post(this.membresia);
    }

    this.router.navigate(["ejercicios-list"]);
    this.loading.show = false;
  }
}
