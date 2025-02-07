import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
    selector: '[InputKontrolu]',
    standalone: true
})

export class InputKontroluDirective {
    constructor(private el: ElementRef){}

    @HostListener("keyup") kontrol(){
        this.checkInput(this.el.nativeElement)
    }

    //@Input('InputKontrolu')  element= 'string';

    checkInput(element: any){
        if (typeof element.type === 'string') {
            console.log("geçerli");
        }
        else {
            console.log("geçersiz");
        }
    }
}