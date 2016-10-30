import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

const components = [
  SpinnerComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
