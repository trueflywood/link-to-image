import {
    Directive, ElementRef, Input, OnChanges, OnInit,
    Renderer2
}                                       from '@angular/core';

/**
 * Дериктива заменяющая ссылку на иконку
 * Необходим Font Awesome версии 4.1 или позднее
 */
@Directive({
    selector: '[link-toimage-icon]' // Attribute selector
})
export class LinkToimageIconDirective implements OnInit, OnChanges {
    @Input('link-toimage-icon') text: string;

    constructor(private element: ElementRef, private render: Renderer2) {
    }

    ngOnInit() {
        this.changeText();
    }

    ngOnChanges() {
        console.log('ngOnChanges');
        this.changeText();
    }

    changeText() {
        if (this.isLink()) {
            (<HTMLElement>this.element.nativeElement).innerText = '';
            let regExpArh = /(\.rar|\.zip|\.7z)$/i;
            let regExpPdf = /(\.pdf)$/i;
            let regExpWord = /(\.doc|\.docx)$/i;
            let regExpExcel = /(\.xls|\.xlsx)$/i;
            let regExpTxt = /(\.txt)$/i;
            let regExpImg = /(\.png|\.jpg|\.bmp|\.gif)$/i;

            switch (true) {
                case (regExpArh.test(this.text)):
                    this.setIcon('fa-file-archive-o');
                    break;
                case (regExpPdf.test(this.text)):
                    this.setIcon('fa-file-pdf-o');
                    break;
                case (regExpWord.test(this.text)):
                    this.setIcon('fa-file-word-o');
                    break;
                case (regExpExcel.test(this.text)):
                    this.setIcon('fa-file-excel-o');
                    break;
                case (regExpTxt.test(this.text)):
                    this.setIcon('fa-file-text-o');
                    break;
                case (regExpImg.test(this.text)):
                     (<HTMLElement>this.element.nativeElement).innerHTML = '<img src="' + this.text +
                         '" style="width: 100%; height: auto">';
                    break;
                default:
                    (<HTMLElement>this.element.nativeElement).innerHTML = '<span style="text-decoration: underline; color: #15c">' +
                        this.text + '</span>';
                    break;
            }

        }
    }

    isLink(): boolean {
        let regExpUrl = /^http(s)?\:\/\//i;
        return regExpUrl.test(this.text);
    }

    setIcon(iconStyle: string) {
        this.render.setStyle(this.element.nativeElement, 'display', 'flex');
        this.render.setStyle(this.element.nativeElement, 'flex-direction', 'row');
        (<HTMLElement>this.element.nativeElement).innerHTML = '<i class="fa ' + iconStyle +
            '" aria-hidden="true" style="font-size: 1.5em; padding-right: 0.5em"></i>' +
            ' <div style="overflow-wrap: break-word; width: 100%;  padding-right: 2em;">' + this.text + '</div>';
    }
}
