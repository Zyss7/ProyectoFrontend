import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/models';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {


  public clientes: Cliente[] = []

  constructor(private srv: ClientesService) { }

  ngOnInit() {
    this.getClientes()
  }

  getClientes() {
    this.srv.getAll()
      .subscribe((res: Cliente[]) => {
        console.log(res);
        this.clientes = res;
      })
  }
}
