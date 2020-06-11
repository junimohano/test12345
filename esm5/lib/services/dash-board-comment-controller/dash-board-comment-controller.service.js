import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PAGE_OFFSET_FOR_SERVER } from '../../constants/page.constant';
import { VERITAS_API_PROXY_PREFIX_URL } from '../../constants/veritas-api.constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    DashBoardCommentControllerService.ngInjectableDef = i0.defineInjectable({ factory: function DashBoardCommentControllerService_Factory() { return new DashBoardCommentControllerService(i0.inject(i1.HttpClient), i0.inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: DashBoardCommentControllerService, providedIn: "root" });
    return DashBoardCommentControllerService;
}());
export { DashBoardCommentControllerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ib2FyZC1jb21tZW50LWNvbnRyb2xsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXNoLWJvYXJkLWNvbW1lbnQtY29udHJvbGxlci9kYXNoLWJvYXJkLWNvbW1lbnQtY29udHJvbGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7QUFNcEY7SUFNRSwyQ0FDVSxVQUFzQixFQUV0Qix3QkFBZ0M7UUFGaEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUV0Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQVE7UUFMekIsUUFBRyxHQUFNLElBQUksQ0FBQyx3QkFBd0IsYUFBVSxDQUFDO0lBTS9ELENBQUM7SUFFRyx3REFBWSxHQUFuQixVQUNFLFFBQWdCLEVBQ2hCLElBQWdCLEVBQ2hCLE9BQW9CO1FBRHBCLHFCQUFBLEVBQUEsUUFBZ0I7UUFDaEIsd0JBQUEsRUFBQSxZQUFvQjtRQUVwQixJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDMUQsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV0QyxPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ25CLEdBQUcsQ0FBNEIsSUFBSSxDQUFDLEdBQUcsU0FBSSxRQUFVLEVBQUU7WUFDdEQsTUFBTSxRQUFBO1NBQ1AsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFnQjtnQkFDeEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVNLDBEQUFjLEdBQXJCLFVBQ0UsUUFBZ0IsRUFDaEIsVUFBaUMsRUFDakMsT0FBZTtRQUVmLElBQU0sSUFBSSxHQUFHO1lBQ1gsUUFBUSxVQUFBO1lBQ1IsVUFBVSxZQUFBO1lBQ1YsV0FBVyxFQUFFLE9BQU87U0FDckIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQWEsSUFBSSxDQUFDLEdBQUcsU0FBSSxRQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLDBEQUFjLEdBQXJCLFVBQ0UsUUFBZ0IsRUFDaEIsVUFBaUMsRUFDakMsU0FBaUIsRUFDakIsT0FBZTtRQUVmLElBQU0sSUFBSSxHQUFHO1lBQ1gsUUFBUSxVQUFBO1lBQ1IsVUFBVSxZQUFBO1lBQ1YsV0FBVyxFQUFFLE9BQU87WUFDcEIsRUFBRSxFQUFFLFNBQVM7U0FDZCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDdEIsSUFBSSxDQUFDLEdBQUcsU0FBSSxRQUFRLFNBQUksU0FBVyxFQUN0QyxJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFFTSwwREFBYyxHQUFyQixVQUNFLFFBQWdCLEVBQ2hCLFNBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQ3hCLElBQUksQ0FBQyxHQUFHLFNBQUksUUFBUSxTQUFJLFNBQVcsQ0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFTSx5RUFBNkIsR0FBcEMsVUFBcUMsTUFBYztRQUNqRCxPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ25CLEdBQUcsQ0FBQywwQkFBd0IsTUFBUSxDQUFDO2FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0scUVBQXlCLEdBQWhDLFVBQWlDLFlBQW9CO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLEdBQUcscUJBQWdCLFlBQVksU0FBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVPLDRFQUFnQyxHQUF4QyxVQUF5QyxhQUFhO1FBQ3BELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSx1RUFBMkIsR0FBbEMsVUFDRSxPQUF3QyxFQUN4QyxZQUFxQixFQUNyQixNQUFjO1FBRWQscUJBQXFCO1FBQ3JCLElBQU0sV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxZQUFZO1NBQzNCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDBCQUF3QixNQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0JBdEdGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZFEsVUFBVTs2Q0FvQmQsTUFBTSxTQUFDLDRCQUE0Qjs7OzRDQXBCeEM7Q0FtSEMsQUF2R0QsSUF1R0M7U0FwR1ksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUEFHRV9PRkZTRVRfRk9SX1NFUlZFUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wYWdlLmNvbnN0YW50JztcclxuaW1wb3J0IHsgVkVSSVRBU19BUElfUFJPWFlfUFJFRklYX1VSTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy92ZXJpdGFzLWFwaS5jb25zdGFudCc7XHJcbmltcG9ydCB7IENvbW1lbnRFbnRpdHlUeXBlRW51bSB9IGZyb20gJy4uLy4uL2VudW1zL2NvbW1lbnQtZW50aXR5LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFBhZ2VJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BhZ2UuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQW5zd2VyRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3F1ZXN0aW9ubmFpcmUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tZW50Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hCb2FyZENvbW1lbnRDb250cm9sbGVyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB1cmwgPSBgJHt0aGlzLnZlcml0YXNBcGlQcm94eVByZWZpeFVybH0vY29tbWVudGA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgQEluamVjdChWRVJJVEFTX0FQSV9QUk9YWV9QUkVGSVhfVVJMKVxyXG4gICAgcHJpdmF0ZSB2ZXJpdGFzQXBpUHJveHlQcmVmaXhVcmw6IHN0cmluZ1xyXG4gICkge31cclxuXHJcbiAgcHVibGljIGdldENvbW1lbnRzJChcclxuICAgIGVudGl0eUlkOiBzdHJpbmcsXHJcbiAgICBwYWdlOiBudW1iZXIgPSAxLFxyXG4gICAgbWF4Um93czogbnVtYmVyID0gMjBcclxuICApOiBPYnNlcnZhYmxlPFBhZ2VJbnRlcmZhY2U8Q29tbWVudD4+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcclxuICAgICAgLmFwcGVuZCgncGFnZScsIChwYWdlICsgUEFHRV9PRkZTRVRfRk9SX1NFUlZFUikudG9TdHJpbmcoKSlcclxuICAgICAgLmFwcGVuZCgnc2l6ZScsIG1heFJvd3MudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFxyXG4gICAgICAuZ2V0PFBhZ2VJbnRlcmZhY2U8Q29tbWVudD4+KGAke3RoaXMudXJsfS8ke2VudGl0eUlkfWAsIHtcclxuICAgICAgICBwYXJhbXNcclxuICAgICAgfSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHJlc3BvbnNlLmNvbnRlbnQuZm9yRWFjaCgoY29tbWVudDogQ29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50LmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVDb21tZW50JChcclxuICAgIGVudGl0eUlkOiBzdHJpbmcsXHJcbiAgICBlbnRpdHlUeXBlOiBDb21tZW50RW50aXR5VHlwZUVudW0sXHJcbiAgICBtZXNzYWdlOiBzdHJpbmdcclxuICApOiBPYnNlcnZhYmxlPENvbW1lbnQ+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGVudGl0eUlkLFxyXG4gICAgICBlbnRpdHlUeXBlLFxyXG4gICAgICBtZXNzYWdlVGV4dDogbWVzc2FnZVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8Q29tbWVudD4oYCR7dGhpcy51cmx9LyR7ZW50aXR5SWR9YCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlQ29tbWVudCQoXHJcbiAgICBlbnRpdHlJZDogc3RyaW5nLFxyXG4gICAgZW50aXR5VHlwZTogQ29tbWVudEVudGl0eVR5cGVFbnVtLFxyXG4gICAgY29tbWVudElkOiBzdHJpbmcsXHJcbiAgICBtZXNzYWdlOiBzdHJpbmdcclxuICApOiBPYnNlcnZhYmxlPENvbW1lbnQ+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGVudGl0eUlkLFxyXG4gICAgICBlbnRpdHlUeXBlLFxyXG4gICAgICBtZXNzYWdlVGV4dDogbWVzc2FnZSxcclxuICAgICAgaWQ6IGNvbW1lbnRJZFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8Q29tbWVudD4oXHJcbiAgICAgIGAke3RoaXMudXJsfS8ke2VudGl0eUlkfS8ke2NvbW1lbnRJZH1gLFxyXG4gICAgICBkYXRhXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZUNvbW1lbnQkKFxyXG4gICAgZW50aXR5SWQ6IHN0cmluZyxcclxuICAgIGNvbW1lbnRJZDogc3RyaW5nXHJcbiAgKTogT2JzZXJ2YWJsZTxDb21tZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmRlbGV0ZTxDb21tZW50PihcclxuICAgICAgYCR7dGhpcy51cmx9LyR7ZW50aXR5SWR9LyR7Y29tbWVudElkfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UXVlc3Rpb25Db250YWluZXJWaWV3UGFnZXModGFza0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFxyXG4gICAgICAuZ2V0KGAvYXBpL3F1ZXN0aW9uLXN1cnZleS8ke3Rhc2tJZH1gKVxyXG4gICAgICAucGlwZShtYXAodGhpcy5tYXBHZXRRdWVzdGlvbkNvbnRhaW5lclZpZXdQYWdlcykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEF0dGFjaG1lbnREb3dubG9hZFVybCQoYXR0YWNobWVudElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy51cmx9L2F0dGFjaG1lbnRzLyR7YXR0YWNobWVudElkfS91cmxgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFwR2V0UXVlc3Rpb25Db250YWluZXJWaWV3UGFnZXMocXVlc3Rpb25uYWlyZSkge1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9ubmFpcmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9zdFF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzKFxyXG4gICAgYW5zd2VyczogQW5zd2VyRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2VbXSxcclxuICAgIHN1Ym1pdEFjdGlvbjogYm9vbGVhbixcclxuICAgIHRhc2tJZDogc3RyaW5nXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIEFzc2VtYmxlIHBvc3QgZGF0YVxyXG4gICAgY29uc3QgYW5zd2Vyc0RhdGEgPSB7XHJcbiAgICAgIGFuc3dlcnM6IGFuc3dlcnMsXHJcbiAgICAgIHN1Ym1pdEFjdGlvbjogc3VibWl0QWN0aW9uXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAvYXBpL3F1ZXN0aW9uLXN1cnZleS8ke3Rhc2tJZH1gLCBhbnN3ZXJzRGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==