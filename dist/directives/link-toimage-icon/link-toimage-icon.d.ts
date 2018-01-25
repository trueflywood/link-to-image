import { ElementRef, Renderer2 } from '@angular/core';
/**
 * Дериктива заменяющая ссылку на иконку
 * Необходим Font Awesome версии 4.1 или позднее
 */
export declare class LinkToimageIconDirective {
    private element;
    private render;
    text: string;
    constructor(element: ElementRef, render: Renderer2);
    ngOnInit(): void;
    ngOnChanges(): void;
    changeText(): void;
    isLink(): boolean;
    setIcon(iconStyle: string): void;
}
