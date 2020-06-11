import { TaMentionModule } from '@trustarc/mention';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { cloneDeep, cloneDeepWith, union } from 'lodash';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpParams, HttpEventType } from '@angular/common/http';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Router } from '@angular/router';
import { map, debounceTime, finalize } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, Inject, Injectable, EventEmitter, Output, ViewChild, ViewEncapsulation, forwardRef, HostBinding, defineInjectable, inject, ChangeDetectorRef } from '@angular/core';
import { TaButtonsModule, TaCheckboxModule, TaDropdownModule, TaPopoverModule, TaSvgIconModule, TaActiveModal, TaModalModule, ToastService, TaTooltipModule, TaProgressbarModule, TaRadioModule, TaToggleSwitchModule, TaModal, TaTabsetModule, TaTagsModule } from '@trustarc/ui-toolkit';
import { __spread, __extends, __awaiter, __generator, __assign } from 'tslib';

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

var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(formBuilder, userControllerService) {
        this.formBuilder = formBuilder;
        this.userControllerService = userControllerService;
        this.commentPlaceholder = '';
        this.canHideActions = false;
        this.formSubmitted = new EventEmitter();
        this.formCancelled = new EventEmitter();
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.required]
        });
        this.MENTION_CONFIG = {
            triggerChar: '@',
            maxItems: 10,
            labelKey: 'externalUserEmail',
            mentionSelect: this.onMentionSelect.bind(this)
        };
        this.mentionUsers = [];
        this.focused = false;
    }
    CommentFormComponent.prototype.ngOnInit = function () {
        if (this.commentPlaceholder) {
            this.commentForm.patchValue({
                comment: this.commentPlaceholder
            });
        }
    };
    CommentFormComponent.prototype.onSubmit = function () {
        this.formSubmitted.emit(this.commentForm.value);
    };
    CommentFormComponent.prototype.onCancel = function (event) {
        this.formCancelled.emit();
    };
    CommentFormComponent.prototype.textFocus = function () {
        this.focused = true;
    };
    CommentFormComponent.prototype.textFocusout = function () { };
    CommentFormComponent.prototype.searchTerm = function (searchTerm) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userControllerService
                            .getUsers$(0, searchTerm)
                            .toPromise()];
                    case 1:
                        users = _a.sent();
                        this.mentionUsers = users.content;
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentFormComponent.prototype.resetForm = function () {
        this.commentForm.reset();
    };
    CommentFormComponent.prototype.onMentionSelect = function (user) {
        return "[~" + user.externalUserEmail + "]";
    };
    CommentFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-comment-form',
                    template: "<form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\r\n  <textarea\r\n    class=\"mb-2\"\r\n    rows=\"2\"\r\n    formControlName=\"comment\"\r\n    (focus)=\"textFocus()\"\r\n    (focusout)=\"textFocusout()\"\r\n  ></textarea>\r\n  <div\r\n    class=\"comment-footer d-flex justify-content-end\"\r\n    *ngIf=\"focused || !canHideActions || commentForm.valid\"\r\n  >\r\n    <button\r\n      type=\"button\"\r\n      taButton\r\n      taType=\"flat\"\r\n      class=\"btn-sm\"\r\n      (click)=\"onCancel($event)\"\r\n    >\r\n      Cancel\r\n    </button>\r\n    <button\r\n      [disabled]=\"!commentForm.valid\"\r\n      taButton\r\n      taType=\"primary\"\r\n      class=\"btn-sm\"\r\n      type=\"submit\"\r\n    >\r\n      Comment\r\n    </button>\r\n  </div>\r\n</form>\r\n",
                    styles: [":host textarea{width:100%;border:1px solid #c2c2c2;border-radius:4px;resize:none;padding:8px}:host .btn{min-width:0}"]
                }] }
    ];
    /** @nocollapse */
    CommentFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: UserControllerService }
    ]; };
    CommentFormComponent.propDecorators = {
        commentPlaceholder: [{ type: Input }],
        canHideActions: [{ type: Input }],
        formSubmitted: [{ type: Output }],
        formCancelled: [{ type: Output }]
    };
    return CommentFormComponent;
}());

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

var CommentsPopoverComponent = /** @class */ (function () {
    function CommentsPopoverComponent(dashBoardCommentControllerService, aaaUserService) {
        this.dashBoardCommentControllerService = dashBoardCommentControllerService;
        this.aaaUserService = aaaUserService;
        this.apiComments = null;
        this.isLoading = false;
        this.isRefreshing = false;
        this.searchUser$ = new BehaviorSubject('');
    }
    CommentsPopoverComponent.prototype.ngOnInit = function () { };
    CommentsPopoverComponent.prototype.ngOnDestroy = function () {
        if (this._searchUser$) {
            this._searchUser$.unsubscribe();
        }
    };
    CommentsPopoverComponent.prototype.popoverShown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.apiComments) {
                            this.isLoading = true;
                        }
                        else {
                            this.isRefreshing = true;
                        }
                        return [4 /*yield*/, this.loadComments()];
                    case 1:
                        _a.sent();
                        this.isLoading = false;
                        this.isRefreshing = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentsPopoverComponent.prototype.searchTerm = function (searchTerm) {
        this.searchUser$.next(searchTerm);
    };
    CommentsPopoverComponent.prototype.toggleEdit = function (comment) {
        comment.isEditing = comment.isEditing ? false : true;
    };
    CommentsPopoverComponent.prototype.onSubmit = function (formValue) {
        if (formValue) {
            this.createComment(formValue.comment);
        }
    };
    CommentsPopoverComponent.prototype.updateSubmit = function (formValue, comment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isRefreshing = true;
                        return [4 /*yield*/, this.updateComment(comment.id, formValue.comment)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadComments()];
                    case 2:
                        _a.sent();
                        this.isRefreshing = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentsPopoverComponent.prototype.createComment = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isRefreshing = true;
                        return [4 /*yield*/, this.dashBoardCommentControllerService
                                .createComment$(this.entityId, CommentEntityTypeEnum.Question, message)
                                .toPromise()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadComments()];
                    case 2:
                        _a.sent();
                        this.newCommentForm.resetForm();
                        this.isRefreshing = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentsPopoverComponent.prototype.updateComment = function (commentId, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dashBoardCommentControllerService
                            .updateComment$(this.entityId, CommentEntityTypeEnum.Question, commentId, message)
                            .toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentsPopoverComponent.prototype.deleteComment = function (commentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isRefreshing = true;
                        return [4 /*yield*/, this.dashBoardCommentControllerService
                                .deleteComment$(this.entityId, commentId)
                                .toPromise()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadComments()];
                    case 2:
                        _a.sent();
                        this.isRefreshing = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentsPopoverComponent.prototype.loadComments = function () {
        return __awaiter(this, void 0, void 0, function () {
            var apiComments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dashBoardCommentControllerService
                            .getComments$(this.entityId)
                            .toPromise()];
                    case 1:
                        apiComments = _a.sent();
                        this.apiComments = apiComments;
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentsPopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-comments-popover',
                    template: "<button\r\n  class=\"mr-2\"\r\n  taButton\r\n  taType=\"circle\"\r\n  [taPopover]=\"popContent\"\r\n  placement=\"bottom-right\"\r\n  [autoClose]=\"'outside'\"\r\n  #popover=\"taPopover\"\r\n  (shown)=\"popoverShown()\"\r\n>\r\n  <ta-icon icon=\"edit\"></ta-icon>\r\n</button>\r\n\r\n<ng-template #popContent>\r\n  <div class=\"comment-popover-template\">\r\n    <div class=\"loading-overlay\" *ngIf=\"isRefreshing && !isLoading\"></div>\r\n    <ng-container *ngIf=\"isLoading\">\r\n      <div class=\"mb-2\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"line\"></ngx-skeleton-loader>\r\n      </div>\r\n      <div class=\"mb-2\">\r\n        <ngx-skeleton-loader\r\n          count=\"1\"\r\n          appearance=\"line\"\r\n          [theme]=\"{ height: '50px' }\"\r\n        ></ngx-skeleton-loader>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\"></div>\r\n        <div class=\"col-6\">\r\n          <ngx-skeleton-loader\r\n            count=\"1\"\r\n            appearance=\"line\"\r\n          ></ngx-skeleton-loader>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!isLoading\">\r\n      <div\r\n        *ngFor=\"\r\n          let comment of apiComments.content.slice().reverse();\r\n          let i = index\r\n        \"\r\n        class=\"comment pb-3\"\r\n      >\r\n        <div class=\"comment-header d-flex\">\r\n          <div class=\"d-inline-block\">\r\n            <ta-initial-indicator\r\n              [name]=\"comment.createdByFullName\"\r\n            ></ta-initial-indicator>\r\n          </div>\r\n          <div class=\"flex-grow-1 d-flex align-items-center\">\r\n            <div class=\"d-flex flex-column ml-2\">\r\n              <h3 class=\"overflow-ellipsis\" [ngClass]=\"{ narrow: i === 0 }\">\r\n                {{ comment.createdByFullName }}\r\n              </h3>\r\n              <span>{{ comment.created | date: 'MMM d, h:mm a' }}</span>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"i === 0\" class=\"mr-2\">\r\n            <button taButton taType=\"primary\" class=\"btn-sm\">\r\n              Resolve\r\n            </button>\r\n          </div>\r\n          <div taDropdown container=\"body\" placement=\"bottom-right\">\r\n            <button\r\n              taButton\r\n              taType=\"circle\"\r\n              id=\"dropdownBasic1\"\r\n              taDropdownToggle\r\n            >\r\n              <ta-icon icon=\"more\"></ta-icon>\r\n            </button>\r\n            <div\r\n              taDropdownMenu\r\n              aria-labelledby=\"dropdownBasic1\"\r\n              class=\"actions-dropdown\"\r\n            >\r\n              <button class=\"dropdown-item\" (click)=\"toggleEdit(comment)\">\r\n                Edit\r\n              </button>\r\n              <button class=\"dropdown-item\" (click)=\"deleteComment(comment.id)\">\r\n                Delete\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p *ngIf=\"!comment.isEditing\" class=\"mb-0\">{{ comment.messageText }}</p>\r\n        <div [hidden]=\"!comment.isEditing\">\r\n          <ta-comment-form\r\n            (formCancelled)=\"toggleEdit(comment)\"\r\n            (formSubmitted)=\"updateSubmit($event, comment)\"\r\n            [commentPlaceholder]=\"comment.messageText\"\r\n          ></ta-comment-form>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"comment-header d-flex\"\r\n        *ngIf=\"apiComments?.content?.length === 0\"\r\n      >\r\n        <div class=\"d-inline-block\">\r\n          <ta-initial-indicator\r\n            [name]=\"aaaUserService.getFullName\"\r\n          ></ta-initial-indicator>\r\n        </div>\r\n        <div class=\"flex-grow-1 d-flex align-items-center\">\r\n          <div class=\"d-flex flex-column ml-2 mr-2\">\r\n            <h3 class=\"overflow-ellipsis\">\r\n              {{ aaaUserService.getFullName }}\r\n            </h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ta-comment-form\r\n        #newCommentForm\r\n        (formCancelled)=\"popover.close()\"\r\n        (formSubmitted)=\"onSubmit($event)\"\r\n        [canHideActions]=\"apiComments?.content?.length > 0\"\r\n      ></ta-comment-form>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}.comment-popover-template{width:242px}.comment-popover-template .loading-overlay{background-color:#fff;opacity:.6;z-index:10;position:absolute;left:0;top:0;width:100%;height:100%}.comment-popover-template .comment{border-bottom:1px solid #f3f3f3;margin-bottom:16px}.comment-popover-template .comment-header{margin-bottom:8px}.comment-popover-template .comment-header .actions-dropdown{min-width:0}.comment-popover-template .comment-header h3{width:170px;font-size:12px;margin-bottom:0}.comment-popover-template .comment-header h3.narrow{width:110px}.comment-popover-template .comment-header span{color:#595959;font-size:10px}.comment-popover-template textarea{width:100%;border:1px solid #c2c2c2;border-radius:4px;resize:none;padding:8px}.comment-popover-template .btn{min-width:0}"]
                }] }
    ];
    /** @nocollapse */
    CommentsPopoverComponent.ctorParameters = function () { return [
        { type: DashBoardCommentControllerService },
        { type: AaaUserService }
    ]; };
    CommentsPopoverComponent.propDecorators = {
        entityId: [{ type: Input }],
        newCommentForm: [{ type: ViewChild, args: ['newCommentForm',] }]
    };
    return CommentsPopoverComponent;
}());

var CommentsPopoverModule = /** @class */ (function () {
    function CommentsPopoverModule() {
    }
    CommentsPopoverModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CommentsPopoverComponent, CommentFormComponent],
                    imports: [
                        CommonModule,
                        TaSvgIconModule,
                        TaButtonsModule,
                        TaPopoverModule,
                        InitialIndicatorModule,
                        TaDropdownModule,
                        TaCheckboxModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TaMentionModule,
                        NgxSkeletonLoaderModule
                    ],
                    exports: [CommentsPopoverComponent]
                },] }
    ];
    return CommentsPopoverModule;
}());

var DeleteModalComponent = /** @class */ (function () {
    function DeleteModalComponent(modalService) {
        this.modalService = modalService;
        this.description = 'The item cannot be recovered once deleted. Are you sure you want to delete this?';
        this.primaryButtonText = 'Delete';
        this.secondaryButtonText = 'Secondary';
        this.cancelButtonText = 'Cancel';
        this.clickPrimary = new EventEmitter();
        this.clickSecondary = new EventEmitter();
        this.afterCancelled = new EventEmitter();
    }
    DeleteModalComponent.prototype.ngOnInit = function () { };
    DeleteModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.initDefaultFocus(); });
    };
    DeleteModalComponent.prototype.onClickCancel = function () {
        this.modalService.dismiss('Cancel click');
        this.afterCancelled.emit();
    };
    DeleteModalComponent.prototype.initDefaultFocus = function () {
        this.primaryButton.el.nativeElement.focus();
    };
    DeleteModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-delete-modal',
                    template: "<div\r\n  class=\"modal-body d-flex flex-column align-items-center justify-content-center\"\r\n>\r\n  <div\r\n    class=\"delete-icon-container d-flex align-items-center justify-content-center\"\r\n  >\r\n    <ta-icon class=\"delete-icon\" icon=\"delete\"></ta-icon>\r\n  </div>\r\n\r\n  <div class=\"title my-2\">\r\n    {{ title }}\r\n  </div>\r\n\r\n  <div class=\"description\">\r\n    {{ description }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-footer align-items-start justify-content-start p-4\">\r\n  <button\r\n    taButton\r\n    taType=\"flat\"\r\n    class=\"cancel-button mr-auto btn-lg\"\r\n    data-dismiss=\"modal\"\r\n    (click)=\"onClickCancel()\"\r\n  >\r\n    {{ cancelButtonText }}\r\n  </button>\r\n\r\n  <button\r\n    *ngIf=\"isSecondaryButtonEnabled\"\r\n    taButton\r\n    taType=\"secondary\"\r\n    class=\"secondary-button btn-lg btn-delete mr-3\"\r\n    (click)=\"clickSecondary.emit()\"\r\n  >\r\n    {{ secondaryButtonText }}\r\n  </button>\r\n\r\n  <button\r\n    #primaryButton\r\n    taButton\r\n    taType=\"danger\"\r\n    class=\"primary-button btn-lg m-0\"\r\n    (click)=\"clickPrimary.emit()\"\r\n  >\r\n    {{ primaryButtonText }}\r\n  </button>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}ta-delete-modal .modal-body .delete-icon-container{height:48px;width:48px;background-color:#fef5f5;border-radius:50%}ta-delete-modal .modal-body .delete-icon-container .ta-svg-icon-delete{color:#de2e21}ta-delete-modal .modal-body .delete-icon-container .ta-svg-icon-delete svg{height:20px;width:20px}ta-delete-modal .modal-body .title{font-size:1rem;font-weight:500}ta-delete-modal .modal-body .description{color:#595959}ta-delete-modal .modal-footer{border-top:none!important}ta-delete-modal .modal-footer .secondary-button{color:#000}"]
                }] }
    ];
    /** @nocollapse */
    DeleteModalComponent.ctorParameters = function () { return [
        { type: TaActiveModal }
    ]; };
    DeleteModalComponent.propDecorators = {
        title: [{ type: Input }],
        description: [{ type: Input }],
        primaryButtonText: [{ type: Input }],
        secondaryButtonText: [{ type: Input }],
        cancelButtonText: [{ type: Input }],
        isSecondaryButtonEnabled: [{ type: Input }],
        clickPrimary: [{ type: Output }],
        clickSecondary: [{ type: Output }],
        afterCancelled: [{ type: Output }],
        primaryButton: [{ type: ViewChild, args: ['primaryButton',] }]
    };
    return DeleteModalComponent;
}());

var DeleteModalModule = /** @class */ (function () {
    function DeleteModalModule() {
    }
    DeleteModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DeleteModalComponent],
                    imports: [CommonModule, TaButtonsModule, TaSvgIconModule, TaModalModule],
                    exports: [DeleteModalComponent],
                    entryComponents: [DeleteModalComponent]
                },] }
    ];
    return DeleteModalModule;
}());

var SimpleFileUploadConfig = /** @class */ (function () {
    function SimpleFileUploadConfig() {
    }
    return SimpleFileUploadConfig;
}());

var FileDownloadComponent = /** @class */ (function () {
    function FileDownloadComponent() {
        this.dBlock = true;
        this.attachments = [];
        this.files = [];
        this.deleteAttachment = new EventEmitter();
        this.clickAttachment = new EventEmitter();
        this.removeFile = new EventEmitter();
    }
    FileDownloadComponent.prototype.ngOnInit = function () { };
    FileDownloadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-file-download',
                    template: "<div class=\"file-attachment-summary pb-1\">\r\n  Attachments ({{ attachments?.length + files?.length }})\r\n</div>\r\n\r\n<ng-container *ngFor=\"let attachment of attachments\">\r\n  <div class=\"d-flex justify-content-between mt-2\">\r\n    <label\r\n      class=\"file-name-clickable text-truncate mr-1 mt-1 mb-0\"\r\n      (click)=\"clickAttachment.emit(attachment)\"\r\n      >{{ attachment[config.attachmentNameKey] }}</label\r\n    >\r\n    <div class=\"d-flex align-items-center\">\r\n      <span\r\n        *ngIf=\"hasDescription\"\r\n        class=\"file-description text-truncate mr-3\"\r\n        [innerText]=\"attachment.fileDescription\"\r\n      ></span>\r\n\r\n      <button\r\n        taButton\r\n        taType=\"circle\"\r\n        taTooltip=\"Delete\"\r\n        placement=\"top-right\"\r\n        container=\"body\"\r\n        class=\"flex-shrink-0\"\r\n        [disabled]=\"disabled\"\r\n        (click)=\"deleteAttachment.emit(attachment)\"\r\n      >\r\n        <ta-icon icon=\"delete\"></ta-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngFor=\"let file of files; let i = index\">\r\n  <div class=\"d-flex justify-content-between mt-2\">\r\n    <label class=\"file-name text-truncate mr-1 mt-1 mb-0\">{{\r\n      file.file.name\r\n    }}</label>\r\n\r\n    <div class=\"d-flex align-items-center\">\r\n      <input\r\n        *ngIf=\"hasDescription\"\r\n        type=\"text\"\r\n        class=\"file-description form-control mr-3\"\r\n        placeholder=\"File description\"\r\n        [disabled]=\"disabled\"\r\n        [(ngModel)]=\"file.text\"\r\n      />\r\n\r\n      <button\r\n        taButton\r\n        taType=\"circle\"\r\n        taTooltip=\"Delete\"\r\n        placement=\"top-right\"\r\n        container=\"body\"\r\n        class=\"flex-shrink-0\"\r\n        [disabled]=\"disabled\"\r\n        (click)=\"removeFile.emit(i)\"\r\n      >\r\n        <ta-icon icon=\"delete\"></ta-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<div class=\"no-files mt-2\" *ngIf=\"attachments?.length + files?.length === 0\">\r\n  No files attached.\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .file-name,:host .file-name-clickable{color:#0052cc}:host .file-name-clickable{cursor:pointer}:host .file-attachment-summary{font-size:.75rem;font-weight:500}:host .no-files{color:#595959}:host .file-description{width:230px}"]
                }] }
    ];
    /** @nocollapse */
    FileDownloadComponent.ctorParameters = function () { return []; };
    FileDownloadComponent.propDecorators = {
        dBlock: [{ type: HostBinding, args: ['class.d-block',] }],
        attachments: [{ type: Input }],
        files: [{ type: Input }],
        disabled: [{ type: Input }],
        hasDescription: [{ type: Input }],
        config: [{ type: Input }],
        deleteAttachment: [{ type: Output }],
        clickAttachment: [{ type: Output }],
        removeFile: [{ type: Output }]
    };
    return FileDownloadComponent;
}());

var FileDownloadModule = /** @class */ (function () {
    function FileDownloadModule() {
    }
    FileDownloadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FileDownloadComponent],
                    imports: [CommonModule, FormsModule, TaButtonsModule, TaSvgIconModule],
                    exports: [FileDownloadComponent]
                },] }
    ];
    return FileDownloadModule;
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

var FORMAT = {
    jpg: {
        exts: ['jpg', 'jpeg'],
        mime: [
            'image/jpeg',
            'image/jpg',
            'image/jp_',
            'application/jpg',
            'application/x-jpg',
            'image/pjpeg',
            'image/pipeg',
            'image/vnd.swiftview-jpeg',
            'image/x-xbitmap'
        ]
    },
    png: {
        exts: ['png'],
        mime: ['image/png', 'application/png', 'application/x-png']
    },
    gif: {
        exts: ['gif'],
        mime: ['image/gif', 'image/x-xbitmap', 'image/gi_']
    },
    csv: {
        exts: ['csv'],
        mime: [
            'text/comma-separated-values',
            'text/csv',
            'application/csv',
            'application/excel',
            'application/vnd.ms-excel',
            'application/vnd.msexcel',
            'text/anytext'
        ]
    },
    tsv: {
        exts: ['tsv'],
        mime: ['text/tab-separated-values']
    },
    zip: {
        exts: ['zip'],
        mime: [
            'application/zip',
            'application/x-zip',
            'application/x-zip-compressed',
            'application/octet-stream',
            'application/x-compress',
            'application/x-compressed',
            'multipart/x-zip'
        ]
    },
    txt: {
        exts: ['txt'],
        mime: [
            'text/plain',
            'application/txt',
            'browser/internal',
            'text/anytext',
            'widetext/plain',
            'widetext/paragraph'
        ]
    },
    doc: {
        exts: ['doc', 'docx'],
        mime: [
            'application/msword [official]',
            'application/doc',
            'application/vnd.msword',
            'application/vnd.ms-word',
            'application/winword',
            'application/word',
            'application/x-msw6',
            'application/x-msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ]
    },
    xsl: {
        exts: ['xsl', 'xlsx'],
        mime: [
            'application/vnd.ms-excel [official]',
            'application/msexcel',
            'application/x-msexcel',
            'application/x-ms-excel',
            'application/vnd.ms-excel',
            'application/x-excel',
            'application/x-dos_ms_excel',
            'application/xls',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ]
    },
    ppt: {
        exts: ['ppt', 'pptx'],
        mime: [
            'application/vnd.ms-powerpoint [official]',
            'application/mspowerpoint',
            'application/ms-powerpoint',
            'application/mspowerpnt',
            'application/vnd-mspowerpoint',
            'application/powerpoint',
            'application/x-powerpoint',
            'application/x-m'
        ]
    },
    rtf: {
        exts: ['rtf'],
        mime: [
            'application/rtf',
            'application/x-rtf',
            'text/rtf',
            'text/richtext',
            'application/msword',
            'application/doc',
            'application/x-soffice'
        ]
    },
    pdf: {
        exts: ['pdf'],
        mime: [
            'application/pdf',
            'application/x-pdf',
            'application/acrobat',
            'applications/vnd.pdf',
            'text/pdf',
            'text/x-pdf'
        ]
    },
    css: {
        exts: ['css'],
        mime: ['text/css', 'application/css-stylesheet']
    },
    js: {
        exts: ['js'],
        mime: ['application/x-javascript', 'text/javascript']
    },
    html: {
        exts: ['html'],
        mime: ['text/html', 'text/plain']
    },
    code: {
        exts: ['php', 'ts'],
        mime: []
    }
};

var FileUploadValidationService = /** @class */ (function () {
    function FileUploadValidationService() {
        this.format = FORMAT;
    }
    /**
     * Check file size. Return true if valid
     */
    FileUploadValidationService.prototype.isValidFileSize = function (fileSize, maxFileSize) {
        return fileSize <= maxFileSize;
    };
    /**
     * Check file mime or extension. Return true if valid
     */
    FileUploadValidationService.prototype.isValidExtension = function (file, formatConfig) {
        return ((formatConfig.jpg && this.isJpgFile(file)) ||
            (formatConfig.png && this.isPngFile(file)) ||
            (formatConfig.gif && this.isGifFile(file)) ||
            (formatConfig.csv && this.isCsvFile(file)) ||
            (formatConfig.tsv && this.isTsvFile(file)) ||
            (formatConfig.zip && this.isZipFile(file)) ||
            (formatConfig.txt && this.isTxtFile(file)) ||
            (formatConfig.doc && this.isDocFile(file)) ||
            (formatConfig.xsl && this.isXslFile(file)) ||
            (formatConfig.ppt && this.isPptFile(file)) ||
            (formatConfig.rtf && this.isRtfFile(file)) ||
            (formatConfig.pdf && this.isPdfFile(file)) ||
            (formatConfig.css && this.isCssFile(file)) ||
            (formatConfig.js && this.isJsFile(file)) ||
            (formatConfig.html && this.isHtmlFile(file)) ||
            (formatConfig.code && this.isCodeFile(file)));
    };
    FileUploadValidationService.prototype.getAllowedMime = function (formatConfig) {
        var mime = [];
        for (var format in formatConfig) {
            if (this.format[format]) {
                mime.push(this.format[format].mime);
            }
        }
        return union(mime);
    };
    FileUploadValidationService.prototype.checkFileWith = function (mimeTypes, validExts, file) {
        var fileExt = file.name
            .split('.')
            .pop()
            .toLowerCase();
        var isValidExt = (file.type === '' || mimeTypes.length === 0) &&
            validExts.includes(fileExt);
        var isValidMime = file.type && mimeTypes.includes(file.type);
        return isValidExt || isValidMime;
    };
    FileUploadValidationService.prototype.isJpgFile = function (file) {
        return this.checkFileWith(this.format.jpg.mime, this.format.jpg.exts, file);
    };
    FileUploadValidationService.prototype.isPngFile = function (file) {
        return this.checkFileWith(this.format.png.mime, this.format.png.exts, file);
    };
    FileUploadValidationService.prototype.isGifFile = function (file) {
        return this.checkFileWith(this.format.gif.mime, this.format.gif.exts, file);
    };
    FileUploadValidationService.prototype.isCsvFile = function (file) {
        return this.checkFileWith(this.format.csv.mime, this.format.csv.exts, file);
    };
    FileUploadValidationService.prototype.isTsvFile = function (file) {
        return this.checkFileWith(this.format.tsv.mime, this.format.tsv.exts, file);
    };
    FileUploadValidationService.prototype.isZipFile = function (file) {
        return this.checkFileWith(this.format.zip.mime, this.format.zip.exts, file);
    };
    FileUploadValidationService.prototype.isTxtFile = function (file) {
        return this.checkFileWith(this.format.txt.mime, this.format.txt.exts, file);
    };
    FileUploadValidationService.prototype.isDocFile = function (file) {
        return this.checkFileWith(this.format.doc.mime, this.format.doc.exts, file);
    };
    FileUploadValidationService.prototype.isXslFile = function (file) {
        return this.checkFileWith(this.format.xsl.mime, this.format.xsl.exts, file);
    };
    FileUploadValidationService.prototype.isPptFile = function (file) {
        return this.checkFileWith(this.format.ppt.mime, this.format.ppt.exts, file);
    };
    FileUploadValidationService.prototype.isRtfFile = function (file) {
        return this.checkFileWith(this.format.rtf.mime, this.format.rtf.exts, file);
    };
    FileUploadValidationService.prototype.isPdfFile = function (file) {
        return this.checkFileWith(this.format.pdf.mime, this.format.pdf.exts, file);
    };
    FileUploadValidationService.prototype.isCssFile = function (file) {
        return this.checkFileWith(this.format.css.mime, this.format.css.exts, file);
    };
    FileUploadValidationService.prototype.isJsFile = function (file) {
        return this.checkFileWith(this.format.js.mime, this.format.js.exts, file);
    };
    FileUploadValidationService.prototype.isHtmlFile = function (file) {
        return this.checkFileWith(this.format.html.mime, this.format.html.exts, file);
    };
    FileUploadValidationService.prototype.isCodeFile = function (file) {
        return this.checkFileWith(this.format.code.mime, this.format.code.exts, file);
    };
    FileUploadValidationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileUploadValidationService.ctorParameters = function () { return []; };
    return FileUploadValidationService;
}());

var FileUploadComponent = /** @class */ (function (_super) {
    __extends(FileUploadComponent, _super);
    function FileUploadComponent(changeDetectorRef, fileUploadValidationService, toastService) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.fileUploadValidationService = fileUploadValidationService;
        _this.toastService = toastService;
        _this.formatConfig = {
            jpg: false,
            png: false,
            gif: false,
            csv: false,
            tsv: false,
            zip: false,
            txt: false,
            doc: false,
            xsl: false,
            ppt: false,
            rtf: false,
            pdf: false,
            css: false,
            js: false,
            html: false,
            code: false
        };
        _this.afterFilesSelected = new EventEmitter();
        _this.draggingOver = false;
        _this.allowedMime = [];
        _this.files = [];
        _this.propagateChange = function (files) { };
        return _this;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        this.allowedMime = this.fileUploadValidationService.getAllowedMime(this.formatConfig);
    };
    FileUploadComponent.prototype.onDragOver = function (e) {
        e.preventDefault();
        this.draggingOver = true;
        this.markForCheck();
    };
    FileUploadComponent.prototype.onDragLeave = function (e) {
        e.preventDefault();
        this.draggingOver = false;
        this.markForCheck();
    };
    FileUploadComponent.prototype.selectFiles = function (files) {
        var _this = this;
        var filesToAdd = Object.assign([], files);
        var isValid = true;
        if (!this.isValidFilesSize(filesToAdd)) {
            isValid = false;
            this.toastService.error("Attachments size exceeds the allowable limit (maximum: " + this.formatBytes(this.maxFileSize) + ")");
        }
        filesToAdd.forEach(function (file, index) {
            if (!_this.fileUploadValidationService.isValidExtension(file, _this.formatConfig)) {
                isValid = false;
                _this.toastService.error(file.name + " is invalid file type");
            }
        });
        if (!isValid) {
            return;
        }
        this.propagateChange(filesToAdd);
        this.markForCheck();
        this.afterFilesSelected.emit(filesToAdd);
    };
    FileUploadComponent.prototype.onDrop = function (event) {
        event.preventDefault();
        this.onDragLeave(event);
        this.selectFiles(event.dataTransfer.files);
    };
    FileUploadComponent.prototype.onFilesSelected = function (event) {
        this.selectFiles(event.target.files);
        event.target.value = null;
    };
    FileUploadComponent.prototype.openUploadBrowser = function () {
        this.fileInput.nativeElement.click();
    };
    FileUploadComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    FileUploadComponent.prototype.registerOnTouched = function () { };
    FileUploadComponent.prototype.writeValue = function (value) {
        if (value) {
            this.files = value;
        }
    };
    FileUploadComponent.prototype.formatBytes = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes === 0) {
            return '0 Bytes';
        }
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    FileUploadComponent.prototype.isValidFilesSize = function (files) {
        var size = this.getFilesSize(files);
        return this.maxFileSize
            ? this.fileUploadValidationService.isValidFileSize(size, this.maxFileSize)
            : true;
    };
    FileUploadComponent.prototype.getFilesSize = function (files) {
        return files
            .map(function (f) { return f.size; })
            .reduce(function (totalSize, fileSize) { return totalSize + fileSize; });
    };
    FileUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-file-upload',
                    template: "<div\r\n  class=\"file-upload-container drop-zone p-3\"\r\n  [ngClass]=\"{ 'dragging-over': draggingOver }\"\r\n  (dragover)=\"onDragOver($event)\"\r\n  (dragleave)=\"onDragLeave($event)\"\r\n  (drop)=\"onDrop($event)\"\r\n  (click)=\"$event.stopPropagation()\"\r\n>\r\n  {{ prefixText }}\r\n  <label [attr.for]=\"id + '-input'\" class=\"m-0\">{{ linkText }}</label>\r\n  {{ suffixText }}\r\n  <input\r\n    #fileInput\r\n    type=\"file\"\r\n    [attr.id]=\"id + '-input'\"\r\n    [multiple]=\"isMultiple\"\r\n    [accept]=\"allowedMime\"\r\n    (change)=\"onFilesSelected($event)\"\r\n  />\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return FileUploadComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .file-upload-container{border:2px dashed #c2c2c2;border-radius:4px;text-align:center;background:#fff}:host .file-upload-container.dragging-over{background:#ccf0f8;border:2px dashed rgba(0,0,0,.3)}:host .file-upload-container label{cursor:pointer;color:#0052cc}:host .file-upload-container input[type=file]{display:none}"]
                }] }
    ];
    /** @nocollapse */
    FileUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FileUploadValidationService },
        { type: ToastService }
    ]; };
    FileUploadComponent.propDecorators = {
        id: [{ type: Input }],
        prefixText: [{ type: Input }],
        linkText: [{ type: Input }],
        suffixText: [{ type: Input }],
        isMultiple: [{ type: Input }],
        formatConfig: [{ type: Input }],
        maxFileSize: [{ type: Input }],
        afterFilesSelected: [{ type: Output }],
        fileInput: [{ type: ViewChild, args: ['fileInput',] }]
    };
    return FileUploadComponent;
}(ChangeDetectableComponentBase));

var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FileUploadComponent],
                    imports: [CommonModule, TaButtonsModule, TaSvgIconModule, TaTooltipModule],
                    exports: [FileUploadComponent],
                    providers: [FileUploadValidationService]
                },] }
    ];
    return FileUploadModule;
}());

var SimpleFileUploadComponent = /** @class */ (function (_super) {
    __extends(SimpleFileUploadComponent, _super);
    function SimpleFileUploadComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.prefixText = 'Drag & drop your files to attach or';
        _this.linkText = 'browse';
        _this.suffixText = 'to choose a file';
        _this.attachments = [];
        _this.files = [];
        _this.config = {
            attachmentNameKey: 'originalFileName',
            format: { pdf: true, doc: true }
        };
        _this.isMultiple = true;
        _this.maxFileSize = 1048576 - 255; // 1MB - (255 request length)
        _this.afterFilesSelected = new EventEmitter();
        _this.deleteAttachment = new EventEmitter();
        _this.clickAttachment = new EventEmitter();
        return _this;
    }
    SimpleFileUploadComponent.prototype.onAfterFilesSelected = function (files, text) {
        var filesToAdd = files.map(function (file) { return ({ file: file, text: text }); });
        this.files = __spread(this.files, filesToAdd);
        this.afterFilesSelected.emit(this.files);
        this.detectChanges();
    };
    SimpleFileUploadComponent.prototype.onRemoveFile = function (index) {
        this.files.splice(index, 1);
        this.afterFilesSelected.emit(this.files);
        this.detectChanges();
    };
    SimpleFileUploadComponent.prototype.onClickAttachment = function (attachment) {
        this.clickAttachment.emit(attachment);
    };
    SimpleFileUploadComponent.prototype.onDeleteAttachment = function (attachment) {
        this.deleteAttachment.emit(attachment);
    };
    SimpleFileUploadComponent.prototype.writeValue = function (value) {
        if (value) {
            this.files = value;
        }
    };
    SimpleFileUploadComponent.prototype.registerOnChange = function () { };
    SimpleFileUploadComponent.prototype.registerOnTouched = function () { };
    SimpleFileUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-simple-file-upload',
                    template: "<ta-file-upload\r\n  class=\"d-block\"\r\n  [ngClass]=\"{\r\n    hidden: uploadHidden,\r\n    'mb-3': !uploadHidden\r\n  }\"\r\n  [id]=\"id + '-file-upload'\"\r\n  [prefixText]=\"prefixText\"\r\n  [linkText]=\"linkText\"\r\n  [suffixText]=\"suffixText\"\r\n  [isMultiple]=\"isMultiple\"\r\n  [formatConfig]=\"config.format\"\r\n  [maxFileSize]=\"maxFileSize\"\r\n  (afterFilesSelected)=\"onAfterFilesSelected($event)\"\r\n></ta-file-upload>\r\n\r\n<ta-file-download\r\n  class=\"ml-1\"\r\n  [attachments]=\"attachments\"\r\n  [files]=\"files\"\r\n  [disabled]=\"disabled\"\r\n  [hasDescription]=\"hasDescription\"\r\n  [config]=\"config\"\r\n  (clickAttachment)=\"onClickAttachment($event)\"\r\n  (deleteAttachment)=\"onDeleteAttachment($event)\"\r\n  (removeFile)=\"onRemoveFile($event)\"\r\n></ta-file-download>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SimpleFileUploadComponent,
                            multi: true
                        }
                    ],
                    styles: [":host ta-file-upload.hidden{visibility:hidden;height:0;margin:0}"]
                }] }
    ];
    /** @nocollapse */
    SimpleFileUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    SimpleFileUploadComponent.propDecorators = {
        id: [{ type: Input }],
        prefixText: [{ type: Input }],
        linkText: [{ type: Input }],
        suffixText: [{ type: Input }],
        attachments: [{ type: Input }],
        files: [{ type: Input }],
        config: [{ type: Input }],
        isMultiple: [{ type: Input }],
        disabled: [{ type: Input }],
        hasDescription: [{ type: Input }],
        maxFileSize: [{ type: Input }],
        uploadHidden: [{ type: Input }],
        afterFilesSelected: [{ type: Output }],
        deleteAttachment: [{ type: Output }],
        clickAttachment: [{ type: Output }],
        fileUploadComponent: [{ type: ViewChild, args: [FileUploadComponent,] }]
    };
    return SimpleFileUploadComponent;
}(ChangeDetectableComponentBase));

var SimpleFileUploadModule = /** @class */ (function () {
    function SimpleFileUploadModule() {
    }
    SimpleFileUploadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SimpleFileUploadComponent],
                    imports: [
                        CommonModule,
                        FileUploadModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TaButtonsModule,
                        TaSvgIconModule,
                        TaTooltipModule,
                        FileDownloadModule
                    ],
                    exports: [SimpleFileUploadComponent]
                },] }
    ];
    return SimpleFileUploadModule;
}());

var SimpleFileUploadItem = /** @class */ (function () {
    function SimpleFileUploadItem() {
    }
    return SimpleFileUploadItem;
}());

var SimpleFileUploadItemContainer = /** @class */ (function () {
    function SimpleFileUploadItemContainer() {
    }
    return SimpleFileUploadItemContainer;
}());

var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent() {
        this.questionMultiSelectUiTypeEnum = QuestionMultiSelectUiTypeEnum;
        this.onChange = function (_) { };
    }
    MultiSelectComponent.prototype.ngOnInit = function () { };
    MultiSelectComponent.prototype.onSelectResponse = function (response) {
        this.onChange(response);
    };
    MultiSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MultiSelectComponent.prototype.registerOnTouched = function () { };
    MultiSelectComponent.prototype.writeValue = function (value) { };
    MultiSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-multi-select',
                    template: "<div class=\"multi-select-placeholder mt-n3 mb-3\">Select all that apply.</div>\r\n\r\n<div\r\n  class=\"d-flex\"\r\n  [ngClass]=\"{\r\n    'flex-column':\r\n      question?.questionDetails?.multiSelectUiType ===\r\n      questionMultiSelectUiTypeEnum.Vertical,\r\n    'flex-wrap':\r\n      question?.questionDetails?.multiSelectUiType ===\r\n      questionMultiSelectUiTypeEnum.Horizontal\r\n  }\"\r\n>\r\n  <div\r\n    *ngFor=\"let response of question?.questionDetails?.questionDetailResponses\"\r\n    class=\"btn-group-toggle\"\r\n    taRadioGroup\r\n  >\r\n    <label class=\"btn-primary mb-1\" taButtonLabel>\r\n      <input\r\n        class=\"input-radio\"\r\n        type=\"radio\"\r\n        taButton\r\n        [value]=\"response\"\r\n        (click)=\"onSelectResponse(response)\"\r\n      />\r\n      {{ response.questionDetailResponsesChoice }}\r\n    </label>\r\n  </div>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MultiSelectComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .multi-select-placeholder{color:#595959}:host .input-radio{display:none}"]
                }] }
    ];
    /** @nocollapse */
    MultiSelectComponent.ctorParameters = function () { return []; };
    MultiSelectComponent.propDecorators = {
        question: [{ type: Input }]
    };
    return MultiSelectComponent;
}());

var SingleSelectComponent = /** @class */ (function () {
    function SingleSelectComponent() {
        this.questionSingleSelectUiTypeEnum = QuestionSingleSelectUiTypeEnum;
        this.onChange = function (_) { };
    }
    SingleSelectComponent.prototype.ngOnInit = function () { };
    SingleSelectComponent.prototype.ngOnChanges = function (changes) {
        if (isPropertyChanged(changes.question)) {
            this.updateStep();
        }
    };
    SingleSelectComponent.prototype.onSelectResponse = function (response) {
        this.onChange(response);
    };
    SingleSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SingleSelectComponent.prototype.registerOnTouched = function () { };
    SingleSelectComponent.prototype.writeValue = function (value) { };
    SingleSelectComponent.prototype.updateStep = function () {
        var step = 100 / (this.question.questionDetails.questionDetailResponses.length + 1);
        this.step = +step.toFixed(2);
    };
    SingleSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-single-select',
                    template: "<ng-container\r\n  *ngIf=\"\r\n    question?.questionDetails?.singleSelectUiType ===\r\n      questionSingleSelectUiTypeEnum.Slider;\r\n    else nonSliderSingleQuestion\r\n  \"\r\n>\r\n  <div class=\"slider-placeholder mt-n3 mb-3\">Select one</div>\r\n\r\n  <input\r\n    type=\"range\"\r\n    value=\"50\"\r\n    class=\"slider w-100\"\r\n    min=\"0\"\r\n    max=\"99\"\r\n    [step]=\"step\"\r\n  />\r\n\r\n  <div class=\"d-flex pb-2 mb-4\">\r\n    <div [style.width]=\"step / 2 + '%'\"></div>\r\n\r\n    <div\r\n      *ngFor=\"\r\n        let response of question?.questionDetails?.questionDetailResponses;\r\n        let i = index\r\n      \"\r\n      class=\"slider-text text-center px-2\"\r\n      [style.width]=\"step + '%'\"\r\n    >\r\n      {{ response.questionDetailResponsesChoice }}\r\n    </div>\r\n\r\n    <div [style.width]=\"step / 2 + '%'\"></div>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-template #nonSliderSingleQuestion>\r\n  <div\r\n    class=\"btn-group-toggle d-flex\"\r\n    [ngClass]=\"{\r\n      'flex-column':\r\n        question?.questionDetails?.singleSelectUiType ===\r\n        questionSingleSelectUiTypeEnum.Vertical,\r\n      'flex-wrap':\r\n        question?.questionDetails?.singleSelectUiType ===\r\n        questionSingleSelectUiTypeEnum.Horizontal\r\n    }\"\r\n    taRadioGroup\r\n    name=\"radioBasic\"\r\n  >\r\n    <div\r\n      *ngFor=\"\r\n        let response of question?.questionDetails?.questionDetailResponses\r\n      \"\r\n    >\r\n      <label class=\"btn-primary mb-1\" taButtonLabel>\r\n        <input\r\n          class=\"input-radio\"\r\n          type=\"radio\"\r\n          taButton\r\n          [value]=\"response\"\r\n          (click)=\"onSelectResponse(response)\"\r\n        />\r\n        {{ response.questionDetailResponsesChoice }}\r\n      </label>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return SingleSelectComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .slider-placeholder{color:#595959}:host .input-radio{display:none}:host .slider-text{color:#595959}"]
                }] }
    ];
    /** @nocollapse */
    SingleSelectComponent.ctorParameters = function () { return []; };
    SingleSelectComponent.propDecorators = {
        question: [{ type: Input }]
    };
    return SingleSelectComponent;
}());

var TextComponent = /** @class */ (function () {
    function TextComponent() {
        this.onChange = function (_) { };
    }
    TextComponent.prototype.ngOnInit = function () { };
    TextComponent.prototype.onModelChange = function (value) {
        this.onChange(value);
    };
    TextComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TextComponent.prototype.registerOnTouched = function () { };
    TextComponent.prototype.writeValue = function (value) {
        if (value) {
            this.value = value;
        }
    };
    TextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-text',
                    template: "<textarea\r\n  class=\"text-response w-100 px-2 py-1\"\r\n  placeholder=\"Enter your response.\"\r\n  [ngModel]=\"value\"\r\n  (ngModelChange)=\"onModelChange($event)\"\r\n></textarea>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TextComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .text-response{height:120px;border:1px solid #c2c2c2;border-radius:4px;resize:none}"]
                }] }
    ];
    /** @nocollapse */
    TextComponent.ctorParameters = function () { return []; };
    TextComponent.propDecorators = {
        question: [{ type: Input }]
    };
    return TextComponent;
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

var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(formBuilder, questionnaireUtilsService) {
        this.formBuilder = formBuilder;
        this.questionnaireUtilsService = questionnaireUtilsService;
        this.question = {
            nodeId: null,
            nodeType: null,
            questionDetails: {
                questionDetailText: null,
                questionDetailType: null,
                commentMessageCount: null,
                questionDetailResponses: [],
                questionDetailAnswer: null,
                recordQuestionEntityId: null
            },
            children: []
        };
        this.formReady = new EventEmitter();
        this.questionTypeEnum = QuestionTypeEnum;
        this.answerText = '';
        this.questionForm = this.formBuilder.group({
            answer: null,
            questionId: null
        });
        this.viewMode = this.questionnaireUtilsService.getViewMode();
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.processSelectedOption();
        this.formReady.emit(this.questionForm);
        Object.keys(this.questionForm.controls).forEach(function (key) {
            return _this.questionForm.controls[key].valueChanges.subscribe(function (value) {
                return _this.formValueOfAnswerChanged(value);
            });
        });
        this.questionnaireUtilsService
            .getViewModeObservable()
            .subscribe(function (viewMode) {
            _this.viewMode = viewMode;
        });
    };
    QuestionComponent.prototype.isQuestionVisible = function () {
        switch (this.viewMode) {
            case QuestionnaireViewModeEnum.All:
                return true;
            case QuestionnaireViewModeEnum.Answered:
                return this.question.isAnswered;
            case QuestionnaireViewModeEnum.Unanswered:
                return !this.question.isAnswered;
            default:
                return true;
        }
    };
    /**
     * Check if question was previously answered, and sync it to the form object.
     */
    QuestionComponent.prototype.processSelectedOption = function () {
        this.questionForm.patchValue({
            questionId: this.question.nodeId,
            answerDescription: this.question.questionDetails.answerDescription
        }, { emitEvent: false });
        var questionAnswer = this.questionnaireUtilsService.getQuestionAnswer(this.question.questionDetails);
        if (questionAnswer) {
            this.questionForm.patchValue({
                answer: questionAnswer
            }, { emitEvent: false });
            this.question.isAnswered = true;
            this.questionAnswer = questionAnswer;
        }
    };
    /**
     * Depending on question type, update the question object
     * @param value form value
     */
    QuestionComponent.prototype.formValueOfAnswerChanged = function (value) {
        switch (this.question.questionDetails.questionDetailType) {
            case QuestionTypeEnum.SingleSelect:
                // Loop through responses and if previously selected option was found, patch value
                var questionDetailResponses = this.question.questionDetails
                    .questionDetailResponses;
                if (questionDetailResponses) {
                    // Mark the current choice false
                    var prevResponse = questionDetailResponses.find(function (response) {
                        return response.questionDetailResponsesSelected;
                    });
                    if (prevResponse) {
                        prevResponse.questionDetailResponsesSelected = false;
                    }
                    // Mark the new choice true
                    var newResponse = questionDetailResponses.find(function (response) {
                        return (response.questionDetailResponsesId ===
                            value.questionDetailResponsesId);
                    });
                    newResponse.questionDetailResponsesSelected = true;
                }
                break;
            case QuestionTypeEnum.MultiSelect:
                if (this.question.questionDetails.questionDetailResponses) {
                    var questionDetailResponse = this.question.questionDetails.questionDetailResponses.find(function (response) {
                        return response.questionDetailResponsesId ===
                            value.questionDetailResponsesId;
                    });
                    questionDetailResponse.questionDetailResponsesSelected = !questionDetailResponse.questionDetailResponsesSelected;
                }
                break;
            case QuestionTypeEnum.Text:
                // Update value of questionDetailAnswerText on data object
                this.question.questionDetails.questionDetailAnswerText = value;
                break;
            default:
                break;
        }
        // Set answered flag
        if (value && value.answer) {
            this.question.isAnswered = true;
        }
        else {
            this.question.isAnswered = false;
        }
    };
    QuestionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-question',
                    template: "<div class=\"question mb-3\" [hidden]=\"!isQuestionVisible()\">\r\n  <div class=\"d-flex\">\r\n    <div\r\n      class=\"question-text mb-3 p-0 mr-auto\"\r\n      [innerHTML]=\"question.questionDetails?.questionDetailText\"\r\n    ></div>\r\n  </div>\r\n\r\n  <form\r\n    [ngSwitch]=\"question.questionDetails.questionDetailType\"\r\n    [formGroup]=\"questionForm\"\r\n  >\r\n    <ta-single-select\r\n      *ngSwitchCase=\"questionTypeEnum.SingleSelect\"\r\n      formControlName=\"answer\"\r\n      [question]=\"question\"\r\n    ></ta-single-select>\r\n\r\n    <ta-multi-select\r\n      *ngSwitchCase=\"questionTypeEnum.MultiSelect\"\r\n      formControlName=\"answer\"\r\n      [question]=\"question\"\r\n    ></ta-multi-select>\r\n\r\n    <ta-text\r\n      *ngSwitchCase=\"questionTypeEnum.Text\"\r\n      formControlName=\"answer\"\r\n      [question]=\"question\"\r\n    ></ta-text>\r\n  </form>\r\n</div>\r\n",
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .question .question-text{display:inline-block;font-size:16px;color:#333;max-width:860px}:host .question .answer-description{height:120px;border:1px solid #c2c2c2;border-radius:4px;resize:none}:host .question .add-attachments-button{top:-1px;right:0}"]
                }] }
    ];
    /** @nocollapse */
    QuestionComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: QuestionnaireUtilsService }
    ]; };
    QuestionComponent.propDecorators = {
        question: [{ type: Input }],
        formReady: [{ type: Output }]
    };
    return QuestionComponent;
}());

var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        QuestionComponent,
                        MultiSelectComponent,
                        SingleSelectComponent,
                        TextComponent
                    ],
                    imports: [
                        CommonModule,
                        TaRadioModule,
                        ReactiveFormsModule,
                        FormsModule,
                        TaButtonsModule,
                        TaSvgIconModule,
                        TaDropdownModule,
                        TaTooltipModule,
                        SimpleFileUploadModule,
                        TaProgressbarModule
                    ],
                    exports: [QuestionComponent]
                },] }
    ];
    return QuestionModule;
}());

var QuestionMoreMenuComponent = /** @class */ (function () {
    function QuestionMoreMenuComponent() {
    }
    QuestionMoreMenuComponent.prototype.ngOnInit = function () { };
    QuestionMoreMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-question-more-menu',
                    template: "<div taDropdown placement=\"bottom-right\" autoClose=\"outside\">\r\n  <a\r\n    class=\"dropdown-toggle\"\r\n    taDropdownToggle\r\n    href=\"#\"\r\n    role=\"button\"\r\n    data-toggle=\"dropdown\"\r\n    aria-haspopup=\"true\"\r\n    aria-expanded=\"false\"\r\n    (click)=\"$event.preventDefault()\"\r\n  >\r\n    <ta-icon icon=\"more\" color=\"#595959\"></ta-icon>\r\n  </a>\r\n\r\n  <div taDropdownMenu></div>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    QuestionMoreMenuComponent.ctorParameters = function () { return []; };
    return QuestionMoreMenuComponent;
}());

var QuestionAccordionComponent = /** @class */ (function () {
    function QuestionAccordionComponent(formBuilder, questionnaireUtilsService) {
        this.formBuilder = formBuilder;
        this.questionnaireUtilsService = questionnaireUtilsService;
        this.question = {
            nodeId: null,
            nodeType: null,
            questionDetails: {
                questionDetailText: null,
                questionDetailType: null,
                commentMessageCount: null,
                questionDetailResponses: [],
                questionDetailAnswer: null,
                recordQuestionEntityId: null
            },
            children: []
        };
        this.formReady = new EventEmitter();
        this.afterFilesSelected = new EventEmitter();
        this.deleteAttachment = new EventEmitter();
        this.clickAttachment = new EventEmitter();
        this.questionAccordionForm = this.formBuilder.group({
            question: null,
            children: this.formBuilder.array([]),
            conditionFulfilled: false
        });
    }
    Object.defineProperty(QuestionAccordionComponent.prototype, "children", {
        get: function () {
            return this.questionAccordionForm.get('children');
        },
        enumerable: true,
        configurable: true
    });
    QuestionAccordionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formReady.emit(this.questionAccordionForm);
        this.questionAccordionForm.valueChanges.subscribe(function (value) {
            _this.formValueChanged(value);
        });
        this.reviewMode = this.questionnaireUtilsService.getReviewMode();
    };
    /**
     * Propagate main questionForm to questionAccordionForm
     * @param questionForm questionForm
     */
    QuestionAccordionComponent.prototype.questionFormReady = function (questionForm) {
        this.questionAccordionForm.setControl('question', questionForm);
    };
    /**
     * Propagate child questionForm to questionAccordionForm
     * @param questionForm questionForm
     */
    QuestionAccordionComponent.prototype.childFormReady = function (questionForm) {
        this.children.push(questionForm);
    };
    QuestionAccordionComponent.prototype.onAddAttachments = function () {
        this.simpleFileUploadComponent.fileUploadComponent.openUploadBrowser();
    };
    QuestionAccordionComponent.prototype.formValueChanged = function (value) {
        // Check if new answer fulfills the condition of this question
        for (var i = 0; i < this.question.children.length; i++) {
            var conditionChild = this.question.children[i];
            // set this so that UI can store whether to show follow up questions
            conditionChild.conditionFulfilled = this.questionnaireUtilsService.getConditionFulfilled(conditionChild, this.question.questionDetails);
            this.questionAccordionForm.patchValue({ conditionFulfilled: conditionChild.conditionFulfilled }, { emitEvent: false });
        }
    };
    QuestionAccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-question-accordion',
                    template: "<div class=\"question-accordion mb-3\">\r\n  <div class=\"review-info\" *ngIf=\"reviewMode; else editMode\">\r\n    <table>\r\n      <tr>\r\n        <td>\r\n          Response\r\n        </td>\r\n        <td>\r\n          --\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          Comments\r\n        </td>\r\n        <td>\r\n          --\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          Attachments\r\n        </td>\r\n        <td>--</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <ng-template #editMode>\r\n    <section class=\"col-8 pl-0 pr-3\">\r\n      <ta-question\r\n        [question]=\"question\"\r\n        (formReady)=\"questionFormReady($event)\"\r\n      ></ta-question>\r\n\r\n      <ng-container\r\n        *ngTemplateOutlet=\"\r\n          childQuestions;\r\n          context: {\r\n            children: question.children\r\n          }\r\n        \"\r\n      ></ng-container>\r\n\r\n      <ng-template #childQuestions let-children=\"children\">\r\n        <ng-container *ngFor=\"let conditionTree of children\">\r\n          <div [hidden]=\"!conditionTree.conditionFulfilled\">\r\n            <ng-container *ngFor=\"let childQuestion of conditionTree.children\">\r\n              <ta-question\r\n                class=\"d-block mt-4\"\r\n                [question]=\"childQuestion\"\r\n                (formReady)=\"childFormReady($event)\"\r\n              ></ta-question>\r\n\r\n              <ng-container\r\n                *ngTemplateOutlet=\"\r\n                  childQuestions;\r\n                  context: {\r\n                    children: childQuestion.children\r\n                  }\r\n                \"\r\n              ></ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </ng-container>\r\n      </ng-template>\r\n    </section>\r\n\r\n    <div class=\"d-flex mt-3\">\r\n      <!-- todo : formControlName=\"answerDescription\" -->\r\n      <!-- answerDescription: null -->\r\n      <textarea\r\n        class=\"answer-description flex-fill px-2 py-1 mr-3 mb-1\"\r\n        placeholder=\"Describe the policy, process, procedure, or mechanism that is in place. (Optional)\"\r\n      ></textarea>\r\n\r\n      <div class=\"d-flex flex-column p-0 col-4\">\r\n        <ta-progressbar\r\n          *ngIf=\"question.questionDetails?.fileContainer?.isLoading\"\r\n          class=\"position-absolute w-100 p-1 mt-n4\"\r\n          type=\"info\"\r\n          [showValue]=\"true\"\r\n          [value]=\"question.questionDetails?.fileContainer?.progress\"\r\n        ></ta-progressbar>\r\n\r\n        <button\r\n          class=\"add-attachments-button position-absolute\"\r\n          taButton\r\n          taType=\"circle\"\r\n          (click)=\"onAddAttachments()\"\r\n        >\r\n          <ta-icon icon=\"plus-circle\"></ta-icon>\r\n        </button>\r\n\r\n        <ta-simple-file-upload\r\n          [id]=\"'file-upload-question-' + question?.nodeId\"\r\n          [attachments]=\"question.questionDetails?.attachments\"\r\n          [files]=\"question.questionDetails?.fileContainer?.files\"\r\n          [uploadHidden]=\"true\"\r\n          (afterFilesSelected)=\"afterFilesSelected.emit([question, $event])\"\r\n          (clickAttachment)=\"clickAttachment.emit($event)\"\r\n          (deleteAttachment)=\"deleteAttachment.emit([question, $event])\"\r\n        ></ta-simple-file-upload>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <div class=\"actions m-4\">\r\n    <div class=\"d-flex\">\r\n      <ta-comments-popover\r\n        [entityId]=\"question.questionDetails?.recordQuestionEntityId\"\r\n      ></ta-comments-popover>\r\n\r\n      <ta-question-more-menu></ta-question-more-menu>\r\n\r\n      <ta-toggleswitch\r\n        *ngIf=\"reviewMode\"\r\n        theme=\"secondary\"\r\n        type=\"icon\"\r\n        class=\"mt-1\"\r\n      ></ta-toggleswitch>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .question-accordion{position:relative;border-radius:4px;border:1px solid #f3f3f3;background-color:#fff;padding:24px;box-shadow:2px 2px 4px 0 rgba(0,0,0,.05)}:host .question-accordion .actions{position:absolute;top:0;right:0}:host .question-accordion .review-info{width:80%}:host .question-accordion .review-info table{width:100%}:host .question-accordion .review-info table tr{border:1px solid #f3f3f3}:host .question-accordion .review-info table tr td{padding:12px 16px}:host .question-accordion .review-info table tr td:first-child{width:200px;font-weight:700}:host .question-accordion .answer-description{height:120px;border:1px solid #c2c2c2;border-radius:4px;resize:none}:host .question-accordion .add-attachments-button{top:-1px;right:0}"]
                }] }
    ];
    /** @nocollapse */
    QuestionAccordionComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: QuestionnaireUtilsService }
    ]; };
    QuestionAccordionComponent.propDecorators = {
        question: [{ type: Input }],
        formReady: [{ type: Output }],
        afterFilesSelected: [{ type: Output }],
        deleteAttachment: [{ type: Output }],
        clickAttachment: [{ type: Output }],
        simpleFileUploadComponent: [{ type: ViewChild, args: [SimpleFileUploadComponent,] }]
    };
    return QuestionAccordionComponent;
}());

var uiToolkitModules = [
    TaRadioModule,
    TaProgressbarModule,
    TaSvgIconModule,
    TaButtonsModule,
    TaDropdownModule
];
var QuestionAccordionModule = /** @class */ (function () {
    function QuestionAccordionModule() {
    }
    QuestionAccordionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [QuestionAccordionComponent, QuestionMoreMenuComponent],
                    imports: __spread([
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                        QuestionModule,
                        CommentsPopoverModule,
                        SimpleFileUploadModule,
                        TaToggleSwitchModule
                    ], uiToolkitModules),
                    exports: [QuestionAccordionComponent, QuestionMoreMenuComponent]
                },] }
    ];
    return QuestionAccordionModule;
}());

var TaskStatusTagComponent = /** @class */ (function () {
    function TaskStatusTagComponent() {
        this.taskStatusEnum = TaskStatusEnum;
    }
    TaskStatusTagComponent.prototype.ngOnInit = function () { };
    TaskStatusTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-task-status-tag',
                    template: "<div\r\n  class=\"status-container text-truncate\"\r\n  [ngClass]=\"{\r\n    open: taskStatus === taskStatusEnum.Open,\r\n    'in-progress': taskStatus === taskStatusEnum.InProgress,\r\n    'in-review': taskStatus === taskStatusEnum.InReview,\r\n    closed: taskStatus === taskStatusEnum.Closed,\r\n    'action-required': taskStatus === taskStatusEnum.ActionRequired\r\n  }\"\r\n>\r\n  {{ taskStatusEnum.getDisplayText(taskStatus) }}\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .status-container{padding:2px 12px;border-radius:12px;border:1px solid transparent}:host .status-container.open{background-color:#f1f1f1;border-color:#ddd;color:#595959}:host .status-container.in-progress{background-color:#e5edf9;border-color:#ccdcf4;color:#0052cc}:host .status-container.in-review{background-color:#efedf8;border-color:#e0dcf2;color:#3c3273}:host .status-container.closed{background-color:#f8fcf5;border-color:#dff3d3;color:#387515}:host .status-container.action-required{background-color:#fff6e5;border-color:#fec;color:#995400}"]
                }] }
    ];
    /** @nocollapse */
    TaskStatusTagComponent.ctorParameters = function () { return []; };
    TaskStatusTagComponent.propDecorators = {
        taskStatus: [{ type: Input }]
    };
    return TaskStatusTagComponent;
}());

var TaskStatusTagModule = /** @class */ (function () {
    function TaskStatusTagModule() {
    }
    TaskStatusTagModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TaskStatusTagComponent],
                    imports: [CommonModule],
                    exports: [TaskStatusTagComponent]
                },] }
    ];
    return TaskStatusTagModule;
}());

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
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            var _this = this;
            return __generator(this, function (_b) {
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        question.questionDetails = __assign({}, question.questionDetails, { fileContainer: __assign({}, question.questionDetails.fileContainer, fileContainer) });
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
            .subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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

var QuestionnaireContentModule = /** @class */ (function () {
    function QuestionnaireContentModule() {
    }
    QuestionnaireContentModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [QuestionnaireContentComponent],
                    imports: [
                        CommonModule,
                        QuestionModule,
                        QuestionAccordionModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TaButtonsModule,
                        TaTabsetModule,
                        TaDropdownModule,
                        TaTagsModule,
                        TaskStatusTagModule,
                        InitialIndicatorModule,
                        TaTooltipModule,
                        DeleteModalModule
                    ],
                    exports: [QuestionnaireContentComponent]
                },] }
    ];
    return QuestionnaireContentModule;
}());

var QuestionnaireContentModalComponent = /** @class */ (function () {
    function QuestionnaireContentModalComponent(modalService) {
        this.modalService = modalService;
    }
    QuestionnaireContentModalComponent.prototype.ngOnInit = function () { };
    QuestionnaireContentModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-questionnaire-content-modal',
                    template: "<div\r\n  class=\"modal-body d-flex flex-column align-items-center justify-content-center\"\r\n>\r\n  <ta-questionnaire-content\r\n    [recordId]=\"recordId\"\r\n    [reviewMode]=\"reviewMode\"\r\n  ></ta-questionnaire-content>\r\n</div>\r\n\r\n<div class=\"modal-footer align-items-start justify-content-start p-4\"></div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}ta-questionnaire-content-modal .modal-footer{border-top:none!important}ta-questionnaire-content-modal .modal-footer .secondary-button{color:#000}"]
                }] }
    ];
    /** @nocollapse */
    QuestionnaireContentModalComponent.ctorParameters = function () { return [
        { type: TaActiveModal }
    ]; };
    QuestionnaireContentModalComponent.propDecorators = {
        recordId: [{ type: Input }],
        reviewMode: [{ type: Input }]
    };
    return QuestionnaireContentModalComponent;
}());

var QuestionnaireContentModalModule = /** @class */ (function () {
    function QuestionnaireContentModalModule() {
    }
    QuestionnaireContentModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [QuestionnaireContentModalComponent],
                    imports: [
                        CommonModule,
                        TaButtonsModule,
                        TaSvgIconModule,
                        TaModalModule,
                        QuestionnaireContentModule
                    ],
                    exports: [QuestionnaireContentModalComponent],
                    entryComponents: [QuestionnaireContentModalComponent]
                },] }
    ];
    return QuestionnaireContentModalModule;
}());

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

/**
 * Generated bundle index. Do not edit.
 */

export { CommentsPopoverModule, CommentsPopoverComponent, CommentFormComponent, DeleteModalModule, DeleteModalComponent, FileDownloadModule, FileDownloadComponent, FileUploadComponent, FileUploadModule, FORMAT, FileUploadValidationService, SimpleFileUploadComponent, SimpleFileUploadModule, SimpleFileUploadItem, SimpleFileUploadConfig, SimpleFileUploadItemContainer, InitialIndicatorModule, InitialIndicatorComponent, QuestionModule, QuestionComponent, MultiSelectComponent, SingleSelectComponent, TextComponent, QuestionAccordionModule, QuestionAccordionComponent, QuestionMoreMenuComponent, TaskStatusTagModule, TaskStatusTagComponent, QuestionnaireContentModule, QuestionnaireContentComponent, QuestionnaireContentModalModule, QuestionnaireContentModalComponent, PAGE_OFFSET_FOR_SERVER, SEARCH_DEBOUNCE_TIME, VERITAS_API_PROXY_PREFIX_URL, CommentEntityTypeEnum, TaskStatusEnum, RespondentTypeEnum, QuestionTypeEnum, QuestionSingleSelectUiTypeEnum, QuestionMultiSelectUiTypeEnum, QuestionnaireViewModeEnum, CommentBase, Comment, CommentReply, Assignee, Attachment, AaaUserService, DashBoardCommentControllerService, DashBoardSurveyControllerService, QuestionnaireUtilsService, UserControllerService, ChangeDetectableComponentBase, CustomEncoder, stringContains, generateErrorMessage, onlyUnique, nameOf, flatMap, getZoneOffset, getEnumKeys, isPropertyChanged, omitDeep, getProgress };

//# sourceMappingURL=veritas-ui-library.js.map