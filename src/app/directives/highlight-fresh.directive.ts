import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { getPastDate } from 'app/helpers/helpers';

@Directive({
  selector: '[appHighlightFresh]'
})
export class HighlightFreshDirective implements OnInit {
  @Input('appHighlightFresh') appHighlightFresh: Date;

  private highlighColor: string | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

 ngOnInit() {
  const creationDate = this.appHighlightFresh;
  this.setHighlightColor(creationDate);
  this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.highlighColor}`);
}
private setHighlightColor(creationDate): void {
  if (creationDate < new Date() && creationDate >= getPastDate(14)) {
    this.highlighColor = 'green';
  }
  if (creationDate > new Date()) {
    this.highlighColor = 'blue';
  }
}

}
