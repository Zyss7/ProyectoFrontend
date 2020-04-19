import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ejercicios } from "src/app/models/models";
import { URL_API } from "src/environments/CONS";

const URL = `${URL_API}ejercicios/`;

@Injectable({
  providedIn: "root",
})
export class EjerciciosService {
  constructor(private http: HttpClient) {}

  public async post(ejercicio: Ejercicios): Promise<Ejercicios> {
    return await this.http.post(URL, ejercicio).toPromise();
  }

  public async getAll(): Promise<Ejercicios[]> {
    return await this.http.get<Ejercicios[]>(URL).toPromise();
  }

  public async getById(id: number): Promise<Ejercicios> {
    return await this.http.get<Ejercicios>(`${URL}${id}/`).toPromise();
  }

  public async putById(id: number, ejercicio: Ejercicios): Promise<Ejercicios> {
    return await this.http
      .put<Ejercicios>(`${URL}${id}/`, ejercicio)
      .toPromise();
  }

  public async deleteById(id: number): Promise<Ejercicios> {
    return await this.http.delete(`${URL}${id}/`).toPromise();
  }
}
