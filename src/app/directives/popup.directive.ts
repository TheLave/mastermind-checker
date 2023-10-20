import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appPopup]',
})
export class PopupDirective implements OnInit, OnDestroy {
  @Output() onClose = new EventEmitter();
  listener?: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.listener = this.renderer.listen(
      'window',
      'mousedown',
      (event: MouseEvent) => {
        if (!this.el.nativeElement.contains(event.target)) {
          this.onClose.emit();
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener();
    }
  }
}
