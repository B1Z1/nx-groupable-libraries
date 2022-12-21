import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// From another places outside the design library, we automatically import our modules from group library
// You can delete line and try to import automatically
import { DesignButtonModule, DesignDropdownModule, DesignLabelModule } from '@nx-groupable-libraries/design';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    DesignButtonModule,
    DesignDropdownModule,
    DesignLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
