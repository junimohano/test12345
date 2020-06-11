import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isPropertyChanged } from '../../utils';
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
        { type: Component, args: [{
                    selector: 'ta-initial-indicator',
                    template: "<div class=\"circle-indicator d-flex align-items-center justify-content-center\">\r\n  {{ initial }}\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host{display:flex}:host .circle-indicator{height:24px;width:24px;border-radius:50%;border:1px solid #ffddd5;background-color:#ffeeea;color:#99331c;font-size:.625rem;font-weight:600}"]
                }] }
    ];
    /** @nocollapse */
    InitialIndicatorComponent.ctorParameters = function () { return []; };
    InitialIndicatorComponent.propDecorators = {
        name: [{ type: Input }]
    };
    return InitialIndicatorComponent;
}());
export { InitialIndicatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5pdGlhbC1pbmRpY2F0b3IvaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEQ7SUFhRTtRQUZpQixhQUFRLEdBQUcsR0FBRyxDQUFDO0lBRWpCLENBQUM7SUFFVCw0Q0FBUSxHQUFmLGNBQXlCLENBQUM7SUFFbkIsK0NBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDdkMsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVPLDhDQUFVLEdBQWxCO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPO1lBQ1YsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQztJQUVPLDhDQUFVLEdBQWxCLFVBQW1CLFVBQW9CO1FBQ3JDLE9BQU8sS0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUNoRSxVQUFVLEVBQ1YsQ0FBQyxDQUNBLENBQUM7SUFDTixDQUFDO0lBRU8sa0RBQWMsR0FBdEIsVUFBdUIsVUFBb0IsRUFBRSxLQUFhO1FBQ3hELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw4SEFBaUQ7b0JBRWpELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7O3VCQUVFLEtBQUs7O0lBZ0NSLGdDQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0FqQ1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc1Byb3BlcnR5Q2hhbmdlZCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtaW5pdGlhbC1pbmRpY2F0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbml0aWFsLWluZGljYXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5pdGlhbEluZGljYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaW5pdGlhbDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHNwbGl0S2V5ID0gJyAnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoaXNQcm9wZXJ0eUNoYW5nZWQoY2hhbmdlcy5uYW1lKSkge1xyXG4gICAgICB0aGlzLnNldEluaXRpYWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW5pdGlhbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5hbWVTcGxpdHMgPSB0aGlzLm5hbWUuc3BsaXQodGhpcy5zcGxpdEtleSk7XHJcbiAgICB0aGlzLmluaXRpYWwgPVxyXG4gICAgICBuYW1lU3BsaXRzLmxlbmd0aCA+IDEgPyB0aGlzLmdldEluaXRpYWwobmFtZVNwbGl0cykgOiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEluaXRpYWwobmFtZVNwbGl0czogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuZ2V0V29yZEJ5SW5kZXgobmFtZVNwbGl0cywgMCl9JHt0aGlzLmdldFdvcmRCeUluZGV4KFxyXG4gICAgICBuYW1lU3BsaXRzLFxyXG4gICAgICAxXHJcbiAgICApfWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdvcmRCeUluZGV4KG5hbWVTcGxpdHM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmFtZVNwbGl0c1tpbmRleF1bMF0udG9Mb2NhbGVVcHBlckNhc2UoKTtcclxuICB9XHJcbn1cclxuIl19