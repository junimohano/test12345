export class ChangeDetectableComponentBase {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
    }
    get isChangeDetectorDestroyed() {
        return this.changeDetectorRef['destroyed'];
    }
    markForCheck() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.markForCheck();
    }
    detach() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.detach();
    }
    detectChanges() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.detectChanges();
    }
    checkNoChanges() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.checkNoChanges();
    }
    reattach() {
        if (this.isChangeDetectorDestroyed) {
            return;
        }
        this.changeDetectorRef.reattach();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLWRldGVjdGFibGUtY29tcG9uZW50LWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLWRldGVjdGFibGUtY29tcG9uZW50LWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFnQiw2QkFBNkI7SUFNakQsWUFBc0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBSjlELElBQVkseUJBQXlCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFJRCxZQUFZO1FBQ1YsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhbmdlRGV0ZWN0YWJsZUNvbXBvbmVudEJhc2VcclxuICBpbXBsZW1lbnRzIENoYW5nZURldGVjdG9yUmVmIHtcclxuICBwcml2YXRlIGdldCBpc0NoYW5nZURldGVjdG9yRGVzdHJveWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWZbJ2Rlc3Ryb3llZCddO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFuZ2VEZXRlY3RvckRlc3Ryb3llZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGRldGFjaCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQ2hhbmdlRGV0ZWN0b3JEZXN0cm95ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0YWNoKCk7XHJcbiAgfVxyXG5cclxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFuZ2VEZXRlY3RvckRlc3Ryb3llZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja05vQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQ2hhbmdlRGV0ZWN0b3JEZXN0cm95ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuY2hlY2tOb0NoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHJlYXR0YWNoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFuZ2VEZXRlY3RvckRlc3Ryb3llZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5yZWF0dGFjaCgpO1xyXG4gIH1cclxufVxyXG4iXX0=