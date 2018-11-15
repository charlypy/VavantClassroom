import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CitiesSelected} from '../models/citiesSelected';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss']
})
export class CitySelectorComponent {
  public citySelector: FormGroup;
  public isCityButtonDisplayed = false;
  public currentCitySelector = new CitiesSelected();

  public data = [
    { value: 0, label: 'Paris' },
    { value: 1, label: 'Lille' },
  ];

  constructor(private fb: FormBuilder) {
    this.currentCitySelector.Lille = false;
    this.currentCitySelector.Paris = false;
    this.generateOrderForm();
    this.citySelector.valueChanges.subscribe((citySelector: CitiesSelected) => {
      this.currentCitySelector = citySelector;
      this.isCityButtonDisplayed = this.currentCitySelector.Paris || this.currentCitySelector.Lille;
    });
  }

  private generateOrderForm() {
    this.citySelector = this.fb.group({
      Lille: this.fb.control(this.currentCitySelector.Lille, [Validators.required]),
      Paris: this.fb.control(this.currentCitySelector.Paris, [Validators.required]),
    });

  }



  onChange = (val: any) => {
    console.log(val);
  }

}
