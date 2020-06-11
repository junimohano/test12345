import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaModal, ToastService } from '@trustarc/ui-toolkit';
import { QuestionnaireViewModeEnum, TaskStatusEnum } from '../../enums';
import { QuestionContainerViewPageInterface, QuestionnaireInterface, QuestionTreeInterface } from '../../interfaces';
import { Attachment } from '../../models';
import { DashBoardCommentControllerService, DashBoardSurveyControllerService, QuestionnaireUtilsService } from '../../services';
import { SimpleFileUploadItem } from '../file-upload/simple-file-upload';
export declare class QuestionnaireContentComponent implements OnInit, OnDestroy, OnChanges {
    private formBuilder;
    private dashBoardSurveyControllerService;
    private dashBoardCommentControllerService;
    private questionnaireUtilsService;
    private router;
    private toastService;
    private modal;
    recordId: string;
    reviewMode: boolean;
    questionnaireViewModesEnum: typeof QuestionnaireViewModeEnum;
    taskStatusEnum: typeof TaskStatusEnum;
    questionnaire: QuestionnaireInterface;
    sections: QuestionContainerViewPageInterface[];
    selectedSection: QuestionContainerViewPageInterface;
    selectedSectionIndex: number;
    totalQuestionsCount: number;
    totalAnswersCount: number;
    showActionStatus: boolean;
    selectedViewMode: QuestionnaireViewModeEnum;
    private sectionForm;
    private _sectionFormSubscription$;
    private _updateQuestionnaireCountsSubscription$;
    constructor(formBuilder: FormBuilder, dashBoardSurveyControllerService: DashBoardSurveyControllerService, dashBoardCommentControllerService: DashBoardCommentControllerService, questionnaireUtilsService: QuestionnaireUtilsService, router: Router, toastService: ToastService, modal: TaModal);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    readonly isSectionComplete: boolean;
    readonly isFirstSection: boolean;
    readonly isLastSection: boolean;
    private readonly sectionQuestions;
    /**
     * Adds question's individual form into questionnaireForm
     * @param index question index
     * @param questionForm FormGroup
     */
    questionFormReady(questionForm: FormGroup): void;
    selectViewMode(viewMode: QuestionnaireViewModeEnum): void;
    selectSection(section: QuestionContainerViewPageInterface, sectionIndex: number): void;
    selectNextSection(): void;
    selectPrevSection(): void;
    isSelectedSection(section: QuestionContainerViewPageInterface): boolean;
    submitQuestionnaire(): void;
    exitQuestionnaire(): Promise<void>;
    onAfterFilesSelected(eventTuple: [QuestionTreeInterface, SimpleFileUploadItem[]]): void;
    onClickAttachment(attachment: Attachment): void;
    openDeleteModal(eventTuple: [QuestionTreeInterface, Attachment]): void;
    onDeleteAttachment(eventTuple: [QuestionTreeInterface, Attachment]): void;
    private setFileContainer;
    private setAttachments;
    private resetToDefaultFileContainer;
    private generateDefaultFileContainer;
    /**
     * Make POST API call to save/submit survey.
     * @param value Form value
     * @param submitAction whether API should submit the survey for rules running. Used with 'submit' button
     */
    private postQuestionnaire;
    /**
     * Recursive function that returns the total list of answers of the question and all its children.
     * @param question question to crawl
     */
    private crawlAnswer;
    /**
     * Update the answered/unanswered counts across the whole page
     * @param onlySelected Whether to update only selected section. Used when not updating the entire section list
     */
    private updateQuestionnaireCounts;
    /**
     * Update the total answered/unanswerd counts for the entire questionnaire, counting all sections
     */
    private updateTotalSectionCounts;
    /**
     * Update the answered/unanswered counts for the section
     * @param section section form
     */
    private updateSectionCounts;
    /**
     * Recursive function that returns the total count of active child questions and itself.
     * @param question question to crawl
     */
    private crawlQuestion;
    /**
     * Instantiate and subscribe to new section form
     */
    private resetForm;
    /**
     * Unsubscribe from existing subscriptions
     */
    private unsubscribe;
    private initDefaultFileContainerInQuestions;
}
