"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var link_toimage_icon_1 = require("./link-toimage-icon/link-toimage-icon");
var LinkToImageDirectivesModule = (function () {
    function LinkToImageDirectivesModule() {
    }
    LinkToImageDirectivesModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [link_toimage_icon_1.LinkToimageIconDirective],
                    imports: [],
                    exports: [link_toimage_icon_1.LinkToimageIconDirective]
                },] },
    ];
    /** @nocollapse */
    LinkToImageDirectivesModule.ctorParameters = function () { return []; };
    return LinkToImageDirectivesModule;
}());
exports.LinkToImageDirectivesModule = LinkToImageDirectivesModule;
//# sourceMappingURL=link-to-image.module.js.map