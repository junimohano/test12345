import { FileUploadFormatConfig } from './file-upload.model';
export declare class FileUploadValidationService {
    private format;
    constructor();
    /**
     * Check file size. Return true if valid
     */
    isValidFileSize(fileSize: number, maxFileSize: number): boolean;
    /**
     * Check file mime or extension. Return true if valid
     */
    isValidExtension(file: File, formatConfig: FileUploadFormatConfig): boolean;
    getAllowedMime(formatConfig: FileUploadFormatConfig): string[];
    private checkFileWith;
    private isJpgFile;
    private isPngFile;
    private isGifFile;
    private isCsvFile;
    private isTsvFile;
    private isZipFile;
    private isTxtFile;
    private isDocFile;
    private isXslFile;
    private isPptFile;
    private isRtfFile;
    isPdfFile(file: File): boolean;
    private isCssFile;
    private isJsFile;
    private isHtmlFile;
    private isCodeFile;
}
