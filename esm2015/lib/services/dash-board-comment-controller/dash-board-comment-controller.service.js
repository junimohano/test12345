import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PAGE_OFFSET_FOR_SERVER } from '../../constants/page.constant';
import { VERITAS_API_PROXY_PREFIX_URL } from '../../constants/veritas-api.constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DashBoardCommentControllerService {
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
DashBoardCommentControllerService.ngInjectableDef = i0.defineInjectable({ factory: function DashBoardCommentControllerService_Factory() { return new DashBoardCommentControllerService(i0.inject(i1.HttpClient), i0.inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: DashBoardCommentControllerService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ib2FyZC1jb21tZW50LWNvbnRyb2xsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXNoLWJvYXJkLWNvbW1lbnQtY29udHJvbGxlci9kYXNoLWJvYXJkLWNvbW1lbnQtY29udHJvbGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7QUFTcEYsTUFBTSxPQUFPLGlDQUFpQztJQUc1QyxZQUNVLFVBQXNCLEVBRXRCLHdCQUFnQztRQUZoQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBUTtRQUx6QixRQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLFVBQVUsQ0FBQztJQU0vRCxDQUFDO0lBRUcsWUFBWSxDQUNqQixRQUFnQixFQUNoQixPQUFlLENBQUMsRUFDaEIsVUFBa0IsRUFBRTtRQUVwQixNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDMUQsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV0QyxPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ25CLEdBQUcsQ0FBeUIsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLFFBQVEsRUFBRSxFQUFFO1lBQ3RELE1BQU07U0FDUCxDQUFDO2FBQ0QsSUFBSSxDQUNILEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNiLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO2dCQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDO0lBRU0sY0FBYyxDQUNuQixRQUFnQixFQUNoQixVQUFpQyxFQUNqQyxPQUFlO1FBRWYsTUFBTSxJQUFJLEdBQUc7WUFDWCxRQUFRO1lBQ1IsVUFBVTtZQUNWLFdBQVcsRUFBRSxPQUFPO1NBQ3JCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sY0FBYyxDQUNuQixRQUFnQixFQUNoQixVQUFpQyxFQUNqQyxTQUFpQixFQUNqQixPQUFlO1FBRWYsTUFBTSxJQUFJLEdBQUc7WUFDWCxRQUFRO1lBQ1IsVUFBVTtZQUNWLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLEVBQUUsRUFBRSxTQUFTO1NBQ2QsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3pCLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFLEVBQ3RDLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVNLGNBQWMsQ0FDbkIsUUFBZ0IsRUFDaEIsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FDM0IsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFTSw2QkFBNkIsQ0FBQyxNQUFjO1FBQ2pELE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDbkIsR0FBRyxDQUFDLHdCQUF3QixNQUFNLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLHlCQUF5QixDQUFDLFlBQW9CO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsWUFBWSxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8sZ0NBQWdDLENBQUMsYUFBYTtRQUNwRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRU0sMkJBQTJCLENBQ2hDLE9BQXdDLEVBQ3hDLFlBQXFCLEVBQ3JCLE1BQWM7UUFFZCxxQkFBcUI7UUFDckIsTUFBTSxXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLE1BQU0sRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7OztZQXRHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFkUSxVQUFVO3lDQW9CZCxNQUFNLFNBQUMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUEFHRV9PRkZTRVRfRk9SX1NFUlZFUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wYWdlLmNvbnN0YW50JztcclxuaW1wb3J0IHsgVkVSSVRBU19BUElfUFJPWFlfUFJFRklYX1VSTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy92ZXJpdGFzLWFwaS5jb25zdGFudCc7XHJcbmltcG9ydCB7IENvbW1lbnRFbnRpdHlUeXBlRW51bSB9IGZyb20gJy4uLy4uL2VudW1zL2NvbW1lbnQtZW50aXR5LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFBhZ2VJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BhZ2UuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQW5zd2VyRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3F1ZXN0aW9ubmFpcmUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tZW50Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hCb2FyZENvbW1lbnRDb250cm9sbGVyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB1cmwgPSBgJHt0aGlzLnZlcml0YXNBcGlQcm94eVByZWZpeFVybH0vY29tbWVudGA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgQEluamVjdChWRVJJVEFTX0FQSV9QUk9YWV9QUkVGSVhfVVJMKVxyXG4gICAgcHJpdmF0ZSB2ZXJpdGFzQXBpUHJveHlQcmVmaXhVcmw6IHN0cmluZ1xyXG4gICkge31cclxuXHJcbiAgcHVibGljIGdldENvbW1lbnRzJChcclxuICAgIGVudGl0eUlkOiBzdHJpbmcsXHJcbiAgICBwYWdlOiBudW1iZXIgPSAxLFxyXG4gICAgbWF4Um93czogbnVtYmVyID0gMjBcclxuICApOiBPYnNlcnZhYmxlPFBhZ2VJbnRlcmZhY2U8Q29tbWVudD4+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcclxuICAgICAgLmFwcGVuZCgncGFnZScsIChwYWdlICsgUEFHRV9PRkZTRVRfRk9SX1NFUlZFUikudG9TdHJpbmcoKSlcclxuICAgICAgLmFwcGVuZCgnc2l6ZScsIG1heFJvd3MudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFxyXG4gICAgICAuZ2V0PFBhZ2VJbnRlcmZhY2U8Q29tbWVudD4+KGAke3RoaXMudXJsfS8ke2VudGl0eUlkfWAsIHtcclxuICAgICAgICBwYXJhbXNcclxuICAgICAgfSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHJlc3BvbnNlLmNvbnRlbnQuZm9yRWFjaCgoY29tbWVudDogQ29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50LmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVDb21tZW50JChcclxuICAgIGVudGl0eUlkOiBzdHJpbmcsXHJcbiAgICBlbnRpdHlUeXBlOiBDb21tZW50RW50aXR5VHlwZUVudW0sXHJcbiAgICBtZXNzYWdlOiBzdHJpbmdcclxuICApOiBPYnNlcnZhYmxlPENvbW1lbnQ+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGVudGl0eUlkLFxyXG4gICAgICBlbnRpdHlUeXBlLFxyXG4gICAgICBtZXNzYWdlVGV4dDogbWVzc2FnZVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8Q29tbWVudD4oYCR7dGhpcy51cmx9LyR7ZW50aXR5SWR9YCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlQ29tbWVudCQoXHJcbiAgICBlbnRpdHlJZDogc3RyaW5nLFxyXG4gICAgZW50aXR5VHlwZTogQ29tbWVudEVudGl0eVR5cGVFbnVtLFxyXG4gICAgY29tbWVudElkOiBzdHJpbmcsXHJcbiAgICBtZXNzYWdlOiBzdHJpbmdcclxuICApOiBPYnNlcnZhYmxlPENvbW1lbnQ+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGVudGl0eUlkLFxyXG4gICAgICBlbnRpdHlUeXBlLFxyXG4gICAgICBtZXNzYWdlVGV4dDogbWVzc2FnZSxcclxuICAgICAgaWQ6IGNvbW1lbnRJZFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8Q29tbWVudD4oXHJcbiAgICAgIGAke3RoaXMudXJsfS8ke2VudGl0eUlkfS8ke2NvbW1lbnRJZH1gLFxyXG4gICAgICBkYXRhXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZUNvbW1lbnQkKFxyXG4gICAgZW50aXR5SWQ6IHN0cmluZyxcclxuICAgIGNvbW1lbnRJZDogc3RyaW5nXHJcbiAgKTogT2JzZXJ2YWJsZTxDb21tZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmRlbGV0ZTxDb21tZW50PihcclxuICAgICAgYCR7dGhpcy51cmx9LyR7ZW50aXR5SWR9LyR7Y29tbWVudElkfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UXVlc3Rpb25Db250YWluZXJWaWV3UGFnZXModGFza0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFxyXG4gICAgICAuZ2V0KGAvYXBpL3F1ZXN0aW9uLXN1cnZleS8ke3Rhc2tJZH1gKVxyXG4gICAgICAucGlwZShtYXAodGhpcy5tYXBHZXRRdWVzdGlvbkNvbnRhaW5lclZpZXdQYWdlcykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEF0dGFjaG1lbnREb3dubG9hZFVybCQoYXR0YWNobWVudElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy51cmx9L2F0dGFjaG1lbnRzLyR7YXR0YWNobWVudElkfS91cmxgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFwR2V0UXVlc3Rpb25Db250YWluZXJWaWV3UGFnZXMocXVlc3Rpb25uYWlyZSkge1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9ubmFpcmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9zdFF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzKFxyXG4gICAgYW5zd2VyczogQW5zd2VyRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2VbXSxcclxuICAgIHN1Ym1pdEFjdGlvbjogYm9vbGVhbixcclxuICAgIHRhc2tJZDogc3RyaW5nXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIEFzc2VtYmxlIHBvc3QgZGF0YVxyXG4gICAgY29uc3QgYW5zd2Vyc0RhdGEgPSB7XHJcbiAgICAgIGFuc3dlcnM6IGFuc3dlcnMsXHJcbiAgICAgIHN1Ym1pdEFjdGlvbjogc3VibWl0QWN0aW9uXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAvYXBpL3F1ZXN0aW9uLXN1cnZleS8ke3Rhc2tJZH1gLCBhbnN3ZXJzRGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==