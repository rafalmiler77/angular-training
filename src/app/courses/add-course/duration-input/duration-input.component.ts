import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent {

  @Output()
  durationChange: EventEmitter<number> = new EventEmitter();

  public duration = '';

  public onKey(value: number) {
    this.durationChange.emit(value);
  }
}
