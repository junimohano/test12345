import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { FORMAT } from './file-upload.model';
export class FileUploadValidationService {
    constructor() {
        this.format = FORMAT;
    }
    /**
     * Check file size. Return true if valid
     */
    isValidFileSize(fileSize, maxFileSize) {
        return fileSize <= maxFileSize;
    }
    /**
     * Check file mime or extension. Return true if valid
     */
    isValidExtension(file, formatConfig) {
        return ((formatConfig.jpg && this.isJpgFile(file)) ||
            (formatConfig.png && this.isPngFile(file)) ||
            (formatConfig.gif && this.isGifFile(file)) ||
            (formatConfig.csv && this.isCsvFile(file)) ||
            (formatConfig.tsv && this.isTsvFile(file)) ||
            (formatConfig.zip && this.isZipFile(file)) ||
            (formatConfig.txt && this.isTxtFile(file)) ||
            (formatConfig.doc && this.isDocFile(file)) ||
            (formatConfig.xsl && this.isXslFile(file)) ||
            (formatConfig.ppt && this.isPptFile(file)) ||
            (formatConfig.rtf && this.isRtfFile(file)) ||
            (formatConfig.pdf && this.isPdfFile(file)) ||
            (formatConfig.css && this.isCssFile(file)) ||
            (formatConfig.js && this.isJsFile(file)) ||
            (formatConfig.html && this.isHtmlFile(file)) ||
            (formatConfig.code && this.isCodeFile(file)));
    }
    getAllowedMime(formatConfig) {
        const mime = [];
        for (const format in formatConfig) {
            if (this.format[format]) {
                mime.push(this.format[format].mime);
            }
        }
        return _.union(mime);
    }
    checkFileWith(mimeTypes, validExts, file) {
        const fileExt = file.name
            .split('.')
            .pop()
            .toLowerCase();
        const isValidExt = (file.type === '' || mimeTypes.length === 0) &&
            validExts.includes(fileExt);
        const isValidMime = file.type && mimeTypes.includes(file.type);
        return isValidExt || isValidMime;
    }
    isJpgFile(file) {
        return this.checkFileWith(this.format.jpg.mime, this.format.jpg.exts, file);
    }
    isPngFile(file) {
        return this.checkFileWith(this.format.png.mime, this.format.png.exts, file);
    }
    isGifFile(file) {
        return this.checkFileWith(this.format.gif.mime, this.format.gif.exts, file);
    }
    isCsvFile(file) {
        return this.checkFileWith(this.format.csv.mime, this.format.csv.exts, file);
    }
    isTsvFile(file) {
        return this.checkFileWith(this.format.tsv.mime, this.format.tsv.exts, file);
    }
    isZipFile(file) {
        return this.checkFileWith(this.format.zip.mime, this.format.zip.exts, file);
    }
    isTxtFile(file) {
        return this.checkFileWith(this.format.txt.mime, this.format.txt.exts, file);
    }
    isDocFile(file) {
        return this.checkFileWith(this.format.doc.mime, this.format.doc.exts, file);
    }
    isXslFile(file) {
        return this.checkFileWith(this.format.xsl.mime, this.format.xsl.exts, file);
    }
    isPptFile(file) {
        return this.checkFileWith(this.format.ppt.mime, this.format.ppt.exts, file);
    }
    isRtfFile(file) {
        return this.checkFileWith(this.format.rtf.mime, this.format.rtf.exts, file);
    }
    isPdfFile(file) {
        return this.checkFileWith(this.format.pdf.mime, this.format.pdf.exts, file);
    }
    isCssFile(file) {
        return this.checkFileWith(this.format.css.mime, this.format.css.exts, file);
    }
    isJsFile(file) {
        return this.checkFileWith(this.format.js.mime, this.format.js.exts, file);
    }
    isHtmlFile(file) {
        return this.checkFileWith(this.format.html.mime, this.format.html.exts, file);
    }
    isCodeFile(file) {
        return this.checkFileWith(this.format.code.mime, this.format.code.exts, file);
    }
}
FileUploadValidationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileUploadValidationService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQudmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy11aS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQudmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUVMLE1BQU0sRUFFUCxNQUFNLHFCQUFxQixDQUFDO0FBRzdCLE1BQU0sT0FBTywyQkFBMkI7SUFHdEM7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxlQUFlLENBQUMsUUFBZ0IsRUFBRSxXQUFtQjtRQUMxRCxPQUFPLFFBQVEsSUFBSSxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0JBQWdCLENBQ3JCLElBQVUsRUFDVixZQUFvQztRQUVwQyxPQUFPLENBQ0wsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDN0MsQ0FBQztJQUNKLENBQUM7SUFFTSxjQUFjLENBQUMsWUFBb0M7UUFDeEQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssTUFBTSxNQUFNLElBQUksWUFBWSxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVPLGFBQWEsQ0FDbkIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsSUFBVTtRQUVWLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJO2FBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixHQUFHLEVBQUU7YUFDTCxXQUFXLEVBQUUsQ0FBQztRQUVqQixNQUFNLFVBQVUsR0FDZCxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQzVDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvRCxPQUFPLFVBQVUsSUFBSSxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBVTtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU8sU0FBUyxDQUFDLElBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBVTtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU8sU0FBUyxDQUFDLElBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBVTtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU8sU0FBUyxDQUFDLElBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBVTtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU0sU0FBUyxDQUFDLElBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTyxRQUFRLENBQUMsSUFBVTtRQUN6QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8sVUFBVSxDQUFDLElBQVU7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFDckIsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBRU8sVUFBVSxDQUFDLElBQVU7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFDckIsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7WUE3SUYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHtcclxuICBGaWxlVXBsb2FkRm9ybWF0Q29uZmlnLFxyXG4gIEZPUk1BVCxcclxuICBGb3JtYXRJbnRlcmZhY2VcclxufSBmcm9tICcuL2ZpbGUtdXBsb2FkLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRWYWxpZGF0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBmb3JtYXQ6IEZvcm1hdEludGVyZmFjZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmZvcm1hdCA9IEZPUk1BVDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGZpbGUgc2l6ZS4gUmV0dXJuIHRydWUgaWYgdmFsaWRcclxuICAgKi9cclxuICBwdWJsaWMgaXNWYWxpZEZpbGVTaXplKGZpbGVTaXplOiBudW1iZXIsIG1heEZpbGVTaXplOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWxlU2l6ZSA8PSBtYXhGaWxlU2l6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGZpbGUgbWltZSBvciBleHRlbnNpb24uIFJldHVybiB0cnVlIGlmIHZhbGlkXHJcbiAgICovXHJcbiAgcHVibGljIGlzVmFsaWRFeHRlbnNpb24oXHJcbiAgICBmaWxlOiBGaWxlLFxyXG4gICAgZm9ybWF0Q29uZmlnOiBGaWxlVXBsb2FkRm9ybWF0Q29uZmlnXHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoZm9ybWF0Q29uZmlnLmpwZyAmJiB0aGlzLmlzSnBnRmlsZShmaWxlKSkgfHxcclxuICAgICAgKGZvcm1hdENvbmZpZy5wbmcgJiYgdGhpcy5pc1BuZ0ZpbGUoZmlsZSkpIHx8XHJcbiAgICAgIChmb3JtYXRDb25maWcuZ2lmICYmIHRoaXMuaXNHaWZGaWxlKGZpbGUpKSB8fFxyXG4gICAgICAoZm9ybWF0Q29uZmlnLmNzdiAmJiB0aGlzLmlzQ3N2RmlsZShmaWxlKSkgfHxcclxuICAgICAgKGZvcm1hdENvbmZpZy50c3YgJiYgdGhpcy5pc1RzdkZpbGUoZmlsZSkpIHx8XHJcbiAgICAgIChmb3JtYXRDb25maWcuemlwICYmIHRoaXMuaXNaaXBGaWxlKGZpbGUpKSB8fFxyXG4gICAgICAoZm9ybWF0Q29uZmlnLnR4dCAmJiB0aGlzLmlzVHh0RmlsZShmaWxlKSkgfHxcclxuICAgICAgKGZvcm1hdENvbmZpZy5kb2MgJiYgdGhpcy5pc0RvY0ZpbGUoZmlsZSkpIHx8XHJcbiAgICAgIChmb3JtYXRDb25maWcueHNsICYmIHRoaXMuaXNYc2xGaWxlKGZpbGUpKSB8fFxyXG4gICAgICAoZm9ybWF0Q29uZmlnLnBwdCAmJiB0aGlzLmlzUHB0RmlsZShmaWxlKSkgfHxcclxuICAgICAgKGZvcm1hdENvbmZpZy5ydGYgJiYgdGhpcy5pc1J0ZkZpbGUoZmlsZSkpIHx8XHJcbiAgICAgIChmb3JtYXRDb25maWcucGRmICYmIHRoaXMuaXNQZGZGaWxlKGZpbGUpKSB8fFxyXG4gICAgICAoZm9ybWF0Q29uZmlnLmNzcyAmJiB0aGlzLmlzQ3NzRmlsZShmaWxlKSkgfHxcclxuICAgICAgKGZvcm1hdENvbmZpZy5qcyAmJiB0aGlzLmlzSnNGaWxlKGZpbGUpKSB8fFxyXG4gICAgICAoZm9ybWF0Q29uZmlnLmh0bWwgJiYgdGhpcy5pc0h0bWxGaWxlKGZpbGUpKSB8fFxyXG4gICAgICAoZm9ybWF0Q29uZmlnLmNvZGUgJiYgdGhpcy5pc0NvZGVGaWxlKGZpbGUpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBbGxvd2VkTWltZShmb3JtYXRDb25maWc6IEZpbGVVcGxvYWRGb3JtYXRDb25maWcpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBtaW1lID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGZvcm1hdCBpbiBmb3JtYXRDb25maWcpIHtcclxuICAgICAgaWYgKHRoaXMuZm9ybWF0W2Zvcm1hdF0pIHtcclxuICAgICAgICBtaW1lLnB1c2godGhpcy5mb3JtYXRbZm9ybWF0XS5taW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIF8udW5pb24obWltZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrRmlsZVdpdGgoXHJcbiAgICBtaW1lVHlwZXM6IHN0cmluZ1tdLFxyXG4gICAgdmFsaWRFeHRzOiBzdHJpbmdbXSxcclxuICAgIGZpbGU6IEZpbGVcclxuICApOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGZpbGVFeHQgPSBmaWxlLm5hbWVcclxuICAgICAgLnNwbGl0KCcuJylcclxuICAgICAgLnBvcCgpXHJcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGNvbnN0IGlzVmFsaWRFeHQgPVxyXG4gICAgICAoZmlsZS50eXBlID09PSAnJyB8fCBtaW1lVHlwZXMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICB2YWxpZEV4dHMuaW5jbHVkZXMoZmlsZUV4dCk7XHJcblxyXG4gICAgY29uc3QgaXNWYWxpZE1pbWUgPSBmaWxlLnR5cGUgJiYgbWltZVR5cGVzLmluY2x1ZGVzKGZpbGUudHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWRFeHQgfHwgaXNWYWxpZE1pbWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzSnBnRmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LmpwZy5taW1lLCB0aGlzLmZvcm1hdC5qcGcuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUG5nRmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LnBuZy5taW1lLCB0aGlzLmZvcm1hdC5wbmcuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzR2lmRmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LmdpZi5taW1lLCB0aGlzLmZvcm1hdC5naWYuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQ3N2RmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LmNzdi5taW1lLCB0aGlzLmZvcm1hdC5jc3YuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVHN2RmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LnRzdi5taW1lLCB0aGlzLmZvcm1hdC50c3YuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzWmlwRmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LnppcC5taW1lLCB0aGlzLmZvcm1hdC56aXAuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVHh0RmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LnR4dC5taW1lLCB0aGlzLmZvcm1hdC50eHQuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRG9jRmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LmRvYy5taW1lLCB0aGlzLmZvcm1hdC5kb2MuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzWHNsRmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LnhzbC5taW1lLCB0aGlzLmZvcm1hdC54c2wuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUHB0RmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LnBwdC5taW1lLCB0aGlzLmZvcm1hdC5wcHQuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUnRmRmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKHRoaXMuZm9ybWF0LnJ0Zi5taW1lLCB0aGlzLmZvcm1hdC5ydGYuZXh0cywgZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNQZGZGaWxlKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrRmlsZVdpdGgodGhpcy5mb3JtYXQucGRmLm1pbWUsIHRoaXMuZm9ybWF0LnBkZi5leHRzLCBmaWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNDc3NGaWxlKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrRmlsZVdpdGgodGhpcy5mb3JtYXQuY3NzLm1pbWUsIHRoaXMuZm9ybWF0LmNzcy5leHRzLCBmaWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNKc0ZpbGUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tGaWxlV2l0aCh0aGlzLmZvcm1hdC5qcy5taW1lLCB0aGlzLmZvcm1hdC5qcy5leHRzLCBmaWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNIdG1sRmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKFxyXG4gICAgICB0aGlzLmZvcm1hdC5odG1sLm1pbWUsXHJcbiAgICAgIHRoaXMuZm9ybWF0Lmh0bWwuZXh0cyxcclxuICAgICAgZmlsZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNDb2RlRmlsZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZpbGVXaXRoKFxyXG4gICAgICB0aGlzLmZvcm1hdC5jb2RlLm1pbWUsXHJcbiAgICAgIHRoaXMuZm9ybWF0LmNvZGUuZXh0cyxcclxuICAgICAgZmlsZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19