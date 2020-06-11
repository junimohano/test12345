import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaButtonsModule, TaModalModule, TaSvgIconModule } from '@trustarc/ui-toolkit';
import { QuestionnaireContentModule } from '../questionnaire-content';
import { QuestionnaireContentModalComponent } from './questionnaire-content-modal.component';
var QuestionnaireContentModalModule = /** @class */ (function () {
    function QuestionnaireContentModalModule() {
    }
    QuestionnaireContentModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [QuestionnaireContentModalComponent],
                    imports: [
                        CommonModule,
                        TaButtonsModule,
                        TaSvgIconModule,
                        TaModalModule,
                        QuestionnaireContentModule
                    ],
                    exports: [QuestionnaireContentModalComponent],
                    entryComponents: [QuestionnaireContentModalComponent]
                },] }
    ];
    return QuestionnaireContentModalModule;
}());
export { QuestionnaireContentModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS1jb250ZW50LW1vZGFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUtY29udGVudC1tb2RhbC9xdWVzdGlvbm5haXJlLWNvbnRlbnQtbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDaEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUU3RjtJQUFBO0lBWThDLENBQUM7O2dCQVo5QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0NBQWtDLENBQUM7b0JBQ2xELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLDBCQUEwQjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0NBQWtDLENBQUM7b0JBQzdDLGVBQWUsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2lCQUN0RDs7SUFDNkMsc0NBQUM7Q0FBQSxBQVovQyxJQVkrQztTQUFsQywrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFRhQnV0dG9uc01vZHVsZSxcclxuICBUYU1vZGFsTW9kdWxlLFxyXG4gIFRhU3ZnSWNvbk1vZHVsZVxyXG59IGZyb20gJ0B0cnVzdGFyYy91aS10b29sa2l0JztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9ubmFpcmVDb250ZW50TW9kdWxlIH0gZnJvbSAnLi4vcXVlc3Rpb25uYWlyZS1jb250ZW50JztcclxuaW1wb3J0IHsgUXVlc3Rpb25uYWlyZUNvbnRlbnRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vcXVlc3Rpb25uYWlyZS1jb250ZW50LW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1F1ZXN0aW9ubmFpcmVDb250ZW50TW9kYWxDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFRhQnV0dG9uc01vZHVsZSxcclxuICAgIFRhU3ZnSWNvbk1vZHVsZSxcclxuICAgIFRhTW9kYWxNb2R1bGUsXHJcbiAgICBRdWVzdGlvbm5haXJlQ29udGVudE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1F1ZXN0aW9ubmFpcmVDb250ZW50TW9kYWxDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1F1ZXN0aW9ubmFpcmVDb250ZW50TW9kYWxDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbm5haXJlQ29udGVudE1vZGFsTW9kdWxlIHt9XHJcbiJdfQ==