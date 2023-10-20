import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent {
  @Input() color?: string;
  @Input() pointer = false;
  @Input() number?: number;
  @Input() menuOpen = false;
  @Output() numberChange = new EventEmitter<number>();

  get className() {
    if (this.menuOpen) {
      return 'purple';
    }

    if (this.number) {
      return 'white';
    }

    if (this.color) {
      return this.color;
    }

    return 'grey';
  }
  numbers = [1, 2, 3, 4, 5, 6];

  openMenu() {
    if (this.pointer) {
      this.menuOpen = true;
    }
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setNumber(number: number) {
    this.number = number;
    this.numberChange.emit(this.number);
    this.closeMenu();
  }
}
