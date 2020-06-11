import { CommonModule } from '@angular/common';
import { cloneDeep, cloneDeepWith } from 'lodash';
import { __spread, __extends } from 'tslib';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, NgModule, Injectable, defineInjectable, Inject, inject } from '@angular/core';

function stringContains(value, search) {
    return value.toLowerCase().indexOf(search.toLowerCase()) !== -1;
}
function generateErrorMessage(message, httpError) {
    return httpError && httpError.error && httpError.error.message
        ? message + " (" + httpError.error.message + ")"
        : message;
}
function onlyUnique(value, index, self) {
    return (index ===
        self.findIndex(function (selfValue) { return JSON.stringify(selfValue) === JSON.stringify(value); }));
}
var nameOf = function (name) { return name; };
function flatMap(items, key) {
    var _a;
    return (_a = []).concat.apply(_a, __spread(items.map(function (item) { return item[key]; })));
}
function getZoneOffset() {
    var timezoneOffset = new Date().getTimezoneOffset();
    var isNegative = timezoneOffset < 0;
    var zoneOffset = (timezoneOffset * (isNegative ? -1 : 1)).toString();
    for (var i = zoneOffset.toString().length; i < 4; i++) {
        zoneOffset = '0' + zoneOffset;
    }
    return isNegative ? '-' : '+' + zoneOffset;
}
function getEnumKeys(enumType) {
    return Object.keys(enumType).filter(function (type) { return isNaN(type) && type !== 'values'; });
}
function isPropertyChanged(simpleChange) {
    return (simpleChange && simpleChange.previousValue !== simpleChange.currentValue);
}
function omitDeep(collection) {
    var excludeKeys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excludeKeys[_i - 1] = arguments[_i];
    }
    function omitFn(value) {
        if (value && typeof value === 'object') {
            excludeKeys.forEach(function (key) {
                delete value[key];
            });
        }
    }
    var clonedCollection = cloneDeep(collection);
    return cloneDeepWith(clonedCollection, omitFn);
}
function getProgress(loaded, total) {
    return Math.round((loaded / total) * 100);
}

var InitialIndicatorComponent = /** @class */ (function () {
    function InitialIndicatorComponent() {
        this.splitKey = ' ';
    }
    InitialIndicatorComponent.prototype.ngOnInit = function () { };
    InitialIndicatorComponent.prototype.ngOnChanges = function (changes) {
        if (isPropertyChanged(changes.name)) {
            this.setInitial();
        }
    };
    InitialIndicatorComponent.prototype.setInitial = function () {
        var nameSplits = this.name.split(this.splitKey);
        this.initial =
            nameSplits.length > 1 ? this.getInitial(nameSplits) : this.name;
    };
    InitialIndicatorComponent.prototype.getInitial = function (nameSplits) {
        return "" + this.getWordByIndex(nameSplits, 0) + this.getWordByIndex(nameSplits, 1);
    };
    InitialIndicatorComponent.prototype.getWordByIndex = function (nameSplits, index) {
        return nameSplits[index][0].toLocaleUpperCase();
    };
    InitialIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-initial-indicator',
                    template: "<div class=\"circle-indicator d-flex align-items-center justify-content-center\">\r\n  {{ initial }}\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host{display:flex}:host .circle-indicator{height:24px;width:24px;border-radius:50%;border:1px solid #ffddd5;background-color:#ffeeea;color:#99331c;font-size:.625rem;font-weight:600}"]
                }] }
    ];
    /** @nocollapse */
    InitialIndicatorComponent.ctorParameters = function () { return []; };
    InitialIndicatorComponent.propDecorators = {
        name: [{ type: Input }]
    };
    return InitialIndicatorComponent;
}());

var InitialIndicatorModule = /** @class */ (function () {
    function InitialIndicatorModule() {
    }
    InitialIndicatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [InitialIndicatorComponent],
                    imports: [CommonModule],
                    exports: [InitialIndicatorComponent]
                },] }
    ];
    return InitialIndicatorModule;
}());

var PAGE_OFFSET_FOR_SERVER = -1;
var SEARCH_DEBOUNCE_TIME = 300;

var VERITAS_API_PROXY_PREFIX_URL = 'VERITAS_API_PROXY_PREFIX_URL';

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
        var result = '';
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
        var result = '';
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

var CommentBase = /** @class */ (function () {
    function CommentBase() {
    }
    return CommentBase;
}());

var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Comment;
}(CommentBase));

var CommentReply = /** @class */ (function (_super) {
    __extends(CommentReply, _super);
    function CommentReply() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommentReply;
}(CommentBase));

var Assignee = /** @class */ (function () {
    function Assignee() {
    }
    return Assignee;
}());

var Attachment = /** @class */ (function () {
    function Attachment() {
    }
    return Attachment;
}());

var AaaUserService = /** @class */ (function () {
    function AaaUserService() {
        this.fullName = '';
    }
    Object.defineProperty(AaaUserService.prototype, "setFullName", {
        set: function (fullName) {
            this.fullName = fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AaaUserService.prototype, "getFullName", {
        get: function () {
            return this.fullName;
        },
        enumerable: true,
        configurable: true
    });
    AaaUserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AaaUserService.ctorParameters = function () { return []; };
    AaaUserService.ngInjectableDef = defineInjectable({ factory: function AaaUserService_Factory() { return new AaaUserService(); }, token: AaaUserService, providedIn: "root" });
    return AaaUserService;
}());

var DashBoardCommentControllerService = /** @class */ (function () {
    function DashBoardCommentControllerService(httpClient, veritasApiProxyPrefixUrl) {
        this.httpClient = httpClient;
        this.veritasApiProxyPrefixUrl = veritasApiProxyPrefixUrl;
        this.url = this.veritasApiProxyPrefixUrl + "/comment";
    }
    DashBoardCommentControllerService.prototype.getComments$ = function (entityId, page, maxRows) {
        if (page === void 0) { page = 1; }
        if (maxRows === void 0) { maxRows = 20; }
        var params = new HttpParams()
            .append('page', (page + PAGE_OFFSET_FOR_SERVER).toString())
            .append('size', maxRows.toString());
        return this.httpClient
            .get(this.url + "/" + entityId, {
            params: params
        })
            .pipe(map(function (response) {
            response.content.forEach(function (comment) {
                comment.isEditing = false;
            });
            return response;
        }));
    };
    DashBoardCommentControllerService.prototype.createComment$ = function (entityId, entityType, message) {
        var data = {
            entityId: entityId,
            entityType: entityType,
            messageText: message
        };
        return this.httpClient.post(this.url + "/" + entityId, data);
    };
    DashBoardCommentControllerService.prototype.updateComment$ = function (entityId, entityType, commentId, message) {
        var data = {
            entityId: entityId,
            entityType: entityType,
            messageText: message,
            id: commentId
        };
        return this.httpClient.post(this.url + "/" + entityId + "/" + commentId, data);
    };
    DashBoardCommentControllerService.prototype.deleteComment$ = function (entityId, commentId) {
        return this.httpClient.delete(this.url + "/" + entityId + "/" + commentId);
    };
    DashBoardCommentControllerService.prototype.getQuestionContainerViewPages = function (taskId) {
        return this.httpClient
            .get("/api/question-survey/" + taskId)
            .pipe(map(this.mapGetQuestionContainerViewPages));
    };
    DashBoardCommentControllerService.prototype.getAttachmentDownloadUrl$ = function (attachmentId) {
        return this.httpClient.get(this.url + "/attachments/" + attachmentId + "/url");
    };
    DashBoardCommentControllerService.prototype.mapGetQuestionContainerViewPages = function (questionnaire) {
        return questionnaire;
    };
    DashBoardCommentControllerService.prototype.postQuestionDetailResponses = function (answers, submitAction, taskId) {
        // Assemble post data
        var answersData = {
            answers: answers,
            submitAction: submitAction
        };
        return this.httpClient.post("/api/question-survey/" + taskId, answersData);
    };
    DashBoardCommentControllerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DashBoardCommentControllerService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
    ]; };
    DashBoardCommentControllerService.ngInjectableDef = defineInjectable({ factory: function DashBoardCommentControllerService_Factory() { return new DashBoardCommentControllerService(inject(HttpClient), inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: DashBoardCommentControllerService, providedIn: "root" });
    return DashBoardCommentControllerService;
}());

var DashBoardSurveyControllerService = /** @class */ (function () {
    function DashBoardSurveyControllerService(httpClient, veritasApiProxyPrefixUrl) {
        this.httpClient = httpClient;
        this.veritasApiProxyPrefixUrl = veritasApiProxyPrefixUrl;
        this.url = this.veritasApiProxyPrefixUrl + "/question-survey";
    }
    /**
     * GET List Tasks Data
     */
    DashBoardSurveyControllerService.prototype.getQuestionContainerViewPages = function (recordId) {
        return this.httpClient
            .get(this.url + "/" + recordId)
            .pipe(map(this.mapGetQuestionContainerViewPages));
    };
    DashBoardSurveyControllerService.prototype.postAttachments$ = function (recordId, questionNodeId, files) {
        var formData = new FormData();
        files.forEach(function (file) { return formData.append('attachmentFiles', file); });
        return this.httpClient.post(this.url + "/" + recordId + "/question/" + questionNodeId + "/attachments", formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    DashBoardSurveyControllerService.prototype.deleteAttachment$ = function (recordId, questionNodeId, attachmentId) {
        return this.httpClient.delete(this.url + "/" + recordId + "/question/" + questionNodeId + "/attachments/" + attachmentId);
    };
    DashBoardSurveyControllerService.prototype.mapGetQuestionContainerViewPages = function (questionnaire) {
        return questionnaire;
    };
    DashBoardSurveyControllerService.prototype.postQuestionDetailResponses = function (answers, submitAction, recordId) {
        // Assemble post data
        var answersData = {
            answers: answers,
            submitAction: submitAction
        };
        return this.httpClient.post("/api/question-survey/" + recordId, answersData);
    };
    DashBoardSurveyControllerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DashBoardSurveyControllerService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
    ]; };
    DashBoardSurveyControllerService.ngInjectableDef = defineInjectable({ factory: function DashBoardSurveyControllerService_Factory() { return new DashBoardSurveyControllerService(inject(HttpClient), inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: DashBoardSurveyControllerService, providedIn: "root" });
    return DashBoardSurveyControllerService;
}());

var QuestionnaireUtilsService = /** @class */ (function () {
    function QuestionnaireUtilsService() {
        this.reviewMode = false;
        this.viewMode = QuestionnaireViewModeEnum.All;
        this._viewModeSubject$ = new Subject();
    }
    /**
     * Toggles whether to display the questionnaire in review mode.
     */
    QuestionnaireUtilsService.prototype.getReviewMode = function () {
        return this.reviewMode;
    };
    QuestionnaireUtilsService.prototype.setReviewMode = function (reviewMode) {
        this.reviewMode = reviewMode;
    };
    /**
     * Communicate whether to show all, unanswered, or answered questions
     */
    QuestionnaireUtilsService.prototype.getViewMode = function () {
        return this.viewMode;
    };
    QuestionnaireUtilsService.prototype.changeViewMode = function (viewMode) {
        this.viewMode = viewMode;
        this._viewModeSubject$.next(this.viewMode);
    };
    QuestionnaireUtilsService.prototype.getViewModeObservable = function () {
        return this._viewModeSubject$.asObservable();
    };
    /**
     * Return the question's current anwer. Can be a response object or a string.
     * @param question to check
     */
    QuestionnaireUtilsService.prototype.getQuestionAnswer = function (questionDetails) {
        switch (questionDetails.questionDetailType) {
            case QuestionTypeEnum.SingleSelect:
                // Loop through responses and if previously selected option was found, patch value
                var questionDetailResponses = questionDetails.questionDetailResponses;
                if (questionDetailResponses) {
                    var selectedResponse = questionDetailResponses.find(function (response) {
                        return response.questionDetailResponsesSelected;
                    });
                    if (selectedResponse) {
                        return selectedResponse;
                    }
                }
                break;
            case QuestionTypeEnum.Text:
                var textResponse = questionDetails.questionDetailAnswerText;
                if (textResponse) {
                    return textResponse;
                }
                break;
            default:
                break;
        }
        return null;
    };
    /**
     * Used by parent question with a conditionTree to see if it should display it
     * @param conditionTree conditionTree
     */
    QuestionnaireUtilsService.prototype.getConditionFulfilled = function (conditionTree, questionDetails) {
        // Depending on question type, get the appropriate answer object/string
        // Currently only supports single select
        var selectedResponse = questionDetails.questionDetailResponses.find(function (response) {
            return response.questionDetailResponsesSelected;
        });
        if (conditionTree.conditionDetails &&
            conditionTree.conditionDetails.conditionDetailConditions) {
            var conditionDetailConditions = conditionTree.conditionDetails.conditionDetailConditions;
            // Loop through all conditions and make sure they are all fulfilled
            for (var i = 0; i < conditionDetailConditions.length; i++) {
                var conditionDetailCondition = conditionDetailConditions[i];
                if (!this.checkCondition(conditionDetailCondition, selectedResponse)) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Check that given condition is fulfilled by parent question
     * @param conditionDetailCondition conditionDetailCondition
     */
    QuestionnaireUtilsService.prototype.checkCondition = function (conditionDetailCondition, currentResponse) {
        // Currently only supports single select
        if (currentResponse && conditionDetailCondition.expressionViewValueId) {
            var answer = currentResponse;
            var questionResponseId = answer.questionDetailResponsesId;
            var conditionValueId = conditionDetailCondition.expressionViewValueId;
            if (questionResponseId === conditionValueId) {
                return true;
            }
        }
        return false;
    };
    QuestionnaireUtilsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    QuestionnaireUtilsService.ctorParameters = function () { return []; };
    QuestionnaireUtilsService.ngInjectableDef = defineInjectable({ factory: function QuestionnaireUtilsService_Factory() { return new QuestionnaireUtilsService(); }, token: QuestionnaireUtilsService, providedIn: "root" });
    return QuestionnaireUtilsService;
}());

var CustomEncoder = /** @class */ (function () {
    function CustomEncoder() {
    }
    CustomEncoder.prototype.encodeKey = function (key) {
        return encodeURIComponent(key);
    };
    CustomEncoder.prototype.encodeValue = function (value) {
        return encodeURIComponent(value);
    };
    CustomEncoder.prototype.decodeKey = function (key) {
        return decodeURIComponent(key);
    };
    CustomEncoder.prototype.decodeValue = function (value) {
        return decodeURIComponent(value);
    };
    return CustomEncoder;
}());

var UserControllerService = /** @class */ (function () {
    function UserControllerService(httpClient, veritasApiProxyPrefixUrl) {
        this.httpClient = httpClient;
        this.veritasApiProxyPrefixUrl = veritasApiProxyPrefixUrl;
        this.url = this.veritasApiProxyPrefixUrl + "/users";
        this.maxRows = 10;
    }
    UserControllerService.prototype.getUsers$ = function (page, search) {
        if (search === void 0) { search = null; }
        var params = new HttpParams({ encoder: new CustomEncoder() })
            .append('page', page.toString())
            .append('size', this.maxRows.toString());
        if (search) {
            params = params.append('search', search);
        }
        return this.httpClient.get(this.url, {
            params: params
        });
    };
    UserControllerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserControllerService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
    ]; };
    UserControllerService.ngInjectableDef = defineInjectable({ factory: function UserControllerService_Factory() { return new UserControllerService(inject(HttpClient), inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: UserControllerService, providedIn: "root" });
    return UserControllerService;
}());

var ChangeDetectableComponentBase = /** @class */ (function () {
    function ChangeDetectableComponentBase(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
    }
    Object.defineProperty(ChangeDetectableComponentBase.prototype, "isChangeDetectorDestroyed", {
        get: function () {
            return this.changeDetectorRef['destroyed'];
        },
        enumerable: true,
        configurable: true
    });
    ChangeDetectableComponentBase.prototype.markForCheck = function () {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.markForCheck();
    };
    ChangeDetectableComponentBase.prototype.detach = function () {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.detach();
    };
    ChangeDetectableComponentBase.prototype.detectChanges = function () {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.detectChanges();
    };
    ChangeDetectableComponentBase.prototype.checkNoChanges = function () {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.checkNoChanges();
    };
    ChangeDetectableComponentBase.prototype.reattach = function () {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.reattach();
    };
    return ChangeDetectableComponentBase;
}());

// export * from './lib/components/comments-popover/index';

/**
 * Generated bundle index. Do not edit.
 */

export { InitialIndicatorModule, InitialIndicatorComponent, PAGE_OFFSET_FOR_SERVER, SEARCH_DEBOUNCE_TIME, VERITAS_API_PROXY_PREFIX_URL, CommentEntityTypeEnum, TaskStatusEnum, RespondentTypeEnum, QuestionTypeEnum, QuestionSingleSelectUiTypeEnum, QuestionMultiSelectUiTypeEnum, QuestionnaireViewModeEnum, CommentBase, Comment, CommentReply, Assignee, Attachment, AaaUserService, DashBoardCommentControllerService, DashBoardSurveyControllerService, QuestionnaireUtilsService, UserControllerService, ChangeDetectableComponentBase, CustomEncoder, stringContains, generateErrorMessage, onlyUnique, nameOf, flatMap, getZoneOffset, getEnumKeys, isPropertyChanged, omitDeep, getProgress };

//# sourceMappingURL=veritas-library.js.map