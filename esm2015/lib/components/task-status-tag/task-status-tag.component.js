import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskStatusEnum } from '../../enums';
export class TaskStatusTagComponent {
    constructor() {
        this.taskStatusEnum = TaskStatusEnum;
    }
    ngOnInit() { }
}
TaskStatusTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-task-status-tag',
                template: "<div\r\n  class=\"status-container text-truncate\"\r\n  [ngClass]=\"{\r\n    open: taskStatus === taskStatusEnum.Open,\r\n    'in-progress': taskStatus === taskStatusEnum.InProgress,\r\n    'in-review': taskStatus === taskStatusEnum.InReview,\r\n    closed: taskStatus === taskStatusEnum.Closed,\r\n    'action-required': taskStatus === taskStatusEnum.ActionRequired\r\n  }\"\r\n>\r\n  {{ taskStatusEnum.getDisplayText(taskStatus) }}\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .status-container{padding:2px 12px;border-radius:12px;border:1px solid transparent}:host .status-container.open{background-color:#f1f1f1;border-color:#ddd;color:#595959}:host .status-container.in-progress{background-color:#e5edf9;border-color:#ccdcf4;color:#0052cc}:host .status-container.in-review{background-color:#efedf8;border-color:#e0dcf2;color:#3c3273}:host .status-container.closed{background-color:#f8fcf5;border-color:#dff3d3;color:#387515}:host .status-container.action-required{background-color:#fff6e5;border-color:#fec;color:#995400}"]
            }] }
];
/** @nocollapse */
TaskStatusTagComponent.ctorParameters = () => [];
TaskStatusTagComponent.propDecorators = {
    taskStatus: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zdGF0dXMtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rhc2stc3RhdHVzLXRhZy90YXNrLXN0YXR1cy10YWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUTdDLE1BQU0sT0FBTyxzQkFBc0I7SUFLakM7UUFGTyxtQkFBYyxHQUFHLGNBQWMsQ0FBQztJQUV4QixDQUFDO0lBRVQsUUFBUSxLQUFVLENBQUM7OztZQWIzQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsMmNBQStDO2dCQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7O3lCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRhc2tTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vZW51bXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS10YXNrLXN0YXR1cy10YWcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YXNrLXN0YXR1cy10YWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Rhc2stc3RhdHVzLXRhZy5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYXNrU3RhdHVzVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgdGFza1N0YXR1czogVGFza1N0YXR1c0VudW07XHJcblxyXG4gIHB1YmxpYyB0YXNrU3RhdHVzRW51bSA9IFRhc2tTdGF0dXNFbnVtO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcbn1cclxuIl19