import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'angular-majeur-nx-welcome',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// @Component({
//   selector: 'angular-majeur-nx-welcome',
//   template: ` <div class="page">
//     <button mat-button color="" warn>Alert!</button>
//   </div>`,
//   styles: [],
//   encapsulation: ViewEncapsulation.None,
// })
export class NxWelcomeComponent implements OnInit {
  constructor() {}
  title = 'test2';
  ngOnInit(): void {}
}
