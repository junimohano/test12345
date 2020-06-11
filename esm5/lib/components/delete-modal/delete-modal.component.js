import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { TaActiveModal } from '@trustarc/ui-toolkit';
var DeleteModalComponent = /** @class */ (function () {
    function DeleteModalComponent(modalService) {
        this.modalService = modalService;
        this.description = 'The item cannot be recovered once deleted. Are you sure you want to delete this?';
        this.primaryButtonText = 'Delete';
        this.secondaryButtonText = 'Secondary';
        this.cancelButtonText = 'Cancel';
        this.clickPrimary = new EventEmitter();
        this.clickSecondary = new EventEmitter();
        this.afterCancelled = new EventEmitter();
    }
    DeleteModalComponent.prototype.ngOnInit = function () { };
    DeleteModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.initDefaultFocus(); });
    };
    DeleteModalComponent.prototype.onClickCancel = function () {
        this.modalService.dismiss('Cancel click');
        this.afterCancelled.emit();
    };
    DeleteModalComponent.prototype.initDefaultFocus = function () {
        this.primaryButton.el.nativeElement.focus();
    };
    DeleteModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-delete-modal',
                    template: "<div\r\n  class=\"modal-body d-flex flex-column align-items-center justify-content-center\"\r\n>\r\n  <div\r\n    class=\"delete-icon-container d-flex align-items-center justify-content-center\"\r\n  >\r\n    <ta-icon class=\"delete-icon\" icon=\"delete\"></ta-icon>\r\n  </div>\r\n\r\n  <div class=\"title my-2\">\r\n    {{ title }}\r\n  </div>\r\n\r\n  <div class=\"description\">\r\n    {{ description }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-footer align-items-start justify-content-start p-4\">\r\n  <button\r\n    taButton\r\n    taType=\"flat\"\r\n    class=\"cancel-button mr-auto btn-lg\"\r\n    data-dismiss=\"modal\"\r\n    (click)=\"onClickCancel()\"\r\n  >\r\n    {{ cancelButtonText }}\r\n  </button>\r\n\r\n  <button\r\n    *ngIf=\"isSecondaryButtonEnabled\"\r\n    taButton\r\n    taType=\"secondary\"\r\n    class=\"secondary-button btn-lg btn-delete mr-3\"\r\n    (click)=\"clickSecondary.emit()\"\r\n  >\r\n    {{ secondaryButtonText }}\r\n  </button>\r\n\r\n  <button\r\n    #primaryButton\r\n    taButton\r\n    taType=\"danger\"\r\n    class=\"primary-button btn-lg m-0\"\r\n    (click)=\"clickPrimary.emit()\"\r\n  >\r\n    {{ primaryButtonText }}\r\n  </button>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}ta-delete-modal .modal-body .delete-icon-container{height:48px;width:48px;background-color:#fef5f5;border-radius:50%}ta-delete-modal .modal-body .delete-icon-container .ta-svg-icon-delete{color:#de2e21}ta-delete-modal .modal-body .delete-icon-container .ta-svg-icon-delete svg{height:20px;width:20px}ta-delete-modal .modal-body .title{font-size:1rem;font-weight:500}ta-delete-modal .modal-body .description{color:#595959}ta-delete-modal .modal-footer{border-top:none!important}ta-delete-modal .modal-footer .secondary-button{color:#000}"]
                }] }
    ];
    /** @nocollapse */
    DeleteModalComponent.ctorParameters = function () { return [
        { type: TaActiveModal }
    ]; };
    DeleteModalComponent.propDecorators = {
        title: [{ type: Input }],
        description: [{ type: Input }],
        primaryButtonText: [{ type: Input }],
        secondaryButtonText: [{ type: Input }],
        cancelButtonText: [{ type: Input }],
        isSecondaryButtonEnabled: [{ type: Input }],
        clickPrimary: [{ type: Output }],
        clickSecondary: [{ type: Output }],
        afterCancelled: [{ type: Output }],
        primaryButton: [{ type: ViewChild, args: ['primaryButton',] }]
    };
    return DeleteModalComponent;
}());
export { DeleteModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC9kZWxldGUtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRDtJQXNCRSw4QkFBbUIsWUFBMkI7UUFBM0IsaUJBQVksR0FBWixZQUFZLENBQWU7UUFiOUIsZ0JBQVcsR0FDekIsa0ZBQWtGLENBQUM7UUFDckUsc0JBQWlCLEdBQUcsUUFBUSxDQUFDO1FBQzdCLHdCQUFtQixHQUFHLFdBQVcsQ0FBQztRQUNsQyxxQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFHM0IsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFJVCxDQUFDO0lBRTNDLHVDQUFRLEdBQWYsY0FBeUIsQ0FBQztJQUVuQiw4Q0FBZSxHQUF0QjtRQUFBLGlCQUVDO1FBREMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSw0Q0FBYSxHQUFwQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLCtDQUFnQixHQUF4QjtRQUNHLElBQUksQ0FBQyxhQUFxQixDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixxc0NBQTRDO29CQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFSUSxhQUFhOzs7d0JBVW5CLEtBQUs7OEJBQ0wsS0FBSztvQ0FFTCxLQUFLO3NDQUNMLEtBQUs7bUNBQ0wsS0FBSzsyQ0FDTCxLQUFLOytCQUVMLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNO2dDQUVOLFNBQVMsU0FBQyxlQUFlOztJQWtCNUIsMkJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQS9CWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhQWN0aXZlTW9kYWwgfSBmcm9tICdAdHJ1c3RhcmMvdWktdG9vbGtpdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLWRlbGV0ZS1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGV0ZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkZXNjcmlwdGlvbiA9XHJcbiAgICAnVGhlIGl0ZW0gY2Fubm90IGJlIHJlY292ZXJlZCBvbmNlIGRlbGV0ZWQuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcz8nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwcmltYXJ5QnV0dG9uVGV4dCA9ICdEZWxldGUnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZWNvbmRhcnlCdXR0b25UZXh0ID0gJ1NlY29uZGFyeSc7XHJcbiAgQElucHV0KCkgcHVibGljIGNhbmNlbEJ1dHRvblRleHQgPSAnQ2FuY2VsJztcclxuICBASW5wdXQoKSBwdWJsaWMgaXNTZWNvbmRhcnlCdXR0b25FbmFibGVkOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGNsaWNrUHJpbWFyeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xpY2tTZWNvbmRhcnkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGFmdGVyQ2FuY2VsbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3ByaW1hcnlCdXR0b24nKSBwdWJsaWMgcHJpbWFyeUJ1dHRvbjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG1vZGFsU2VydmljZTogVGFBY3RpdmVNb2RhbCkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0RGVmYXVsdEZvY3VzKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2tDYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5kaXNtaXNzKCdDYW5jZWwgY2xpY2snKTtcclxuICAgIHRoaXMuYWZ0ZXJDYW5jZWxsZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RGVmYXVsdEZvY3VzKCk6IHZvaWQge1xyXG4gICAgKHRoaXMucHJpbWFyeUJ1dHRvbiBhcyBhbnkpLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcbn1cclxuIl19