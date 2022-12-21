import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Also work inside libraries
import { DesignButtonModule, DesignDropdownModule, DesignLabelModule } from '@nx-groupable-libraries/design';

@NgModule({
  imports: [
    CommonModule,
    DesignDropdownModule,
    DesignLabelModule,
    DesignButtonModule
  ],
})
export class ShopCartModule {
}
