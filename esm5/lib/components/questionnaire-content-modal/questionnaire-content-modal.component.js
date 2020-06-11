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
                    template: "<div\r\n  class=\"modal-body d-flex flex-column align-items-center justify-content-center\"\r\n>\r\n  <ta-questionnaire-content\r\n    [recordId]=\"recordId\"\r\n    [reviewMode]=\"reviewMode\"\r\n  ></ta-questionnaire-content>\r\n</div>\r\n\r\n<div class=\"modal-footer align-items-start justify-content-start p-4\"></div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS1jb250ZW50LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUtY29udGVudC1tb2RhbC9xdWVzdGlvbm5haXJlLWNvbnRlbnQtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJEO0lBV0UsNENBQW1CLFlBQTJCO1FBQTNCLGlCQUFZLEdBQVosWUFBWSxDQUFlO0lBQUcsQ0FBQztJQUUzQyxxREFBUSxHQUFmLGNBQXlCLENBQUM7O2dCQWIzQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsbVZBQTJEO29CQUUzRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFSUSxhQUFhOzs7MkJBVW5CLEtBQUs7NkJBQ0wsS0FBSzs7SUFLUix5Q0FBQztDQUFBLEFBZEQsSUFjQztTQVBZLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYUFjdGl2ZU1vZGFsIH0gZnJvbSAnQHRydXN0YXJjL3VpLXRvb2xraXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1xdWVzdGlvbm5haXJlLWNvbnRlbnQtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWVzdGlvbm5haXJlLWNvbnRlbnQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3F1ZXN0aW9ubmFpcmUtY29udGVudC1tb2RhbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9ubmFpcmVDb250ZW50TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyByZWNvcmRJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyByZXZpZXdNb2RlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kYWxTZXJ2aWNlOiBUYUFjdGl2ZU1vZGFsKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==