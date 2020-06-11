import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { QuestionTypeEnum } from '../../enums/question-type.enum';
import { QuestionnaireViewModeEnum } from '../../enums/questionnaire-view-mode.enum';
import * as i0 from "@angular/core";
export class QuestionnaireUtilsService {
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
QuestionnaireUtilsService.ngInjectableDef = i0.defineInjectable({ factory: function QuestionnaireUtilsService_Factory() { return new QuestionnaireUtilsService(); }, token: QuestionnaireUtilsService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS11dGlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3F1ZXN0aW9ubmFpcmUtdXRpbHMvcXVlc3Rpb25uYWlyZS11dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFXckYsTUFBTSxPQUFPLHlCQUF5QjtJQUtwQztRQUpRLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFHLHlCQUF5QixDQUFDLEdBQUcsQ0FBQztRQUN6QyxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBRWhDLENBQUM7SUFFaEI7O09BRUc7SUFDSSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRU0sYUFBYSxDQUFDLFVBQW1CO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxjQUFjLENBQUMsUUFBbUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLHFCQUFxQjtRQUMxQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUJBQWlCLENBQUMsZUFBeUM7UUFDaEUsUUFBUSxlQUFlLENBQUMsa0JBQWtCLEVBQUU7WUFDMUMsS0FBSyxnQkFBZ0IsQ0FBQyxZQUFZO2dCQUNoQyxrRkFBa0Y7Z0JBQ2xGLE1BQU0sdUJBQXVCLEdBQUcsZUFBZSxDQUFDLHVCQUF1QixDQUFDO2dCQUN4RSxJQUFJLHVCQUF1QixFQUFFO29CQUMzQixNQUFNLGdCQUFnQixHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDL0QsT0FBTyxRQUFRLENBQUMsK0JBQStCLENBQUM7b0JBQ2xELENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksZ0JBQWdCLEVBQUU7d0JBQ3BCLE9BQU8sZ0JBQWdCLENBQUM7cUJBQ3pCO2lCQUNGO2dCQUNELE1BQU07WUFDUixLQUFLLGdCQUFnQixDQUFDLElBQUk7Z0JBQ3hCLE1BQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDOUQsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLE9BQU8sWUFBWSxDQUFDO2lCQUNyQjtnQkFDRCxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0kscUJBQXFCLENBQzFCLGFBQXFDLEVBQ3JDLGVBQXlDO1FBRXpDLHVFQUF1RTtRQUN2RSx3Q0FBd0M7UUFDeEMsTUFBTSxnQkFBZ0IsR0FBb0MsZUFBZSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FDcEcsUUFBUSxDQUFDLEVBQUU7WUFDVCxPQUFPLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQztRQUNsRCxDQUFDLENBQ0YsQ0FBQztRQUVGLElBQ0UsYUFBYSxDQUFDLGdCQUFnQjtZQUM5QixhQUFhLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLEVBQ3hEO1lBQ0EsTUFBTSx5QkFBeUIsR0FDN0IsYUFBYSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDO1lBRTNELG1FQUFtRTtZQUNuRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcseUJBQXlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6RCxNQUFNLHdCQUF3QixHQUFHLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFO29CQUNwRSxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSyxjQUFjLENBQ3BCLHdCQUEyRCxFQUMzRCxlQUFvQjtRQUVwQix3Q0FBd0M7UUFDeEMsSUFBSSxlQUFlLElBQUksd0JBQXdCLENBQUMscUJBQXFCLEVBQUU7WUFDckUsTUFBTSxNQUFNLEdBQW9DLGVBQWUsQ0FBQztZQUNoRSxNQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztZQUM1RCxNQUFNLGdCQUFnQixHQUFHLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO1lBRXhFLElBQUksa0JBQWtCLEtBQUssZ0JBQWdCLEVBQUU7Z0JBQzNDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBM0hGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUXVlc3Rpb25UeXBlRW51bSB9IGZyb20gJy4uLy4uL2VudW1zL3F1ZXN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW0gfSBmcm9tICcuLi8uLi9lbnVtcy9xdWVzdGlvbm5haXJlLXZpZXctbW9kZS5lbnVtJztcclxuaW1wb3J0IHtcclxuICBDb25kaXRpb25EZXRhaWxDb25kaXRpb25JbnRlcmZhY2UsXHJcbiAgQ29uZGl0aW9uVHJlZUludGVyZmFjZSxcclxuICBRdWVzdGlvbkRldGFpbFJlc3BvbnNlSW50ZXJmYWNlLFxyXG4gIFF1ZXN0aW9uRGV0YWlsc0ludGVyZmFjZVxyXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcXVlc3Rpb25uYWlyZS5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZXZpZXdNb2RlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB2aWV3TW9kZSA9IFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW0uQWxsO1xyXG4gIHByaXZhdGUgX3ZpZXdNb2RlU3ViamVjdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlcyB3aGV0aGVyIHRvIGRpc3BsYXkgdGhlIHF1ZXN0aW9ubmFpcmUgaW4gcmV2aWV3IG1vZGUuXHJcbiAgICovXHJcbiAgcHVibGljIGdldFJldmlld01vZGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXZpZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFJldmlld01vZGUocmV2aWV3TW9kZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5yZXZpZXdNb2RlID0gcmV2aWV3TW9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbW11bmljYXRlIHdoZXRoZXIgdG8gc2hvdyBhbGwsIHVuYW5zd2VyZWQsIG9yIGFuc3dlcmVkIHF1ZXN0aW9uc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRWaWV3TW9kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZpZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZVZpZXdNb2RlKHZpZXdNb2RlOiBRdWVzdGlvbm5haXJlVmlld01vZGVFbnVtKSB7XHJcbiAgICB0aGlzLnZpZXdNb2RlID0gdmlld01vZGU7XHJcbiAgICB0aGlzLl92aWV3TW9kZVN1YmplY3QkLm5leHQodGhpcy52aWV3TW9kZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Vmlld01vZGVPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlld01vZGVTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgcXVlc3Rpb24ncyBjdXJyZW50IGFud2VyLiBDYW4gYmUgYSByZXNwb25zZSBvYmplY3Qgb3IgYSBzdHJpbmcuXHJcbiAgICogQHBhcmFtIHF1ZXN0aW9uIHRvIGNoZWNrXHJcbiAgICovXHJcbiAgcHVibGljIGdldFF1ZXN0aW9uQW5zd2VyKHF1ZXN0aW9uRGV0YWlsczogUXVlc3Rpb25EZXRhaWxzSW50ZXJmYWNlKTogYW55IHtcclxuICAgIHN3aXRjaCAocXVlc3Rpb25EZXRhaWxzLnF1ZXN0aW9uRGV0YWlsVHlwZSkge1xyXG4gICAgICBjYXNlIFF1ZXN0aW9uVHlwZUVudW0uU2luZ2xlU2VsZWN0OlxyXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCByZXNwb25zZXMgYW5kIGlmIHByZXZpb3VzbHkgc2VsZWN0ZWQgb3B0aW9uIHdhcyBmb3VuZCwgcGF0Y2ggdmFsdWVcclxuICAgICAgICBjb25zdCBxdWVzdGlvbkRldGFpbFJlc3BvbnNlcyA9IHF1ZXN0aW9uRGV0YWlscy5xdWVzdGlvbkRldGFpbFJlc3BvbnNlcztcclxuICAgICAgICBpZiAocXVlc3Rpb25EZXRhaWxSZXNwb25zZXMpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUmVzcG9uc2UgPSBxdWVzdGlvbkRldGFpbFJlc3BvbnNlcy5maW5kKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzU2VsZWN0ZWQ7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRSZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRSZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUXVlc3Rpb25UeXBlRW51bS5UZXh0OlxyXG4gICAgICAgIGNvbnN0IHRleHRSZXNwb25zZSA9IHF1ZXN0aW9uRGV0YWlscy5xdWVzdGlvbkRldGFpbEFuc3dlclRleHQ7XHJcbiAgICAgICAgaWYgKHRleHRSZXNwb25zZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRleHRSZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgYnkgcGFyZW50IHF1ZXN0aW9uIHdpdGggYSBjb25kaXRpb25UcmVlIHRvIHNlZSBpZiBpdCBzaG91bGQgZGlzcGxheSBpdFxyXG4gICAqIEBwYXJhbSBjb25kaXRpb25UcmVlIGNvbmRpdGlvblRyZWVcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q29uZGl0aW9uRnVsZmlsbGVkKFxyXG4gICAgY29uZGl0aW9uVHJlZTogQ29uZGl0aW9uVHJlZUludGVyZmFjZSxcclxuICAgIHF1ZXN0aW9uRGV0YWlsczogUXVlc3Rpb25EZXRhaWxzSW50ZXJmYWNlXHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICAvLyBEZXBlbmRpbmcgb24gcXVlc3Rpb24gdHlwZSwgZ2V0IHRoZSBhcHByb3ByaWF0ZSBhbnN3ZXIgb2JqZWN0L3N0cmluZ1xyXG4gICAgLy8gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgc2luZ2xlIHNlbGVjdFxyXG4gICAgY29uc3Qgc2VsZWN0ZWRSZXNwb25zZTogUXVlc3Rpb25EZXRhaWxSZXNwb25zZUludGVyZmFjZSA9IHF1ZXN0aW9uRGV0YWlscy5xdWVzdGlvbkRldGFpbFJlc3BvbnNlcy5maW5kKFxyXG4gICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzU2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBjb25kaXRpb25UcmVlLmNvbmRpdGlvbkRldGFpbHMgJiZcclxuICAgICAgY29uZGl0aW9uVHJlZS5jb25kaXRpb25EZXRhaWxzLmNvbmRpdGlvbkRldGFpbENvbmRpdGlvbnNcclxuICAgICkge1xyXG4gICAgICBjb25zdCBjb25kaXRpb25EZXRhaWxDb25kaXRpb25zOiBDb25kaXRpb25EZXRhaWxDb25kaXRpb25JbnRlcmZhY2VbXSA9XHJcbiAgICAgICAgY29uZGl0aW9uVHJlZS5jb25kaXRpb25EZXRhaWxzLmNvbmRpdGlvbkRldGFpbENvbmRpdGlvbnM7XHJcblxyXG4gICAgICAvLyBMb29wIHRocm91Z2ggYWxsIGNvbmRpdGlvbnMgYW5kIG1ha2Ugc3VyZSB0aGV5IGFyZSBhbGwgZnVsZmlsbGVkXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRGV0YWlsQ29uZGl0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkRldGFpbENvbmRpdGlvbiA9IGNvbmRpdGlvbkRldGFpbENvbmRpdGlvbnNbaV07XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrQ29uZGl0aW9uKGNvbmRpdGlvbkRldGFpbENvbmRpdGlvbiwgc2VsZWN0ZWRSZXNwb25zZSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayB0aGF0IGdpdmVuIGNvbmRpdGlvbiBpcyBmdWxmaWxsZWQgYnkgcGFyZW50IHF1ZXN0aW9uXHJcbiAgICogQHBhcmFtIGNvbmRpdGlvbkRldGFpbENvbmRpdGlvbiBjb25kaXRpb25EZXRhaWxDb25kaXRpb25cclxuICAgKi9cclxuICBwcml2YXRlIGNoZWNrQ29uZGl0aW9uKFxyXG4gICAgY29uZGl0aW9uRGV0YWlsQ29uZGl0aW9uOiBDb25kaXRpb25EZXRhaWxDb25kaXRpb25JbnRlcmZhY2UsXHJcbiAgICBjdXJyZW50UmVzcG9uc2U6IGFueVxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgLy8gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgc2luZ2xlIHNlbGVjdFxyXG4gICAgaWYgKGN1cnJlbnRSZXNwb25zZSAmJiBjb25kaXRpb25EZXRhaWxDb25kaXRpb24uZXhwcmVzc2lvblZpZXdWYWx1ZUlkKSB7XHJcbiAgICAgIGNvbnN0IGFuc3dlcjogUXVlc3Rpb25EZXRhaWxSZXNwb25zZUludGVyZmFjZSA9IGN1cnJlbnRSZXNwb25zZTtcclxuICAgICAgY29uc3QgcXVlc3Rpb25SZXNwb25zZUlkID0gYW5zd2VyLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzSWQ7XHJcbiAgICAgIGNvbnN0IGNvbmRpdGlvblZhbHVlSWQgPSBjb25kaXRpb25EZXRhaWxDb25kaXRpb24uZXhwcmVzc2lvblZpZXdWYWx1ZUlkO1xyXG5cclxuICAgICAgaWYgKHF1ZXN0aW9uUmVzcG9uc2VJZCA9PT0gY29uZGl0aW9uVmFsdWVJZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==