import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'LabelRequired',
  templateUrl: './label-requerido.component.html',
  styleUrls: ['./label-requerido.component.css']
})
export class LabelRequeridoComponent implements OnInit {

  @Input()
  public label: string = ""

  @Input()
  public for: string = ""

  constructor() { }

  ngOnInit() {
  }

}
