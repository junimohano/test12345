import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuestionSingleSelectUiTypeEnum } from '../../../../enums';
import { isPropertyChanged } from '../../../../utils';
export class SingleSelectComponent {
    constructor() {
        this.questionSingleSelectUiTypeEnum = QuestionSingleSelectUiTypeEnum;
        this.onChange = (_) => { };
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (isPropertyChanged(changes.question)) {
            this.updateStep();
        }
    }
    onSelectResponse(response) {
        this.onChange(response);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched() { }
    writeValue(value) { }
    updateStep() {
        const step = 100 / (this.question.questionDetails.questionDetailResponses.length + 1);
        this.step = +step.toFixed(2);
    }
}
SingleSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-single-select',
                template: "<ng-container\r\n  *ngIf=\"\r\n    question?.questionDetails?.singleSelectUiType ===\r\n      questionSingleSelectUiTypeEnum.Slider;\r\n    else nonSliderSingleQuestion\r\n  \"\r\n>\r\n  <div class=\"slider-placeholder mt-n3 mb-3\">Select one</div>\r\n\r\n  <input\r\n    type=\"range\"\r\n    value=\"50\"\r\n    class=\"slider w-100\"\r\n    min=\"0\"\r\n    max=\"99\"\r\n    [step]=\"step\"\r\n  />\r\n\r\n  <div class=\"d-flex pb-2 mb-4\">\r\n    <div [style.width]=\"step / 2 + '%'\"></div>\r\n\r\n    <div\r\n      *ngFor=\"\r\n        let response of question?.questionDetails?.questionDetailResponses;\r\n        let i = index\r\n      \"\r\n      class=\"slider-text text-center px-2\"\r\n      [style.width]=\"step + '%'\"\r\n    >\r\n      {{ response.questionDetailResponsesChoice }}\r\n    </div>\r\n\r\n    <div [style.width]=\"step / 2 + '%'\"></div>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-template #nonSliderSingleQuestion>\r\n  <div\r\n    class=\"btn-group-toggle d-flex\"\r\n    [ngClass]=\"{\r\n      'flex-column':\r\n        question?.questionDetails?.singleSelectUiType ===\r\n        questionSingleSelectUiTypeEnum.Vertical,\r\n      'flex-wrap':\r\n        question?.questionDetails?.singleSelectUiType ===\r\n        questionSingleSelectUiTypeEnum.Horizontal\r\n    }\"\r\n    taRadioGroup\r\n    name=\"radioBasic\"\r\n  >\r\n    <div\r\n      *ngFor=\"\r\n        let response of question?.questionDetails?.questionDetailResponses\r\n      \"\r\n    >\r\n      <label class=\"btn-primary mb-1\" taButtonLabel>\r\n        <input\r\n          class=\"input-radio\"\r\n          type=\"radio\"\r\n          taButton\r\n          [value]=\"response\"\r\n          (click)=\"onSelectResponse(response)\"\r\n        />\r\n        {{ response.questionDetailResponsesChoice }}\r\n      </label>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SingleSelectComponent),
                        multi: true
                    }
                ],
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .slider-placeholder{color:#595959}:host .input-radio{display:none}:host .slider-text{color:#595959}"]
            }] }
];
/** @nocollapse */
SingleSelectComponent.ctorParameters = () => [];
SingleSelectComponent.propDecorators = {
    question: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9xdWVzdGlvbi9jb21wb25lbnRzL3NpbmdsZS1zZWxlY3Qvc2luZ2xlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFldEQsTUFBTSxPQUFPLHFCQUFxQjtJQU9oQztRQUZnQixtQ0FBOEIsR0FBRyw4QkFBOEIsQ0FBQztRQXdCeEUsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7SUF0Qm5CLENBQUM7SUFFVCxRQUFRLEtBQVUsQ0FBQztJQUVuQixXQUFXLENBQUMsT0FBc0I7UUFDdkMsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVNLGdCQUFnQixDQUFDLFFBQXlDO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEVBQUU7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLGlCQUFpQixLQUFVLENBQUM7SUFFNUIsVUFBVSxDQUFDLEtBQVUsSUFBUyxDQUFDO0lBSTlCLFVBQVU7UUFDaEIsTUFBTSxJQUFJLEdBQ1IsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsczFEQUE2QztnQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNwRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7Ozs7dUJBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9uU2luZ2xlU2VsZWN0VWlUeXBlRW51bSB9IGZyb20gJy4uLy4uLy4uLy4uL2VudW1zJztcclxuaW1wb3J0IHtcclxuICBRdWVzdGlvbkRldGFpbFJlc3BvbnNlSW50ZXJmYWNlLFxyXG4gIFF1ZXN0aW9uVHJlZUludGVyZmFjZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBpc1Byb3BlcnR5Q2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtc2luZ2xlLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpbmdsZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpbmdsZS1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNpbmdsZVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlU2VsZWN0Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBxdWVzdGlvbjogUXVlc3Rpb25UcmVlSW50ZXJmYWNlO1xyXG5cclxuICBwdWJsaWMgc3RlcDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBxdWVzdGlvblNpbmdsZVNlbGVjdFVpVHlwZUVudW0gPSBRdWVzdGlvblNpbmdsZVNlbGVjdFVpVHlwZUVudW07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChpc1Byb3BlcnR5Q2hhbmdlZChjaGFuZ2VzLnF1ZXN0aW9uKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0ZXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlbGVjdFJlc3BvbnNlKHJlc3BvbnNlOiBRdWVzdGlvbkRldGFpbFJlc3BvbnNlSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7fVxyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU3RlcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0ZXAgPVxyXG4gICAgICAxMDAgLyAodGhpcy5xdWVzdGlvbi5xdWVzdGlvbkRldGFpbHMucXVlc3Rpb25EZXRhaWxSZXNwb25zZXMubGVuZ3RoICsgMSk7XHJcbiAgICB0aGlzLnN0ZXAgPSArc3RlcC50b0ZpeGVkKDIpO1xyXG4gIH1cclxufVxyXG4iXX0=