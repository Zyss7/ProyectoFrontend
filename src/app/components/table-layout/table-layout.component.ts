import { Component } from "@angular/core";

@Component({
  selector: "TableLayout",
  template: `
    <table
      class="table table-sm table-bordered table-hover text-center table-responsive-lg"
    >
      <ng-content></ng-content>
    </table>
  `,
})
export class TableLayoutComponent {}
