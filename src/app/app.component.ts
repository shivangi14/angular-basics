import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h3>{{pageTitle}}</h3>
    <pm-products></pm-products>
  </div>
  `
})

export class AppComponent{
  pageTitle: string = 'Welcome to My Hardware Store!';
}