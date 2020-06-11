import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeDetectableComponentBase } from '../../../change-detectable-component-base';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { SimpleFileUploadConfig } from './simple-file-upload-config.model';
var SimpleFileUploadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleFileUploadComponent, _super);
    function SimpleFileUploadComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.prefixText = 'Drag & drop your files to attach or';
        _this.linkText = 'browse';
        _this.suffixText = 'to choose a file';
        _this.attachments = [];
        _this.files = [];
        _this.config = {
            attachmentNameKey: 'originalFileName',
            format: { pdf: true, doc: true }
        };
        _this.isMultiple = true;
        _this.maxFileSize = 1048576 - 255; // 1MB - (255 request length)
        _this.afterFilesSelected = new EventEmitter();
        _this.deleteAttachment = new EventEmitter();
        _this.clickAttachment = new EventEmitter();
        return _this;
    }
    SimpleFileUploadComponent.prototype.onAfterFilesSelected = function (files, text) {
        var filesToAdd = files.map(function (file) { return ({ file: file, text: text }); });
        this.files = tslib_1.__spread(this.files, filesToAdd);
        this.afterFilesSelected.emit(this.files);
        this.detectChanges();
    };
    SimpleFileUploadComponent.prototype.onRemoveFile = function (index) {
        this.files.splice(index, 1);
        this.afterFilesSelected.emit(this.files);
        this.detectChanges();
    };
    SimpleFileUploadComponent.prototype.onClickAttachment = function (attachment) {
        this.clickAttachment.emit(attachment);
    };
    SimpleFileUploadComponent.prototype.onDeleteAttachment = function (attachment) {
        this.deleteAttachment.emit(attachment);
    };
    SimpleFileUploadComponent.prototype.writeValue = function (value) {
        if (value) {
            this.files = value;
        }
    };
    SimpleFileUploadComponent.prototype.registerOnChange = function () { };
    SimpleFileUploadComponent.prototype.registerOnTouched = function () { };
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
    SimpleFileUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return SimpleFileUploadComponent;
}(ChangeDetectableComponentBase));
export { SimpleFileUploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkL3NpbXBsZS1maWxlLXVwbG9hZC9zaW1wbGUtZmlsZS11cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUczRTtJQWErQyxxREFBNkI7SUEyQjFFLG1DQUFzQixpQkFBb0M7UUFBMUQsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZxQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBeEIxQyxnQkFBVSxHQUFHLHFDQUFxQyxDQUFDO1FBQ25ELGNBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsZ0JBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUNoQyxpQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixXQUFLLEdBQTJCLEVBQUUsQ0FBQztRQUNuQyxZQUFNLEdBQTJCO1lBQy9DLGlCQUFpQixFQUFFLGtCQUFrQjtZQUNyQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7U0FDakMsQ0FBQztRQUNjLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBR2xCLGlCQUFXLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLDZCQUE2QjtRQUd6RCx3QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFFbkQsQ0FBQztRQUNhLHNCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0MscUJBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOztJQU8zRCxDQUFDO0lBRU0sd0RBQW9CLEdBQTNCLFVBQTRCLEtBQWEsRUFBRSxJQUFhO1FBQ3RELElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQzFCLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUEyQixDQUFBLEVBQXhDLENBQXdDLENBQ2pELENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxvQkFBTyxJQUFJLENBQUMsS0FBSyxFQUFLLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0RBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxxREFBaUIsR0FBeEIsVUFBeUIsVUFBZTtRQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sc0RBQWtCLEdBQXpCLFVBQTBCLFVBQWU7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sOENBQVUsR0FBakIsVUFBa0IsS0FBVTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVNLG9EQUFnQixHQUF2QixjQUFpQyxDQUFDO0lBRTNCLHFEQUFpQixHQUF4QixjQUFrQyxDQUFDOztnQkEzRXBDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyw2ekJBQWtEO29CQUVsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSx5QkFBeUI7NEJBQ3RDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOztpQkFDRjs7OztnQkExQkMsaUJBQWlCOzs7cUJBNkJoQixLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUlMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSztxQ0FFTCxNQUFNO21DQUdOLE1BQU07a0NBQ04sTUFBTTtzQ0FFTixTQUFTLFNBQUMsbUJBQW1COztJQXVDaEMsZ0NBQUM7Q0FBQSxBQTVFRCxDQWErQyw2QkFBNkIsR0ErRDNFO1NBL0RZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGFibGVDb21wb25lbnRCYXNlIH0gZnJvbSAnLi4vLi4vLi4vY2hhbmdlLWRldGVjdGFibGUtY29tcG9uZW50LWJhc2UnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2ltcGxlRmlsZVVwbG9hZENvbmZpZyB9IGZyb20gJy4vc2ltcGxlLWZpbGUtdXBsb2FkLWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IFNpbXBsZUZpbGVVcGxvYWRJdGVtIH0gZnJvbSAnLi9zaW1wbGUtZmlsZS11cGxvYWQtaXRlbS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLXNpbXBsZS1maWxlLXVwbG9hZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2ltcGxlLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogU2ltcGxlRmlsZVVwbG9hZENvbXBvbmVudCxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVGaWxlVXBsb2FkQ29tcG9uZW50IGV4dGVuZHMgQ2hhbmdlRGV0ZWN0YWJsZUNvbXBvbmVudEJhc2VcclxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSBwdWJsaWMgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgcHJlZml4VGV4dCA9ICdEcmFnICYgZHJvcCB5b3VyIGZpbGVzIHRvIGF0dGFjaCBvcic7XHJcbiAgQElucHV0KCkgcHVibGljIGxpbmtUZXh0ID0gJ2Jyb3dzZSc7XHJcbiAgQElucHV0KCkgcHVibGljIHN1ZmZpeFRleHQgPSAndG8gY2hvb3NlIGEgZmlsZSc7XHJcbiAgQElucHV0KCkgcHVibGljIGF0dGFjaG1lbnRzOiBhbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmaWxlczogU2ltcGxlRmlsZVVwbG9hZEl0ZW1bXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjb25maWc6IFNpbXBsZUZpbGVVcGxvYWRDb25maWcgPSB7XHJcbiAgICBhdHRhY2htZW50TmFtZUtleTogJ29yaWdpbmFsRmlsZU5hbWUnLFxyXG4gICAgZm9ybWF0OiB7IHBkZjogdHJ1ZSwgZG9jOiB0cnVlIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpc011bHRpcGxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIGhhc0Rlc2NyaXB0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhGaWxlU2l6ZSA9IDEwNDg1NzYgLSAyNTU7IC8vIDFNQiAtICgyNTUgcmVxdWVzdCBsZW5ndGgpXHJcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZEhpZGRlbjogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBhZnRlckZpbGVzU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgU2ltcGxlRmlsZVVwbG9hZEl0ZW1bXVxyXG4gID4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGRlbGV0ZUF0dGFjaG1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGNsaWNrQXR0YWNobWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKEZpbGVVcGxvYWRDb21wb25lbnQpXHJcbiAgcHVibGljIGZpbGVVcGxvYWRDb21wb25lbnQ6IEZpbGVVcGxvYWRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFmdGVyRmlsZXNTZWxlY3RlZChmaWxlczogRmlsZVtdLCB0ZXh0Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBmaWxlc1RvQWRkID0gZmlsZXMubWFwKFxyXG4gICAgICBmaWxlID0+ICh7IGZpbGUsIHRleHQgfSBhcyBTaW1wbGVGaWxlVXBsb2FkSXRlbSlcclxuICAgICk7XHJcbiAgICB0aGlzLmZpbGVzID0gWy4uLnRoaXMuZmlsZXMsIC4uLmZpbGVzVG9BZGRdO1xyXG4gICAgdGhpcy5hZnRlckZpbGVzU2VsZWN0ZWQuZW1pdCh0aGlzLmZpbGVzKTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUmVtb3ZlRmlsZShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLmFmdGVyRmlsZXNTZWxlY3RlZC5lbWl0KHRoaXMuZmlsZXMpO1xyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja0F0dGFjaG1lbnQoYXR0YWNobWVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrQXR0YWNobWVudC5lbWl0KGF0dGFjaG1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRGVsZXRlQXR0YWNobWVudChhdHRhY2htZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVsZXRlQXR0YWNobWVudC5lbWl0KGF0dGFjaG1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZmlsZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cclxufVxyXG4iXX0=