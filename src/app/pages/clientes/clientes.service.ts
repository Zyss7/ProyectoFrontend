import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/models/models';
import { URL_API } from 'src/environments/CONS';

const URL = `${URL_API}clientes/`

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }



  public addCliente(cliente: Cliente) {
    return this.http.post(URL, cliente);
  }

  public editCliente(id: number) {
    return this.http.put(URL, id);
  }

  public getClienteById(id: number) {
    return this.http.get(`${URL}${id}`)
  }

  public getAll() {
    return this.http.get(URL)
  }


}
