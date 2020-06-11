(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('lodash')) :
    typeof define === 'function' && define.amd ? define('veritas-library', ['exports', '@angular/common', '@angular/core', 'lodash'], factory) :
    (factory((global['veritas-library'] = {}),global.ng.common,global.ng.core,global._));
}(this, (function (exports,common,core,_) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function isPropertyChanged(simpleChange) {
        return (simpleChange && simpleChange.previousValue !== simpleChange.currentValue);
    }

    var InitialIndicatorComponent = /** @class */ (function () {
        function InitialIndicatorComponent() {
            this.splitKey = ' ';
        }
        InitialIndicatorComponent.prototype.ngOnInit = function () { };
        InitialIndicatorComponent.prototype.ngOnChanges = function (changes) {
            if (isPropertyChanged(changes.name)) {
                this.setInitial();
            }
        };
        InitialIndicatorComponent.prototype.setInitial = function () {
            var nameSplits = this.name.split(this.splitKey);
            this.initial =
                nameSplits.length > 1 ? this.getInitial(nameSplits) : this.name;
        };
        InitialIndicatorComponent.prototype.getInitial = function (nameSplits) {
            return "" + this.getWordByIndex(nameSplits, 0) + this.getWordByIndex(nameSplits, 1);
        };
        InitialIndicatorComponent.prototype.getWordByIndex = function (nameSplits, index) {
            return nameSplits[index][0].toLocaleUpperCase();
        };
        InitialIndicatorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ta-initial-indicator',
                        template: "<div class=\"circle-indicator d-flex align-items-center justify-content-center\">\r\n  {{ initial }}\r\n</div>\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        InitialIndicatorComponent.ctorParameters = function () { return []; };
        InitialIndicatorComponent.propDecorators = {
            name: [{ type: core.Input }]
        };
        return InitialIndicatorComponent;
    }());

    var InitialIndicatorModule = /** @class */ (function () {
        function InitialIndicatorModule() {
        }
        InitialIndicatorModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [InitialIndicatorComponent],
                        imports: [common.CommonModule],
                        exports: [InitialIndicatorComponent]
                    },] }
        ];
        return InitialIndicatorModule;
    }());

    var PAGE_OFFSET_FOR_SERVER = -1;
    var SEARCH_DEBOUNCE_TIME = 300;

    var VERITAS_API_PROXY_PREFIX_URL = 'VERITAS_API_PROXY_PREFIX_URL';

    // export * from './lib/components/comments-popover/index';
    // export * from './lib/enums/index';
    // export * from './lib/interfaces/index';
    // export * from './lib/models/index';
    // export * from './lib/services/index';
    // export * from './lib/change-detectable-component-base';
    // export * from './lib/custom-encoder';
    // export * from './lib/utils';

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InitialIndicatorModule = InitialIndicatorModule;
    exports.InitialIndicatorComponent = InitialIndicatorComponent;
    exports.PAGE_OFFSET_FOR_SERVER = PAGE_OFFSET_FOR_SERVER;
    exports.SEARCH_DEBOUNCE_TIME = SEARCH_DEBOUNCE_TIME;
    exports.VERITAS_API_PROXY_PREFIX_URL = VERITAS_API_PROXY_PREFIX_URL;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=veritas-library.umd.js.map