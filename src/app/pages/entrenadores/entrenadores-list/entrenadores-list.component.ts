import { Component, OnInit } from '@angular/core';
import { Entrenador } from 'src/app/models/models';
import { EntrenadoresService } from '../entrenadores.service';

@Component({
  selector: 'app-entrenadores-list',
  templateUrl: './entrenadores-list.component.html',
  styleUrls: ['./entrenadores-list.component.css']
})
export class EntrenadoresListComponent implements OnInit {


  public entrenadores: Entrenador[] = []

  constructor(private srv: EntrenadoresService) { }

  ngOnInit() {
    this.getEntrenadores()
  }

  getEntrenadores() {
    this.srv.getAll()
      .subscribe((res: Entrenador[]) => {
        console.log(res);
        this.entrenadores = res;
      })
  }

}
