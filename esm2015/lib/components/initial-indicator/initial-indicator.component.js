import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isPropertyChanged } from '../../utils';
export class InitialIndicatorComponent {
    constructor() {
        this.splitKey = ' ';
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (isPropertyChanged(changes.name)) {
            this.setInitial();
        }
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
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host{display:flex}:host .circle-indicator{height:24px;width:24px;border-radius:50%;border:1px solid #ffddd5;background-color:#ffeeea;color:#99331c;font-size:.625rem;font-weight:600}"]
            }] }
];
/** @nocollapse */
InitialIndicatorComponent.ctorParameters = () => [];
InitialIndicatorComponent.propDecorators = {
    name: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy11aS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5pdGlhbC1pbmRpY2F0b3IvaW5pdGlhbC1pbmRpY2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFRaEQsTUFBTSxPQUFPLHlCQUF5QjtJQU9wQztRQUZpQixhQUFRLEdBQUcsR0FBRyxDQUFDO0lBRWpCLENBQUM7SUFFVCxRQUFRLEtBQVUsQ0FBQztJQUVuQixXQUFXLENBQUMsT0FBc0I7UUFDdkMsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVPLFVBQVU7UUFDaEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPO1lBQ1YsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQztJQUVPLFVBQVUsQ0FBQyxVQUFvQjtRQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FDaEUsVUFBVSxFQUNWLENBQUMsQ0FDRixFQUFFLENBQUM7SUFDTixDQUFDO0lBRU8sY0FBYyxDQUFDLFVBQW9CLEVBQUUsS0FBYTtRQUN4RCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xELENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsOEhBQWlEO2dCQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7O21CQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzUHJvcGVydHlDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1pbml0aWFsLWluZGljYXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2luaXRpYWwtaW5kaWNhdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbml0aWFsLWluZGljYXRvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbml0aWFsSW5kaWNhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBpbml0aWFsOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3BsaXRLZXkgPSAnICc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChpc1Byb3BlcnR5Q2hhbmdlZChjaGFuZ2VzLm5hbWUpKSB7XHJcbiAgICAgIHRoaXMuc2V0SW5pdGlhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbml0aWFsKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbmFtZVNwbGl0cyA9IHRoaXMubmFtZS5zcGxpdCh0aGlzLnNwbGl0S2V5KTtcclxuICAgIHRoaXMuaW5pdGlhbCA9XHJcbiAgICAgIG5hbWVTcGxpdHMubGVuZ3RoID4gMSA/IHRoaXMuZ2V0SW5pdGlhbChuYW1lU3BsaXRzKSA6IHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SW5pdGlhbChuYW1lU3BsaXRzOiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5nZXRXb3JkQnlJbmRleChuYW1lU3BsaXRzLCAwKX0ke3RoaXMuZ2V0V29yZEJ5SW5kZXgoXHJcbiAgICAgIG5hbWVTcGxpdHMsXHJcbiAgICAgIDFcclxuICAgICl9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V29yZEJ5SW5kZXgobmFtZVNwbGl0czogc3RyaW5nW10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBuYW1lU3BsaXRzW2luZGV4XVswXS50b0xvY2FsZVVwcGVyQ2FzZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=