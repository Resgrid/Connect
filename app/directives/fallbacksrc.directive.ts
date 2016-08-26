import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[fallbacksrc]",
    properties: [
        "src: fallbacksrc",
    ],
    host: {
        "(error)" : "onError()",
    }
})

export class FallbackSrc {
    public src: string;
    constructor(private el: ElementRef) { }
    public onError(): void {
        this.el.nativeElement.attributes.src.value = this.src;
    }
}