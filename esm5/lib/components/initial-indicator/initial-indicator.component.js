import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// import { isPropertyChanged } from '../../utils';
var InitialIndicatorComponent = /** @class */ (function () {
    function InitialIndicatorComponent() {
        this.splitKey = ' ';
    }
    InitialIndicatorComponent.prototype.ngOnInit = function () { };
    InitialIndicatorComponent.prototype.ngOnChanges = function (changes) {
        // if (isPropertyChanged(changes.name)) {
        this.setInitial();
        // }
    };
    InitialIndicatorComponent.prototype.setInitial = function () {
        var nameSplits = this.name.split(this.splitKey);
        this.initial =
            nameSplits.length > 1 ? this.getInitial(nameSplits) : this.name;
    };
    InitialIndicatorComponent.prototype.getInitial = function (nameSplits) {
        return "" + this.getWordByIndex(nameSplits, 0) + this.getWordByIndex(nameSplits, 1);
    };
    InitialIndicatorComponent.prototype.getWordByIndex = function (nameSplits, index) {
        return nameSplits[index][0].toLocaleUpperCase();
    };
    InitialIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-initial-indicator',
                    template: "<div class=\"circle-indicator d-flex align-items-center justify-content-center\">\r\n  {{ initial }}\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    InitialIndicatorComponent.ctorParameters = function () { return []; };
    InitialIndicatorComponent.propDecorators = {
        name: [{ type: Input }]
    };
    return InitialIndicatorComponent;
}());
export { InitialIndicatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5pdGlhbC1pbmRpY2F0b3IvaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixtREFBbUQ7QUFFbkQ7SUFhRTtRQUZpQixhQUFRLEdBQUcsR0FBRyxDQUFDO0lBRWpCLENBQUM7SUFFVCw0Q0FBUSxHQUFmLGNBQXlCLENBQUM7SUFFbkIsK0NBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDdkMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJO0lBQ04sQ0FBQztJQUVPLDhDQUFVLEdBQWxCO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPO1lBQ1YsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQztJQUVPLDhDQUFVLEdBQWxCLFVBQW1CLFVBQW9CO1FBQ3JDLE9BQU8sS0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUNoRSxVQUFVLEVBQ1YsQ0FBQyxDQUNBLENBQUM7SUFDTixDQUFDO0lBRU8sa0RBQWMsR0FBdEIsVUFBdUIsVUFBb0IsRUFBRSxLQUFhO1FBQ3hELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw4SEFBaUQ7b0JBRWpELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7O3VCQUVFLEtBQUs7O0lBZ0NSLGdDQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0FqQ1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBpbXBvcnQgeyBpc1Byb3BlcnR5Q2hhbmdlZCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtaW5pdGlhbC1pbmRpY2F0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbml0aWFsLWluZGljYXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5pdGlhbEluZGljYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaW5pdGlhbDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHNwbGl0S2V5ID0gJyAnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAvLyBpZiAoaXNQcm9wZXJ0eUNoYW5nZWQoY2hhbmdlcy5uYW1lKSkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsKCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEluaXRpYWwoKTogdm9pZCB7XHJcbiAgICBjb25zdCBuYW1lU3BsaXRzID0gdGhpcy5uYW1lLnNwbGl0KHRoaXMuc3BsaXRLZXkpO1xyXG4gICAgdGhpcy5pbml0aWFsID1cclxuICAgICAgbmFtZVNwbGl0cy5sZW5ndGggPiAxID8gdGhpcy5nZXRJbml0aWFsKG5hbWVTcGxpdHMpIDogdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJbml0aWFsKG5hbWVTcGxpdHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmdldFdvcmRCeUluZGV4KG5hbWVTcGxpdHMsIDApfSR7dGhpcy5nZXRXb3JkQnlJbmRleChcclxuICAgICAgbmFtZVNwbGl0cyxcclxuICAgICAgMVxyXG4gICAgKX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXb3JkQnlJbmRleChuYW1lU3BsaXRzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5hbWVTcGxpdHNbaW5kZXhdWzBdLnRvTG9jYWxlVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==