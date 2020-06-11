import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { TaActiveModal } from '@trustarc/ui-toolkit';
export class QuestionnaireContentModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() { }
}
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
QuestionnaireContentModalComponent.ctorParameters = () => [
    { type: TaActiveModal }
];
QuestionnaireContentModalComponent.propDecorators = {
    recordId: [{ type: Input }],
    reviewMode: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS1jb250ZW50LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUtY29udGVudC1tb2RhbC9xdWVzdGlvbm5haXJlLWNvbnRlbnQtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBU3JELE1BQU0sT0FBTyxrQ0FBa0M7SUFJN0MsWUFBbUIsWUFBMkI7UUFBM0IsaUJBQVksR0FBWixZQUFZLENBQWU7SUFBRyxDQUFDO0lBRTNDLFFBQVEsS0FBVSxDQUFDOzs7WUFiM0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLG1WQUEyRDtnQkFFM0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQVJRLGFBQWE7Ozt1QkFVbkIsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhQWN0aXZlTW9kYWwgfSBmcm9tICdAdHJ1c3RhcmMvdWktdG9vbGtpdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLXF1ZXN0aW9ubmFpcmUtY29udGVudC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXN0aW9ubmFpcmUtY29udGVudC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcXVlc3Rpb25uYWlyZS1jb250ZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25uYWlyZUNvbnRlbnRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIHJlY29yZElkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHJldmlld01vZGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbFNlcnZpY2U6IFRhQWN0aXZlTW9kYWwpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcbn1cclxuIl19