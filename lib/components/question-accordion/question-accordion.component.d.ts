import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionTreeInterface } from '../../interfaces';
import { Attachment } from '../../models';
import { QuestionnaireUtilsService } from '../../services';
import { SimpleFileUploadComponent, SimpleFileUploadItem } from '../file-upload';
export declare class QuestionAccordionComponent implements OnInit {
    private formBuilder;
    private questionnaireUtilsService;
    question: QuestionTreeInterface;
    formReady: EventEmitter<FormGroup>;
    afterFilesSelected: EventEmitter<[QuestionTreeInterface, SimpleFileUploadItem[]]>;
    deleteAttachment: EventEmitter<[QuestionTreeInterface, Attachment]>;
    clickAttachment: EventEmitter<Attachment>;
    simpleFileUploadComponent: SimpleFileUploadComponent;
    questionAccordionForm: FormGroup;
    reviewMode: boolean;
    private readonly children;
    constructor(formBuilder: FormBuilder, questionnaireUtilsService: QuestionnaireUtilsService);
    ngOnInit(): void;
    /**
     * Propagate main questionForm to questionAccordionForm
     * @param questionForm questionForm
     */
    questionFormReady(questionForm: FormGroup): void;
    /**
     * Propagate child questionForm to questionAccordionForm
     * @param questionForm questionForm
     */
    childFormReady(questionForm: FormGroup): void;
    onAddAttachments(): void;
    private formValueChanged;
}
