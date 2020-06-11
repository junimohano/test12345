export interface FileUploadFormatConfig {
    jpg?: boolean;
    png?: boolean;
    gif?: boolean;
    csv?: boolean;
    tsv?: boolean;
    zip?: boolean;
    txt?: boolean;
    doc?: boolean;
    xsl?: boolean;
    ppt?: boolean;
    rtf?: boolean;
    pdf?: boolean;
    css?: boolean;
    js?: boolean;
    html?: boolean;
    code?: boolean;
}
export interface FormatInterface {
    [x: string]: {
        exts: string[];
        mime: string[];
    };
}
export declare const FORMAT: FormatInterface;
