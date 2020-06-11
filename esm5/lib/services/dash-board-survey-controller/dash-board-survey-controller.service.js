import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { VERITAS_API_PROXY_PREFIX_URL } from '../../constants/veritas-api.constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    DashBoardSurveyControllerService.ngInjectableDef = i0.defineInjectable({ factory: function DashBoardSurveyControllerService_Factory() { return new DashBoardSurveyControllerService(i0.inject(i1.HttpClient), i0.inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: DashBoardSurveyControllerService, providedIn: "root" });
    return DashBoardSurveyControllerService;
}());
export { DashBoardSurveyControllerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ib2FyZC1zdXJ2ZXktY29udHJvbGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Rhc2gtYm9hcmQtc3VydmV5LWNvbnRyb2xsZXIvZGFzaC1ib2FyZC1zdXJ2ZXktY29udHJvbGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQU9wRjtJQU1FLDBDQUNVLFVBQXNCLEVBRXRCLHdCQUFnQztRQUZoQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBUTtRQUx6QixRQUFHLEdBQU0sSUFBSSxDQUFDLHdCQUF3QixxQkFBa0IsQ0FBQztJQU12RSxDQUFDO0lBRUo7O09BRUc7SUFDSSx3RUFBNkIsR0FBcEMsVUFDRSxRQUFnQjtRQUVoQixPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ25CLEdBQUcsQ0FBSSxJQUFJLENBQUMsR0FBRyxTQUFJLFFBQVUsQ0FBQzthQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLDJEQUFnQixHQUF2QixVQUNFLFFBQWdCLEVBQ2hCLGNBQXNCLEVBQ3RCLEtBQWE7UUFFYixJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7UUFFaEUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDdEIsSUFBSSxDQUFDLEdBQUcsU0FBSSxRQUFRLGtCQUFhLGNBQWMsaUJBQWMsRUFDaEUsUUFBUSxFQUNSO1lBQ0UsY0FBYyxFQUFFLElBQUk7WUFDcEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLDREQUFpQixHQUF4QixVQUNFLFFBQWdCLEVBQ2hCLGNBQXNCLEVBQ3RCLFlBQW9CO1FBRXBCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBRXpCLElBQUksQ0FBQyxHQUFHLFNBQ04sUUFBUSxrQkFBYSxjQUFjLHFCQUFnQixZQUFjLENBQ3RFLENBQUM7SUFDSixDQUFDO0lBRU8sMkVBQWdDLEdBQXhDLFVBQXlDLGFBQWE7UUFDcEQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVNLHNFQUEyQixHQUFsQyxVQUNFLE9BQXdDLEVBQ3hDLFlBQXFCLEVBQ3JCLFFBQWdCO1FBRWhCLHFCQUFxQjtRQUNyQixJQUFNLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsWUFBWTtTQUMzQixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsMEJBQXdCLFFBQVUsRUFDbEMsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDOztnQkF2RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFkUSxVQUFVOzZDQW9CZCxNQUFNLFNBQUMsNEJBQTRCOzs7MkNBcEJ4QztDQW9GQyxBQXhFRCxJQXdFQztTQXJFWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFZFUklUQVNfQVBJX1BST1hZX1BSRUZJWF9VUkwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvdmVyaXRhcy1hcGkuY29uc3RhbnQnO1xyXG5pbXBvcnQge1xyXG4gIEFuc3dlckRldGFpbFJlc3BvbnNlSW50ZXJmYWNlLFxyXG4gIFF1ZXN0aW9ubmFpcmVJbnRlcmZhY2VcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3F1ZXN0aW9ubmFpcmUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudCB9IGZyb20gJy4uLy4uL21vZGVscy9hdHRhY2htZW50Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hCb2FyZFN1cnZleUNvbnRyb2xsZXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHVybCA9IGAke3RoaXMudmVyaXRhc0FwaVByb3h5UHJlZml4VXJsfS9xdWVzdGlvbi1zdXJ2ZXlgO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICAgIEBJbmplY3QoVkVSSVRBU19BUElfUFJPWFlfUFJFRklYX1VSTClcclxuICAgIHByaXZhdGUgdmVyaXRhc0FwaVByb3h5UHJlZml4VXJsOiBzdHJpbmdcclxuICApIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVCBMaXN0IFRhc2tzIERhdGFcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0UXVlc3Rpb25Db250YWluZXJWaWV3UGFnZXMoXHJcbiAgICByZWNvcmRJZDogc3RyaW5nXHJcbiAgKTogT2JzZXJ2YWJsZTxRdWVzdGlvbm5haXJlSW50ZXJmYWNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50XHJcbiAgICAgIC5nZXQoYCR7dGhpcy51cmx9LyR7cmVjb3JkSWR9YClcclxuICAgICAgLnBpcGUobWFwKHRoaXMubWFwR2V0UXVlc3Rpb25Db250YWluZXJWaWV3UGFnZXMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb3N0QXR0YWNobWVudHMkKFxyXG4gICAgcmVjb3JkSWQ6IHN0cmluZyxcclxuICAgIHF1ZXN0aW9uTm9kZUlkOiBzdHJpbmcsXHJcbiAgICBmaWxlczogRmlsZVtdXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QXR0YWNobWVudFtdPj4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiBmb3JtRGF0YS5hcHBlbmQoJ2F0dGFjaG1lbnRGaWxlcycsIGZpbGUpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8YW55PihcclxuICAgICAgYCR7dGhpcy51cmx9LyR7cmVjb3JkSWR9L3F1ZXN0aW9uLyR7cXVlc3Rpb25Ob2RlSWR9L2F0dGFjaG1lbnRzYCxcclxuICAgICAgZm9ybURhdGEsXHJcbiAgICAgIHtcclxuICAgICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcclxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJ1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZUF0dGFjaG1lbnQkKFxyXG4gICAgcmVjb3JkSWQ6IHN0cmluZyxcclxuICAgIHF1ZXN0aW9uTm9kZUlkOiBzdHJpbmcsXHJcbiAgICBhdHRhY2htZW50SWQ6IHN0cmluZ1xyXG4gICk6IE9ic2VydmFibGU8QXR0YWNobWVudFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmRlbGV0ZTxBdHRhY2htZW50W10+KFxyXG4gICAgICBgJHtcclxuICAgICAgICB0aGlzLnVybFxyXG4gICAgICB9LyR7cmVjb3JkSWR9L3F1ZXN0aW9uLyR7cXVlc3Rpb25Ob2RlSWR9L2F0dGFjaG1lbnRzLyR7YXR0YWNobWVudElkfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1hcEdldFF1ZXN0aW9uQ29udGFpbmVyVmlld1BhZ2VzKHF1ZXN0aW9ubmFpcmUpIHtcclxuICAgIHJldHVybiBxdWVzdGlvbm5haXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvc3RRdWVzdGlvbkRldGFpbFJlc3BvbnNlcyhcclxuICAgIGFuc3dlcnM6IEFuc3dlckRldGFpbFJlc3BvbnNlSW50ZXJmYWNlW10sXHJcbiAgICBzdWJtaXRBY3Rpb246IGJvb2xlYW4sXHJcbiAgICByZWNvcmRJZDogc3RyaW5nXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIEFzc2VtYmxlIHBvc3QgZGF0YVxyXG4gICAgY29uc3QgYW5zd2Vyc0RhdGEgPSB7XHJcbiAgICAgIGFuc3dlcnM6IGFuc3dlcnMsXHJcbiAgICAgIHN1Ym1pdEFjdGlvbjogc3VibWl0QWN0aW9uXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KFxyXG4gICAgICBgL2FwaS9xdWVzdGlvbi1zdXJ2ZXkvJHtyZWNvcmRJZH1gLFxyXG4gICAgICBhbnN3ZXJzRGF0YVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19