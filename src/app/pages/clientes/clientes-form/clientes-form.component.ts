import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../clientes.service";
import { Cliente, Loading } from "src/app/models/models";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-clientes-form",
  templateUrl: "./clientes-form.component.html",
  styleUrls: ["./clientes-form.component.css"],
})
export class ClientesFormComponent implements OnInit {
  public cliente: Cliente = {
    altura: 0,
    peso: 0,
    usuario: {
      identificacion: "",
    },
  };

  public loading: Loading = {
    show: true,
  };

  private id: number = null;

  constructor(
    private srv: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    console.log("HOLA MUNDO");
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.cliente = await this.srv.getById(this.id);
    }
    this.loading.show = false;
  }

  async guardar() {
    this.loading.show = true;

    if (this.id) {
      this.loading.primario = "EDITANDO...";
      await this.srv.putById(this.id, this.cliente);
    } else {
      this.loading.primario = "GUARDANDO NUEVO...";
      await this.srv.post(this.cliente);
    }

    this.router.navigate(["clientes-list"]);
    this.loading.show = false;
  }
}
