import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ToastService } from '@trustarc/ui-toolkit';
import { ChangeDetectableComponentBase } from '../../../change-detectable-component-base';
import { FileUploadValidationService } from './file-upload.validation.service';
export class FileUploadComponent extends ChangeDetectableComponentBase {
    constructor(changeDetectorRef, fileUploadValidationService, toastService) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.fileUploadValidationService = fileUploadValidationService;
        this.toastService = toastService;
        this.formatConfig = {
            jpg: false,
            png: false,
            gif: false,
            csv: false,
            tsv: false,
            zip: false,
            txt: false,
            doc: false,
            xsl: false,
            ppt: false,
            rtf: false,
            pdf: false,
            css: false,
            js: false,
            html: false,
            code: false
        };
        this.afterFilesSelected = new EventEmitter();
        this.draggingOver = false;
        this.allowedMime = [];
        this.files = [];
        this.propagateChange = (files) => { };
    }
    ngOnInit() {
        this.allowedMime = this.fileUploadValidationService.getAllowedMime(this.formatConfig);
    }
    onDragOver(e) {
        e.preventDefault();
        this.draggingOver = true;
        this.markForCheck();
    }
    onDragLeave(e) {
        e.preventDefault();
        this.draggingOver = false;
        this.markForCheck();
    }
    selectFiles(files) {
        const filesToAdd = Object.assign([], files);
        let isValid = true;
        if (!this.isValidFilesSize(filesToAdd)) {
            isValid = false;
            this.toastService.error(`Attachments size exceeds the allowable limit (maximum: ${this.formatBytes(this.maxFileSize)})`);
        }
        filesToAdd.forEach((file, index) => {
            if (!this.fileUploadValidationService.isValidExtension(file, this.formatConfig)) {
                isValid = false;
                this.toastService.error(`${file.name} is invalid file type`);
            }
        });
        if (!isValid) {
            return;
        }
        this.propagateChange(filesToAdd);
        this.markForCheck();
        this.afterFilesSelected.emit(filesToAdd);
    }
    onDrop(event) {
        event.preventDefault();
        this.onDragLeave(event);
        this.selectFiles(event.dataTransfer.files);
    }
    onFilesSelected(event) {
        this.selectFiles(event.target.files);
        event.target.value = null;
    }
    openUploadBrowser() {
        this.fileInput.nativeElement.click();
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
    writeValue(value) {
        if (value) {
            this.files = value;
        }
    }
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    isValidFilesSize(files) {
        const size = this.getFilesSize(files);
        return this.maxFileSize
            ? this.fileUploadValidationService.isValidFileSize(size, this.maxFileSize)
            : true;
    }
    getFilesSize(files) {
        return files
            .map(f => f.size)
            .reduce((totalSize, fileSize) => totalSize + fileSize);
    }
}
FileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-file-upload',
                template: "<div\r\n  class=\"file-upload-container drop-zone p-3\"\r\n  [ngClass]=\"{ 'dragging-over': draggingOver }\"\r\n  (dragover)=\"onDragOver($event)\"\r\n  (dragleave)=\"onDragLeave($event)\"\r\n  (drop)=\"onDrop($event)\"\r\n  (click)=\"$event.stopPropagation()\"\r\n>\r\n  {{ prefixText }}\r\n  <label [attr.for]=\"id + '-input'\" class=\"m-0\">{{ linkText }}</label>\r\n  {{ suffixText }}\r\n  <input\r\n    #fileInput\r\n    type=\"file\"\r\n    [attr.id]=\"id + '-input'\"\r\n    [multiple]=\"isMultiple\"\r\n    [accept]=\"allowedMime\"\r\n    (change)=\"onFilesSelected($event)\"\r\n  />\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => FileUploadComponent),
                        multi: true
                    }
                ],
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .file-upload-container{border:2px dashed #c2c2c2;border-radius:4px;text-align:center;background:#fff}:host .file-upload-container.dragging-over{background:#ccf0f8;border:2px dashed rgba(0,0,0,.3)}:host .file-upload-container label{cursor:pointer;color:#0052cc}:host .file-upload-container input[type=file]{display:none}"]
            }] }
];
/** @nocollapse */
FileUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: FileUploadValidationService },
    { type: ToastService }
];
FileUploadComponent.propDecorators = {
    id: [{ type: Input }],
    prefixText: [{ type: Input }],
    linkText: [{ type: Input }],
    suffixText: [{ type: Input }],
    isMultiple: [{ type: Input }],
    formatConfig: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    afterFilesSelected: [{ type: Output }],
    fileInput: [{ type: ViewChild, args: ['fileInput',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy11aS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTFGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBZS9FLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSw2QkFBNkI7SUFxQ3BFLFlBQ1ksaUJBQW9DLEVBQ3RDLDJCQUF3RCxFQUN4RCxZQUEwQjtRQUVsQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUpmLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDdEMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWpDcEIsaUJBQVksR0FBMkI7WUFDckQsR0FBRyxFQUFFLEtBQUs7WUFDVixHQUFHLEVBQUUsS0FBSztZQUNWLEdBQUcsRUFBRSxLQUFLO1lBQ1YsR0FBRyxFQUFFLEtBQUs7WUFDVixHQUFHLEVBQUUsS0FBSztZQUNWLEdBQUcsRUFBRSxLQUFLO1lBQ1YsR0FBRyxFQUFFLEtBQUs7WUFDVixHQUFHLEVBQUUsS0FBSztZQUNWLEdBQUcsRUFBRSxLQUFLO1lBQ1Ys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VztZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxRSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sS0FBSzthQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDaEIsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQW5LRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIseW1CQUEyQztnQkFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7OztZQTdCQyxpQkFBaUI7WUFlViwyQkFBMkI7WUFKM0IsWUFBWTs7O2lCQXFCbEIsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBa0JMLEtBQUs7aUNBRUwsTUFBTTt3QkFFTixTQUFTLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICdAdHJ1c3RhcmMvdWktdG9vbGtpdCc7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RhYmxlQ29tcG9uZW50QmFzZSB9IGZyb20gJy4uLy4uLy4uL2NoYW5nZS1kZXRlY3RhYmxlLWNvbXBvbmVudC1iYXNlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZEZvcm1hdENvbmZpZyB9IGZyb20gJy4vZmlsZS11cGxvYWQubW9kZWwnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLnZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLWZpbGUtdXBsb2FkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGaWxlVXBsb2FkQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkQ29tcG9uZW50IGV4dGVuZHMgQ2hhbmdlRGV0ZWN0YWJsZUNvbXBvbmVudEJhc2VcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwcmVmaXhUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHN1ZmZpeFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgaXNNdWx0aXBsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwdWJsaWMgZm9ybWF0Q29uZmlnOiBGaWxlVXBsb2FkRm9ybWF0Q29uZmlnID0ge1xyXG4gICAganBnOiBmYWxzZSxcclxuICAgIHBuZzogZmFsc2UsXHJcbiAgICBnaWY6IGZhbHNlLFxyXG4gICAgY3N2OiBmYWxzZSxcclxuICAgIHRzdjogZmFsc2UsXHJcbiAgICB6aXA6IGZhbHNlLFxyXG4gICAgdHh0OiBmYWxzZSxcclxuICAgIGRvYzogZmFsc2UsXHJcbiAgICB4c2w6IGZhbHNlLFxyXG4gICAgcHB0OiBmYWxzZSxcclxuICAgIHJ0ZjogZmFsc2UsXHJcbiAgICBwZGY6IGZhbHNlLFxyXG4gICAgY3NzOiBmYWxzZSxcclxuICAgIGpzOiBmYWxzZSxcclxuICAgIGh0bWw6IGZhbHNlLFxyXG4gICAgY29kZTogZmFsc2VcclxuICB9O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhGaWxlU2l6ZTogbnVtYmVyO1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGFmdGVyRmlsZXNTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKSBwdWJsaWMgZmlsZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBwdWJsaWMgZHJhZ2dpbmdPdmVyID0gZmFsc2U7XHJcbiAgcHVibGljIGFsbG93ZWRNaW1lOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHB1YmxpYyBmaWxlczogRmlsZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgcHJvcGFnYXRlQ2hhbmdlOiBGdW5jdGlvbiA9IChmaWxlczogYW55KSA9PiB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmaWxlVXBsb2FkVmFsaWRhdGlvblNlcnZpY2U6IEZpbGVVcGxvYWRWYWxpZGF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWxsb3dlZE1pbWUgPSB0aGlzLmZpbGVVcGxvYWRWYWxpZGF0aW9uU2VydmljZS5nZXRBbGxvd2VkTWltZShcclxuICAgICAgdGhpcy5mb3JtYXRDb25maWdcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25EcmFnT3ZlcihlOiBhbnkpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZHJhZ2dpbmdPdmVyID0gdHJ1ZTtcclxuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25EcmFnTGVhdmUoZTogYW55KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmRyYWdnaW5nT3ZlciA9IGZhbHNlO1xyXG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RGaWxlcyhmaWxlczogRmlsZVtdKTogdm9pZCB7XHJcbiAgICBjb25zdCBmaWxlc1RvQWRkID0gT2JqZWN0LmFzc2lnbihbXSwgZmlsZXMpO1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICghdGhpcy5pc1ZhbGlkRmlsZXNTaXplKGZpbGVzVG9BZGQpKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy50b2FzdFNlcnZpY2UuZXJyb3IoXHJcbiAgICAgICAgYEF0dGFjaG1lbnRzIHNpemUgZXhjZWVkcyB0aGUgYWxsb3dhYmxlIGxpbWl0IChtYXhpbXVtOiAke3RoaXMuZm9ybWF0Qnl0ZXMoXHJcbiAgICAgICAgICB0aGlzLm1heEZpbGVTaXplXHJcbiAgICAgICAgKX0pYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGVzVG9BZGQuZm9yRWFjaCgoZmlsZTogRmlsZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0aGlzLmZpbGVVcGxvYWRWYWxpZGF0aW9uU2VydmljZS5pc1ZhbGlkRXh0ZW5zaW9uKFxyXG4gICAgICAgICAgZmlsZSxcclxuICAgICAgICAgIHRoaXMuZm9ybWF0Q29uZmlnXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2FzdFNlcnZpY2UuZXJyb3IoYCR7ZmlsZS5uYW1lfSBpcyBpbnZhbGlkIGZpbGUgdHlwZWApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKGZpbGVzVG9BZGQpO1xyXG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuYWZ0ZXJGaWxlc1NlbGVjdGVkLmVtaXQoZmlsZXNUb0FkZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Ecm9wKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm9uRHJhZ0xlYXZlKGV2ZW50KTtcclxuICAgIHRoaXMuc2VsZWN0RmlsZXMoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZpbGVzU2VsZWN0ZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RGaWxlcyhldmVudC50YXJnZXQuZmlsZXMpO1xyXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuVXBsb2FkQnJvd3NlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZmlsZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0Qnl0ZXMoYnl0ZXM6IG51bWJlciwgZGVjaW1hbHMgPSAyKTogc3RyaW5nIHtcclxuICAgIGlmIChieXRlcyA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gJzAgQnl0ZXMnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGsgPSAxMDI0O1xyXG4gICAgY29uc3QgZG0gPSBkZWNpbWFscyA8IDAgPyAwIDogZGVjaW1hbHM7XHJcbiAgICBjb25zdCBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcclxuXHJcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoZG0pKSArICcgJyArIHNpemVzW2ldO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkRmlsZXNTaXplKGZpbGVzOiBGaWxlW10pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldEZpbGVzU2l6ZShmaWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubWF4RmlsZVNpemVcclxuICAgICAgPyB0aGlzLmZpbGVVcGxvYWRWYWxpZGF0aW9uU2VydmljZS5pc1ZhbGlkRmlsZVNpemUoc2l6ZSwgdGhpcy5tYXhGaWxlU2l6ZSlcclxuICAgICAgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWxlc1NpemUoZmlsZXM6IEZpbGVbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZmlsZXNcclxuICAgICAgLm1hcChmID0+IGYuc2l6ZSlcclxuICAgICAgLnJlZHVjZSgodG90YWxTaXplLCBmaWxlU2l6ZSkgPT4gdG90YWxTaXplICsgZmlsZVNpemUpO1xyXG4gIH1cclxufVxyXG4iXX0=