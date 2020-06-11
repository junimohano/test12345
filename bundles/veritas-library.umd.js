(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('veritas-library', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['veritas-library'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    // import { isPropertyChanged } from '../../utils';
    var InitialIndicatorComponent = /** @class */ (function () {
        function InitialIndicatorComponent() {
            this.splitKey = ' ';
        }
        InitialIndicatorComponent.prototype.ngOnInit = function () { };
        InitialIndicatorComponent.prototype.ngOnChanges = function (changes) {
            // if (isPropertyChanged(changes.name)) {
            this.setInitial();
            // }
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

    // export * from './lib/components/comments-popover/index';
    // export * from './lib/components/question/index';
    // export * from './lib/components/question-accordion/index';
    // export * from './lib/components/task-status-tag/index';
    // export * from './lib/components/questionnaire-content/index';
    // export * from './lib/components/questionnaire-content-modal/index';
    // export * from './lib/constants/index';
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=veritas-library.umd.js.map