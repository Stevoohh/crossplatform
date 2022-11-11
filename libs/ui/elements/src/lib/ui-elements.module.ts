import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedWavesComponent } from './animated-waves/animated-waves.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AnimatedWavesComponent],
  exports: [AnimatedWavesComponent],
})
export class UiElementsModule {}
