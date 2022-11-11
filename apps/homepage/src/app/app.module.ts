import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UiElementsModule } from '@crossplatform/ui/elements';

import { AppComponent } from './app.component';
import { CustomSectionComponent } from './custom-section/custom-section.component';
import { HeaderComponent } from './header/header.component';
import { PlatformPlaygroundComponent } from './platform-playground/platform-playground.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSectionComponent,
    HeaderComponent,
    PlatformPlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    UiElementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
