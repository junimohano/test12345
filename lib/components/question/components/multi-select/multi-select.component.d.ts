import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { QuestionMultiSelectUiTypeEnum } from '../../../../enums';
import { QuestionDetailResponseInterface, QuestionTreeInterface } from '../../../../interfaces';
export declare class MultiSelectComponent implements OnInit, ControlValueAccessor {
    question: QuestionTreeInterface;
    readonly questionMultiSelectUiTypeEnum: typeof QuestionMultiSelectUiTypeEnum;
    constructor();
    ngOnInit(): void;
    onSelectResponse(response: QuestionDetailResponseInterface): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    writeValue(value: any): void;
    private onChange;
}
