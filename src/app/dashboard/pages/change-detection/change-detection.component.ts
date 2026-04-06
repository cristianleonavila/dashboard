import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-title [title]="currentFramework()"></app-title>
  <pre>{{frameworkSignal() | json }}</pre>
  <pre>{{frameworkProperty | json }}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(() => `Change Detection ${this.frameworkSignal().name}`);

  public frameworkSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {
    setTimeout(() => {
      //this.frameworkProperty.name = "React";
      this.frameworkSignal.update(value => ({
        ...value,
        name: "React"
      }));
      console.log("Hecho");
    }, 3000);
  }
}
