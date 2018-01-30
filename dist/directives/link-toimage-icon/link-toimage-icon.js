"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Дериктива заменяющая ссылку на иконку
 * Необходим Font Awesome версии 4.1 или позднее
 */
var LinkToimageIconDirective = /** @class */ (function () {
    function LinkToimageIconDirective(element, render) {
        this.element = element;
        this.render = render;
    }
    LinkToimageIconDirective.prototype.ngOnInit = function () {
        this.changeText();
    };
    LinkToimageIconDirective.prototype.ngOnChanges = function () {
        console.log('ngOnChanges');
        this.changeText();
    };
    LinkToimageIconDirective.prototype.changeText = function () {
        if (this.isLink()) {
            this.element.nativeElement.innerText = '';
            var regExpArh = /(\.rar|\.zip|\.7z)$/i;
            var regExpPdf = /(\.pdf)$/i;
            var regExpWord = /(\.doc|\.docx)$/i;
            var regExpExcel = /(\.xls|\.xlsx)$/i;
            var regExpTxt = /(\.txt)$/i;
            var regExpImg = /(\.png|\.jpg|\.bmp|\.gif)$/i;
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
                    this.element.nativeElement.innerHTML = '<img src="' + this.text + '" style="width: 100%; height: auto">';
                    break;
                default:
                    this.element.nativeElement.innerHTML = '<span style="text-decoration: underline; color: #15c">' + this.text + '</span>';
                    break;
            }
        }
    };
    LinkToimageIconDirective.prototype.isLink = function () {
        var regExpUrl = /^http(s)?\:\/\//i;
        return regExpUrl.test(this.text);
    };
    LinkToimageIconDirective.prototype.setIcon = function (iconStyle) {
        this.render.setStyle(this.element.nativeElement, 'display', 'flex');
        this.render.setStyle(this.element.nativeElement, 'flex-direction', 'row');
        this.element.nativeElement.innerHTML = '<i class="fa ' + iconStyle + '" aria-hidden="true" style="font-size: 1.5em; padding-right: 0.5em"></i>' +
            ' <div style="overflow-wrap: break-word; width: 100%;  padding-right: 2em;">' + this.text + '</div>';
    };
    LinkToimageIconDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[link-toimage-icon]' // Attribute selector
                },] },
    ];
    /** @nocollapse */
    LinkToimageIconDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    LinkToimageIconDirective.propDecorators = {
        'text': [{ type: core_1.Input, args: ['link-toimage-icon',] },],
    };
    return LinkToimageIconDirective;
}());
exports.LinkToimageIconDirective = LinkToimageIconDirective;
//# sourceMappingURL=link-toimage-icon.js.map