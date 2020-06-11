import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { QuestionSingleSelectUiTypeEnum } from '../../../../enums';
import { QuestionDetailResponseInterface, QuestionTreeInterface } from '../../../../interfaces';
export declare class SingleSelectComponent implements OnInit, OnChanges, ControlValueAccessor {
    question: QuestionTreeInterface;
    step: number;
    readonly questionSingleSelectUiTypeEnum: typeof QuestionSingleSelectUiTypeEnum;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onSelectResponse(response: QuestionDetailResponseInterface): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    writeValue(value: any): void;
    private onChange;
    private updateStep;
}
