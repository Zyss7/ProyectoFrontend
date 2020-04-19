import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrenador } from 'src/app/models/models';
import { URL_API } from 'src/environments/CONS';

const URL = `${URL_API}entrenadores/`

@Injectable({
    providedIn: 'root'
})
export class EntrenadoresService {

    constructor(private http: HttpClient) { }



    public addEntrenador(entrenador: Entrenador) {
        return this.http.post(URL, entrenador);
    }

    public editEntrenador(id: number) {
        return this.http.put(URL, id);
    }

    public getEntrenadorById(id: number) {
        return this.http.get(`${URL}${id}`)
    }

    public getAll() {
        return this.http.get(URL)
    }


}