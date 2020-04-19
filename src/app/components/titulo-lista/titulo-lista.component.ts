import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "TituloLista",
  templateUrl: "./titulo-lista.component.html",
  styleUrls: ["./titulo-lista.component.css"],
})
export class TituloListaComponent {
  @Input()
  public titulo: string = "";

  @Input()
  public routerLinkAdd: string = "";
}
