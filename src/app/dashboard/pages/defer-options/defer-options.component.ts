import { Component } from '@angular/core';
import { FastComponent } from '@shared/heavy-loaders/fast/fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [FastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
