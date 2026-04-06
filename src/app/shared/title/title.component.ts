import { booleanAttribute, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `
  <h1 class="text-bold text-3xl mb-4">{{title}}</h1>
  `,
  styles: ``
})
export class TitleComponent {

  //public title = input.required();

  @Input({required: true}) title: string = "";

  @Input({transform: booleanAttribute}) withShadow: boolean = false;

}
