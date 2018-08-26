import { Component, EventEmitter, Output, Input, forwardRef, OnInit } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    }
  ]
})
export class DurationInputComponent implements OnInit, ControlValueAccessor {

  @Output()
  durationChange: EventEmitter<number> = new EventEmitter();

  @Input()
  public length = 0;

  public duration = new FormControl('', Validators.required);

  public ngOnInit () {
    this.duration.setValue(this.length);
  }

  public handleKeyUp() {
    this.durationChange.emit(this.duration.value);
    this.propagateChange(this.duration.value);
  }
  public get isValid(): boolean {
    return this.duration.valid;
  }

  public writeValue(obj: any): void {
    if (obj) {
      this.duration = obj;
    }
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {}

  private propagateChange = (_: any) => { };

}
