import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
    //this.el.nativeElement.style.backgroundColor = 'yellow';
   }
   private highligh(color:string){
    this.el.nativeElement.style.backgroundColor = color;
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.highligh('red');
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.highligh('');
   }

}
