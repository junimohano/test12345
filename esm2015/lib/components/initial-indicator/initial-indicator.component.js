import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// import { isPropertyChanged } from '../../utils';
export class InitialIndicatorComponent {
    constructor() {
        this.splitKey = ' ';
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        // if (isPropertyChanged(changes.name)) {
        this.setInitial();
        // }
    }
    setInitial() {
        const nameSplits = this.name.split(this.splitKey);
        this.initial =
            nameSplits.length > 1 ? this.getInitial(nameSplits) : this.name;
    }
    getInitial(nameSplits) {
        return `${this.getWordByIndex(nameSplits, 0)}${this.getWordByIndex(nameSplits, 1)}`;
    }
    getWordByIndex(nameSplits, index) {
        return nameSplits[index][0].toLocaleUpperCase();
    }
}
InitialIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-initial-indicator',
                template: "<div class=\"circle-indicator d-flex align-items-center justify-content-center\">\r\n  {{ initial }}\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
InitialIndicatorComponent.ctorParameters = () => [];
InitialIndicatorComponent.propDecorators = {
    name: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5pdGlhbC1pbmRpY2F0b3IvaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixtREFBbUQ7QUFRbkQsTUFBTSxPQUFPLHlCQUF5QjtJQU9wQztRQUZpQixhQUFRLEdBQUcsR0FBRyxDQUFDO0lBRWpCLENBQUM7SUFFVCxRQUFRLEtBQVUsQ0FBQztJQUVuQixXQUFXLENBQUMsT0FBc0I7UUFDdkMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJO0lBQ04sQ0FBQztJQUVPLFVBQVU7UUFDaEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPO1lBQ1YsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQztJQUVPLFVBQVUsQ0FBQyxVQUFvQjtRQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FDaEUsVUFBVSxFQUNWLENBQUMsQ0FDRixFQUFFLENBQUM7SUFDTixDQUFDO0lBRU8sY0FBYyxDQUFDLFVBQW9CLEVBQUUsS0FBYTtRQUN4RCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xELENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsOEhBQWlEO2dCQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7O21CQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGltcG9ydCB7IGlzUHJvcGVydHlDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1pbml0aWFsLWluZGljYXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2luaXRpYWwtaW5kaWNhdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbml0aWFsLWluZGljYXRvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbml0aWFsSW5kaWNhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBpbml0aWFsOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3BsaXRLZXkgPSAnICc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIC8vIGlmIChpc1Byb3BlcnR5Q2hhbmdlZChjaGFuZ2VzLm5hbWUpKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWwoKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW5pdGlhbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5hbWVTcGxpdHMgPSB0aGlzLm5hbWUuc3BsaXQodGhpcy5zcGxpdEtleSk7XHJcbiAgICB0aGlzLmluaXRpYWwgPVxyXG4gICAgICBuYW1lU3BsaXRzLmxlbmd0aCA+IDEgPyB0aGlzLmdldEluaXRpYWwobmFtZVNwbGl0cykgOiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEluaXRpYWwobmFtZVNwbGl0czogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuZ2V0V29yZEJ5SW5kZXgobmFtZVNwbGl0cywgMCl9JHt0aGlzLmdldFdvcmRCeUluZGV4KFxyXG4gICAgICBuYW1lU3BsaXRzLFxyXG4gICAgICAxXHJcbiAgICApfWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdvcmRCeUluZGV4KG5hbWVTcGxpdHM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmFtZVNwbGl0c1tpbmRleF1bMF0udG9Mb2NhbGVVcHBlckNhc2UoKTtcclxuICB9XHJcbn1cclxuIl19