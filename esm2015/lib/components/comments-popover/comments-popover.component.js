import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommentEntityTypeEnum } from '../../enums';
import { AaaUserService } from '../../services/aaa-user';
import { DashBoardCommentControllerService } from '../../services/dash-board-comment-controller';
import { CommentFormComponent } from './comment-form/comment-form.component';
export class CommentsPopoverComponent {
    constructor(dashBoardCommentControllerService, aaaUserService) {
        this.dashBoardCommentControllerService = dashBoardCommentControllerService;
        this.aaaUserService = aaaUserService;
        this.apiComments = null;
        this.isLoading = false;
        this.isRefreshing = false;
        this.searchUser$ = new BehaviorSubject('');
    }
    ngOnInit() { }
    ngOnDestroy() {
        if (this._searchUser$) {
            this._searchUser$.unsubscribe();
        }
    }
    popoverShown() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.apiComments) {
                this.isLoading = true;
            }
            else {
                this.isRefreshing = true;
            }
            yield this.loadComments();
            this.isLoading = false;
            this.isRefreshing = false;
        });
    }
    searchTerm(searchTerm) {
        this.searchUser$.next(searchTerm);
    }
    toggleEdit(comment) {
        comment.isEditing = comment.isEditing ? false : true;
    }
    onSubmit(formValue) {
        if (formValue) {
            this.createComment(formValue.comment);
        }
    }
    updateSubmit(formValue, comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.isRefreshing = true;
            yield this.updateComment(comment.id, formValue.comment);
            yield this.loadComments();
            this.isRefreshing = false;
        });
    }
    createComment(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.isRefreshing = true;
            yield this.dashBoardCommentControllerService
                .createComment$(this.entityId, CommentEntityTypeEnum.Question, message)
                .toPromise();
            yield this.loadComments();
            this.newCommentForm.resetForm();
            this.isRefreshing = false;
        });
    }
    updateComment(commentId, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.dashBoardCommentControllerService
                .updateComment$(this.entityId, CommentEntityTypeEnum.Question, commentId, message)
                .toPromise();
        });
    }
    deleteComment(commentId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.isRefreshing = true;
            yield this.dashBoardCommentControllerService
                .deleteComment$(this.entityId, commentId)
                .toPromise();
            yield this.loadComments();
            this.isRefreshing = false;
        });
    }
    loadComments() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const apiComments = yield this.dashBoardCommentControllerService
                .getComments$(this.entityId)
                .toPromise();
            this.apiComments = apiComments;
        });
    }
}
CommentsPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-comments-popover',
                template: "<button\r\n  class=\"mr-2\"\r\n  taButton\r\n  taType=\"circle\"\r\n  [taPopover]=\"popContent\"\r\n  placement=\"bottom-right\"\r\n  [autoClose]=\"'outside'\"\r\n  #popover=\"taPopover\"\r\n  (shown)=\"popoverShown()\"\r\n>\r\n  <ta-icon icon=\"edit\"></ta-icon>\r\n</button>\r\n\r\n<ng-template #popContent>\r\n  <div class=\"comment-popover-template\">\r\n    <div class=\"loading-overlay\" *ngIf=\"isRefreshing && !isLoading\"></div>\r\n    <ng-container *ngIf=\"isLoading\">\r\n      <div class=\"mb-2\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"line\"></ngx-skeleton-loader>\r\n      </div>\r\n      <div class=\"mb-2\">\r\n        <ngx-skeleton-loader\r\n          count=\"1\"\r\n          appearance=\"line\"\r\n          [theme]=\"{ height: '50px' }\"\r\n        ></ngx-skeleton-loader>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\"></div>\r\n        <div class=\"col-6\">\r\n          <ngx-skeleton-loader\r\n            count=\"1\"\r\n            appearance=\"line\"\r\n          ></ngx-skeleton-loader>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!isLoading\">\r\n      <div\r\n        *ngFor=\"\r\n          let comment of apiComments.content.slice().reverse();\r\n          let i = index\r\n        \"\r\n        class=\"comment pb-3\"\r\n      >\r\n        <div class=\"comment-header d-flex\">\r\n          <div class=\"d-inline-block\">\r\n            <ta-initial-indicator\r\n              [name]=\"comment.createdByFullName\"\r\n            ></ta-initial-indicator>\r\n          </div>\r\n          <div class=\"flex-grow-1 d-flex align-items-center\">\r\n            <div class=\"d-flex flex-column ml-2\">\r\n              <h3 class=\"overflow-ellipsis\" [ngClass]=\"{ narrow: i === 0 }\">\r\n                {{ comment.createdByFullName }}\r\n              </h3>\r\n              <span>{{ comment.created | date: 'MMM d, h:mm a' }}</span>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"i === 0\" class=\"mr-2\">\r\n            <button taButton taType=\"primary\" class=\"btn-sm\">\r\n              Resolve\r\n            </button>\r\n          </div>\r\n          <div taDropdown container=\"body\" placement=\"bottom-right\">\r\n            <button\r\n              taButton\r\n              taType=\"circle\"\r\n              id=\"dropdownBasic1\"\r\n              taDropdownToggle\r\n            >\r\n              <ta-icon icon=\"more\"></ta-icon>\r\n            </button>\r\n            <div\r\n              taDropdownMenu\r\n              aria-labelledby=\"dropdownBasic1\"\r\n              class=\"actions-dropdown\"\r\n            >\r\n              <button class=\"dropdown-item\" (click)=\"toggleEdit(comment)\">\r\n                Edit\r\n              </button>\r\n              <button class=\"dropdown-item\" (click)=\"deleteComment(comment.id)\">\r\n                Delete\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p *ngIf=\"!comment.isEditing\" class=\"mb-0\">{{ comment.messageText }}</p>\r\n        <div [hidden]=\"!comment.isEditing\">\r\n          <ta-comment-form\r\n            (formCancelled)=\"toggleEdit(comment)\"\r\n            (formSubmitted)=\"updateSubmit($event, comment)\"\r\n            [commentPlaceholder]=\"comment.messageText\"\r\n          ></ta-comment-form>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"comment-header d-flex\"\r\n        *ngIf=\"apiComments?.content?.length === 0\"\r\n      >\r\n        <div class=\"d-inline-block\">\r\n          <ta-initial-indicator\r\n            [name]=\"aaaUserService.getFullName\"\r\n          ></ta-initial-indicator>\r\n        </div>\r\n        <div class=\"flex-grow-1 d-flex align-items-center\">\r\n          <div class=\"d-flex flex-column ml-2 mr-2\">\r\n            <h3 class=\"overflow-ellipsis\">\r\n              {{ aaaUserService.getFullName }}\r\n            </h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ta-comment-form\r\n        #newCommentForm\r\n        (formCancelled)=\"popover.close()\"\r\n        (formSubmitted)=\"onSubmit($event)\"\r\n        [canHideActions]=\"apiComments?.content?.length > 0\"\r\n      ></ta-comment-form>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n",
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}.comment-popover-template{width:242px}.comment-popover-template .loading-overlay{background-color:#fff;opacity:.6;z-index:10;position:absolute;left:0;top:0;width:100%;height:100%}.comment-popover-template .comment{border-bottom:1px solid #f3f3f3;margin-bottom:16px}.comment-popover-template .comment-header{margin-bottom:8px}.comment-popover-template .comment-header .actions-dropdown{min-width:0}.comment-popover-template .comment-header h3{width:170px;font-size:12px;margin-bottom:0}.comment-popover-template .comment-header h3.narrow{width:110px}.comment-popover-template .comment-header span{color:#595959;font-size:10px}.comment-popover-template textarea{width:100%;border:1px solid #c2c2c2;border-radius:4px;resize:none;padding:8px}.comment-popover-template .btn{min-width:0}"]
            }] }
];
/** @nocollapse */
CommentsPopoverComponent.ctorParameters = () => [
    { type: DashBoardCommentControllerService },
    { type: AaaUserService }
];
CommentsPopoverComponent.propDecorators = {
    entityId: [{ type: Input }],
    newCommentForm: [{ type: ViewChild, args: ['newCommentForm',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMtcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb21tZW50cy1wb3BvdmVyL2NvbW1lbnRzLXBvcG92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFPN0UsTUFBTSxPQUFPLHdCQUF3QjtJQVluQyxZQUNVLGlDQUFvRSxFQUNyRSxjQUE4QjtRQUQ3QixzQ0FBaUMsR0FBakMsaUNBQWlDLENBQW1DO1FBQ3JFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVRoQyxnQkFBVyxHQUEyQixJQUFJLENBQUM7UUFDM0MsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixnQkFBVyxHQUE0QixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQU1uRSxDQUFDO0lBRUcsUUFBUSxLQUFVLENBQUM7SUFFbkIsV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFWSxZQUFZOztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFB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cHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBDb21tZW50RW50aXR5VHlwZUVudW0gfSBmcm9tICcuLi8uLi9lbnVtcyc7XHJcbmltcG9ydCB7IFBhZ2VJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IEFhYVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWFhLXVzZXInO1xyXG5pbXBvcnQgeyBEYXNoQm9hcmRDb21tZW50Q29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXNoLWJvYXJkLWNvbW1lbnQtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IENvbW1lbnRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tZW50LWZvcm0vY29tbWVudC1mb3JtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLWNvbW1lbnRzLXBvcG92ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tZW50cy1wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21tZW50cy1wb3BvdmVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRzUG9wb3ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwdWJsaWMgZW50aXR5SWQ6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZCgnbmV3Q29tbWVudEZvcm0nKSBwdWJsaWMgbmV3Q29tbWVudEZvcm06IENvbW1lbnRGb3JtQ29tcG9uZW50O1xyXG5cclxuICBwdWJsaWMgYXBpQ29tbWVudHM6IFBhZ2VJbnRlcmZhY2U8Q29tbWVudD4gPSBudWxsO1xyXG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgaXNSZWZyZXNoaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hVc2VyJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcclxuICBwcml2YXRlIF9zZWFyY2hVc2VyJDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZGFzaEJvYXJkQ29tbWVudENvbnRyb2xsZXJTZXJ2aWNlOiBEYXNoQm9hcmRDb21tZW50Q29udHJvbGxlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgYWFhVXNlclNlcnZpY2U6IEFhYVVzZXJTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fc2VhcmNoVXNlciQpIHtcclxuICAgICAgdGhpcy5fc2VhcmNoVXNlciQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBwb3BvdmVyU2hvd24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuYXBpQ29tbWVudHMpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc1JlZnJlc2hpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5sb2FkQ29tbWVudHMoKTtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaFRlcm0oc2VhcmNoVGVybTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFVzZXIkLm5leHQoc2VhcmNoVGVybSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRWRpdChjb21tZW50OiBDb21tZW50KTogdm9pZCB7XHJcbiAgICBjb21tZW50LmlzRWRpdGluZyA9IGNvbW1lbnQuaXNFZGl0aW5nID8gZmFsc2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU3VibWl0KGZvcm1WYWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoZm9ybVZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQ29tbWVudChmb3JtVmFsdWUuY29tbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdXBkYXRlU3VibWl0KGZvcm1WYWx1ZTogYW55LCBjb21tZW50OiBDb21tZW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmlzUmVmcmVzaGluZyA9IHRydWU7XHJcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbW1lbnQoY29tbWVudC5pZCwgZm9ybVZhbHVlLmNvbW1lbnQpO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQ29tbWVudHMoKTtcclxuICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgY3JlYXRlQ29tbWVudChtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gdHJ1ZTtcclxuICAgIGF3YWl0IHRoaXMuZGFzaEJvYXJkQ29tbWVudENvbnRyb2xsZXJTZXJ2aWNlXHJcbiAgICAgIC5jcmVhdGVDb21tZW50JCh0aGlzLmVudGl0eUlkLCBDb21tZW50RW50aXR5VHlwZUVudW0uUXVlc3Rpb24sIG1lc3NhZ2UpXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZENvbW1lbnRzKCk7XHJcbiAgICB0aGlzLm5ld0NvbW1lbnRGb3JtLnJlc2V0Rm9ybSgpO1xyXG4gICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyB1cGRhdGVDb21tZW50KFxyXG4gICAgY29tbWVudElkOiBzdHJpbmcsXHJcbiAgICBtZXNzYWdlOiBzdHJpbmdcclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IHRoaXMuZGFzaEJvYXJkQ29tbWVudENvbnRyb2xsZXJTZXJ2aWNlXHJcbiAgICAgIC51cGRhdGVDb21tZW50JChcclxuICAgICAgICB0aGlzLmVudGl0eUlkLFxyXG4gICAgICAgIENvbW1lbnRFbnRpdHlUeXBlRW51bS5RdWVzdGlvbixcclxuICAgICAgICBjb21tZW50SWQsXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBkZWxldGVDb21tZW50KGNvbW1lbnRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmlzUmVmcmVzaGluZyA9IHRydWU7XHJcbiAgICBhd2FpdCB0aGlzLmRhc2hCb2FyZENvbW1lbnRDb250cm9sbGVyU2VydmljZVxyXG4gICAgICAuZGVsZXRlQ29tbWVudCQodGhpcy5lbnRpdHlJZCwgY29tbWVudElkKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRDb21tZW50cygpO1xyXG4gICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgbG9hZENvbW1lbnRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgYXBpQ29tbWVudHM6IFBhZ2VJbnRlcmZhY2U8XHJcbiAgICAgIGFueVxyXG4gICAgPiA9IGF3YWl0IHRoaXMuZGFzaEJvYXJkQ29tbWVudENvbnRyb2xsZXJTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb21tZW50cyQodGhpcy5lbnRpdHlJZClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgdGhpcy5hcGlDb21tZW50cyA9IGFwaUNvbW1lbnRzO1xyXG4gIH1cclxufVxyXG4iXX0=