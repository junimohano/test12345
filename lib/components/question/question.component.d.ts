import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionnaireViewModeEnum, QuestionTypeEnum } from '../../enums';
import { QuestionTreeInterface } from '../../interfaces';
import { QuestionnaireUtilsService } from '../../services';
export declare class QuestionComponent implements OnInit {
    private formBuilder;
    private questionnaireUtilsService;
    question: QuestionTreeInterface;
    formReady: EventEmitter<FormGroup>;
    readonly questionTypeEnum: typeof QuestionTypeEnum;
    answerText: string;
    questionForm: FormGroup;
    viewMode: QuestionnaireViewModeEnum;
    questionAnswer: any;
    constructor(formBuilder: FormBuilder, questionnaireUtilsService: QuestionnaireUtilsService);
    ngOnInit(): void;
    isQuestionVisible(): boolean;
    /**
     * Check if question was previously answered, and sync it to the form object.
     */
    private processSelectedOption;
    /**
     * Depending on question type, update the question object
     * @param value form value
     */
    private formValueOfAnswerChanged;
}
