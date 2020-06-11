import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { QuestionTreeInterface } from '../../../../interfaces';
export declare class TextComponent implements OnInit, ControlValueAccessor {
    question: QuestionTreeInterface;
    value: string;
    constructor();
    ngOnInit(): void;
    onModelChange(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    writeValue(value: string): void;
    private onChange;
}
