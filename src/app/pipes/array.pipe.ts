import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "array",
})
export class ArrayPipe implements PipeTransform {
  transform(value: any | [], ...args: any[]): any {
    return value.map((item) => item.nombre);
  }
}
