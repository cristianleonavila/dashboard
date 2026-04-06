import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';


@Component({
  selector: 'app-fast-component',
  imports: [NgClass],
  template: `
  <section [ngClass]="['w-full', cssClass()]">
    <ng-content />
  </section>
  `,
  styles: ``
})
export class FastComponent {

  public cssClass = input.required();

  constructor() {
    console.log("Fast Component...");

  }

}
