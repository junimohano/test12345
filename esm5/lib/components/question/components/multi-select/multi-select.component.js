import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuestionMultiSelectUiTypeEnum } from '../../../../enums';
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent() {
        this.questionMultiSelectUiTypeEnum = QuestionMultiSelectUiTypeEnum;
        this.onChange = function (_) { };
    }
    MultiSelectComponent.prototype.ngOnInit = function () { };
    MultiSelectComponent.prototype.onSelectResponse = function (response) {
        this.onChange(response);
    };
    MultiSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MultiSelectComponent.prototype.registerOnTouched = function () { };
    MultiSelectComponent.prototype.writeValue = function (value) { };
    MultiSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-multi-select',
                    template: "<div class=\"multi-select-placeholder mt-n3 mb-3\">Select all that apply.</div>\r\n\r\n<div\r\n  class=\"d-flex\"\r\n  [ngClass]=\"{\r\n    'flex-column':\r\n      question?.questionDetails?.multiSelectUiType ===\r\n      questionMultiSelectUiTypeEnum.Vertical,\r\n    'flex-wrap':\r\n      question?.questionDetails?.multiSelectUiType ===\r\n      questionMultiSelectUiTypeEnum.Horizontal\r\n  }\"\r\n>\r\n  <div\r\n    *ngFor=\"let response of question?.questionDetails?.questionDetailResponses\"\r\n    class=\"btn-group-toggle\"\r\n    taRadioGroup\r\n  >\r\n    <label class=\"btn-primary mb-1\" taButtonLabel>\r\n      <input\r\n        class=\"input-radio\"\r\n        type=\"radio\"\r\n        taButton\r\n        [value]=\"response\"\r\n        (click)=\"onSelectResponse(response)\"\r\n      />\r\n      {{ response.questionDetailResponsesChoice }}\r\n    </label>\r\n  </div>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MultiSelectComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .multi-select-placeholder{color:#595959}:host .input-radio{display:none}"]
                }] }
    ];
    /** @nocollapse */
    MultiSelectComponent.ctorParameters = function () { return []; };
    MultiSelectComponent.propDecorators = {
        question: [{ type: Input }]
    };
    return MultiSelectComponent;
}());
export { MultiSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9uL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbEU7SUFrQkU7UUFGZ0Isa0NBQTZCLEdBQUcsNkJBQTZCLENBQUM7UUFrQnRFLGFBQVEsR0FBRyxVQUFDLENBQU0sSUFBTSxDQUFDLENBQUM7SUFoQm5CLENBQUM7SUFFVCx1Q0FBUSxHQUFmLGNBQXlCLENBQUM7SUFFbkIsK0NBQWdCLEdBQXZCLFVBQXdCLFFBQXlDO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLCtDQUFnQixHQUF2QixVQUF3QixFQUFFO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxnREFBaUIsR0FBeEIsY0FBa0MsQ0FBQztJQUU1Qix5Q0FBVSxHQUFqQixVQUFrQixLQUFVLElBQVMsQ0FBQzs7Z0JBaEN2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsZzVCQUE0QztvQkFFNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQzs0QkFDbkQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7O2lCQUNGOzs7OzsyQkFFRSxLQUFLOztJQXFCUiwyQkFBQztDQUFBLEFBbkNELElBbUNDO1NBdEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9uTXVsdGlTZWxlY3RVaVR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vLi4vLi4vZW51bXMnO1xyXG5pbXBvcnQge1xyXG4gIFF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UsXHJcbiAgUXVlc3Rpb25UcmVlSW50ZXJmYWNlXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLW11bHRpLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL211bHRpLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNdWx0aVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uVHJlZUludGVyZmFjZTtcclxuXHJcbiAgcHVibGljIHJlYWRvbmx5IHF1ZXN0aW9uTXVsdGlTZWxlY3RVaVR5cGVFbnVtID0gUXVlc3Rpb25NdWx0aVNlbGVjdFVpVHlwZUVudW07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG9uU2VsZWN0UmVzcG9uc2UocmVzcG9uc2U6IFF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm4pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHt9XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxufVxyXG4iXX0=