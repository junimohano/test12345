import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaButtonsModule, TaDropdownModule, TaProgressbarModule, TaRadioModule, TaSvgIconModule, TaToggleSwitchModule } from '@trustarc/ui-toolkit';
import { CommentsPopoverModule } from '../comments-popover';
import { SimpleFileUploadModule } from '../file-upload';
import { QuestionModule } from '../question';
import { QuestionMoreMenuComponent } from './components/question-more-menu/question-more-menu.component';
import { QuestionAccordionComponent } from './question-accordion.component';
const uiToolkitModules = [
    TaRadioModule,
    TaProgressbarModule,
    TaSvgIconModule,
    TaButtonsModule,
    TaDropdownModule
];
export class QuestionAccordionModule {
}
QuestionAccordionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [QuestionAccordionComponent, QuestionMoreMenuComponent],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    QuestionModule,
                    CommentsPopoverModule,
                    SimpleFileUploadModule,
                    TaToggleSwitchModule,
                    ...uiToolkitModules
                ],
                exports: [QuestionAccordionComponent, QuestionMoreMenuComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9uLWFjY29yZGlvbi9xdWVzdGlvbi1hY2NvcmRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLGVBQWUsRUFDZixvQkFBb0IsRUFDckIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTVFLE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtDQUNqQixDQUFDO0FBZ0JGLE1BQU0sT0FBTyx1QkFBdUI7OztZQWRuQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsMEJBQTBCLEVBQUUseUJBQXlCLENBQUM7Z0JBQ3JFLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLEdBQUcsZ0JBQWdCO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx5QkFBeUIsQ0FBQzthQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1xyXG4gIFRhQnV0dG9uc01vZHVsZSxcclxuICBUYURyb3Bkb3duTW9kdWxlLFxyXG4gIFRhUHJvZ3Jlc3NiYXJNb2R1bGUsXHJcbiAgVGFSYWRpb01vZHVsZSxcclxuICBUYVN2Z0ljb25Nb2R1bGUsXHJcbiAgVGFUb2dnbGVTd2l0Y2hNb2R1bGVcclxufSBmcm9tICdAdHJ1c3RhcmMvdWktdG9vbGtpdCc7XHJcblxyXG5pbXBvcnQgeyBDb21tZW50c1BvcG92ZXJNb2R1bGUgfSBmcm9tICcuLi9jb21tZW50cy1wb3BvdmVyJztcclxuaW1wb3J0IHsgU2ltcGxlRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJy4uL2ZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgUXVlc3Rpb25Nb2R1bGUgfSBmcm9tICcuLi9xdWVzdGlvbic7XHJcbmltcG9ydCB7IFF1ZXN0aW9uTW9yZU1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcXVlc3Rpb24tbW9yZS1tZW51L3F1ZXN0aW9uLW1vcmUtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcXVlc3Rpb24tYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCB1aVRvb2xraXRNb2R1bGVzID0gW1xyXG4gIFRhUmFkaW9Nb2R1bGUsXHJcbiAgVGFQcm9ncmVzc2Jhck1vZHVsZSxcclxuICBUYVN2Z0ljb25Nb2R1bGUsXHJcbiAgVGFCdXR0b25zTW9kdWxlLFxyXG4gIFRhRHJvcGRvd25Nb2R1bGVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbUXVlc3Rpb25BY2NvcmRpb25Db21wb25lbnQsIFF1ZXN0aW9uTW9yZU1lbnVDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFF1ZXN0aW9uTW9kdWxlLFxyXG4gICAgQ29tbWVudHNQb3BvdmVyTW9kdWxlLFxyXG4gICAgU2ltcGxlRmlsZVVwbG9hZE1vZHVsZSxcclxuICAgIFRhVG9nZ2xlU3dpdGNoTW9kdWxlLFxyXG4gICAgLi4udWlUb29sa2l0TW9kdWxlc1xyXG4gIF0sXHJcbiAgZXhwb3J0czogW1F1ZXN0aW9uQWNjb3JkaW9uQ29tcG9uZW50LCBRdWVzdGlvbk1vcmVNZW51Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25BY2NvcmRpb25Nb2R1bGUge31cclxuIl19