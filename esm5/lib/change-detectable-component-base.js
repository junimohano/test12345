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
export { ChangeDetectableComponentBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLWRldGVjdGFibGUtY29tcG9uZW50LWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLWRldGVjdGFibGUtY29tcG9uZW50LWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFNRSx1Q0FBc0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBSjlELHNCQUFZLG9FQUF5QjthQUFyQztZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBSUQsb0RBQVksR0FBWjtRQUNFLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOENBQU0sR0FBTjtRQUNFLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQscURBQWEsR0FBYjtRQUNFLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsc0RBQWMsR0FBZDtRQUNFLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGFuZ2VEZXRlY3RhYmxlQ29tcG9uZW50QmFzZVxyXG4gIGltcGxlbWVudHMgQ2hhbmdlRGV0ZWN0b3JSZWYge1xyXG4gIHByaXZhdGUgZ2V0IGlzQ2hhbmdlRGV0ZWN0b3JEZXN0cm95ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VEZXRlY3RvclJlZlsnZGVzdHJveWVkJ107XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0NoYW5nZURldGVjdG9yRGVzdHJveWVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZGV0YWNoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFuZ2VEZXRlY3RvckRlc3Ryb3llZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRhY2goKTtcclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0NoYW5nZURldGVjdG9yRGVzdHJveWVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrTm9DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFuZ2VEZXRlY3RvckRlc3Ryb3llZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5jaGVja05vQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmVhdHRhY2goKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0NoYW5nZURldGVjdG9yRGVzdHJveWVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLnJlYXR0YWNoKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==