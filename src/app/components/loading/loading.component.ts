import { Component, OnInit, Input } from "@angular/core";
import { Loading } from "../../models/models";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent implements OnInit {
  @Input()
  public config: Loading = {};

  public options: Loading = {
    primario: "Cargando...",
    secundario: "",
  };

  constructor() {}

  ngOnInit() {
    this.options = { ...this.options, ...this.config };
  }
}
