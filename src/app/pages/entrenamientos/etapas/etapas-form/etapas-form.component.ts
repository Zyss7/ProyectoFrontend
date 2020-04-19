import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etapa } from 'src/app/models/models';
import { EtapasService } from '../../etapas.service';

@Component({
  selector: 'app-etapas-form',
  templateUrl: './etapas-form.component.html',
  styleUrls: ['./etapas-form.component.css']
})
export class EtapasFormComponent implements OnInit {

  public etapa: Etapa = {
    nombre: ''
  }

  private id: number = null;


  constructor(private srv: EtapasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.srv.getEtapaById(this.id)
        .subscribe(etapa => {
          this.etapa = etapa;
        })
    }

  }

  goList() {
    this.router.navigate(['/etapas-list'])
  }

  guardar() {
    if (this.id) {
      this.srv.editEtapa(this.id, this.etapa)
        .subscribe(res => {
          this.goList()
        })
    } else {
      this.srv.addEtapa(this.etapa)
        .subscribe(res => {
          this.goList()
        })
    }

  }

}
