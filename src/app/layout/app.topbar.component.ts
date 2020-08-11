import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  items: MenuItem[];
  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.items = [
      { label: 'Update', icon: 'pi pi-fw pi-refresh' },
      { label: 'Delete', icon: 'pi pi-fw pi-times' },
      { label: 'Angular.io', icon: 'pi pi-fw pi-external-link', url: 'http://angular.io' },
      { label: 'Theming', icon: 'pi pi-fw pi-cog' }
    ];
  }

}