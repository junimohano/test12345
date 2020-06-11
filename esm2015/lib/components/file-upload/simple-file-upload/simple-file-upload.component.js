import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeDetectableComponentBase } from '../../../change-detectable-component-base';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { SimpleFileUploadConfig } from './simple-file-upload-config.model';
export class SimpleFileUploadComponent extends ChangeDetectableComponentBase {
    constructor(changeDetectorRef) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.prefixText = 'Drag & drop your files to attach or';
        this.linkText = 'browse';
        this.suffixText = 'to choose a file';
        this.attachments = [];
        this.files = [];
        this.config = {
            attachmentNameKey: 'originalFileName',
            format: { pdf: true, doc: true }
        };
        this.isMultiple = true;
        this.maxFileSize = 1048576 - 255; // 1MB - (255 request length)
        this.afterFilesSelected = new EventEmitter();
        this.deleteAttachment = new EventEmitter();
        this.clickAttachment = new EventEmitter();
    }
    onAfterFilesSelected(files, text) {
        const filesToAdd = files.map(file => ({ file, text }));
        this.files = [...this.files, ...filesToAdd];
        this.afterFilesSelected.emit(this.files);
        this.detectChanges();
    }
    onRemoveFile(index) {
        this.files.splice(index, 1);
        this.afterFilesSelected.emit(this.files);
        this.detectChanges();
    }
    onClickAttachment(attachment) {
        this.clickAttachment.emit(attachment);
    }
    onDeleteAttachment(attachment) {
        this.deleteAttachment.emit(attachment);
    }
    writeValue(value) {
        if (value) {
            this.files = value;
        }
    }
    registerOnChange() { }
    registerOnTouched() { }
}
SimpleFileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-simple-file-upload',
                template: "<ta-file-upload\r\n  class=\"d-block\"\r\n  [ngClass]=\"{\r\n    hidden: uploadHidden,\r\n    'mb-3': !uploadHidden\r\n  }\"\r\n  [id]=\"id + '-file-upload'\"\r\n  [prefixText]=\"prefixText\"\r\n  [linkText]=\"linkText\"\r\n  [suffixText]=\"suffixText\"\r\n  [isMultiple]=\"isMultiple\"\r\n  [formatConfig]=\"config.format\"\r\n  [maxFileSize]=\"maxFileSize\"\r\n  (afterFilesSelected)=\"onAfterFilesSelected($event)\"\r\n></ta-file-upload>\r\n\r\n<ta-file-download\r\n  class=\"ml-1\"\r\n  [attachments]=\"attachments\"\r\n  [files]=\"files\"\r\n  [disabled]=\"disabled\"\r\n  [hasDescription]=\"hasDescription\"\r\n  [config]=\"config\"\r\n  (clickAttachment)=\"onClickAttachment($event)\"\r\n  (deleteAttachment)=\"onDeleteAttachment($event)\"\r\n  (removeFile)=\"onRemoveFile($event)\"\r\n></ta-file-download>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: SimpleFileUploadComponent,
                        multi: true
                    }
                ],
                styles: [":host ta-file-upload.hidden{visibility:hidden;height:0;margin:0}"]
            }] }
];
/** @nocollapse */
SimpleFileUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
SimpleFileUploadComponent.propDecorators = {
    id: [{ type: Input }],
    prefixText: [{ type: Input }],
    linkText: [{ type: Input }],
    suffixText: [{ type: Input }],
    attachments: [{ type: Input }],
    files: [{ type: Input }],
    config: [{ type: Input }],
    isMultiple: [{ type: Input }],
    disabled: [{ type: Input }],
    hasDescription: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    uploadHidden: [{ type: Input }],
    afterFilesSelected: [{ type: Output }],
    deleteAttachment: [{ type: Output }],
    clickAttachment: [{ type: Output }],
    fileUploadComponent: [{ type: ViewChild, args: [FileUploadComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkL3NpbXBsZS1maWxlLXVwbG9hZC9zaW1wbGUtZmlsZS11cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBZ0IzRSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsNkJBQTZCO0lBMkIxRSxZQUFzQixpQkFBb0M7UUFDeEQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFETCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBeEIxQyxlQUFVLEdBQUcscUNBQXFDLENBQUM7UUFDbkQsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQixlQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFDaEMsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUEyQixFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUEyQjtZQUMvQyxpQkFBaUIsRUFBRSxrQkFBa0I7WUFDckMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO1NBQ2pDLENBQUM7UUFDYyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBR2xCLGdCQUFXLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLDZCQUE2QjtRQUd6RCx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFFbkQsQ0FBQztRQUNhLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTzNELENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsSUFBYTtRQUN0RCxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUEyQixDQUFBLENBQ2pELENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxZQUFZLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxVQUFlO1FBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxVQUFlO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCLEtBQVUsQ0FBQztJQUUzQixpQkFBaUIsS0FBVSxDQUFDOzs7WUEzRXBDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2ekJBQWtEO2dCQUVsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSx5QkFBeUI7d0JBQ3RDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7O1lBMUJDLGlCQUFpQjs7O2lCQTZCaEIsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFJTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBRUwsTUFBTTsrQkFHTixNQUFNOzhCQUNOLE1BQU07a0NBRU4sU0FBUyxTQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGFibGVDb21wb25lbnRCYXNlIH0gZnJvbSAnLi4vLi4vLi4vY2hhbmdlLWRldGVjdGFibGUtY29tcG9uZW50LWJhc2UnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2ltcGxlRmlsZVVwbG9hZENvbmZpZyB9IGZyb20gJy4vc2ltcGxlLWZpbGUtdXBsb2FkLWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IFNpbXBsZUZpbGVVcGxvYWRJdGVtIH0gZnJvbSAnLi9zaW1wbGUtZmlsZS11cGxvYWQtaXRlbS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLXNpbXBsZS1maWxlLXVwbG9hZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2ltcGxlLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogU2ltcGxlRmlsZVVwbG9hZENvbXBvbmVudCxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVGaWxlVXBsb2FkQ29tcG9uZW50IGV4dGVuZHMgQ2hhbmdlRGV0ZWN0YWJsZUNvbXBvbmVudEJhc2VcclxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSBwdWJsaWMgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgcHJlZml4VGV4dCA9ICdEcmFnICYgZHJvcCB5b3VyIGZpbGVzIHRvIGF0dGFjaCBvcic7XHJcbiAgQElucHV0KCkgcHVibGljIGxpbmtUZXh0ID0gJ2Jyb3dzZSc7XHJcbiAgQElucHV0KCkgcHVibGljIHN1ZmZpeFRleHQgPSAndG8gY2hvb3NlIGEgZmlsZSc7XHJcbiAgQElucHV0KCkgcHVibGljIGF0dGFjaG1lbnRzOiBhbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmaWxlczogU2ltcGxlRmlsZVVwbG9hZEl0ZW1bXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjb25maWc6IFNpbXBsZUZpbGVVcGxvYWRDb25maWcgPSB7XHJcbiAgICBhdHRhY2htZW50TmFtZUtleTogJ29yaWdpbmFsRmlsZU5hbWUnLFxyXG4gICAgZm9ybWF0OiB7IHBkZjogdHJ1ZSwgZG9jOiB0cnVlIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpc011bHRpcGxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIGhhc0Rlc2NyaXB0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhGaWxlU2l6ZSA9IDEwNDg1NzYgLSAyNTU7IC8vIDFNQiAtICgyNTUgcmVxdWVzdCBsZW5ndGgpXHJcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZEhpZGRlbjogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBhZnRlckZpbGVzU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgU2ltcGxlRmlsZVVwbG9hZEl0ZW1bXVxyXG4gID4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGRlbGV0ZUF0dGFjaG1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGNsaWNrQXR0YWNobWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKEZpbGVVcGxvYWRDb21wb25lbnQpXHJcbiAgcHVibGljIGZpbGVVcGxvYWRDb21wb25lbnQ6IEZpbGVVcGxvYWRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFmdGVyRmlsZXNTZWxlY3RlZChmaWxlczogRmlsZVtdLCB0ZXh0Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBmaWxlc1RvQWRkID0gZmlsZXMubWFwKFxyXG4gICAgICBmaWxlID0+ICh7IGZpbGUsIHRleHQgfSBhcyBTaW1wbGVGaWxlVXBsb2FkSXRlbSlcclxuICAgICk7XHJcbiAgICB0aGlzLmZpbGVzID0gWy4uLnRoaXMuZmlsZXMsIC4uLmZpbGVzVG9BZGRdO1xyXG4gICAgdGhpcy5hZnRlckZpbGVzU2VsZWN0ZWQuZW1pdCh0aGlzLmZpbGVzKTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUmVtb3ZlRmlsZShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLmFmdGVyRmlsZXNTZWxlY3RlZC5lbWl0KHRoaXMuZmlsZXMpO1xyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja0F0dGFjaG1lbnQoYXR0YWNobWVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrQXR0YWNobWVudC5lbWl0KGF0dGFjaG1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRGVsZXRlQXR0YWNobWVudChhdHRhY2htZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVsZXRlQXR0YWNobWVudC5lbWl0KGF0dGFjaG1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZmlsZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cclxufVxyXG4iXX0=