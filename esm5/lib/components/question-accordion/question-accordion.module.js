import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaButtonsModule, TaDropdownModule, TaProgressbarModule, TaRadioModule, TaSvgIconModule, TaToggleSwitchModule } from '@trustarc/ui-toolkit';
import { CommentsPopoverModule } from '../comments-popover';
import { SimpleFileUploadModule } from '../file-upload';
import { QuestionModule } from '../question';
import { QuestionMoreMenuComponent } from './components/question-more-menu/question-more-menu.component';
import { QuestionAccordionComponent } from './question-accordion.component';
var uiToolkitModules = [
    TaRadioModule,
    TaProgressbarModule,
    TaSvgIconModule,
    TaButtonsModule,
    TaDropdownModule
];
var QuestionAccordionModule = /** @class */ (function () {
    function QuestionAccordionModule() {
    }
    QuestionAccordionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [QuestionAccordionComponent, QuestionMoreMenuComponent],
                    imports: tslib_1.__spread([
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                        QuestionModule,
                        CommentsPopoverModule,
                        SimpleFileUploadModule,
                        TaToggleSwitchModule
                    ], uiToolkitModules),
                    exports: [QuestionAccordionComponent, QuestionMoreMenuComponent]
                },] }
    ];
    return QuestionAccordionModule;
}());
export { QuestionAccordionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9uLWFjY29yZGlvbi9xdWVzdGlvbi1hY2NvcmRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLGFBQWEsRUFDYixlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3JCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RSxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7Q0FDakIsQ0FBQztBQUVGO0lBQUE7SUFjc0MsQ0FBQzs7Z0JBZHRDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx5QkFBeUIsQ0FBQztvQkFDckUsT0FBTzt3QkFDTCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixvQkFBb0I7dUJBQ2pCLGdCQUFnQixDQUNwQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx5QkFBeUIsQ0FBQztpQkFDakU7O0lBQ3FDLDhCQUFDO0NBQUEsQUFkdkMsSUFjdUM7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgVGFCdXR0b25zTW9kdWxlLFxyXG4gIFRhRHJvcGRvd25Nb2R1bGUsXHJcbiAgVGFQcm9ncmVzc2Jhck1vZHVsZSxcclxuICBUYVJhZGlvTW9kdWxlLFxyXG4gIFRhU3ZnSWNvbk1vZHVsZSxcclxuICBUYVRvZ2dsZVN3aXRjaE1vZHVsZVxyXG59IGZyb20gJ0B0cnVzdGFyYy91aS10b29sa2l0JztcclxuXHJcbmltcG9ydCB7IENvbW1lbnRzUG9wb3Zlck1vZHVsZSB9IGZyb20gJy4uL2NvbW1lbnRzLXBvcG92ZXInO1xyXG5pbXBvcnQgeyBTaW1wbGVGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnLi4vZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbk1vZHVsZSB9IGZyb20gJy4uL3F1ZXN0aW9uJztcclxuaW1wb3J0IHsgUXVlc3Rpb25Nb3JlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9xdWVzdGlvbi1tb3JlLW1lbnUvcXVlc3Rpb24tbW9yZS1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9xdWVzdGlvbi1hY2NvcmRpb24uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHVpVG9vbGtpdE1vZHVsZXMgPSBbXHJcbiAgVGFSYWRpb01vZHVsZSxcclxuICBUYVByb2dyZXNzYmFyTW9kdWxlLFxyXG4gIFRhU3ZnSWNvbk1vZHVsZSxcclxuICBUYUJ1dHRvbnNNb2R1bGUsXHJcbiAgVGFEcm9wZG93bk1vZHVsZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtRdWVzdGlvbkFjY29yZGlvbkNvbXBvbmVudCwgUXVlc3Rpb25Nb3JlTWVudUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUXVlc3Rpb25Nb2R1bGUsXHJcbiAgICBDb21tZW50c1BvcG92ZXJNb2R1bGUsXHJcbiAgICBTaW1wbGVGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgVGFUb2dnbGVTd2l0Y2hNb2R1bGUsXHJcbiAgICAuLi51aVRvb2xraXRNb2R1bGVzXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUXVlc3Rpb25BY2NvcmRpb25Db21wb25lbnQsIFF1ZXN0aW9uTW9yZU1lbnVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkFjY29yZGlvbk1vZHVsZSB7fVxyXG4iXX0=