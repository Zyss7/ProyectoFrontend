import { Component, OnInit } from "@angular/core";
import { Cliente, Loading } from "src/app/models/models";
import { ClientesService } from "../clientes.service";

@Component({
  selector: "app-clientes-list",
  templateUrl: "./clientes-list.component.html",
  styleUrls: ["./clientes-list.component.css"],
})
export class ClientesListComponent implements OnInit {
  public clientes: Cliente[] = [];
  public clienteSeleccionado: Cliente = {};

  public loading: Loading = {
    show: true,
  };

  constructor(private srv: ClientesService) {}

  async ngOnInit() {
    console.log(this.clientes);
    await this.getClientes();
  }

  async getClientes() {
    this.clientes = await this.srv.getAll();
    this.loading.show = false;
  }

  setModal(clientes: Cliente) {
    return () => {
      this.clienteSeleccionado = clientes;
    };
  }

  async eliminar() {
    this.loading.show = true;
    this.loading.primario = "Eliminando...";
    await this.srv.deleteById(this.clienteSeleccionado.id);
    await this.getClientes();
    this.loading.show = false;
  }
}
