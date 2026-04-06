import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path )
    .filter(route => !route.path?.includes(':'));

  constructor() {}

}

