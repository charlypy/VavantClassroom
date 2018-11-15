import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CitySelectorComponent} from './city-selector/city-selector.component';
import {TimeSelectorComponent} from './time-selector/time-selector.component';
import {NgZorroAntdModule, NZ_I18N, fr_FR} from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    CitySelectorComponent,
    TimeSelectorComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' }, { provide: NZ_I18N, useValue: fr_FR } ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
