import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from 'src/app/models/models';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {


  public cliente: Cliente = {
    altura: 0,
    peso: 0,
    usuario: {
      identificacion: ''
    }
  }

  constructor(private srv: ClientesService) { }

  ngOnInit() {

  }


  guardar() {
    this.srv.addCliente(this.cliente)
      .subscribe(res => {
        console.log(res);
      })
  }

}
