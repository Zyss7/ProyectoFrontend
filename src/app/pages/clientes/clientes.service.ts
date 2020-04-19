import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "src/app/models/models";
import { URL_API } from "src/environments/CONS";

const URL = `${URL_API}clientes/`;

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  public async post(clientes: Cliente): Promise<Cliente> {
    return await this.http.post(URL, clientes).toPromise();
  }

  public async getAll(): Promise<Cliente[]> {
    return await this.http.get<Cliente[]>(URL).toPromise();
  }

  public async getById(id: number): Promise<Cliente> {
    return await this.http.get<Cliente>(`${URL}${id}/`).toPromise();
  }

  public async putById(id: number, clientes: Cliente): Promise<Cliente> {
    return await this.http.put<Cliente>(`${URL}${id}/`, clientes).toPromise();
  }

  public async deleteById(id: number): Promise<Cliente> {
    return await this.http.delete(`${URL}${id}/`).toPromise();
  }
}
