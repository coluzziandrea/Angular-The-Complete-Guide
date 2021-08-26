import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: any[], field: string): any {
    if (value.length === 0) {
      return value;
    }

    return value.sort(function (a, b) {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });
  }
}
