import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [TitleComponent],
  template: `
  <app-title title="View Transition 2"/>
  <section class="flex justify-end">
    <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum Image"
     width="200"
     height="300"
     style="view-transition-name: perrito1"/>
     <div class="bg-blue-600 w-24 h-24" style="view-transition-name: caja1">

     </div>
  </section>
  `,
  styles: ``
})
export default class ViewTransitionComponent {

}
