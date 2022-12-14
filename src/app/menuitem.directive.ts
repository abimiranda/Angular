import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  @HostBinding("class.itemOrange")private mostrar: boolean = false; //ver css principal
  @HostListener("mouseover") onOver(){
    this.mostrar=true;
  }

  @HostListener("mouseout") onOut(){
    this.mostrar=false;
  }
}
