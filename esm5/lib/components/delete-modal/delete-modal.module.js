import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaButtonsModule, TaModalModule, TaSvgIconModule } from '@trustarc/ui-toolkit';
import { DeleteModalComponent } from './delete-modal.component';
var DeleteModalModule = /** @class */ (function () {
    function DeleteModalModule() {
    }
    DeleteModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DeleteModalComponent],
                    imports: [CommonModule, TaButtonsModule, TaSvgIconModule, TaModalModule],
                    exports: [DeleteModalComponent],
                    entryComponents: [DeleteModalComponent]
                },] }
    ];
    return DeleteModalModule;
}());
export { DeleteModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW1vZGFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC9kZWxldGUtbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDaEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRTtJQUFBO0lBTWdDLENBQUM7O2dCQU5oQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQztvQkFDeEUsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUN4Qzs7SUFDK0Isd0JBQUM7Q0FBQSxBQU5qQyxJQU1pQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFRhQnV0dG9uc01vZHVsZSxcclxuICBUYU1vZGFsTW9kdWxlLFxyXG4gIFRhU3ZnSWNvbk1vZHVsZVxyXG59IGZyb20gJ0B0cnVzdGFyYy91aS10b29sa2l0JztcclxuXHJcbmltcG9ydCB7IERlbGV0ZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9kZWxldGUtbW9kYWwuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRGVsZXRlTW9kYWxDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRhQnV0dG9uc01vZHVsZSwgVGFTdmdJY29uTW9kdWxlLCBUYU1vZGFsTW9kdWxlXSxcclxuICBleHBvcnRzOiBbRGVsZXRlTW9kYWxDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0RlbGV0ZU1vZGFsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlTW9kYWxNb2R1bGUge31cclxuIl19