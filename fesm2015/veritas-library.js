import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import 'lodash';

function isPropertyChanged(simpleChange) {
    return (simpleChange && simpleChange.previousValue !== simpleChange.currentValue);
}

class InitialIndicatorComponent {
    constructor() {
        this.splitKey = ' ';
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (isPropertyChanged(changes.name)) {
            this.setInitial();
        }
    }
    setInitial() {
        const nameSplits = this.name.split(this.splitKey);
        this.initial =
            nameSplits.length > 1 ? this.getInitial(nameSplits) : this.name;
    }
    getInitial(nameSplits) {
        return `${this.getWordByIndex(nameSplits, 0)}${this.getWordByIndex(nameSplits, 1)}`;
    }
    getWordByIndex(nameSplits, index) {
        return nameSplits[index][0].toLocaleUpperCase();
    }
}
InitialIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-initial-indicator',
                template: "<div class=\"circle-indicator d-flex align-items-center justify-content-center\">\r\n  {{ initial }}\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
InitialIndicatorComponent.ctorParameters = () => [];
InitialIndicatorComponent.propDecorators = {
    name: [{ type: Input }]
};

class InitialIndicatorModule {
}
InitialIndicatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InitialIndicatorComponent],
                imports: [CommonModule],
                exports: [InitialIndicatorComponent]
            },] }
];

const PAGE_OFFSET_FOR_SERVER = -1;
const SEARCH_DEBOUNCE_TIME = 300;

const VERITAS_API_PROXY_PREFIX_URL = 'VERITAS_API_PROXY_PREFIX_URL';

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

export { InitialIndicatorModule, InitialIndicatorComponent, PAGE_OFFSET_FOR_SERVER, SEARCH_DEBOUNCE_TIME, VERITAS_API_PROXY_PREFIX_URL };

//# sourceMappingURL=veritas-library.js.map