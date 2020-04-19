import { Component, Input } from "@angular/core";

@Component({
  selector: "TableActions",
  template: `
    <td style="width: 110px;">
      <button
        class="btn btn-sm"
        routerLink="/{{ routerLinkEdit }}/{{ value[pkParam] }}"
      >
        <i class="fas fa-edit"></i>
      </button>
      <button
        class="btn btn-sm"
        data-toggle="modal"
        [attr.data-target]="'#' + modalTarget"
        (click)="callback()"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </td>
  `,
})
export class TableActionsComponent {
  @Input()
  public routerLinkEdit: string;

  @Input()
  public pkParam: string;

  @Input()
  public value: any;

  @Input()
  public callback: FunctionStringCallback;

  @Input()
  public modalTarget: string;
}
