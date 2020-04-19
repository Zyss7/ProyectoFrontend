import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Musculo } from "src/app/models/models";
import { URL_API } from "src/environments/CONS";

const URL = `${URL_API}musculos/`;

@Injectable({
  providedIn: "root",
})
export class MusculosService {
  constructor(private http: HttpClient) {}

  public async addMusculo(musculo: Musculo) {
    return await this.http.post<Musculo>(URL, musculo).toPromise();
  }

  public async editMusculo(id: number, musculo: Musculo) {
    return this.http.put<Musculo>(`${URL}${id}/`, musculo).toPromise();
  }

  public async getMusculoById(id: number) {
    return await this.http.get<Musculo>(`${URL}${id}/`).toPromise();
  }

  public async getAll(): Promise<Musculo[]> {
    return await this.http.get<Musculo[]>(URL).toPromise();
  }

  public async deleteById(id: number) {
    await this.http.delete(`${URL}${id}/`).toPromise();
  }
}
