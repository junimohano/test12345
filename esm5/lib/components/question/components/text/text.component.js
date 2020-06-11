import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var TextComponent = /** @class */ (function () {
    function TextComponent() {
        this.onChange = function (_) { };
    }
    TextComponent.prototype.ngOnInit = function () { };
    TextComponent.prototype.onModelChange = function (value) {
        this.onChange(value);
    };
    TextComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TextComponent.prototype.registerOnTouched = function () { };
    TextComponent.prototype.writeValue = function (value) {
        if (value) {
            this.value = value;
        }
    };
    TextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-text',
                    template: "<textarea\r\n  class=\"text-response w-100 px-2 py-1\"\r\n  placeholder=\"Enter your response.\"\r\n  [ngModel]=\"value\"\r\n  (ngModelChange)=\"onModelChange($event)\"\r\n></textarea>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TextComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .text-response{height:120px;border:1px solid #c2c2c2;border-radius:4px;resize:none}"]
                }] }
    ];
    /** @nocollapse */
    TextComponent.ctorParameters = function () { return []; };
    TextComponent.propDecorators = {
        question: [{ type: Input }]
    };
    return TextComponent;
}());
export { TextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9xdWVzdGlvbi9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJekU7SUFrQkU7UUFvQlEsYUFBUSxHQUFHLFVBQUMsQ0FBTSxJQUFNLENBQUMsQ0FBQztJQXBCbkIsQ0FBQztJQUVULGdDQUFRLEdBQWYsY0FBeUIsQ0FBQztJQUVuQixxQ0FBYSxHQUFwQixVQUFxQixLQUFhO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLHdDQUFnQixHQUF2QixVQUF3QixFQUFFO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEIsY0FBa0MsQ0FBQztJQUU1QixrQ0FBVSxHQUFqQixVQUFrQixLQUFhO1FBQzdCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQix3TUFBb0M7b0JBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsYUFBYSxFQUFiLENBQWEsQ0FBQzs0QkFDNUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7O2lCQUNGOzs7OzsyQkFFRSxLQUFLOztJQXlCUixvQkFBQztDQUFBLEFBdkNELElBdUNDO1NBMUJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvblRyZWVJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtdGV4dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RleHQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRleHRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uVHJlZUludGVyZmFjZTtcclxuXHJcbiAgcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbik6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxufVxyXG4iXX0=