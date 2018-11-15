import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss']
})
export class TimeSelectorComponent {
  @Output()
  public goToClassCitySelectorPage = new EventEmitter();
  @Output()
  public goToClassRoomSelectorPage = new EventEmitter();
  public timeSelector: FormGroup;
  public date = new Date();

  constructor(private fb: FormBuilder) {
    this.generateOrderForm();
  }

  private generateOrderForm() {
    this.timeSelector = this.fb.group({
      date: this.fb.control(this.date, [Validators.required]),
    });

  }

  public validateTime() {
    this.goToClassRoomSelectorPage.emit();
  }

  onChange(result: Date): void {
    debugger;
  }


}
