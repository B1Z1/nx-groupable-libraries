import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// As you can see automatic import works from full path of library
import { DesignLabelModule } from '@nx-groupable-libraries/design/label';

@NgModule({
  imports: [
    CommonModule,
    DesignLabelModule
  ],
})
export class DesignDropdownModule {
}
