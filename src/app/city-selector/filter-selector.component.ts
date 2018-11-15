import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CitiesSelected} from '../models/citiesSelected';

@Component({
  selector: 'app-city-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.scss']
})
export class FilterSelectorComponent {

  public data = [
    {value: 0, label: 'Paris', checked: false},
    {value: 1, label: 'Lille', checked: true},
  ];

  constructor() {
  }

  onChange = (val: any) => {
    console.log(val);
  }

}
