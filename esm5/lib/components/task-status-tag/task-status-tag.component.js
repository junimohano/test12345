import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskStatusEnum } from '../../enums';
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
export { TaskStatusTagComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zdGF0dXMtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rhc2stc3RhdHVzLXRhZy90YXNrLXN0YXR1cy10YWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdDO0lBV0U7UUFGTyxtQkFBYyxHQUFHLGNBQWMsQ0FBQztJQUV4QixDQUFDO0lBRVQseUNBQVEsR0FBZixjQUF5QixDQUFDOztnQkFiM0IsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDJjQUErQztvQkFFL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7Ozs7NkJBRUUsS0FBSzs7SUFPUiw2QkFBQztDQUFBLEFBZEQsSUFjQztTQVJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFza1N0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9lbnVtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLXRhc2stc3RhdHVzLXRhZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rhc2stc3RhdHVzLXRhZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFzay1zdGF0dXMtdGFnLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhc2tTdGF0dXNUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0YXNrU3RhdHVzOiBUYXNrU3RhdHVzRW51bTtcclxuXHJcbiAgcHVibGljIHRhc2tTdGF0dXNFbnVtID0gVGFza1N0YXR1c0VudW07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge31cclxufVxyXG4iXX0=