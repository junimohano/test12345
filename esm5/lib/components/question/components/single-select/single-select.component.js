import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuestionSingleSelectUiTypeEnum } from '../../../../enums';
import { isPropertyChanged } from '../../../../utils';
var SingleSelectComponent = /** @class */ (function () {
    function SingleSelectComponent() {
        this.questionSingleSelectUiTypeEnum = QuestionSingleSelectUiTypeEnum;
        this.onChange = function (_) { };
    }
    SingleSelectComponent.prototype.ngOnInit = function () { };
    SingleSelectComponent.prototype.ngOnChanges = function (changes) {
        if (isPropertyChanged(changes.question)) {
            this.updateStep();
        }
    };
    SingleSelectComponent.prototype.onSelectResponse = function (response) {
        this.onChange(response);
    };
    SingleSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SingleSelectComponent.prototype.registerOnTouched = function () { };
    SingleSelectComponent.prototype.writeValue = function (value) { };
    SingleSelectComponent.prototype.updateStep = function () {
        var step = 100 / (this.question.questionDetails.questionDetailResponses.length + 1);
        this.step = +step.toFixed(2);
    };
    SingleSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-single-select',
                    template: "<ng-container\r\n  *ngIf=\"\r\n    question?.questionDetails?.singleSelectUiType ===\r\n      questionSingleSelectUiTypeEnum.Slider;\r\n    else nonSliderSingleQuestion\r\n  \"\r\n>\r\n  <div class=\"slider-placeholder mt-n3 mb-3\">Select one</div>\r\n\r\n  <input\r\n    type=\"range\"\r\n    value=\"50\"\r\n    class=\"slider w-100\"\r\n    min=\"0\"\r\n    max=\"99\"\r\n    [step]=\"step\"\r\n  />\r\n\r\n  <div class=\"d-flex pb-2 mb-4\">\r\n    <div [style.width]=\"step / 2 + '%'\"></div>\r\n\r\n    <div\r\n      *ngFor=\"\r\n        let response of question?.questionDetails?.questionDetailResponses;\r\n        let i = index\r\n      \"\r\n      class=\"slider-text text-center px-2\"\r\n      [style.width]=\"step + '%'\"\r\n    >\r\n      {{ response.questionDetailResponsesChoice }}\r\n    </div>\r\n\r\n    <div [style.width]=\"step / 2 + '%'\"></div>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-template #nonSliderSingleQuestion>\r\n  <div\r\n    class=\"btn-group-toggle d-flex\"\r\n    [ngClass]=\"{\r\n      'flex-column':\r\n        question?.questionDetails?.singleSelectUiType ===\r\n        questionSingleSelectUiTypeEnum.Vertical,\r\n      'flex-wrap':\r\n        question?.questionDetails?.singleSelectUiType ===\r\n        questionSingleSelectUiTypeEnum.Horizontal\r\n    }\"\r\n    taRadioGroup\r\n    name=\"radioBasic\"\r\n  >\r\n    <div\r\n      *ngFor=\"\r\n        let response of question?.questionDetails?.questionDetailResponses\r\n      \"\r\n    >\r\n      <label class=\"btn-primary mb-1\" taButtonLabel>\r\n        <input\r\n          class=\"input-radio\"\r\n          type=\"radio\"\r\n          taButton\r\n          [value]=\"response\"\r\n          (click)=\"onSelectResponse(response)\"\r\n        />\r\n        {{ response.questionDetailResponsesChoice }}\r\n      </label>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return SingleSelectComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .slider-placeholder{color:#595959}:host .input-radio{display:none}:host .slider-text{color:#595959}"]
                }] }
    ];
    /** @nocollapse */
    SingleSelectComponent.ctorParameters = function () { return []; };
    SingleSelectComponent.propDecorators = {
        question: [{ type: Input }]
    };
    return SingleSelectComponent;
}());
export { SingleSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9xdWVzdGlvbi9jb21wb25lbnRzL3NpbmdsZS1zZWxlY3Qvc2luZ2xlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdEQ7SUFvQkU7UUFGZ0IsbUNBQThCLEdBQUcsOEJBQThCLENBQUM7UUF3QnhFLGFBQVEsR0FBRyxVQUFDLENBQU0sSUFBTSxDQUFDLENBQUM7SUF0Qm5CLENBQUM7SUFFVCx3Q0FBUSxHQUFmLGNBQXlCLENBQUM7SUFFbkIsMkNBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDdkMsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVNLGdEQUFnQixHQUF2QixVQUF3QixRQUF5QztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxnREFBZ0IsR0FBdkIsVUFBd0IsRUFBRTtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0saURBQWlCLEdBQXhCLGNBQWtDLENBQUM7SUFFNUIsMENBQVUsR0FBakIsVUFBa0IsS0FBVSxJQUFTLENBQUM7SUFJOUIsMENBQVUsR0FBbEI7UUFDRSxJQUFNLElBQUksR0FDUixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixzMURBQTZDO29CQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixDQUFDOzRCQUNwRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7OzJCQUdFLEtBQUs7O0lBa0NSLDRCQUFDO0NBQUEsQUFqREQsSUFpREM7U0FwQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUXVlc3Rpb25TaW5nbGVTZWxlY3RVaVR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vLi4vLi4vZW51bXMnO1xyXG5pbXBvcnQge1xyXG4gIFF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UsXHJcbiAgUXVlc3Rpb25UcmVlSW50ZXJmYWNlXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGlzUHJvcGVydHlDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1zaW5nbGUtc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2luZ2xlLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2luZ2xlLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2luZ2xlU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVTZWxlY3RDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQElucHV0KCkgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvblRyZWVJbnRlcmZhY2U7XHJcblxyXG4gIHB1YmxpYyBzdGVwOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IHF1ZXN0aW9uU2luZ2xlU2VsZWN0VWlUeXBlRW51bSA9IFF1ZXN0aW9uU2luZ2xlU2VsZWN0VWlUeXBlRW51bTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGlzUHJvcGVydHlDaGFuZ2VkKGNoYW5nZXMucXVlc3Rpb24pKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU3RlcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU2VsZWN0UmVzcG9uc2UocmVzcG9uc2U6IFF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm4pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHt9XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTdGVwKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RlcCA9XHJcbiAgICAgIDEwMCAvICh0aGlzLnF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlscy5xdWVzdGlvbkRldGFpbFJlc3BvbnNlcy5sZW5ndGggKyAxKTtcclxuICAgIHRoaXMuc3RlcCA9ICtzdGVwLnRvRml4ZWQoMik7XHJcbiAgfVxyXG59XHJcbiJdfQ==