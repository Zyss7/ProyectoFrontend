import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrenador, Etapa } from 'src/app/models/models';
import { URL_API } from 'src/environments/CONS';

const URL = `${URL_API}etapas/`

@Injectable({
    providedIn: 'root'
})
export class EtapasService {

    constructor(private http: HttpClient) { }

    public addEtapa(etapa: Etapa) {
        return this.http.post(URL, etapa);
    }

    public editEtapa(id: number, newEtapa: Etapa) {
        return this.http.put(`${URL}${id}/`, newEtapa);
    }

    public getEtapaById(id: number) {
        return this.http.get(`${URL}${id}/`)
    }

    public async getAll(): Promise<Etapa[]> {
        return await this.http.get<Etapa[]>(URL).toPromise()
    }

    public async eliminar(id: number) {
        return await this.http.delete(`${URL}${id}/`).toPromise()

    }

}