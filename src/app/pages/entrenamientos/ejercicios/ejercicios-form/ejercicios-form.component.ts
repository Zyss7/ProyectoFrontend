import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Ejercicios } from "src/app/models/models";
import { Etapa, Musculo, Loading } from "../../../../models/models";
import { EjerciciosService } from "../../ejercicios.service";
import { EtapasService } from "../../etapas.service";
import { MusculosService } from "../../musculos.service";

interface MusculoCheck extends Musculo {
  checked: false | true;
}

interface EtapaCheck extends Etapa {
  checked: false | true;
}

@Component({
  selector: "app-ejercicios-form",
  templateUrl: "./ejercicios-form.component.html",
  styleUrls: ["./ejercicios-form.component.css"],
})
export class EjerciciosFormComponent implements OnInit {
  public ejercicio: Ejercicios = {
    nombre: "",
    tipo: "",
    etapasArray: [],
    musculosArray: [],
  };

  public musculosList: MusculoCheck[] = [];
  public etapasList: EtapaCheck[] = [];

  public loading: Loading = {
    show: true,
  };

  private id: number = null;

  private isValid: boolean = false;

  constructor(
    private srv: EjerciciosService,
    private mscSrv: MusculosService,
    private etpSrv: EtapasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    if (this.id) {
      this.ejercicio = await this.srv.getById(this.id);
    }

    const promises = [this.mscSrv.getAll(), this.etpSrv.getAll()];
    Promise.all(promises).then((values) => {
      this.musculosList = values[0].map<MusculoCheck>(
        this.setChecks(this.ejercicio.musculosArray)
      );

      this.etapasList = values[1].map<EtapaCheck>(
        this.setChecks(this.ejercicio.etapasArray)
      );
      this.loading.show = false;
    });
  }

  getChecked(list: EtapaCheck[] | MusculoCheck[]): number[] {
    return list
      .filter((msc) => msc.checked)
      .map((value) => {
        return value.id;
      });
  }

  setChecks(list: Musculo[] | Etapa[]) {
    return (value: Musculo | Etapa) => {
      const result = list.filter((item) => item.id === value.id)[0];
      return {
        ...value,
        checked: result ? true : false,
      };
    };
  }

  check(list: MusculoCheck[] | EtapaCheck[], value: MusculoCheck | EtapaCheck) {
    list.filter((item) => item.id === value.id)[0] = value;
  }

  async guardar() {
    this.ejercicio.musculos = this.getChecked(this.musculosList);
    this.ejercicio.etapas = this.getChecked(this.etapasList);

    this.loading.show = true;

    if (this.id) {
      this.loading.primario = "EDITANDO...";
      await this.srv.putById(this.id, this.ejercicio);
    } else {
      this.loading.primario = "GUARDANDO NUEVO...";
      await this.srv.post(this.ejercicio);
    }

    this.router.navigate(["ejercicios-list"]);
    this.loading.show = false;
  }
}
