import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { SimpleFileUploadConfig } from '../simple-file-upload/simple-file-upload-config.model';
var FileDownloadComponent = /** @class */ (function () {
    function FileDownloadComponent() {
        this.dBlock = true;
        this.attachments = [];
        this.files = [];
        this.deleteAttachment = new EventEmitter();
        this.clickAttachment = new EventEmitter();
        this.removeFile = new EventEmitter();
    }
    FileDownloadComponent.prototype.ngOnInit = function () { };
    FileDownloadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-file-download',
                    template: "<div class=\"file-attachment-summary pb-1\">\r\n  Attachments ({{ attachments?.length + files?.length }})\r\n</div>\r\n\r\n<ng-container *ngFor=\"let attachment of attachments\">\r\n  <div class=\"d-flex justify-content-between mt-2\">\r\n    <label\r\n      class=\"file-name-clickable text-truncate mr-1 mt-1 mb-0\"\r\n      (click)=\"clickAttachment.emit(attachment)\"\r\n      >{{ attachment[config.attachmentNameKey] }}</label\r\n    >\r\n    <div class=\"d-flex align-items-center\">\r\n      <span\r\n        *ngIf=\"hasDescription\"\r\n        class=\"file-description text-truncate mr-3\"\r\n        [innerText]=\"attachment.fileDescription\"\r\n      ></span>\r\n\r\n      <button\r\n        taButton\r\n        taType=\"circle\"\r\n        taTooltip=\"Delete\"\r\n        placement=\"top-right\"\r\n        container=\"body\"\r\n        class=\"flex-shrink-0\"\r\n        [disabled]=\"disabled\"\r\n        (click)=\"deleteAttachment.emit(attachment)\"\r\n      >\r\n        <ta-icon icon=\"delete\"></ta-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngFor=\"let file of files; let i = index\">\r\n  <div class=\"d-flex justify-content-between mt-2\">\r\n    <label class=\"file-name text-truncate mr-1 mt-1 mb-0\">{{\r\n      file.file.name\r\n    }}</label>\r\n\r\n    <div class=\"d-flex align-items-center\">\r\n      <input\r\n        *ngIf=\"hasDescription\"\r\n        type=\"text\"\r\n        class=\"file-description form-control mr-3\"\r\n        placeholder=\"File description\"\r\n        [disabled]=\"disabled\"\r\n        [(ngModel)]=\"file.text\"\r\n      />\r\n\r\n      <button\r\n        taButton\r\n        taType=\"circle\"\r\n        taTooltip=\"Delete\"\r\n        placement=\"top-right\"\r\n        container=\"body\"\r\n        class=\"flex-shrink-0\"\r\n        [disabled]=\"disabled\"\r\n        (click)=\"removeFile.emit(i)\"\r\n      >\r\n        <ta-icon icon=\"delete\"></ta-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<div class=\"no-files mt-2\" *ngIf=\"attachments?.length + files?.length === 0\">\r\n  No files attached.\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .file-name,:host .file-name-clickable{color:#0052cc}:host .file-name-clickable{cursor:pointer}:host .file-attachment-summary{font-size:.75rem;font-weight:500}:host .no-files{color:#595959}:host .file-description{width:230px}"]
                }] }
    ];
    /** @nocollapse */
    FileDownloadComponent.ctorParameters = function () { return []; };
    FileDownloadComponent.propDecorators = {
        dBlock: [{ type: HostBinding, args: ['class.d-block',] }],
        attachments: [{ type: Input }],
        files: [{ type: Input }],
        disabled: [{ type: Input }],
        hasDescription: [{ type: Input }],
        config: [{ type: Input }],
        deleteAttachment: [{ type: Output }],
        clickAttachment: [{ type: Output }],
        removeFile: [{ type: Output }]
    };
    return FileDownloadComponent;
}());
export { FileDownloadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kb3dubG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLWRvd25sb2FkL2ZpbGUtZG93bmxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUcvRjtJQW1CRTtRQVpxQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5DLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBMkIsRUFBRSxDQUFDO1FBS2xDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBRTFDLENBQUM7SUFFVCx3Q0FBUSxHQUFmLGNBQXlCLENBQUM7O2dCQXJCM0IsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDBuRUFBNkM7b0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7O3lCQUVFLFdBQVcsU0FBQyxlQUFlOzhCQUUzQixLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLO3lCQUNMLEtBQUs7bUNBRUwsTUFBTTtrQ0FDTixNQUFNOzZCQUNOLE1BQU07O0lBS1QsNEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWhCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2ltcGxlRmlsZVVwbG9hZENvbmZpZyB9IGZyb20gJy4uL3NpbXBsZS1maWxlLXVwbG9hZC9zaW1wbGUtZmlsZS11cGxvYWQtY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgU2ltcGxlRmlsZVVwbG9hZEl0ZW0gfSBmcm9tICcuLi9zaW1wbGUtZmlsZS11cGxvYWQvc2ltcGxlLWZpbGUtdXBsb2FkLWl0ZW0ubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1maWxlLWRvd25sb2FkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1kb3dubG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1kb3dubG9hZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlRG93bmxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZC1ibG9jaycpIHB1YmxpYyBkQmxvY2sgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgYXR0YWNobWVudHM6IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgcHVibGljIGZpbGVzOiBTaW1wbGVGaWxlVXBsb2FkSXRlbVtdID0gW107XHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoYXNEZXNjcmlwdGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwdWJsaWMgY29uZmlnOiBTaW1wbGVGaWxlVXBsb2FkQ29uZmlnO1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGRlbGV0ZUF0dGFjaG1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGNsaWNrQXR0YWNobWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVtb3ZlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcbn1cclxuIl19