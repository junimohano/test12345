import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaButtonsModule, TaDropdownModule, TaTabsetModule, TaTagsModule, TaTooltipModule } from '@trustarc/ui-toolkit';
import { DeleteModalModule } from '../delete-modal';
import { InitialIndicatorModule } from '../initial-indicator';
import { QuestionModule } from '../question';
import { QuestionAccordionModule } from '../question-accordion';
import { TaskStatusTagModule } from '../task-status-tag';
import { QuestionnaireContentComponent } from './questionnaire-content.component';
var QuestionnaireContentModule = /** @class */ (function () {
    function QuestionnaireContentModule() {
    }
    QuestionnaireContentModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [QuestionnaireContentComponent],
                    imports: [
                        CommonModule,
                        QuestionModule,
                        QuestionAccordionModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TaButtonsModule,
                        TaTabsetModule,
                        TaDropdownModule,
                        TaTagsModule,
                        TaskStatusTagModule,
                        InitialIndicatorModule,
                        TaTooltipModule,
                        DeleteModalModule
                    ],
                    exports: [QuestionnaireContentComponent]
                },] }
    ];
    return QuestionnaireContentModule;
}());
export { QuestionnaireContentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS1jb250ZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUtY29udGVudC9xdWVzdGlvbm5haXJlLWNvbnRlbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGVBQWUsRUFDaEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxGO0lBQUE7SUFtQnlDLENBQUM7O2dCQW5CekMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUM3QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLGVBQWU7d0JBQ2YsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDekM7O0lBQ3dDLGlDQUFDO0NBQUEsQUFuQjFDLElBbUIwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBUYUJ1dHRvbnNNb2R1bGUsXHJcbiAgVGFEcm9wZG93bk1vZHVsZSxcclxuICBUYVRhYnNldE1vZHVsZSxcclxuICBUYVRhZ3NNb2R1bGUsXHJcbiAgVGFUb29sdGlwTW9kdWxlXHJcbn0gZnJvbSAnQHRydXN0YXJjL3VpLXRvb2xraXQnO1xyXG5cclxuaW1wb3J0IHsgRGVsZXRlTW9kYWxNb2R1bGUgfSBmcm9tICcuLi9kZWxldGUtbW9kYWwnO1xyXG5pbXBvcnQgeyBJbml0aWFsSW5kaWNhdG9yTW9kdWxlIH0gZnJvbSAnLi4vaW5pdGlhbC1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBRdWVzdGlvbk1vZHVsZSB9IGZyb20gJy4uL3F1ZXN0aW9uJztcclxuaW1wb3J0IHsgUXVlc3Rpb25BY2NvcmRpb25Nb2R1bGUgfSBmcm9tICcuLi9xdWVzdGlvbi1hY2NvcmRpb24nO1xyXG5pbXBvcnQgeyBUYXNrU3RhdHVzVGFnTW9kdWxlIH0gZnJvbSAnLi4vdGFzay1zdGF0dXMtdGFnJztcclxuaW1wb3J0IHsgUXVlc3Rpb25uYWlyZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3F1ZXN0aW9ubmFpcmUtY29udGVudC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtRdWVzdGlvbm5haXJlQ29udGVudENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUXVlc3Rpb25Nb2R1bGUsXHJcbiAgICBRdWVzdGlvbkFjY29yZGlvbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFRhQnV0dG9uc01vZHVsZSxcclxuICAgIFRhVGFic2V0TW9kdWxlLFxyXG4gICAgVGFEcm9wZG93bk1vZHVsZSxcclxuICAgIFRhVGFnc01vZHVsZSxcclxuICAgIFRhc2tTdGF0dXNUYWdNb2R1bGUsXHJcbiAgICBJbml0aWFsSW5kaWNhdG9yTW9kdWxlLFxyXG4gICAgVGFUb29sdGlwTW9kdWxlLFxyXG4gICAgRGVsZXRlTW9kYWxNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtRdWVzdGlvbm5haXJlQ29udGVudENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9ubmFpcmVDb250ZW50TW9kdWxlIHt9XHJcbiJdfQ==