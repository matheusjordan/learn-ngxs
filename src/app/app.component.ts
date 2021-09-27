import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-cart></app-cart>
      <app-products></app-products>
    </div>
  `
})
export class AppComponent {
  title = 'learn-ngxs';
}
