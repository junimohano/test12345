import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuestionMultiSelectUiTypeEnum } from '../../../../enums';
export class MultiSelectComponent {
    constructor() {
        this.questionMultiSelectUiTypeEnum = QuestionMultiSelectUiTypeEnum;
        this.onChange = (_) => { };
    }
    ngOnInit() { }
    onSelectResponse(response) {
        this.onChange(response);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched() { }
    writeValue(value) { }
}
MultiSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-multi-select',
                template: "<div class=\"multi-select-placeholder mt-n3 mb-3\">Select all that apply.</div>\r\n\r\n<div\r\n  class=\"d-flex\"\r\n  [ngClass]=\"{\r\n    'flex-column':\r\n      question?.questionDetails?.multiSelectUiType ===\r\n      questionMultiSelectUiTypeEnum.Vertical,\r\n    'flex-wrap':\r\n      question?.questionDetails?.multiSelectUiType ===\r\n      questionMultiSelectUiTypeEnum.Horizontal\r\n  }\"\r\n>\r\n  <div\r\n    *ngFor=\"let response of question?.questionDetails?.questionDetailResponses\"\r\n    class=\"btn-group-toggle\"\r\n    taRadioGroup\r\n  >\r\n    <label class=\"btn-primary mb-1\" taButtonLabel>\r\n      <input\r\n        class=\"input-radio\"\r\n        type=\"radio\"\r\n        taButton\r\n        [value]=\"response\"\r\n        (click)=\"onSelectResponse(response)\"\r\n      />\r\n      {{ response.questionDetailResponsesChoice }}\r\n    </label>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MultiSelectComponent),
                        multi: true
                    }
                ],
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .multi-select-placeholder{color:#595959}:host .input-radio{display:none}"]
            }] }
];
/** @nocollapse */
MultiSelectComponent.ctorParameters = () => [];
MultiSelectComponent.propDecorators = {
    question: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9uL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFtQmxFLE1BQU0sT0FBTyxvQkFBb0I7SUFLL0I7UUFGZ0Isa0NBQTZCLEdBQUcsNkJBQTZCLENBQUM7UUFrQnRFLGFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBaEJuQixDQUFDO0lBRVQsUUFBUSxLQUFVLENBQUM7SUFFbkIsZ0JBQWdCLENBQUMsUUFBeUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsRUFBRTtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0saUJBQWlCLEtBQVUsQ0FBQztJQUU1QixVQUFVLENBQUMsS0FBVSxJQUFTLENBQUM7OztZQWhDdkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGc1QkFBNEM7Z0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7O3VCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvbk11bHRpU2VsZWN0VWlUeXBlRW51bSB9IGZyb20gJy4uLy4uLy4uLy4uL2VudW1zJztcclxuaW1wb3J0IHtcclxuICBRdWVzdGlvbkRldGFpbFJlc3BvbnNlSW50ZXJmYWNlLFxyXG4gIFF1ZXN0aW9uVHJlZUludGVyZmFjZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1tdWx0aS1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tdWx0aS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL211bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTXVsdGlTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE11bHRpU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQElucHV0KCkgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvblRyZWVJbnRlcmZhY2U7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBxdWVzdGlvbk11bHRpU2VsZWN0VWlUeXBlRW51bSA9IFF1ZXN0aW9uTXVsdGlTZWxlY3RVaVR5cGVFbnVtO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBvblNlbGVjdFJlc3BvbnNlKHJlc3BvbnNlOiBRdWVzdGlvbkRldGFpbFJlc3BvbnNlSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7fVxyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XHJcbn1cclxuIl19