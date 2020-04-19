import { Component, OnInit } from '@angular/core';
import { Entrenador } from 'src/app/models/models';
import { EntrenadoresService } from '../entrenadores.service';

@Component({
  selector: 'app-entrenadores-form',
  templateUrl: './entrenadores-form.component.html',
  styleUrls: ['./entrenadores-form.component.css']
})
export class EntrenadoresFormComponent implements OnInit {

  public entrenador: Entrenador = {
    area: [],
    usuario: {
      identificacion: ''
    }
  }

  constructor(private srv: EntrenadoresService) { }

  ngOnInit() {
  }

  guardar() {
    this.srv.addEntrenador(this.entrenador)
      .subscribe(res => {
        console.log(res);
      })
  }
}
