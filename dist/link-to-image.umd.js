(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['link-to-image'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Дериктива заменяющая ссылку на иконку
 * Необходим Font Awesome версии 4.1 или позднее
 */
var LinkToimageIconDirective = (function () {
    function LinkToimageIconDirective(element, render) {
        this.element = element;
        this.render = render;
    }
    /**
     * @return {?}
     */
    LinkToimageIconDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.changeText();
    };
    /**
     * @return {?}
     */
    LinkToimageIconDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        console.log('ngOnChanges');
        this.changeText();
    };
    /**
     * @return {?}
     */
    LinkToimageIconDirective.prototype.changeText = /**
     * @return {?}
     */
    function () {
        if (this.isLink()) {
            (/** @type {?} */ (this.element.nativeElement)).innerText = '';
            var /** @type {?} */ regExpArh = /(\.rar|\.zip|\.7z)$/i;
            var /** @type {?} */ regExpPdf = /(\.pdf)$/i;
            var /** @type {?} */ regExpWord = /(\.doc|\.docx)$/i;
            var /** @type {?} */ regExpExcel = /(\.xls|\.xlsx)$/i;
            var /** @type {?} */ regExpTxt = /(\.txt)$/i;
            var /** @type {?} */ regExpImg = /(\.png|\.jpg|\.bmp|\.gif)$/i;
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
                    (/** @type {?} */ (this.element.nativeElement)).innerHTML = '<img src="' + this.text +
                        '" style="width: 100%; height: auto">';
                    break;
                default:
                    (/** @type {?} */ (this.element.nativeElement)).innerHTML = '<span style="text-decoration: underline; color: #15c">' +
                        this.text + '</span>';
                    break;
            }
        }
    };
    /**
     * @return {?}
     */
    LinkToimageIconDirective.prototype.isLink = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ regExpUrl = /^http(s)?\:\/\//i;
        return regExpUrl.test(this.text);
    };
    /**
     * @param {?} iconStyle
     * @return {?}
     */
    LinkToimageIconDirective.prototype.setIcon = /**
     * @param {?} iconStyle
     * @return {?}
     */
    function (iconStyle) {
        this.render.setStyle(this.element.nativeElement, 'display', 'flex');
        this.render.setStyle(this.element.nativeElement, 'flex-direction', 'row');
        (/** @type {?} */ (this.element.nativeElement)).innerHTML = '<i class="fa ' + iconStyle +
            '" aria-hidden="true" style="font-size: 1.5em; padding-right: 0.5em"></i>' +
            ' <div style="overflow-wrap: break-word; width: 100%;  padding-right: 2em;">' + this.text + '</div>';
    };
    LinkToimageIconDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[link-toimage-icon]' // Attribute selector
                },] },
    ];
    /** @nocollapse */
    LinkToimageIconDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: core.Renderer2, },
    ]; };
    LinkToimageIconDirective.propDecorators = {
        "text": [{ type: core.Input, args: ['link-toimage-icon',] },],
    };
    return LinkToimageIconDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LinkToimageIconModule = (function () {
    function LinkToimageIconModule() {
    }
    /**
     * @return {?}
     */
    LinkToimageIconModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: LinkToimageIconModule /*,
                  providers: [SampleService]*/
        };
    };
    LinkToimageIconModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        LinkToimageIconDirective
                    ],
                    exports: [
                        LinkToimageIconDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    LinkToimageIconModule.ctorParameters = function () { return []; };
    return LinkToimageIconModule;
}());

exports.LinkToimageIconModule = LinkToimageIconModule;
exports.LinkToimageIconDirective = LinkToimageIconDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
