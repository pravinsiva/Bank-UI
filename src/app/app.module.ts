import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ModelService } from './model-service';
import { SharedModule } from './shared/shared.module';
import { EligiblityHomeComponent } from './eligiblity-home/eligiblity-home.component';

@NgModule({
  declarations: [
    AppComponent,
    EligiblityHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
