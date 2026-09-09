import { Directive, ElementRef, Input, OnChanges  } from '@angular/core';

@Directive({
  selector: '[appPriority]',
})
export class PriorityDirective implements OnChanges {

  @Input() appPriority = '';

  constructor(private el: ElementRef){}

  ngOnChanges(): void {
  if (this.appPriority === 'high') {
    this.el.nativeElement.style.borderLeft = '5px solid red';
  } else if (this.appPriority === 'medium') {
    this.el.nativeElement.style.borderLeft = '5px solid orange';
  } else if (this.appPriority === 'low') {
    this.el.nativeElement.style.borderLeft = '5px solid green';
  }
}
}