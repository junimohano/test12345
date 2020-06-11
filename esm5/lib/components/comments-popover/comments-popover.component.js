import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommentEntityTypeEnum } from '../../enums';
import { AaaUserService } from '../../services/aaa-user';
import { DashBoardCommentControllerService } from '../../services/dash-board-comment-controller';
import { CommentFormComponent } from './comment-form/comment-form.component';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var apiComments;
            return tslib_1.__generator(this, function (_a) {
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
export { CommentsPopoverComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMtcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb21tZW50cy1wb3BvdmVyL2NvbW1lbnRzLXBvcG92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7SUFpQkUsa0NBQ1UsaUNBQW9FLEVBQ3JFLGNBQThCO1FBRDdCLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7UUFDckUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVGhDLGdCQUFXLEdBQTJCLElBQUksQ0FBQztRQUMzQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLGdCQUFXLEdBQTRCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBTW5FLENBQUM7SUFFRywyQ0FBUSxHQUFmLGNBQXlCLENBQUM7SUFFbkIsOENBQVcsR0FBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFWSwrQ0FBWSxHQUF6Qjs7Ozs7d0JBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3lCQUN2Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt5QkFDMUI7d0JBQ0QscUJBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDOzs7OztLQUMzQjtJQUVNLDZDQUFVLEdBQWpCLFVBQWtCLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSw2Q0FBVSxHQUFqQixVQUFrQixPQUFnQjtRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZELENBQUM7SUFFTSwyQ0FBUSxHQUFmLFVBQWdCLFNBQWM7UUFDNUIsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFWSwrQ0FBWSxHQUF6QixVQUEwQixTQUFjLEVBQUUsT0FBZ0I7Ozs7O3dCQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDekIscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQXZELFNBQXVELENBQUM7d0JBQ3hELHFCQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7d0JBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDOzs7OztLQUMzQjtJQUVZLGdEQUFhLEdBQTFCLFVBQTJCLE9BQWU7Ozs7O3dCQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDekIscUJBQU0sSUFBSSxDQUFDLGlDQUFpQztpQ0FDekMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztpQ0FDdEUsU0FBUyxFQUFFLEVBQUE7O3dCQUZkLFNBRWMsQ0FBQzt3QkFDZixxQkFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUF6QixTQUF5QixDQUFDO3dCQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzs7Ozs7S0FDM0I7SUFFWSxnREFBYSxHQUExQixVQUNFLFNBQWlCLEVBQ2pCLE9BQWU7Ozs7NEJBRWYscUJBQU0sSUFBSSxDQUFDLGlDQUFpQzs2QkFDekMsY0FBYyxDQUNiLElBQUksQ0FBQyxRQUFRLEVBQ2IscUJBQXFCLENBQUMsUUFBUSxFQUM5QixTQUFTLEVBQ1QsT0FBTyxDQUNSOzZCQUNBLFNBQVMsRUFBRSxFQUFBOzt3QkFQZCxTQU9jLENBQUM7Ozs7O0tBQ2hCO0lBRVksZ0RBQWEsR0FBMUIsVUFBMkIsU0FBaUI7Ozs7O3dCQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDekIscUJBQU0sSUFBSSxDQUFDLGlDQUFpQztpQ0FDekMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO2lDQUN4QyxTQUFTLEVBQUUsRUFBQTs7d0JBRmQsU0FFYyxDQUFDO3dCQUNmLHFCQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7d0JBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDOzs7OztLQUMzQjtJQUVhLCtDQUFZLEdBQTFCOzs7Ozs0QkFHTSxxQkFBTSxJQUFJLENBQUMsaUNBQWlDOzZCQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs2QkFDM0IsU0FBUyxFQUFFLEVBQUE7O3dCQUpSLFdBQVcsR0FFYixTQUVVO3dCQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDOzs7OztLQUNoQzs7Z0JBdEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixrdklBQWdEOztpQkFFakQ7Ozs7Z0JBUFEsaUNBQWlDO2dCQURqQyxjQUFjOzs7MkJBVXBCLEtBQUs7aUNBRUwsU0FBUyxTQUFDLGdCQUFnQjs7SUErRjdCLCtCQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0FsR1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQ29tbWVudEVudGl0eVR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vZW51bXMnO1xyXG5pbXBvcnQgeyBQYWdlSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBBYWFVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FhYS11c2VyJztcclxuaW1wb3J0IHsgRGFzaEJvYXJkQ29tbWVudENvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGFzaC1ib2FyZC1jb21tZW50LWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBDb21tZW50Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1jb21tZW50cy1wb3BvdmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tbWVudHMtcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29tbWVudHMtcG9wb3Zlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50c1BvcG92ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHVibGljIGVudGl0eUlkOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ25ld0NvbW1lbnRGb3JtJykgcHVibGljIG5ld0NvbW1lbnRGb3JtOiBDb21tZW50Rm9ybUNvbXBvbmVudDtcclxuXHJcbiAgcHVibGljIGFwaUNvbW1lbnRzOiBQYWdlSW50ZXJmYWNlPENvbW1lbnQ+ID0gbnVsbDtcclxuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIGlzUmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc2VhcmNoVXNlciQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XHJcbiAgcHJpdmF0ZSBfc2VhcmNoVXNlciQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGRhc2hCb2FyZENvbW1lbnRDb250cm9sbGVyU2VydmljZTogRGFzaEJvYXJkQ29tbWVudENvbnRyb2xsZXJTZXJ2aWNlLFxyXG4gICAgcHVibGljIGFhYVVzZXJTZXJ2aWNlOiBBYWFVc2VyU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3NlYXJjaFVzZXIkKSB7XHJcbiAgICAgIHRoaXMuX3NlYXJjaFVzZXIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcG9wb3ZlclNob3duKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKCF0aGlzLmFwaUNvbW1lbnRzKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMubG9hZENvbW1lbnRzKCk7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hUZXJtKHNlYXJjaFRlcm06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hVc2VyJC5uZXh0KHNlYXJjaFRlcm0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUVkaXQoY29tbWVudDogQ29tbWVudCk6IHZvaWQge1xyXG4gICAgY29tbWVudC5pc0VkaXRpbmcgPSBjb21tZW50LmlzRWRpdGluZyA/IGZhbHNlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblN1Ym1pdChmb3JtVmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGZvcm1WYWx1ZSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUNvbW1lbnQoZm9ybVZhbHVlLmNvbW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVwZGF0ZVN1Ym1pdChmb3JtVmFsdWU6IGFueSwgY29tbWVudDogQ29tbWVudCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5pc1JlZnJlc2hpbmcgPSB0cnVlO1xyXG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21tZW50KGNvbW1lbnQuaWQsIGZvcm1WYWx1ZS5jb21tZW50KTtcclxuICAgIGF3YWl0IHRoaXMubG9hZENvbW1lbnRzKCk7XHJcbiAgICB0aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGNyZWF0ZUNvbW1lbnQobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmlzUmVmcmVzaGluZyA9IHRydWU7XHJcbiAgICBhd2FpdCB0aGlzLmRhc2hCb2FyZENvbW1lbnRDb250cm9sbGVyU2VydmljZVxyXG4gICAgICAuY3JlYXRlQ29tbWVudCQodGhpcy5lbnRpdHlJZCwgQ29tbWVudEVudGl0eVR5cGVFbnVtLlF1ZXN0aW9uLCBtZXNzYWdlKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRDb21tZW50cygpO1xyXG4gICAgdGhpcy5uZXdDb21tZW50Rm9ybS5yZXNldEZvcm0oKTtcclxuICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdXBkYXRlQ29tbWVudChcclxuICAgIGNvbW1lbnRJZDogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCB0aGlzLmRhc2hCb2FyZENvbW1lbnRDb250cm9sbGVyU2VydmljZVxyXG4gICAgICAudXBkYXRlQ29tbWVudCQoXHJcbiAgICAgICAgdGhpcy5lbnRpdHlJZCxcclxuICAgICAgICBDb21tZW50RW50aXR5VHlwZUVudW0uUXVlc3Rpb24sXHJcbiAgICAgICAgY29tbWVudElkLFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZGVsZXRlQ29tbWVudChjb21tZW50SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5pc1JlZnJlc2hpbmcgPSB0cnVlO1xyXG4gICAgYXdhaXQgdGhpcy5kYXNoQm9hcmRDb21tZW50Q29udHJvbGxlclNlcnZpY2VcclxuICAgICAgLmRlbGV0ZUNvbW1lbnQkKHRoaXMuZW50aXR5SWQsIGNvbW1lbnRJZClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQ29tbWVudHMoKTtcclxuICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGxvYWRDb21tZW50cygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGFwaUNvbW1lbnRzOiBQYWdlSW50ZXJmYWNlPFxyXG4gICAgICBhbnlcclxuICAgID4gPSBhd2FpdCB0aGlzLmRhc2hCb2FyZENvbW1lbnRDb250cm9sbGVyU2VydmljZVxyXG4gICAgICAuZ2V0Q29tbWVudHMkKHRoaXMuZW50aXR5SWQpXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIHRoaXMuYXBpQ29tbWVudHMgPSBhcGlDb21tZW50cztcclxuICB9XHJcbn1cclxuIl19