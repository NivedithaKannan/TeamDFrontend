import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { TotaldefectsComponent } from './Components/totaldefects/totaldefects.component';
import { TotaldefectsService } from './service/totaldefects.service';
import { OpendefectsComponent } from './Components/opendefects/opendefects.component';
import { OpendefectsService } from './service/opendefects.service';

@NgModule({
  declarations: [
    AppComponent,
    TotaldefectsComponent,
    OpendefectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [TotaldefectsService,OpendefectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
