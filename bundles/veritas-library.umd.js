(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('lodash'), require('rxjs/operators'), require('rxjs'), require('@angular/common/http'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('veritas-library', ['exports', '@angular/common', 'lodash', 'rxjs/operators', 'rxjs', '@angular/common/http', '@angular/core'], factory) :
    (factory((global['veritas-library'] = {}),global.ng.common,global._,global.rxjs.operators,global.rxjs,global.ng.common.http,global.ng.core));
}(this, (function (exports,common,_,operators,rxjs,i1,i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
        var clonedCollection = _.cloneDeep(collection);
        return _.cloneDeepWith(clonedCollection, omitFn);
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
            { type: i0.Component, args: [{
                        selector: 'ta-initial-indicator',
                        template: "<div class=\"circle-indicator d-flex align-items-center justify-content-center\">\r\n  {{ initial }}\r\n</div>\r\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host{display:flex}:host .circle-indicator{height:24px;width:24px;border-radius:50%;border:1px solid #ffddd5;background-color:#ffeeea;color:#99331c;font-size:.625rem;font-weight:600}"]
                    }] }
        ];
        /** @nocollapse */
        InitialIndicatorComponent.ctorParameters = function () { return []; };
        InitialIndicatorComponent.propDecorators = {
            name: [{ type: i0.Input }]
        };
        return InitialIndicatorComponent;
    }());

    var InitialIndicatorModule = /** @class */ (function () {
        function InitialIndicatorModule() {
        }
        InitialIndicatorModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [InitialIndicatorComponent],
                        imports: [common.CommonModule],
                        exports: [InitialIndicatorComponent]
                    },] }
        ];
        return InitialIndicatorModule;
    }());

    var PAGE_OFFSET_FOR_SERVER = -1;
    var SEARCH_DEBOUNCE_TIME = 300;

    var VERITAS_API_PROXY_PREFIX_URL = 'VERITAS_API_PROXY_PREFIX_URL';

    (function (CommentEntityTypeEnum) {
        CommentEntityTypeEnum["Question"] = "QUESTION";
        CommentEntityTypeEnum["Task"] = "TASK";
    })(exports.CommentEntityTypeEnum || (exports.CommentEntityTypeEnum = {}));

    (function (TaskStatusEnum) {
        TaskStatusEnum["Open"] = "OPEN";
        TaskStatusEnum["InProgress"] = "IN_PROGRESS";
        TaskStatusEnum["InReview"] = "IN_REVIEW";
        TaskStatusEnum["Closed"] = "CLOSED";
        TaskStatusEnum["ActionRequired"] = "ACTION_REQUIRED";
    })(exports.TaskStatusEnum || (exports.TaskStatusEnum = {}));
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
    })(exports.TaskStatusEnum || (exports.TaskStatusEnum = {}));

    (function (RespondentTypeEnum) {
        RespondentTypeEnum["Reviewer"] = "REVIEWER";
        RespondentTypeEnum["RemediationTaskReviewer"] = "REMEDIATION_TASK_REVIEWER";
        RespondentTypeEnum["PrivacyTeam"] = "PRIVACY_TEAM";
        RespondentTypeEnum["BusinessOwner"] = "BUSINESS_OWNER";
        RespondentTypeEnum["VendorContact"] = "VENDOR_CONTACT";
        RespondentTypeEnum["HumanResourcesTeam"] = "HUMAN_RESOURCES_TEAM";
        RespondentTypeEnum["ItSecurityTeam"] = "IT_SECURITY_TEAM";
        RespondentTypeEnum["Other"] = "OTHER";
    })(exports.RespondentTypeEnum || (exports.RespondentTypeEnum = {}));
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
    })(exports.RespondentTypeEnum || (exports.RespondentTypeEnum = {}));

    (function (QuestionTypeEnum) {
        QuestionTypeEnum["SingleSelect"] = "SINGLE_SELECT";
        QuestionTypeEnum["MultiSelect"] = "MULTI_SELECT";
        QuestionTypeEnum["Text"] = "TEXT";
    })(exports.QuestionTypeEnum || (exports.QuestionTypeEnum = {}));

    (function (QuestionSingleSelectUiTypeEnum) {
        QuestionSingleSelectUiTypeEnum["Horizontal"] = "HORIZONTAL";
        QuestionSingleSelectUiTypeEnum["Vertical"] = "VERTICAL";
        QuestionSingleSelectUiTypeEnum["Slider"] = "SLIDER";
    })(exports.QuestionSingleSelectUiTypeEnum || (exports.QuestionSingleSelectUiTypeEnum = {}));

    (function (QuestionMultiSelectUiTypeEnum) {
        QuestionMultiSelectUiTypeEnum["Horizontal"] = "HORIZONTAL";
        QuestionMultiSelectUiTypeEnum["Vertical"] = "VERTICAL";
    })(exports.QuestionMultiSelectUiTypeEnum || (exports.QuestionMultiSelectUiTypeEnum = {}));

    (function (QuestionnaireViewModeEnum) {
        QuestionnaireViewModeEnum["All"] = "all";
        QuestionnaireViewModeEnum["Answered"] = "answered";
        QuestionnaireViewModeEnum["Unanswered"] = "unanswered";
    })(exports.QuestionnaireViewModeEnum || (exports.QuestionnaireViewModeEnum = {}));

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AaaUserService.ctorParameters = function () { return []; };
        AaaUserService.ngInjectableDef = i0.defineInjectable({ factory: function AaaUserService_Factory() { return new AaaUserService(); }, token: AaaUserService, providedIn: "root" });
        return AaaUserService;
    }());

    var DashBoardCommentControllerService = /** @class */ (function () {
        function DashBoardCommentControllerService(httpClient, veritasApiProxyPrefixUrl) {
            this.httpClient = httpClient;
            this.veritasApiProxyPrefixUrl = veritasApiProxyPrefixUrl;
            this.url = this.veritasApiProxyPrefixUrl + "/comment";
        }
        DashBoardCommentControllerService.prototype.getComments$ = function (entityId, page, maxRows) {
            if (page === void 0) {
                page = 1;
            }
            if (maxRows === void 0) {
                maxRows = 20;
            }
            var params = new i1.HttpParams()
                .append('page', (page + PAGE_OFFSET_FOR_SERVER).toString())
                .append('size', maxRows.toString());
            return this.httpClient
                .get(this.url + "/" + entityId, {
                params: params
            })
                .pipe(operators.map(function (response) {
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
                .pipe(operators.map(this.mapGetQuestionContainerViewPages));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DashBoardCommentControllerService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: String, decorators: [{ type: i0.Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
            ];
        };
        DashBoardCommentControllerService.ngInjectableDef = i0.defineInjectable({ factory: function DashBoardCommentControllerService_Factory() { return new DashBoardCommentControllerService(i0.inject(i1.HttpClient), i0.inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: DashBoardCommentControllerService, providedIn: "root" });
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
                .pipe(operators.map(this.mapGetQuestionContainerViewPages));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DashBoardSurveyControllerService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: String, decorators: [{ type: i0.Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
            ];
        };
        DashBoardSurveyControllerService.ngInjectableDef = i0.defineInjectable({ factory: function DashBoardSurveyControllerService_Factory() { return new DashBoardSurveyControllerService(i0.inject(i1.HttpClient), i0.inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: DashBoardSurveyControllerService, providedIn: "root" });
        return DashBoardSurveyControllerService;
    }());

    var QuestionnaireUtilsService = /** @class */ (function () {
        function QuestionnaireUtilsService() {
            this.reviewMode = false;
            this.viewMode = exports.QuestionnaireViewModeEnum.All;
            this._viewModeSubject$ = new rxjs.Subject();
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
                case exports.QuestionTypeEnum.SingleSelect:
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
                case exports.QuestionTypeEnum.Text:
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        QuestionnaireUtilsService.ctorParameters = function () { return []; };
        QuestionnaireUtilsService.ngInjectableDef = i0.defineInjectable({ factory: function QuestionnaireUtilsService_Factory() { return new QuestionnaireUtilsService(); }, token: QuestionnaireUtilsService, providedIn: "root" });
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
            if (search === void 0) {
                search = null;
            }
            var params = new i1.HttpParams({ encoder: new CustomEncoder() })
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UserControllerService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: String, decorators: [{ type: i0.Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
            ];
        };
        UserControllerService.ngInjectableDef = i0.defineInjectable({ factory: function UserControllerService_Factory() { return new UserControllerService(i0.inject(i1.HttpClient), i0.inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: UserControllerService, providedIn: "root" });
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

    exports.InitialIndicatorModule = InitialIndicatorModule;
    exports.InitialIndicatorComponent = InitialIndicatorComponent;
    exports.PAGE_OFFSET_FOR_SERVER = PAGE_OFFSET_FOR_SERVER;
    exports.SEARCH_DEBOUNCE_TIME = SEARCH_DEBOUNCE_TIME;
    exports.VERITAS_API_PROXY_PREFIX_URL = VERITAS_API_PROXY_PREFIX_URL;
    exports.CommentBase = CommentBase;
    exports.Comment = Comment;
    exports.CommentReply = CommentReply;
    exports.Assignee = Assignee;
    exports.Attachment = Attachment;
    exports.AaaUserService = AaaUserService;
    exports.DashBoardCommentControllerService = DashBoardCommentControllerService;
    exports.DashBoardSurveyControllerService = DashBoardSurveyControllerService;
    exports.QuestionnaireUtilsService = QuestionnaireUtilsService;
    exports.UserControllerService = UserControllerService;
    exports.ChangeDetectableComponentBase = ChangeDetectableComponentBase;
    exports.CustomEncoder = CustomEncoder;
    exports.stringContains = stringContains;
    exports.generateErrorMessage = generateErrorMessage;
    exports.onlyUnique = onlyUnique;
    exports.nameOf = nameOf;
    exports.flatMap = flatMap;
    exports.getZoneOffset = getZoneOffset;
    exports.getEnumKeys = getEnumKeys;
    exports.isPropertyChanged = isPropertyChanged;
    exports.omitDeep = omitDeep;
    exports.getProgress = getProgress;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=veritas-library.umd.js.map