import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [AppHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AppHeaderComponent,
  ]
})
export class SharedModule { }
