import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { TaActiveModal } from '@trustarc/ui-toolkit';
var QuestionnaireContentModalComponent = /** @class */ (function () {
    function QuestionnaireContentModalComponent(modalService) {
        this.modalService = modalService;
    }
    QuestionnaireContentModalComponent.prototype.ngOnInit = function () { };
    QuestionnaireContentModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-questionnaire-content-modal',
                    template: "<div\r\n  class=\"modal-body d-flex flex-column align-items-center justify-content-center\"\r\n>\r\n  <button\r\n    taButton\r\n    taType=\"flat\"\r\n    class=\"cancel-button mr-auto btn-lg\"\r\n    data-dismiss=\"modal\"\r\n    (click)=\"modalService.dismiss('Cancel click')\"\r\n  >\r\n    Cancel\r\n  </button>\r\n  <ta-questionnaire-content\r\n    [recordId]=\"recordId\"\r\n    [reviewMode]=\"reviewMode\"\r\n  ></ta-questionnaire-content>\r\n</div>\r\n\r\n<div class=\"modal-footer align-items-start justify-content-start p-4\">\r\n  <button\r\n    taButton\r\n    taType=\"flat\"\r\n    class=\"cancel-button mr-auto btn-lg\"\r\n    data-dismiss=\"modal\"\r\n    (click)=\"modalService.dismiss('Cancel click')\"\r\n  >\r\n    Cancel\r\n  </button>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}ta-questionnaire-content-modal .modal-footer{border-top:none!important}ta-questionnaire-content-modal .modal-footer .secondary-button{color:#000}"]
                }] }
    ];
    /** @nocollapse */
    QuestionnaireContentModalComponent.ctorParameters = function () { return [
        { type: TaActiveModal }
    ]; };
    QuestionnaireContentModalComponent.propDecorators = {
        recordId: [{ type: Input }],
        reviewMode: [{ type: Input }]
    };
    return QuestionnaireContentModalComponent;
}());
export { QuestionnaireContentModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS1jb250ZW50LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUtY29udGVudC1tb2RhbC9xdWVzdGlvbm5haXJlLWNvbnRlbnQtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJEO0lBV0UsNENBQW1CLFlBQTJCO1FBQTNCLGlCQUFZLEdBQVosWUFBWSxDQUFlO0lBQUcsQ0FBQztJQUUzQyxxREFBUSxHQUFmLGNBQXlCLENBQUM7O2dCQWIzQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsK3dCQUEyRDtvQkFFM0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUlEsYUFBYTs7OzJCQVVuQixLQUFLOzZCQUNMLEtBQUs7O0lBS1IseUNBQUM7Q0FBQSxBQWRELElBY0M7U0FQWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFBY3RpdmVNb2RhbCB9IGZyb20gJ0B0cnVzdGFyYy91aS10b29sa2l0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtcXVlc3Rpb25uYWlyZS1jb250ZW50LW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcXVlc3Rpb25uYWlyZS1jb250ZW50LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9xdWVzdGlvbm5haXJlLWNvbnRlbnQtbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbm5haXJlQ29udGVudE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgcmVjb3JkSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgcmV2aWV3TW9kZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG1vZGFsU2VydmljZTogVGFBY3RpdmVNb2RhbCkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge31cclxufVxyXG4iXX0=