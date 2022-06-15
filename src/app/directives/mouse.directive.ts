import {Directive, Input, HostListener} from "@angular/core";

@Directive({
  selector: '[mouse]'
})
export class MouseDirective {
 
  @Input('mouse') message : string = "Default message"; 

  @HostListener('mouseover')
  mouseover() {
    var element = document.getElementById(`${this.message}`);
    element!.style.boxShadow = "inset 7px 30px 30px black";
  }

  @HostListener('mouseout')
  mouseout() {
    var element = document.getElementById(`${this.message}`);
    element!.style.boxShadow = "none";
  }

}