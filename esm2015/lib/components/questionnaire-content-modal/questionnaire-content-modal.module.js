import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaButtonsModule, TaModalModule, TaSvgIconModule } from '@trustarc/ui-toolkit';
import { QuestionnaireContentModule } from '../questionnaire-content';
import { QuestionnaireContentModalComponent } from './questionnaire-content-modal.component';
export class QuestionnaireContentModalModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS1jb250ZW50LW1vZGFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUtY29udGVudC1tb2RhbC9xdWVzdGlvbm5haXJlLWNvbnRlbnQtbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDaEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQWM3RixNQUFNLE9BQU8sK0JBQStCOzs7WUFaM0MsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUNsRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYiwwQkFBMEI7aUJBQzNCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUM3QyxlQUFlLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgVGFCdXR0b25zTW9kdWxlLFxyXG4gIFRhTW9kYWxNb2R1bGUsXHJcbiAgVGFTdmdJY29uTW9kdWxlXHJcbn0gZnJvbSAnQHRydXN0YXJjL3VpLXRvb2xraXQnO1xyXG5cclxuaW1wb3J0IHsgUXVlc3Rpb25uYWlyZUNvbnRlbnRNb2R1bGUgfSBmcm9tICcuLi9xdWVzdGlvbm5haXJlLWNvbnRlbnQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbm5haXJlQ29udGVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9xdWVzdGlvbm5haXJlLWNvbnRlbnQtbW9kYWwuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbUXVlc3Rpb25uYWlyZUNvbnRlbnRNb2RhbENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVGFCdXR0b25zTW9kdWxlLFxyXG4gICAgVGFTdmdJY29uTW9kdWxlLFxyXG4gICAgVGFNb2RhbE1vZHVsZSxcclxuICAgIFF1ZXN0aW9ubmFpcmVDb250ZW50TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUXVlc3Rpb25uYWlyZUNvbnRlbnRNb2RhbENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUXVlc3Rpb25uYWlyZUNvbnRlbnRNb2RhbENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9ubmFpcmVDb250ZW50TW9kYWxNb2R1bGUge31cclxuIl19