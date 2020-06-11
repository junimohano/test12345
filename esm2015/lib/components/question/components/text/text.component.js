import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class TextComponent {
    constructor() {
        this.onChange = (_) => { };
    }
    ngOnInit() { }
    onModelChange(value) {
        this.onChange(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched() { }
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-text',
                template: "<textarea\r\n  class=\"text-response w-100 px-2 py-1\"\r\n  placeholder=\"Enter your response.\"\r\n  [ngModel]=\"value\"\r\n  (ngModelChange)=\"onModelChange($event)\"\r\n></textarea>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextComponent),
                        multi: true
                    }
                ],
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .text-response{height:120px;border:1px solid #c2c2c2;border-radius:4px;resize:none}"]
            }] }
];
/** @nocollapse */
TextComponent.ctorParameters = () => [];
TextComponent.propDecorators = {
    question: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9xdWVzdGlvbi9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFpQnpFLE1BQU0sT0FBTyxhQUFhO0lBS3hCO1FBb0JRLGFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBcEJuQixDQUFDO0lBRVQsUUFBUSxLQUFVLENBQUM7SUFFbkIsYUFBYSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsRUFBRTtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0saUJBQWlCLEtBQVUsQ0FBQztJQUU1QixVQUFVLENBQUMsS0FBYTtRQUM3QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsd01BQW9DO2dCQUVwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUM1QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7Ozs7dUJBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9uVHJlZUludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS10ZXh0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGV4dENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBxdWVzdGlvbjogUXVlc3Rpb25UcmVlSW50ZXJmYWNlO1xyXG5cclxuICBwdWJsaWMgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xyXG59XHJcbiJdfQ==