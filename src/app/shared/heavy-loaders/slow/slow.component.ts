import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';


@Component({
  selector: 'app-slow-component',
  imports: [NgClass],
  template: `
  <section [ngClass]="['w-full h-[600px]', cssClass()]">

  </section>
  `,
  styles: ``
})
export class SlowComponent {

  cssClass = input.required();

  constructor() {
    const start = Date.now();
    //while(Date.now() - start < 3000) {

    //}
  }
}
