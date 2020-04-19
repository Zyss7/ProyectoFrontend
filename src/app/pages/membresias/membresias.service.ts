import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membresia } from 'src/app/models/models';
import { URL_API } from 'src/environments/CONS';

const URL = `${URL_API}membresias/`

@Injectable({
    providedIn: 'root'
})
export class MembresiasService {

    constructor(private http: HttpClient) { }

    public async post(membresias: Membresia): Promise<Membresia> {
        return await this.http.post(URL, membresias).toPromise();
    }

    public async getAll(): Promise<Membresia[]> {
        return await this.http.get<Membresia[]>(URL).toPromise();
    }

    public async getById(id: number): Promise<Membresia> {
        return await this.http.get<Membresia>(`${URL}${id}/`).toPromise();
    }

    public async putById(id: number, membresias: Membresia): Promise<Membresia> {
        return await this.http
            .put<Membresia>(`${URL}${id}/`, membresias)
            .toPromise();
    }

    public async deleteById(id: number): Promise<Membresia> {
        return await this.http.delete(`${URL}${id}/`).toPromise();
    }
}