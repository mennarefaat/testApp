import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
})
export class CustomStyleDirective implements OnChanges {
  @Input('appCustomStyle') color = 'pink';
  @Input() hcolor = 'blue';

  @HostListener('mouseenter')
  hoverColor() {
    this._element.nativeElement.style.backgroundColor = this.hcolor;
  }

  @HostListener('mouseleave')
  noHoverColor() {
    this._element.nativeElement.style.backgroundColor = this.color;
  }

  constructor(private _element: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this._element.nativeElement.style.backgroundColor = this.color;
  }
}
