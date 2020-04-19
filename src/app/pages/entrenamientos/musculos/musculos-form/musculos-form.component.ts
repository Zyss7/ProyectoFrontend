import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Musculo } from "src/app/models/models";
import { MusculosService } from "../../musculos.service";

@Component({
  selector: "app-musculos-form",
  templateUrl: "./musculos-form.component.html",
  styleUrls: ["./musculos-form.component.css"],
})
export class MusculosFormComponent implements OnInit {
  public musculo: Musculo = {
    nombre: "",
  };

  private id: number = null;

  constructor(
    private srv: MusculosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.musculo = await this.srv.getMusculoById(this.id);
    }
  }

  redirect() {
    this.router.navigate(["/musculos-list"]);
  }

  async guardar() {
    if (this.id) {
      await this.srv.editMusculo(this.id, this.musculo);
    } else {
      await this.srv.addMusculo(this.musculo);
    }

    this.redirect();
  }
}
