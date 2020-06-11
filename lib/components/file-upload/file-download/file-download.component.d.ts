import { EventEmitter, OnInit } from '@angular/core';
import { SimpleFileUploadConfig } from '../simple-file-upload/simple-file-upload-config.model';
import { SimpleFileUploadItem } from '../simple-file-upload/simple-file-upload-item.model';
export declare class FileDownloadComponent implements OnInit {
    dBlock: boolean;
    attachments: any[];
    files: SimpleFileUploadItem[];
    disabled: boolean;
    hasDescription: boolean;
    config: SimpleFileUploadConfig;
    deleteAttachment: EventEmitter<any>;
    clickAttachment: EventEmitter<any>;
    removeFile: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
}
