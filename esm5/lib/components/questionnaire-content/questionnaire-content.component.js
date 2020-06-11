import * as tslib_1 from "tslib";
import { HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TaModal, ToastService } from '@trustarc/ui-toolkit';
import { debounceTime, finalize } from 'rxjs/operators';
import { QuestionnaireViewModeEnum, TaskStatusEnum } from '../../enums';
import { DashBoardCommentControllerService, DashBoardSurveyControllerService, QuestionnaireUtilsService } from '../../services';
import { generateErrorMessage, getProgress, isPropertyChanged } from '../../utils';
import { DeleteModalComponent } from '../delete-modal';
var QuestionnaireContentComponent = /** @class */ (function () {
    function QuestionnaireContentComponent(formBuilder, dashBoardSurveyControllerService, dashBoardCommentControllerService, questionnaireUtilsService, router, toastService, modal) {
        this.formBuilder = formBuilder;
        this.dashBoardSurveyControllerService = dashBoardSurveyControllerService;
        this.dashBoardCommentControllerService = dashBoardCommentControllerService;
        this.questionnaireUtilsService = questionnaireUtilsService;
        this.router = router;
        this.toastService = toastService;
        this.modal = modal;
        this.questionnaireViewModesEnum = QuestionnaireViewModeEnum;
        this.taskStatusEnum = TaskStatusEnum;
        this.selectedSectionIndex = 0;
        this.showActionStatus = false;
        this.selectedViewMode = QuestionnaireViewModeEnum.All;
    }
    QuestionnaireContentComponent.prototype.ngOnInit = function () { };
    QuestionnaireContentComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    QuestionnaireContentComponent.prototype.ngOnChanges = function (changes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isPropertyChanged(changes.recordId)) return [3 /*break*/, 5];
                        if (!this.recordId) return [3 /*break*/, 5];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.dashBoardSurveyControllerService
                                .getQuestionContainerViewPages(this.recordId)
                                .toPromise()];
                    case 2:
                        _a.questionnaire = _b.sent();
                        this.questionnaire.questionContainerViewPages.forEach(function (item) {
                            return _this.initDefaultFileContainerInQuestions(item.questionTree);
                        });
                        this.sections = this.questionnaire.questionContainerViewPages;
                        this.selectSection(this.sections[this.selectedSectionIndex], this.selectedSectionIndex);
                        this.updateQuestionnaireCounts();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.toastService.error(generateErrorMessage('Questionnaire load failed', error_1));
                        return [3 /*break*/, 4];
                    case 4:
                        this.resetForm();
                        _b.label = 5;
                    case 5:
                        if (isPropertyChanged(changes.reviewMode)) {
                            this.questionnaireUtilsService.setReviewMode(this.reviewMode);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(QuestionnaireContentComponent.prototype, "isSectionComplete", {
        get: function () {
            return this.selectedSection
                ? this.selectedSection.totalActiveAnswerCount ===
                    this.selectedSection.totalActiveQuestionCount
                : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionnaireContentComponent.prototype, "isFirstSection", {
        get: function () {
            return this.selectedSectionIndex === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionnaireContentComponent.prototype, "isLastSection", {
        get: function () {
            return this.selectedSectionIndex === this.sections.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionnaireContentComponent.prototype, "sectionQuestions", {
        get: function () {
            return this.sectionForm.get('questions');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds question's individual form into questionnaireForm
     * @param index question index
     * @param questionForm FormGroup
     */
    QuestionnaireContentComponent.prototype.questionFormReady = function (questionForm) {
        this.sectionQuestions.push(questionForm);
    };
    QuestionnaireContentComponent.prototype.selectViewMode = function (viewMode) {
        this.selectedViewMode = viewMode;
        this.questionnaireUtilsService.changeViewMode(viewMode);
    };
    QuestionnaireContentComponent.prototype.selectSection = function (section, sectionIndex) {
        this.resetForm();
        this.selectedSectionIndex = sectionIndex;
        this.selectedSection = section;
    };
    QuestionnaireContentComponent.prototype.selectNextSection = function () {
        this.selectedSectionIndex++;
        this.selectedSection = this.sections[this.selectedSectionIndex];
    };
    QuestionnaireContentComponent.prototype.selectPrevSection = function () {
        this.selectedSectionIndex--;
        this.selectedSection = this.sections[this.selectedSectionIndex];
    };
    QuestionnaireContentComponent.prototype.isSelectedSection = function (section) {
        return section.id === this.selectedSection.id;
    };
    QuestionnaireContentComponent.prototype.submitQuestionnaire = function () {
        this.postQuestionnaire(this.sectionForm.value, true);
    };
    QuestionnaireContentComponent.prototype.exitQuestionnaire = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl("tasks")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QuestionnaireContentComponent.prototype.onAfterFilesSelected = function (eventTuple) {
        var _this = this;
        this.showActionStatus = true;
        var selectedQuestion = eventTuple[0];
        var files = eventTuple[1];
        this.setFileContainer(selectedQuestion, {
            isLoading: true,
            progress: 0
        });
        this.dashBoardSurveyControllerService
            .postAttachments$(this.questionnaire.recordId, selectedQuestion.nodeId, files.map(function (f) { return f.file; }))
            .subscribe(function (result) {
            switch (result.type) {
                case HttpEventType.UploadProgress:
                    _this.setFileContainer(selectedQuestion, {
                        progress: getProgress(result.loaded, result.total)
                    });
                    break;
                case HttpEventType.Response:
                    _this.showActionStatus = false;
                    _this.setFileContainer(selectedQuestion, _this.generateDefaultFileContainer());
                    _this.setAttachments(selectedQuestion, result.body);
                    _this.toastService.success('Attachment uploaded');
                    break;
            }
        }, function (error) {
            _this.showActionStatus = false;
            _this.resetToDefaultFileContainer(selectedQuestion);
            _this.toastService.error(generateErrorMessage('File upload failed', error));
        });
    };
    QuestionnaireContentComponent.prototype.onClickAttachment = function (attachment) {
        var _this = this;
        this.dashBoardCommentControllerService
            .getAttachmentDownloadUrl$(attachment.id)
            .subscribe(function (result) { return window.open(result); }, function (error) {
            return _this.toastService.error(generateErrorMessage('Attachment load failed', error));
        });
    };
    QuestionnaireContentComponent.prototype.openDeleteModal = function (eventTuple) {
        var _this = this;
        var modalRef = this.modal.open(DeleteModalComponent, {
            size: 'sm',
            backdrop: 'static'
        });
        var instance = modalRef.componentInstance;
        instance.title = 'Delete Attachment?';
        instance.clickPrimary.subscribe(function () {
            modalRef.close();
            _this.onDeleteAttachment(eventTuple);
        });
    };
    QuestionnaireContentComponent.prototype.onDeleteAttachment = function (eventTuple) {
        var _this = this;
        this.showActionStatus = true;
        var selectedQuestion = eventTuple[0];
        var attachment = eventTuple[1];
        this.dashBoardSurveyControllerService
            .deleteAttachment$(this.questionnaire.recordId, selectedQuestion.nodeId, attachment.id)
            .pipe(finalize(function () {
            _this.showActionStatus = false;
        }))
            .subscribe(function (result) {
            _this.setAttachments(selectedQuestion, selectedQuestion.questionDetails.attachments.filter(function (item) { return item.id !== attachment.id; }));
            _this.toastService.success('Attachment deleted');
        }, function (error) {
            _this.resetToDefaultFileContainer(selectedQuestion);
            _this.toastService.error(generateErrorMessage('Attachment delete failed', error));
        });
    };
    QuestionnaireContentComponent.prototype.setFileContainer = function (question, fileContainer) {
        question.questionDetails = tslib_1.__assign({}, question.questionDetails, { fileContainer: tslib_1.__assign({}, question.questionDetails.fileContainer, fileContainer) });
    };
    QuestionnaireContentComponent.prototype.setAttachments = function (selectedQuestion, attachments) {
        selectedQuestion.questionDetails.attachments = attachments;
    };
    QuestionnaireContentComponent.prototype.resetToDefaultFileContainer = function (question) {
        this.setFileContainer(question, this.generateDefaultFileContainer());
    };
    QuestionnaireContentComponent.prototype.generateDefaultFileContainer = function () {
        return {
            files: [],
            progress: 0,
            isLoading: false
        };
    };
    /**
     * Make POST API call to save/submit survey.
     * @param value Form value
     * @param submitAction whether API should submit the survey for rules running. Used with 'submit' button
     */
    QuestionnaireContentComponent.prototype.postQuestionnaire = function (value, submitAction) {
        var _this = this;
        this.showActionStatus = true;
        var answers = [];
        for (var i = 0; i < value.questions.length; i++) {
            var questionDetails = value.questions[i];
            answers = answers.concat(this.crawlAnswer(questionDetails));
        }
        // Submit just this question to the server
        this.dashBoardSurveyControllerService
            .postQuestionDetailResponses(answers, submitAction, this.recordId)
            .pipe(finalize(function () {
            _this.showActionStatus = false;
        }))
            .subscribe(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!submitAction) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.exitQuestionnaire()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Recursive function that returns the total list of answers of the question and all its children.
     * @param question question to crawl
     */
    QuestionnaireContentComponent.prototype.crawlAnswer = function (questionDetails) {
        var answers = [];
        var answer = questionDetails.question.answer;
        if (answer) {
            // Add single choice answer item
            var answerDetailText = answer.questionDetailResponsesChoice;
            var questionDetailResponsesIds = [answer.questionDetailResponsesId];
            var questionNodeId = questionDetails.question.questionId;
            var answerPost = {
                answerDetailText: answerDetailText,
                questionDetailResponsesIds: questionDetailResponsesIds,
                questionNodeId: questionNodeId,
                answerDescription: questionDetails.question.answerDescription
            };
            answers.push(answerPost);
        }
        if (questionDetails.conditionFulfilled) {
            for (var j = 0; j < questionDetails.children.length; j++) {
                var child = questionDetails.children[j];
                answers = answers.concat(this.crawlAnswer(child));
            }
        }
        return answers;
    };
    /**
     * Update the answered/unanswered counts across the whole page
     * @param onlySelected Whether to update only selected section. Used when not updating the entire section list
     */
    QuestionnaireContentComponent.prototype.updateQuestionnaireCounts = function (onlySelected) {
        // Loop through all sections and generate counts
        if (onlySelected) {
            this.updateSectionCounts(this.selectedSection);
        }
        else {
            for (var i = 0; i < this.sections.length; i++) {
                var section = this.sections[i];
                this.updateSectionCounts(section);
            }
        }
        this.updateTotalSectionCounts();
    };
    /**
     * Update the total answered/unanswerd counts for the entire questionnaire, counting all sections
     */
    QuestionnaireContentComponent.prototype.updateTotalSectionCounts = function () {
        var totalAnswersCount = 0;
        var totalQuestionsCount = 0;
        for (var i = 0; i < this.sections.length; i++) {
            var section = this.sections[i];
            totalAnswersCount += section.totalActiveAnswerCount;
            totalQuestionsCount += section.totalActiveQuestionCount;
        }
        this.totalAnswersCount = totalAnswersCount;
        this.totalQuestionsCount = totalQuestionsCount;
    };
    /**
     * Update the answered/unanswered counts for the section
     * @param section section form
     */
    QuestionnaireContentComponent.prototype.updateSectionCounts = function (section) {
        // Recursively navigate through each question and its children
        var questionTree = section.questionTree;
        var totalActiveQuestionCount = 0;
        var totalActiveAnswerCount = 0;
        for (var i = 0; i < questionTree.length; i++) {
            var rootQuestion = questionTree[i];
            var crawlCounts = this.crawlQuestion(rootQuestion);
            totalActiveQuestionCount += crawlCounts.questionTotal;
            totalActiveAnswerCount += crawlCounts.answerTotal;
        }
        // Update counts on UI
        section.totalActiveQuestionCount = totalActiveQuestionCount;
        section.totalActiveAnswerCount = totalActiveAnswerCount;
    };
    /**
     * Recursive function that returns the total count of active child questions and itself.
     * @param question question to crawl
     */
    QuestionnaireContentComponent.prototype.crawlQuestion = function (question) {
        // Loop through conditionChildren
        var questionTotal = 0;
        var answerTotal = 0;
        if (question.children.length > 0) {
            for (var i = 0; i < question.children.length; i++) {
                var conditionChild = question.children[i];
                var conditionFulfilled = this.questionnaireUtilsService.getConditionFulfilled(conditionChild, question.questionDetails);
                if (conditionFulfilled) {
                    // If child condition is fulfilled, recurse into child
                    var crawlQuestionTotal = 0;
                    var crawlAnswerTotal = 0;
                    for (var j = 0; j < conditionChild.children.length; j++) {
                        var childQuestion = conditionChild.children[j];
                        var crawlCounts = this.crawlQuestion(childQuestion);
                        crawlQuestionTotal += crawlCounts.questionTotal;
                        crawlAnswerTotal += crawlCounts.answerTotal;
                    }
                    questionTotal += crawlQuestionTotal;
                    answerTotal += crawlAnswerTotal;
                }
            }
        }
        // Update counts for the question itself
        questionTotal += 1;
        if (this.questionnaireUtilsService.getQuestionAnswer(question.questionDetails)) {
            answerTotal += 1;
        }
        return { questionTotal: questionTotal, answerTotal: answerTotal };
    };
    /**
     * Instantiate and subscribe to new section form
     */
    QuestionnaireContentComponent.prototype.resetForm = function () {
        var _this = this;
        this.sectionForm = this.formBuilder.group({
            questions: this.formBuilder.array([])
        });
        this.unsubscribe();
        this._updateQuestionnaireCountsSubscription$ = this.sectionForm.valueChanges
            .pipe(debounceTime(10))
            .subscribe(function (value) {
            _this.updateQuestionnaireCounts(true);
        });
        this._sectionFormSubscription$ = this.sectionForm.valueChanges
            .pipe(debounceTime(1000))
            .subscribe(function (value) {
            _this.postQuestionnaire(value, false);
        });
    };
    /**
     * Unsubscribe from existing subscriptions
     */
    QuestionnaireContentComponent.prototype.unsubscribe = function () {
        if (this._updateQuestionnaireCountsSubscription$) {
            this._updateQuestionnaireCountsSubscription$.unsubscribe();
        }
        if (this._sectionFormSubscription$) {
            this._sectionFormSubscription$.unsubscribe();
        }
    };
    QuestionnaireContentComponent.prototype.initDefaultFileContainerInQuestions = function (questions) {
        var _this = this;
        questions.forEach(function (question) {
            question.questionDetails.fileContainer = _this.generateDefaultFileContainer();
            question.children.forEach(function (condition) {
                _this.initDefaultFileContainerInQuestions(condition.children);
            });
        });
    };
    QuestionnaireContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-questionnaire-content',
                    template: "<div\r\n  class=\"fadeInApp d-flex flex-column questionnaire h-100\"\r\n  *ngIf=\"questionnaire\"\r\n>\r\n  <div class=\"questionnaire-header\">\r\n    <div class=\"title-container\">\r\n      <h2 class=\"title\">{{ questionnaire.recordName }}</h2>\r\n      <div class=\"action-status\" [hidden]=\"!showActionStatus\">Saving...</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tab-content flex-grow-1\">\r\n    <div class=\"questionnaire-content h-100 d-flex\">\r\n      <div class=\"section-selector flex-shrink-0\">\r\n        <div class=\"d-flex align-items-start flex-column\">\r\n          <div class=\"total-questions\">\r\n            Questions ({{ totalAnswersCount }}/{{ totalQuestionsCount }})\r\n          </div>\r\n          <ul>\r\n            <li\r\n              *ngFor=\"let section of sections; let sectionIndex = index\"\r\n              class=\"section\"\r\n              [ngClass]=\"{\r\n                active: isSelectedSection(section),\r\n                answered:\r\n                  section.totalActiveAnswerCount ===\r\n                  section.totalActiveQuestionCount\r\n              }\"\r\n              (click)=\"selectSection(section, sectionIndex)\"\r\n            >\r\n              <span *ngIf=\"section.frameworkStandard\"\r\n                >{{ section.frameworkStandard.name }} ({{\r\n                  section.totalActiveAnswerCount\r\n                }}/{{ section.totalActiveQuestionCount }})</span\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"section-content flex-grow-1\">\r\n        <ng-container *ngIf=\"selectedSection\">\r\n          <h3 class=\"mt-2 mb-4 d-inline-block\">\r\n            {{ selectedSection.frameworkStandard?.name }} ({{\r\n              selectedSection.totalActiveAnswerCount\r\n            }}/{{ selectedSection.totalActiveQuestionCount }})\r\n          </h3>\r\n          <div\r\n            *ngIf=\"!reviewMode\"\r\n            taDropdown\r\n            class=\"d-inline-block float-right\"\r\n            placement=\"bottom-right\"\r\n          >\r\n            <button\r\n              taType=\"dropdown\"\r\n              type=\"button\"\r\n              taButton\r\n              id=\"dropdownBasic1\"\r\n              taDropdownToggle\r\n              [ngSwitch]=\"selectedViewMode\"\r\n            >\r\n              <span *ngSwitchCase=\"questionnaireViewModesEnum.All\">\r\n                All Questions ({{ selectedSection.totalActiveQuestionCount }})\r\n              </span>\r\n              <span *ngSwitchCase=\"questionnaireViewModesEnum.Unanswered\">\r\n                Unanswered ({{\r\n                  selectedSection.totalActiveQuestionCount -\r\n                    selectedSection.totalActiveAnswerCount\r\n                }})\r\n              </span>\r\n              <span *ngSwitchCase=\"questionnaireViewModesEnum.Answered\">\r\n                Answered ({{ selectedSection.totalActiveAnswerCount }})\r\n              </span>\r\n            </button>\r\n            <div taDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n              <button\r\n                class=\"dropdown-item\"\r\n                (click)=\"selectViewMode(questionnaireViewModesEnum.All)\"\r\n              >\r\n                All Questions ({{ selectedSection.totalActiveQuestionCount }})\r\n              </button>\r\n              <button\r\n                class=\"dropdown-item\"\r\n                (click)=\"selectViewMode(questionnaireViewModesEnum.Unanswered)\"\r\n              >\r\n                Unanswered ({{\r\n                  selectedSection.totalActiveQuestionCount -\r\n                    selectedSection.totalActiveAnswerCount\r\n                }})\r\n              </button>\r\n              <button\r\n                class=\"dropdown-item\"\r\n                (click)=\"selectViewMode(questionnaireViewModesEnum.Answered)\"\r\n              >\r\n                Answered ({{ selectedSection.totalActiveAnswerCount }})\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <p class=\"introduction mb-4\">\r\n            {{ selectedSection.introductionMessage }}\r\n          </p>\r\n          <ng-container *ngFor=\"let question of selectedSection.questionTree\">\r\n            <ta-question-accordion\r\n              [question]=\"question\"\r\n              (formReady)=\"questionFormReady($event)\"\r\n              (afterFilesSelected)=\"onAfterFilesSelected($event)\"\r\n              (clickAttachment)=\"onClickAttachment($event)\"\r\n              (deleteAttachment)=\"openDeleteModal($event)\"\r\n            >\r\n            </ta-question-accordion>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"navigator\">\r\n    <button taButton taType=\"flat\" (click)=\"exitQuestionnaire()\">\r\n      Exit\r\n    </button>\r\n    <div class=\"float-right\">\r\n      <button\r\n        taButton\r\n        taType=\"secondary\"\r\n        class=\"mr-2\"\r\n        (click)=\"selectPrevSection()\"\r\n        [disabled]=\"isFirstSection\"\r\n      >\r\n        Back\r\n      </button>\r\n      <button\r\n        *ngIf=\"!isLastSection\"\r\n        taButton\r\n        taType=\"primary\"\r\n        [disabled]=\"!isSectionComplete\"\r\n        (click)=\"selectNextSection()\"\r\n      >\r\n        Next\r\n      </button>\r\n      <button\r\n        *ngIf=\"isLastSection\"\r\n        taButton\r\n        taType=\"primary\"\r\n        [disabled]=\"!isSectionComplete\"\r\n        (click)=\"submitQuestionnaire()\"\r\n      >\r\n        {{ reviewMode ? 'Finish Review' : 'Submit' }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host{display:block;height:calc(100vh - 72px)}:host h2{font-size:20px;font-weight:600}:host h3{font-size:16px;font-weight:600}:host h4{font-size:12px;font-weight:600}:host p{font-size:12px}:host small{font-size:11px;color:#777}:host .box{padding:24px;border:1px solid #f3f3f3;border-radius:4px;background-color:#fff}:host .header-content ta-initial-indicator{margin-right:-4px;cursor:default}:host .header-content ta-initial-indicator:last-child{margin-right:0}:host .tab-content{overflow:auto}:host .questionnaire-introduction{padding:24px;background-color:#fcfcfc}:host .tabs{position:relative}:host .tabs .action-status{position:absolute;top:0;left:280px;line-height:37px;color:#595959}:host .questionnaire-header{background-color:#fff;z-index:1;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}:host .questionnaire-header .title-container{margin-left:24px;margin-bottom:20px}:host .questionnaire-header .title-container h2{display:inline-block}:host .questionnaire-header .title-container .action-status{margin-left:16px;color:#595959;display:inline-block}:host .questionnaire-content .section-content{overflow:auto;background-color:#fcfcfc;padding:24px}:host .questionnaire-content .section-content .introduction{font-size:16px}:host .navigator{padding:12px 20px;border-top:1px solid #f3f3f3;background-color:#fff}:host .section-selector{overflow:auto;background-color:#fff;box-shadow:2px 2px 4px 0 rgba(0,0,0,.05);z-index:2;width:300px;padding:0 24px 24px}:host .section-selector .total-questions{font-weight:600;margin-bottom:16px}:host .section-selector ul{padding-left:14px;margin:0}:host .section-selector li{cursor:pointer;list-style:none;position:relative;padding-left:8px;margin-bottom:12px}:host .section-selector li:before{content:'';display:inline-block;position:absolute;left:-14px;top:4px;height:14px;width:14px;background-image:url(/assets/images/question-check-unanswered.svg);background-size:contain;background-repeat:no-repeat}:host .section-selector li.active span{font-weight:600;color:#004575}:host .section-selector li.answered:before{background-image:url(/assets/images/question-check-answered.svg)}"]
                }] }
    ];
    /** @nocollapse */
    QuestionnaireContentComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: DashBoardSurveyControllerService },
        { type: DashBoardCommentControllerService },
        { type: QuestionnaireUtilsService },
        { type: Router },
        { type: ToastService },
        { type: TaModal }
    ]; };
    QuestionnaireContentComponent.propDecorators = {
        recordId: [{ type: Input }],
        reviewMode: [{ type: Input }]
    };
    return QuestionnaireContentComponent;
}());
export { QuestionnaireContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUtY29udGVudC9xdWVzdGlvbm5haXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFhLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTdELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWF4RSxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLGdDQUFnQyxFQUNoQyx5QkFBeUIsRUFDMUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNdkQ7SUE0QkUsdUNBQ1UsV0FBd0IsRUFDeEIsZ0NBQWtFLEVBQ2xFLGlDQUFvRSxFQUNwRSx5QkFBb0QsRUFDcEQsTUFBYyxFQUNkLFlBQTBCLEVBQzFCLEtBQWM7UUFOZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2xFLHNDQUFpQyxHQUFq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RDs7aUJBRXREOzs7O2dCQXZDbUIsV0FBVztnQkFxQjdCLGdDQUFnQztnQkFEaEMsaUNBQWlDO2dCQUVqQyx5QkFBeUI7Z0JBckJsQixNQUFNO2dCQUNHLFlBQVk7Z0JBQXJCLE9BQU87OzsyQkF3Q2IsS0FBSzs2QkFDTCxLQUFLOztJQStkUixvQ0FBQztDQUFBLEFBdmVELElBdWVDO1NBbGVZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUYU1vZGFsLCBUb2FzdFNlcnZpY2UgfSBmcm9tICdAdHJ1c3RhcmMvdWktdG9vbGtpdCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUXVlc3Rpb25uYWlyZVZpZXdNb2RlRW51bSwgVGFza1N0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9lbnVtcyc7XHJcbmltcG9ydCB7XHJcbiAgQW5zd2VyRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UsXHJcbiAgQW5zd2Vyc0Zvcm1JbnRlcmZhY2UsXHJcbiAgQ29uZGl0aW9uVHJlZUludGVyZmFjZSxcclxuICBRdWVzdGlvbkNvbnRhaW5lclZpZXdQYWdlSW50ZXJmYWNlLFxyXG4gIFF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UsXHJcbiAgUXVlc3Rpb25Gb3JtSW50ZXJmYWNlLFxyXG4gIFF1ZXN0aW9ubmFpcmVJbnRlcmZhY2UsXHJcbiAgUXVlc3Rpb25uYWlyZVNlY3Rpb25Db3VudHMsXHJcbiAgUXVlc3Rpb25UcmVlSW50ZXJmYWNlXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQge1xyXG4gIERhc2hCb2FyZENvbW1lbnRDb250cm9sbGVyU2VydmljZSxcclxuICBEYXNoQm9hcmRTdXJ2ZXlDb250cm9sbGVyU2VydmljZSxcclxuICBRdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlXHJcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xyXG5pbXBvcnQge1xyXG4gIGdlbmVyYXRlRXJyb3JNZXNzYWdlLFxyXG4gIGdldFByb2dyZXNzLFxyXG4gIGlzUHJvcGVydHlDaGFuZ2VkXHJcbn0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBEZWxldGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2RlbGV0ZS1tb2RhbCc7XHJcbmltcG9ydCB7XHJcbiAgU2ltcGxlRmlsZVVwbG9hZEl0ZW0sXHJcbiAgU2ltcGxlRmlsZVVwbG9hZEl0ZW1Db250YWluZXJcclxufSBmcm9tICcuLi9maWxlLXVwbG9hZC9zaW1wbGUtZmlsZS11cGxvYWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1xdWVzdGlvbm5haXJlLWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWVzdGlvbm5haXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3F1ZXN0aW9ubmFpcmUtY29udGVudC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbm5haXJlQ29udGVudENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcHVibGljIHJlY29yZElkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHJldmlld01vZGU6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBxdWVzdGlvbm5haXJlVmlld01vZGVzRW51bSA9IFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW07XHJcbiAgcHVibGljIHRhc2tTdGF0dXNFbnVtID0gVGFza1N0YXR1c0VudW07XHJcblxyXG4gIHB1YmxpYyBxdWVzdGlvbm5haXJlOiBRdWVzdGlvbm5haXJlSW50ZXJmYWNlO1xyXG4gIHB1YmxpYyBzZWN0aW9uczogUXVlc3Rpb25Db250YWluZXJWaWV3UGFnZUludGVyZmFjZVtdO1xyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRTZWN0aW9uOiBRdWVzdGlvbkNvbnRhaW5lclZpZXdQYWdlSW50ZXJmYWNlO1xyXG4gIHB1YmxpYyBzZWxlY3RlZFNlY3Rpb25JbmRleCA9IDA7XHJcbiAgcHVibGljIHRvdGFsUXVlc3Rpb25zQ291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgdG90YWxBbnN3ZXJzQ291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgc2hvd0FjdGlvblN0YXR1cyA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzZWxlY3RlZFZpZXdNb2RlID0gUXVlc3Rpb25uYWlyZVZpZXdNb2RlRW51bS5BbGw7XHJcblxyXG4gIHByaXZhdGUgc2VjdGlvbkZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgcHJpdmF0ZSBfc2VjdGlvbkZvcm1TdWJzY3JpcHRpb24kOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBfdXBkYXRlUXVlc3Rpb25uYWlyZUNvdW50c1N1YnNjcmlwdGlvbiQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgZGFzaEJvYXJkU3VydmV5Q29udHJvbGxlclNlcnZpY2U6IERhc2hCb2FyZFN1cnZleUNvbnRyb2xsZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXNoQm9hcmRDb21tZW50Q29udHJvbGxlclNlcnZpY2U6IERhc2hCb2FyZENvbW1lbnRDb250cm9sbGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgcXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZTogUXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtb2RhbDogVGFNb2RhbFxyXG4gICkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge31cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChpc1Byb3BlcnR5Q2hhbmdlZChjaGFuZ2VzLnJlY29yZElkKSkge1xyXG4gICAgICBpZiAodGhpcy5yZWNvcmRJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9ubmFpcmUgPSBhd2FpdCB0aGlzLmRhc2hCb2FyZFN1cnZleUNvbnRyb2xsZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRRdWVzdGlvbkNvbnRhaW5lclZpZXdQYWdlcyh0aGlzLnJlY29yZElkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbm5haXJlLnF1ZXN0aW9uQ29udGFpbmVyVmlld1BhZ2VzLmZvckVhY2goaXRlbSA9PlxyXG4gICAgICAgICAgICB0aGlzLmluaXREZWZhdWx0RmlsZUNvbnRhaW5lckluUXVlc3Rpb25zKGl0ZW0ucXVlc3Rpb25UcmVlKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2VjdGlvbnMgPSB0aGlzLnF1ZXN0aW9ubmFpcmUucXVlc3Rpb25Db250YWluZXJWaWV3UGFnZXM7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdFNlY3Rpb24oXHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbdGhpcy5zZWxlY3RlZFNlY3Rpb25JbmRleF0sXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uSW5kZXhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXN0aW9ubmFpcmVDb3VudHMoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgdGhpcy50b2FzdFNlcnZpY2UuZXJyb3IoXHJcbiAgICAgICAgICAgIGdlbmVyYXRlRXJyb3JNZXNzYWdlKCdRdWVzdGlvbm5haXJlIGxvYWQgZmFpbGVkJywgZXJyb3IpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1Byb3BlcnR5Q2hhbmdlZChjaGFuZ2VzLnJldmlld01vZGUpKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZS5zZXRSZXZpZXdNb2RlKHRoaXMucmV2aWV3TW9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzU2VjdGlvbkNvbXBsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTZWN0aW9uXHJcbiAgICAgID8gdGhpcy5zZWxlY3RlZFNlY3Rpb24udG90YWxBY3RpdmVBbnN3ZXJDb3VudCA9PT1cclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLnRvdGFsQWN0aXZlUXVlc3Rpb25Db3VudFxyXG4gICAgICA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0ZpcnN0U2VjdGlvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU2VjdGlvbkluZGV4ID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xhc3RTZWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTZWN0aW9uSW5kZXggPT09IHRoaXMuc2VjdGlvbnMubGVuZ3RoIC0gMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHNlY3Rpb25RdWVzdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uRm9ybS5nZXQoJ3F1ZXN0aW9ucycpIGFzIEZvcm1BcnJheTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgcXVlc3Rpb24ncyBpbmRpdmlkdWFsIGZvcm0gaW50byBxdWVzdGlvbm5haXJlRm9ybVxyXG4gICAqIEBwYXJhbSBpbmRleCBxdWVzdGlvbiBpbmRleFxyXG4gICAqIEBwYXJhbSBxdWVzdGlvbkZvcm0gRm9ybUdyb3VwXHJcbiAgICovXHJcbiAgcHVibGljIHF1ZXN0aW9uRm9ybVJlYWR5KHF1ZXN0aW9uRm9ybTogRm9ybUdyb3VwKSB7XHJcbiAgICB0aGlzLnNlY3Rpb25RdWVzdGlvbnMucHVzaChxdWVzdGlvbkZvcm0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdFZpZXdNb2RlKHZpZXdNb2RlOiBRdWVzdGlvbm5haXJlVmlld01vZGVFbnVtKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVmlld01vZGUgPSB2aWV3TW9kZTtcclxuICAgIHRoaXMucXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZS5jaGFuZ2VWaWV3TW9kZSh2aWV3TW9kZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0U2VjdGlvbihcclxuICAgIHNlY3Rpb246IFF1ZXN0aW9uQ29udGFpbmVyVmlld1BhZ2VJbnRlcmZhY2UsXHJcbiAgICBzZWN0aW9uSW5kZXg6IG51bWJlclxyXG4gICkge1xyXG4gICAgdGhpcy5yZXNldEZvcm0oKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTZWN0aW9uSW5kZXggPSBzZWN0aW9uSW5kZXg7XHJcbiAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbiA9IHNlY3Rpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0TmV4dFNlY3Rpb24oKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbkluZGV4Kys7XHJcbiAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbiA9IHRoaXMuc2VjdGlvbnNbdGhpcy5zZWxlY3RlZFNlY3Rpb25JbmRleF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0UHJldlNlY3Rpb24oKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbkluZGV4LS07XHJcbiAgICB0aGlzLnNlbGVjdGVkU2VjdGlvbiA9IHRoaXMuc2VjdGlvbnNbdGhpcy5zZWxlY3RlZFNlY3Rpb25JbmRleF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNTZWxlY3RlZFNlY3Rpb24oc2VjdGlvbjogUXVlc3Rpb25Db250YWluZXJWaWV3UGFnZUludGVyZmFjZSkge1xyXG4gICAgcmV0dXJuIHNlY3Rpb24uaWQgPT09IHRoaXMuc2VsZWN0ZWRTZWN0aW9uLmlkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1Ym1pdFF1ZXN0aW9ubmFpcmUoKSB7XHJcbiAgICB0aGlzLnBvc3RRdWVzdGlvbm5haXJlKHRoaXMuc2VjdGlvbkZvcm0udmFsdWUsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV4aXRRdWVzdGlvbm5haXJlKCkge1xyXG4gICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChgdGFza3NgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFmdGVyRmlsZXNTZWxlY3RlZChcclxuICAgIGV2ZW50VHVwbGU6IFtRdWVzdGlvblRyZWVJbnRlcmZhY2UsIFNpbXBsZUZpbGVVcGxvYWRJdGVtW11dXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25TdGF0dXMgPSB0cnVlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRRdWVzdGlvbiA9IGV2ZW50VHVwbGVbMF07XHJcbiAgICBjb25zdCBmaWxlcyA9IGV2ZW50VHVwbGVbMV07XHJcbiAgICB0aGlzLnNldEZpbGVDb250YWluZXIoc2VsZWN0ZWRRdWVzdGlvbiwge1xyXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiAwXHJcbiAgICB9IGFzIFNpbXBsZUZpbGVVcGxvYWRJdGVtQ29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLmRhc2hCb2FyZFN1cnZleUNvbnRyb2xsZXJTZXJ2aWNlXHJcbiAgICAgIC5wb3N0QXR0YWNobWVudHMkKFxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25uYWlyZS5yZWNvcmRJZCxcclxuICAgICAgICBzZWxlY3RlZFF1ZXN0aW9uLm5vZGVJZCxcclxuICAgICAgICBmaWxlcy5tYXAoZiA9PiBmLmZpbGUpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChyZXN1bHQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M6XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRGaWxlQ29udGFpbmVyKHNlbGVjdGVkUXVlc3Rpb24sIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiBnZXRQcm9ncmVzcyhyZXN1bHQubG9hZGVkLCByZXN1bHQudG90YWwpXHJcbiAgICAgICAgICAgICAgfSBhcyBTaW1wbGVGaWxlVXBsb2FkSXRlbUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93QWN0aW9uU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRGaWxlQ29udGFpbmVyKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRRdWVzdGlvbixcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEZWZhdWx0RmlsZUNvbnRhaW5lcigpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldEF0dGFjaG1lbnRzKHNlbGVjdGVkUXVlc3Rpb24sIHJlc3VsdC5ib2R5KTtcclxuICAgICAgICAgICAgICB0aGlzLnRvYXN0U2VydmljZS5zdWNjZXNzKCdBdHRhY2htZW50IHVwbG9hZGVkJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNob3dBY3Rpb25TdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMucmVzZXRUb0RlZmF1bHRGaWxlQ29udGFpbmVyKHNlbGVjdGVkUXVlc3Rpb24pO1xyXG4gICAgICAgICAgdGhpcy50b2FzdFNlcnZpY2UuZXJyb3IoXHJcbiAgICAgICAgICAgIGdlbmVyYXRlRXJyb3JNZXNzYWdlKCdGaWxlIHVwbG9hZCBmYWlsZWQnLCBlcnJvcilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2tBdHRhY2htZW50KGF0dGFjaG1lbnQ6IEF0dGFjaG1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZGFzaEJvYXJkQ29tbWVudENvbnRyb2xsZXJTZXJ2aWNlXHJcbiAgICAgIC5nZXRBdHRhY2htZW50RG93bmxvYWRVcmwkKGF0dGFjaG1lbnQuaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgcmVzdWx0ID0+IHdpbmRvdy5vcGVuKHJlc3VsdCksXHJcbiAgICAgICAgZXJyb3IgPT5cclxuICAgICAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLmVycm9yKFxyXG4gICAgICAgICAgICBnZW5lcmF0ZUVycm9yTWVzc2FnZSgnQXR0YWNobWVudCBsb2FkIGZhaWxlZCcsIGVycm9yKVxyXG4gICAgICAgICAgKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5EZWxldGVNb2RhbChcclxuICAgIGV2ZW50VHVwbGU6IFtRdWVzdGlvblRyZWVJbnRlcmZhY2UsIEF0dGFjaG1lbnRdXHJcbiAgKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMubW9kYWwub3BlbihEZWxldGVNb2RhbENvbXBvbmVudCwge1xyXG4gICAgICBzaXplOiAnc20nLFxyXG4gICAgICBiYWNrZHJvcDogJ3N0YXRpYydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGluc3RhbmNlID0gbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UgYXMgRGVsZXRlTW9kYWxDb21wb25lbnQ7XHJcbiAgICBpbnN0YW5jZS50aXRsZSA9ICdEZWxldGUgQXR0YWNobWVudD8nO1xyXG4gICAgaW5zdGFuY2UuY2xpY2tQcmltYXJ5LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIG1vZGFsUmVmLmNsb3NlKCk7XHJcbiAgICAgIHRoaXMub25EZWxldGVBdHRhY2htZW50KGV2ZW50VHVwbGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25EZWxldGVBdHRhY2htZW50KFxyXG4gICAgZXZlbnRUdXBsZTogW1F1ZXN0aW9uVHJlZUludGVyZmFjZSwgQXR0YWNobWVudF1cclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd0FjdGlvblN0YXR1cyA9IHRydWU7XHJcbiAgICBjb25zdCBzZWxlY3RlZFF1ZXN0aW9uID0gZXZlbnRUdXBsZVswXTtcclxuICAgIGNvbnN0IGF0dGFjaG1lbnQgPSBldmVudFR1cGxlWzFdO1xyXG4gICAgdGhpcy5kYXNoQm9hcmRTdXJ2ZXlDb250cm9sbGVyU2VydmljZVxyXG4gICAgICAuZGVsZXRlQXR0YWNobWVudCQoXHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbm5haXJlLnJlY29yZElkLFxyXG4gICAgICAgIHNlbGVjdGVkUXVlc3Rpb24ubm9kZUlkLFxyXG4gICAgICAgIGF0dGFjaG1lbnQuaWRcclxuICAgICAgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNob3dBY3Rpb25TdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0QXR0YWNobWVudHMoXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUXVlc3Rpb24sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzLmF0dGFjaG1lbnRzLmZpbHRlcihcclxuICAgICAgICAgICAgICBpdGVtID0+IGl0ZW0uaWQgIT09IGF0dGFjaG1lbnQuaWRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLnN1Y2Nlc3MoJ0F0dGFjaG1lbnQgZGVsZXRlZCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZXNldFRvRGVmYXVsdEZpbGVDb250YWluZXIoc2VsZWN0ZWRRdWVzdGlvbik7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0U2VydmljZS5lcnJvcihcclxuICAgICAgICAgICAgZ2VuZXJhdGVFcnJvck1lc3NhZ2UoJ0F0dGFjaG1lbnQgZGVsZXRlIGZhaWxlZCcsIGVycm9yKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZpbGVDb250YWluZXIoXHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb25UcmVlSW50ZXJmYWNlLFxyXG4gICAgZmlsZUNvbnRhaW5lcjogU2ltcGxlRmlsZVVwbG9hZEl0ZW1Db250YWluZXJcclxuICApOiB2b2lkIHtcclxuICAgIHF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlscyA9IHtcclxuICAgICAgLi4ucXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzLFxyXG4gICAgICBmaWxlQ29udGFpbmVyOiB7XHJcbiAgICAgICAgLi4ucXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzLmZpbGVDb250YWluZXIsXHJcbiAgICAgICAgLi4uZmlsZUNvbnRhaW5lclxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBdHRhY2htZW50cyhcclxuICAgIHNlbGVjdGVkUXVlc3Rpb246IFF1ZXN0aW9uVHJlZUludGVyZmFjZSxcclxuICAgIGF0dGFjaG1lbnRzOiBBdHRhY2htZW50W11cclxuICApOiB2b2lkIHtcclxuICAgIHNlbGVjdGVkUXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzLmF0dGFjaG1lbnRzID0gYXR0YWNobWVudHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0VG9EZWZhdWx0RmlsZUNvbnRhaW5lcihxdWVzdGlvbjogUXVlc3Rpb25UcmVlSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldEZpbGVDb250YWluZXIocXVlc3Rpb24sIHRoaXMuZ2VuZXJhdGVEZWZhdWx0RmlsZUNvbnRhaW5lcigpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVEZWZhdWx0RmlsZUNvbnRhaW5lcigpOiBTaW1wbGVGaWxlVXBsb2FkSXRlbUNvbnRhaW5lciB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmaWxlczogW10sXHJcbiAgICAgIHByb2dyZXNzOiAwLFxyXG4gICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFrZSBQT1NUIEFQSSBjYWxsIHRvIHNhdmUvc3VibWl0IHN1cnZleS5cclxuICAgKiBAcGFyYW0gdmFsdWUgRm9ybSB2YWx1ZVxyXG4gICAqIEBwYXJhbSBzdWJtaXRBY3Rpb24gd2hldGhlciBBUEkgc2hvdWxkIHN1Ym1pdCB0aGUgc3VydmV5IGZvciBydWxlcyBydW5uaW5nLiBVc2VkIHdpdGggJ3N1Ym1pdCcgYnV0dG9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwb3N0UXVlc3Rpb25uYWlyZShcclxuICAgIHZhbHVlOiBBbnN3ZXJzRm9ybUludGVyZmFjZSxcclxuICAgIHN1Ym1pdEFjdGlvbjogYm9vbGVhblxyXG4gICkge1xyXG4gICAgdGhpcy5zaG93QWN0aW9uU3RhdHVzID0gdHJ1ZTtcclxuICAgIGxldCBhbnN3ZXJzOiBBbnN3ZXJEZXRhaWxSZXNwb25zZUludGVyZmFjZVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBxdWVzdGlvbkRldGFpbHMgPSB2YWx1ZS5xdWVzdGlvbnNbaV07XHJcbiAgICAgIGFuc3dlcnMgPSBhbnN3ZXJzLmNvbmNhdCh0aGlzLmNyYXdsQW5zd2VyKHF1ZXN0aW9uRGV0YWlscykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN1Ym1pdCBqdXN0IHRoaXMgcXVlc3Rpb24gdG8gdGhlIHNlcnZlclxyXG4gICAgdGhpcy5kYXNoQm9hcmRTdXJ2ZXlDb250cm9sbGVyU2VydmljZVxyXG4gICAgICAucG9zdFF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzKGFuc3dlcnMsIHN1Ym1pdEFjdGlvbiwgdGhpcy5yZWNvcmRJZClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaG93QWN0aW9uU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoc3VibWl0QWN0aW9uKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmV4aXRRdWVzdGlvbm5haXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHRvdGFsIGxpc3Qgb2YgYW5zd2VycyBvZiB0aGUgcXVlc3Rpb24gYW5kIGFsbCBpdHMgY2hpbGRyZW4uXHJcbiAgICogQHBhcmFtIHF1ZXN0aW9uIHF1ZXN0aW9uIHRvIGNyYXdsXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmF3bEFuc3dlcihcclxuICAgIHF1ZXN0aW9uRGV0YWlsczogUXVlc3Rpb25Gb3JtSW50ZXJmYWNlXHJcbiAgKTogQW5zd2VyRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2VbXSB7XHJcbiAgICBsZXQgYW5zd2VyczogQW5zd2VyRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2VbXSA9IFtdO1xyXG4gICAgY29uc3QgYW5zd2VyOiBRdWVzdGlvbkRldGFpbFJlc3BvbnNlSW50ZXJmYWNlID1cclxuICAgICAgcXVlc3Rpb25EZXRhaWxzLnF1ZXN0aW9uLmFuc3dlcjtcclxuICAgIGlmIChhbnN3ZXIpIHtcclxuICAgICAgLy8gQWRkIHNpbmdsZSBjaG9pY2UgYW5zd2VyIGl0ZW1cclxuICAgICAgY29uc3QgYW5zd2VyRGV0YWlsVGV4dCA9IGFuc3dlci5xdWVzdGlvbkRldGFpbFJlc3BvbnNlc0Nob2ljZTtcclxuICAgICAgY29uc3QgcXVlc3Rpb25EZXRhaWxSZXNwb25zZXNJZHMgPSBbYW5zd2VyLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzSWRdO1xyXG4gICAgICBjb25zdCBxdWVzdGlvbk5vZGVJZCA9IHF1ZXN0aW9uRGV0YWlscy5xdWVzdGlvbi5xdWVzdGlvbklkO1xyXG5cclxuICAgICAgY29uc3QgYW5zd2VyUG9zdDogQW5zd2VyRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UgPSB7XHJcbiAgICAgICAgYW5zd2VyRGV0YWlsVGV4dDogYW5zd2VyRGV0YWlsVGV4dCxcclxuICAgICAgICBxdWVzdGlvbkRldGFpbFJlc3BvbnNlc0lkczogcXVlc3Rpb25EZXRhaWxSZXNwb25zZXNJZHMsXHJcbiAgICAgICAgcXVlc3Rpb25Ob2RlSWQ6IHF1ZXN0aW9uTm9kZUlkLFxyXG4gICAgICAgIGFuc3dlckRlc2NyaXB0aW9uOiBxdWVzdGlvbkRldGFpbHMucXVlc3Rpb24uYW5zd2VyRGVzY3JpcHRpb25cclxuICAgICAgfTtcclxuICAgICAgYW5zd2Vycy5wdXNoKGFuc3dlclBvc3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKHF1ZXN0aW9uRGV0YWlscy5jb25kaXRpb25GdWxmaWxsZWQpIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBxdWVzdGlvbkRldGFpbHMuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IHF1ZXN0aW9uRGV0YWlscy5jaGlsZHJlbltqXTtcclxuICAgICAgICBhbnN3ZXJzID0gYW5zd2Vycy5jb25jYXQodGhpcy5jcmF3bEFuc3dlcihjaGlsZCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYW5zd2VycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgYW5zd2VyZWQvdW5hbnN3ZXJlZCBjb3VudHMgYWNyb3NzIHRoZSB3aG9sZSBwYWdlXHJcbiAgICogQHBhcmFtIG9ubHlTZWxlY3RlZCBXaGV0aGVyIHRvIHVwZGF0ZSBvbmx5IHNlbGVjdGVkIHNlY3Rpb24uIFVzZWQgd2hlbiBub3QgdXBkYXRpbmcgdGhlIGVudGlyZSBzZWN0aW9uIGxpc3RcclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZVF1ZXN0aW9ubmFpcmVDb3VudHMob25seVNlbGVjdGVkPzogYm9vbGVhbikge1xyXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBzZWN0aW9ucyBhbmQgZ2VuZXJhdGUgY291bnRzXHJcbiAgICBpZiAob25seVNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VjdGlvbkNvdW50cyh0aGlzLnNlbGVjdGVkU2VjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5zZWN0aW9uc1tpXTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlY3Rpb25Db3VudHMoc2VjdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlVG90YWxTZWN0aW9uQ291bnRzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIHRvdGFsIGFuc3dlcmVkL3VuYW5zd2VyZCBjb3VudHMgZm9yIHRoZSBlbnRpcmUgcXVlc3Rpb25uYWlyZSwgY291bnRpbmcgYWxsIHNlY3Rpb25zXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVUb3RhbFNlY3Rpb25Db3VudHMoKSB7XHJcbiAgICBsZXQgdG90YWxBbnN3ZXJzQ291bnQgPSAwO1xyXG4gICAgbGV0IHRvdGFsUXVlc3Rpb25zQ291bnQgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLnNlY3Rpb25zW2ldO1xyXG4gICAgICB0b3RhbEFuc3dlcnNDb3VudCArPSBzZWN0aW9uLnRvdGFsQWN0aXZlQW5zd2VyQ291bnQ7XHJcbiAgICAgIHRvdGFsUXVlc3Rpb25zQ291bnQgKz0gc2VjdGlvbi50b3RhbEFjdGl2ZVF1ZXN0aW9uQ291bnQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvdGFsQW5zd2Vyc0NvdW50ID0gdG90YWxBbnN3ZXJzQ291bnQ7XHJcbiAgICB0aGlzLnRvdGFsUXVlc3Rpb25zQ291bnQgPSB0b3RhbFF1ZXN0aW9uc0NvdW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBhbnN3ZXJlZC91bmFuc3dlcmVkIGNvdW50cyBmb3IgdGhlIHNlY3Rpb25cclxuICAgKiBAcGFyYW0gc2VjdGlvbiBzZWN0aW9uIGZvcm1cclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZVNlY3Rpb25Db3VudHMoc2VjdGlvbjogUXVlc3Rpb25Db250YWluZXJWaWV3UGFnZUludGVyZmFjZSkge1xyXG4gICAgLy8gUmVjdXJzaXZlbHkgbmF2aWdhdGUgdGhyb3VnaCBlYWNoIHF1ZXN0aW9uIGFuZCBpdHMgY2hpbGRyZW5cclxuICAgIGNvbnN0IHF1ZXN0aW9uVHJlZSA9IHNlY3Rpb24ucXVlc3Rpb25UcmVlO1xyXG4gICAgbGV0IHRvdGFsQWN0aXZlUXVlc3Rpb25Db3VudCA9IDA7XHJcbiAgICBsZXQgdG90YWxBY3RpdmVBbnN3ZXJDb3VudCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uVHJlZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByb290UXVlc3Rpb24gPSBxdWVzdGlvblRyZWVbaV07XHJcbiAgICAgIGNvbnN0IGNyYXdsQ291bnRzID0gdGhpcy5jcmF3bFF1ZXN0aW9uKHJvb3RRdWVzdGlvbik7XHJcblxyXG4gICAgICB0b3RhbEFjdGl2ZVF1ZXN0aW9uQ291bnQgKz0gY3Jhd2xDb3VudHMucXVlc3Rpb25Ub3RhbDtcclxuICAgICAgdG90YWxBY3RpdmVBbnN3ZXJDb3VudCArPSBjcmF3bENvdW50cy5hbnN3ZXJUb3RhbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgY291bnRzIG9uIFVJXHJcbiAgICBzZWN0aW9uLnRvdGFsQWN0aXZlUXVlc3Rpb25Db3VudCA9IHRvdGFsQWN0aXZlUXVlc3Rpb25Db3VudDtcclxuICAgIHNlY3Rpb24udG90YWxBY3RpdmVBbnN3ZXJDb3VudCA9IHRvdGFsQWN0aXZlQW5zd2VyQ291bnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB0b3RhbCBjb3VudCBvZiBhY3RpdmUgY2hpbGQgcXVlc3Rpb25zIGFuZCBpdHNlbGYuXHJcbiAgICogQHBhcmFtIHF1ZXN0aW9uIHF1ZXN0aW9uIHRvIGNyYXdsXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmF3bFF1ZXN0aW9uKFxyXG4gICAgcXVlc3Rpb246IFF1ZXN0aW9uVHJlZUludGVyZmFjZVxyXG4gICk6IFF1ZXN0aW9ubmFpcmVTZWN0aW9uQ291bnRzIHtcclxuICAgIC8vIExvb3AgdGhyb3VnaCBjb25kaXRpb25DaGlsZHJlblxyXG4gICAgbGV0IHF1ZXN0aW9uVG90YWwgPSAwO1xyXG4gICAgbGV0IGFuc3dlclRvdGFsID0gMDtcclxuICAgIGlmIChxdWVzdGlvbi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb24uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb25kaXRpb25DaGlsZDogQ29uZGl0aW9uVHJlZUludGVyZmFjZSA9IHF1ZXN0aW9uLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkZ1bGZpbGxlZCA9IHRoaXMucXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZS5nZXRDb25kaXRpb25GdWxmaWxsZWQoXHJcbiAgICAgICAgICBjb25kaXRpb25DaGlsZCxcclxuICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlsc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChjb25kaXRpb25GdWxmaWxsZWQpIHtcclxuICAgICAgICAgIC8vIElmIGNoaWxkIGNvbmRpdGlvbiBpcyBmdWxmaWxsZWQsIHJlY3Vyc2UgaW50byBjaGlsZFxyXG4gICAgICAgICAgbGV0IGNyYXdsUXVlc3Rpb25Ub3RhbCA9IDA7XHJcbiAgICAgICAgICBsZXQgY3Jhd2xBbnN3ZXJUb3RhbCA9IDA7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbmRpdGlvbkNoaWxkLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkUXVlc3Rpb24gPSBjb25kaXRpb25DaGlsZC5jaGlsZHJlbltqXTtcclxuICAgICAgICAgICAgY29uc3QgY3Jhd2xDb3VudHMgPSB0aGlzLmNyYXdsUXVlc3Rpb24oY2hpbGRRdWVzdGlvbik7XHJcbiAgICAgICAgICAgIGNyYXdsUXVlc3Rpb25Ub3RhbCArPSBjcmF3bENvdW50cy5xdWVzdGlvblRvdGFsO1xyXG4gICAgICAgICAgICBjcmF3bEFuc3dlclRvdGFsICs9IGNyYXdsQ291bnRzLmFuc3dlclRvdGFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcXVlc3Rpb25Ub3RhbCArPSBjcmF3bFF1ZXN0aW9uVG90YWw7XHJcbiAgICAgICAgICBhbnN3ZXJUb3RhbCArPSBjcmF3bEFuc3dlclRvdGFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVXBkYXRlIGNvdW50cyBmb3IgdGhlIHF1ZXN0aW9uIGl0c2VsZlxyXG4gICAgcXVlc3Rpb25Ub3RhbCArPSAxO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnF1ZXN0aW9ubmFpcmVVdGlsc1NlcnZpY2UuZ2V0UXVlc3Rpb25BbnN3ZXIocXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzKVxyXG4gICAgKSB7XHJcbiAgICAgIGFuc3dlclRvdGFsICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcXVlc3Rpb25Ub3RhbDogcXVlc3Rpb25Ub3RhbCwgYW5zd2VyVG90YWw6IGFuc3dlclRvdGFsIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnN0YW50aWF0ZSBhbmQgc3Vic2NyaWJlIHRvIG5ldyBzZWN0aW9uIGZvcm1cclxuICAgKi9cclxuICBwcml2YXRlIHJlc2V0Rm9ybSgpIHtcclxuICAgIHRoaXMuc2VjdGlvbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgcXVlc3Rpb25zOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtdKVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl91cGRhdGVRdWVzdGlvbm5haXJlQ291bnRzU3Vic2NyaXB0aW9uJCA9IHRoaXMuc2VjdGlvbkZvcm0udmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUXVlc3Rpb25uYWlyZUNvdW50cyh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLl9zZWN0aW9uRm9ybVN1YnNjcmlwdGlvbiQgPSB0aGlzLnNlY3Rpb25Gb3JtLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIHRoaXMucG9zdFF1ZXN0aW9ubmFpcmUodmFsdWUsIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZSBmcm9tIGV4aXN0aW5nIHN1YnNjcmlwdGlvbnNcclxuICAgKi9cclxuICBwcml2YXRlIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgaWYgKHRoaXMuX3VwZGF0ZVF1ZXN0aW9ubmFpcmVDb3VudHNTdWJzY3JpcHRpb24kKSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVF1ZXN0aW9ubmFpcmVDb3VudHNTdWJzY3JpcHRpb24kLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fc2VjdGlvbkZvcm1TdWJzY3JpcHRpb24kKSB7XHJcbiAgICAgIHRoaXMuX3NlY3Rpb25Gb3JtU3Vic2NyaXB0aW9uJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RGVmYXVsdEZpbGVDb250YWluZXJJblF1ZXN0aW9ucyhcclxuICAgIHF1ZXN0aW9uczogUXVlc3Rpb25UcmVlSW50ZXJmYWNlW11cclxuICApOiB2b2lkIHtcclxuICAgIHF1ZXN0aW9ucy5mb3JFYWNoKHF1ZXN0aW9uID0+IHtcclxuICAgICAgcXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzLmZpbGVDb250YWluZXIgPSB0aGlzLmdlbmVyYXRlRGVmYXVsdEZpbGVDb250YWluZXIoKTtcclxuICAgICAgcXVlc3Rpb24uY2hpbGRyZW4uZm9yRWFjaChjb25kaXRpb24gPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdERlZmF1bHRGaWxlQ29udGFpbmVySW5RdWVzdGlvbnMoY29uZGl0aW9uLmNoaWxkcmVuKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19