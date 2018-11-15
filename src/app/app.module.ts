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
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';

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
    NgZorroAntdMobileModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
