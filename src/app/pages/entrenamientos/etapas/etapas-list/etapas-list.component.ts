import { Component, OnInit } from '@angular/core';
import { EtapasService } from '../../etapas.service';
import { Etapa } from 'src/app/models/models';

@Component({
  selector: 'app-etapas-list',
  templateUrl: './etapas-list.component.html',
  styleUrls: ['./etapas-list.component.css']
})
export class EtapasListComponent implements OnInit {


  public etapas: Etapa[] = []

  public etapaSeleccionada: Etapa = {};

  constructor(private srv: EtapasService) { }

  async  ngOnInit() {
    await this.getEtapas()


  }

  async getEtapas() {
    this.etapas = await this.srv.getAll();
  }


  setModal(etapa: Etapa) {
    console.log('RENDER');
    return () => {
      console.log('CLICK');
      this.etapaSeleccionada = etapa;
    }
  }

  async eliminarEtapa() {
    await this.srv.eliminar(this.etapaSeleccionada.id)
  }

}
