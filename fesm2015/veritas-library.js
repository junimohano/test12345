import { CommonModule } from '@angular/common';
import { cloneDeep, cloneDeepWith } from 'lodash';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, NgModule, Injectable, defineInjectable, Inject, inject } from '@angular/core';

function stringContains(value, search) {
    return value.toLowerCase().indexOf(search.toLowerCase()) !== -1;
}
function generateErrorMessage(message, httpError) {
    return httpError && httpError.error && httpError.error.message
        ? `${message} (${httpError.error.message})`
        : message;
}
function onlyUnique(value, index, self) {
    return (index ===
        self.findIndex(selfValue => JSON.stringify(selfValue) === JSON.stringify(value)));
}
const nameOf = (name) => name;
function flatMap(items, key) {
    return [].concat(...items.map(item => item[key]));
}
function getZoneOffset() {
    const timezoneOffset = new Date().getTimezoneOffset();
    const isNegative = timezoneOffset < 0;
    let zoneOffset = (timezoneOffset * (isNegative ? -1 : 1)).toString();
    for (let i = zoneOffset.toString().length; i < 4; i++) {
        zoneOffset = '0' + zoneOffset;
    }
    return isNegative ? '-' : '+' + zoneOffset;
}
function getEnumKeys(enumType) {
    return Object.keys(enumType).filter(type => isNaN(type) && type !== 'values');
}
function isPropertyChanged(simpleChange) {
    return (simpleChange && simpleChange.previousValue !== simpleChange.currentValue);
}
function omitDeep(collection, ...excludeKeys) {
    function omitFn(value) {
        if (value && typeof value === 'object') {
            excludeKeys.forEach(key => {
                delete value[key];
            });
        }
    }
    const clonedCollection = cloneDeep(collection);
    return cloneDeepWith(clonedCollection, omitFn);
}
function getProgress(loaded, total) {
    return Math.round((loaded / total) * 100);
}

class InitialIndicatorComponent {
    constructor() {
        this.splitKey = ' ';
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (isPropertyChanged(changes.name)) {
            this.setInitial();
        }
    }
    setInitial() {
        const nameSplits = this.name.split(this.splitKey);
        this.initial =
            nameSplits.length > 1 ? this.getInitial(nameSplits) : this.name;
    }
    getInitial(nameSplits) {
        return `${this.getWordByIndex(nameSplits, 0)}${this.getWordByIndex(nameSplits, 1)}`;
    }
    getWordByIndex(nameSplits, index) {
        return nameSplits[index][0].toLocaleUpperCase();
    }
}
InitialIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-initial-indicator',
                template: "<div class=\"circle-indicator d-flex align-items-center justify-content-center\">\r\n  {{ initial }}\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host{display:flex}:host .circle-indicator{height:24px;width:24px;border-radius:50%;border:1px solid #ffddd5;background-color:#ffeeea;color:#99331c;font-size:.625rem;font-weight:600}"]
            }] }
];
/** @nocollapse */
InitialIndicatorComponent.ctorParameters = () => [];
InitialIndicatorComponent.propDecorators = {
    name: [{ type: Input }]
};

class InitialIndicatorModule {
}
InitialIndicatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InitialIndicatorComponent],
                imports: [CommonModule],
                exports: [InitialIndicatorComponent]
            },] }
];

const PAGE_OFFSET_FOR_SERVER = -1;
const SEARCH_DEBOUNCE_TIME = 300;

const VERITAS_API_PROXY_PREFIX_URL = 'VERITAS_API_PROXY_PREFIX_URL';

var CommentEntityTypeEnum;
(function (CommentEntityTypeEnum) {
    CommentEntityTypeEnum["Question"] = "QUESTION";
    CommentEntityTypeEnum["Task"] = "TASK";
})(CommentEntityTypeEnum || (CommentEntityTypeEnum = {}));

var TaskStatusEnum;
(function (TaskStatusEnum) {
    TaskStatusEnum["Open"] = "OPEN";
    TaskStatusEnum["InProgress"] = "IN_PROGRESS";
    TaskStatusEnum["InReview"] = "IN_REVIEW";
    TaskStatusEnum["Closed"] = "CLOSED";
    TaskStatusEnum["ActionRequired"] = "ACTION_REQUIRED";
})(TaskStatusEnum || (TaskStatusEnum = {}));
(function (TaskStatusEnum) {
    function getDisplayText(value) {
        let result = '';
        switch (value) {
            case TaskStatusEnum.Open:
                result = 'Open';
                break;
            case TaskStatusEnum.InProgress:
                result = 'In Progress';
                break;
            case TaskStatusEnum.InReview:
                result = 'In Review';
                break;
            case TaskStatusEnum.Closed:
                result = 'Closed';
                break;
            case TaskStatusEnum.ActionRequired:
                result = 'Action Required';
                break;
        }
        return result;
    }
    TaskStatusEnum.getDisplayText = getDisplayText;
})(TaskStatusEnum || (TaskStatusEnum = {}));

var RespondentTypeEnum;
(function (RespondentTypeEnum) {
    RespondentTypeEnum["Reviewer"] = "REVIEWER";
    RespondentTypeEnum["RemediationTaskReviewer"] = "REMEDIATION_TASK_REVIEWER";
    RespondentTypeEnum["PrivacyTeam"] = "PRIVACY_TEAM";
    RespondentTypeEnum["BusinessOwner"] = "BUSINESS_OWNER";
    RespondentTypeEnum["VendorContact"] = "VENDOR_CONTACT";
    RespondentTypeEnum["HumanResourcesTeam"] = "HUMAN_RESOURCES_TEAM";
    RespondentTypeEnum["ItSecurityTeam"] = "IT_SECURITY_TEAM";
    RespondentTypeEnum["Other"] = "OTHER";
})(RespondentTypeEnum || (RespondentTypeEnum = {}));
(function (RespondentTypeEnum) {
    function getDisplayText(value) {
        let result = '';
        switch (value) {
            case RespondentTypeEnum.Reviewer:
                result = 'Reviewer';
                break;
            case RespondentTypeEnum.RemediationTaskReviewer:
                result = 'Remediation Task Reviewer';
                break;
            case RespondentTypeEnum.PrivacyTeam:
                result = 'Privacy Team';
                break;
            case RespondentTypeEnum.BusinessOwner:
                result = 'Business Owner';
                break;
            case RespondentTypeEnum.VendorContact:
                result = 'Vendor Contact';
                break;
            case RespondentTypeEnum.HumanResourcesTeam:
                result = 'Human Resources Team';
                break;
            case RespondentTypeEnum.ItSecurityTeam:
                result = 'IT/Security Team';
                break;
            case RespondentTypeEnum.Other:
                result = 'Other';
                break;
            default:
                result = value;
                break;
        }
        return result;
    }
    RespondentTypeEnum.getDisplayText = getDisplayText;
})(RespondentTypeEnum || (RespondentTypeEnum = {}));

var QuestionTypeEnum;
(function (QuestionTypeEnum) {
    QuestionTypeEnum["SingleSelect"] = "SINGLE_SELECT";
    QuestionTypeEnum["MultiSelect"] = "MULTI_SELECT";
    QuestionTypeEnum["Text"] = "TEXT";
})(QuestionTypeEnum || (QuestionTypeEnum = {}));

var QuestionSingleSelectUiTypeEnum;
(function (QuestionSingleSelectUiTypeEnum) {
    QuestionSingleSelectUiTypeEnum["Horizontal"] = "HORIZONTAL";
    QuestionSingleSelectUiTypeEnum["Vertical"] = "VERTICAL";
    QuestionSingleSelectUiTypeEnum["Slider"] = "SLIDER";
})(QuestionSingleSelectUiTypeEnum || (QuestionSingleSelectUiTypeEnum = {}));

var QuestionMultiSelectUiTypeEnum;
(function (QuestionMultiSelectUiTypeEnum) {
    QuestionMultiSelectUiTypeEnum["Horizontal"] = "HORIZONTAL";
    QuestionMultiSelectUiTypeEnum["Vertical"] = "VERTICAL";
})(QuestionMultiSelectUiTypeEnum || (QuestionMultiSelectUiTypeEnum = {}));

var QuestionnaireViewModeEnum;
(function (QuestionnaireViewModeEnum) {
    QuestionnaireViewModeEnum["All"] = "all";
    QuestionnaireViewModeEnum["Answered"] = "answered";
    QuestionnaireViewModeEnum["Unanswered"] = "unanswered";
})(QuestionnaireViewModeEnum || (QuestionnaireViewModeEnum = {}));

class CommentBase {
}

class Comment extends CommentBase {
}

class CommentReply extends CommentBase {
}

class Assignee {
}

class Attachment {
}

class AaaUserService {
    constructor() {
        this.fullName = '';
    }
    set setFullName(fullName) {
        this.fullName = fullName;
    }
    get getFullName() {
        return this.fullName;
    }
}
AaaUserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AaaUserService.ctorParameters = () => [];
AaaUserService.ngInjectableDef = defineInjectable({ factory: function AaaUserService_Factory() { return new AaaUserService(); }, token: AaaUserService, providedIn: "root" });

class DashBoardCommentControllerService {
    constructor(httpClient, veritasApiProxyPrefixUrl) {
        this.httpClient = httpClient;
        this.veritasApiProxyPrefixUrl = veritasApiProxyPrefixUrl;
        this.url = `${this.veritasApiProxyPrefixUrl}/comment`;
    }
    getComments$(entityId, page = 1, maxRows = 20) {
        const params = new HttpParams()
            .append('page', (page + PAGE_OFFSET_FOR_SERVER).toString())
            .append('size', maxRows.toString());
        return this.httpClient
            .get(`${this.url}/${entityId}`, {
            params
        })
            .pipe(map(response => {
            response.content.forEach((comment) => {
                comment.isEditing = false;
            });
            return response;
        }));
    }
    createComment$(entityId, entityType, message) {
        const data = {
            entityId,
            entityType,
            messageText: message
        };
        return this.httpClient.post(`${this.url}/${entityId}`, data);
    }
    updateComment$(entityId, entityType, commentId, message) {
        const data = {
            entityId,
            entityType,
            messageText: message,
            id: commentId
        };
        return this.httpClient.post(`${this.url}/${entityId}/${commentId}`, data);
    }
    deleteComment$(entityId, commentId) {
        return this.httpClient.delete(`${this.url}/${entityId}/${commentId}`);
    }
    getQuestionContainerViewPages(taskId) {
        return this.httpClient
            .get(`/api/question-survey/${taskId}`)
            .pipe(map(this.mapGetQuestionContainerViewPages));
    }
    getAttachmentDownloadUrl$(attachmentId) {
        return this.httpClient.get(`${this.url}/attachments/${attachmentId}/url`);
    }
    mapGetQuestionContainerViewPages(questionnaire) {
        return questionnaire;
    }
    postQuestionDetailResponses(answers, submitAction, taskId) {
        // Assemble post data
        const answersData = {
            answers: answers,
            submitAction: submitAction
        };
        return this.httpClient.post(`/api/question-survey/${taskId}`, answersData);
    }
}
DashBoardCommentControllerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DashBoardCommentControllerService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
];
DashBoardCommentControllerService.ngInjectableDef = defineInjectable({ factory: function DashBoardCommentControllerService_Factory() { return new DashBoardCommentControllerService(inject(HttpClient), inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: DashBoardCommentControllerService, providedIn: "root" });

class DashBoardSurveyControllerService {
    constructor(httpClient, veritasApiProxyPrefixUrl) {
        this.httpClient = httpClient;
        this.veritasApiProxyPrefixUrl = veritasApiProxyPrefixUrl;
        this.url = `${this.veritasApiProxyPrefixUrl}/question-survey`;
    }
    /**
     * GET List Tasks Data
     */
    getQuestionContainerViewPages(recordId) {
        return this.httpClient
            .get(`${this.url}/${recordId}`)
            .pipe(map(this.mapGetQuestionContainerViewPages));
    }
    postAttachments$(recordId, questionNodeId, files) {
        const formData = new FormData();
        files.forEach(file => formData.append('attachmentFiles', file));
        return this.httpClient.post(`${this.url}/${recordId}/question/${questionNodeId}/attachments`, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    deleteAttachment$(recordId, questionNodeId, attachmentId) {
        return this.httpClient.delete(`${this.url}/${recordId}/question/${questionNodeId}/attachments/${attachmentId}`);
    }
    mapGetQuestionContainerViewPages(questionnaire) {
        return questionnaire;
    }
    postQuestionDetailResponses(answers, submitAction, recordId) {
        // Assemble post data
        const answersData = {
            answers: answers,
            submitAction: submitAction
        };
        return this.httpClient.post(`/api/question-survey/${recordId}`, answersData);
    }
}
DashBoardSurveyControllerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DashBoardSurveyControllerService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
];
DashBoardSurveyControllerService.ngInjectableDef = defineInjectable({ factory: function DashBoardSurveyControllerService_Factory() { return new DashBoardSurveyControllerService(inject(HttpClient), inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: DashBoardSurveyControllerService, providedIn: "root" });

class QuestionnaireUtilsService {
    constructor() {
        this.reviewMode = false;
        this.viewMode = QuestionnaireViewModeEnum.All;
        this._viewModeSubject$ = new Subject();
    }
    /**
     * Toggles whether to display the questionnaire in review mode.
     */
    getReviewMode() {
        return this.reviewMode;
    }
    setReviewMode(reviewMode) {
        this.reviewMode = reviewMode;
    }
    /**
     * Communicate whether to show all, unanswered, or answered questions
     */
    getViewMode() {
        return this.viewMode;
    }
    changeViewMode(viewMode) {
        this.viewMode = viewMode;
        this._viewModeSubject$.next(this.viewMode);
    }
    getViewModeObservable() {
        return this._viewModeSubject$.asObservable();
    }
    /**
     * Return the question's current anwer. Can be a response object or a string.
     * @param question to check
     */
    getQuestionAnswer(questionDetails) {
        switch (questionDetails.questionDetailType) {
            case QuestionTypeEnum.SingleSelect:
                // Loop through responses and if previously selected option was found, patch value
                const questionDetailResponses = questionDetails.questionDetailResponses;
                if (questionDetailResponses) {
                    const selectedResponse = questionDetailResponses.find(response => {
                        return response.questionDetailResponsesSelected;
                    });
                    if (selectedResponse) {
                        return selectedResponse;
                    }
                }
                break;
            case QuestionTypeEnum.Text:
                const textResponse = questionDetails.questionDetailAnswerText;
                if (textResponse) {
                    return textResponse;
                }
                break;
            default:
                break;
        }
        return null;
    }
    /**
     * Used by parent question with a conditionTree to see if it should display it
     * @param conditionTree conditionTree
     */
    getConditionFulfilled(conditionTree, questionDetails) {
        // Depending on question type, get the appropriate answer object/string
        // Currently only supports single select
        const selectedResponse = questionDetails.questionDetailResponses.find(response => {
            return response.questionDetailResponsesSelected;
        });
        if (conditionTree.conditionDetails &&
            conditionTree.conditionDetails.conditionDetailConditions) {
            const conditionDetailConditions = conditionTree.conditionDetails.conditionDetailConditions;
            // Loop through all conditions and make sure they are all fulfilled
            for (let i = 0; i < conditionDetailConditions.length; i++) {
                const conditionDetailCondition = conditionDetailConditions[i];
                if (!this.checkCondition(conditionDetailCondition, selectedResponse)) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Check that given condition is fulfilled by parent question
     * @param conditionDetailCondition conditionDetailCondition
     */
    checkCondition(conditionDetailCondition, currentResponse) {
        // Currently only supports single select
        if (currentResponse && conditionDetailCondition.expressionViewValueId) {
            const answer = currentResponse;
            const questionResponseId = answer.questionDetailResponsesId;
            const conditionValueId = conditionDetailCondition.expressionViewValueId;
            if (questionResponseId === conditionValueId) {
                return true;
            }
        }
        return false;
    }
}
QuestionnaireUtilsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
QuestionnaireUtilsService.ctorParameters = () => [];
QuestionnaireUtilsService.ngInjectableDef = defineInjectable({ factory: function QuestionnaireUtilsService_Factory() { return new QuestionnaireUtilsService(); }, token: QuestionnaireUtilsService, providedIn: "root" });

class CustomEncoder {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}

class UserControllerService {
    constructor(httpClient, veritasApiProxyPrefixUrl) {
        this.httpClient = httpClient;
        this.veritasApiProxyPrefixUrl = veritasApiProxyPrefixUrl;
        this.url = `${this.veritasApiProxyPrefixUrl}/users`;
        this.maxRows = 10;
    }
    getUsers$(page, search = null) {
        let params = new HttpParams({ encoder: new CustomEncoder() })
            .append('page', page.toString())
            .append('size', this.maxRows.toString());
        if (search) {
            params = params.append('search', search);
        }
        return this.httpClient.get(this.url, {
            params
        });
    }
}
UserControllerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UserControllerService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
];
UserControllerService.ngInjectableDef = defineInjectable({ factory: function UserControllerService_Factory() { return new UserControllerService(inject(HttpClient), inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: UserControllerService, providedIn: "root" });

class ChangeDetectableComponentBase {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
    }
    get isChangeDetectorDestroyed() {
        return this.changeDetectorRef['destroyed'];
    }
    markForCheck() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.markForCheck();
    }
    detach() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.detach();
    }
    detectChanges() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.detectChanges();
    }
    checkNoChanges() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.checkNoChanges();
    }
    reattach() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.reattach();
    }
}

// export * from './lib/components/comments-popover/index';

/**
 * Generated bundle index. Do not edit.
 */

export { InitialIndicatorModule, InitialIndicatorComponent, PAGE_OFFSET_FOR_SERVER, SEARCH_DEBOUNCE_TIME, VERITAS_API_PROXY_PREFIX_URL, CommentEntityTypeEnum, TaskStatusEnum, RespondentTypeEnum, QuestionTypeEnum, QuestionSingleSelectUiTypeEnum, QuestionMultiSelectUiTypeEnum, QuestionnaireViewModeEnum, CommentBase, Comment, CommentReply, Assignee, Attachment, AaaUserService, DashBoardCommentControllerService, DashBoardSurveyControllerService, QuestionnaireUtilsService, UserControllerService, ChangeDetectableComponentBase, CustomEncoder, stringContains, generateErrorMessage, onlyUnique, nameOf, flatMap, getZoneOffset, getEnumKeys, isPropertyChanged, omitDeep, getProgress };

//# sourceMappingURL=veritas-library.js.map