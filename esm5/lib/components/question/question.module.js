import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaButtonsModule, TaDropdownModule, TaProgressbarModule, TaRadioModule, TaSvgIconModule, TaTooltipModule } from '@trustarc/ui-toolkit';
import { SimpleFileUploadModule } from '../file-upload';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { SingleSelectComponent } from './components/single-select/single-select.component';
import { TextComponent } from './components/text/text.component';
import { QuestionComponent } from './question.component';
var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        QuestionComponent,
                        MultiSelectComponent,
                        SingleSelectComponent,
                        TextComponent
                    ],
                    imports: [
                        CommonModule,
                        TaRadioModule,
                        ReactiveFormsModule,
                        FormsModule,
                        TaButtonsModule,
                        TaSvgIconModule,
                        TaDropdownModule,
                        TaTooltipModule,
                        SimpleFileUploadModule,
                        TaProgressbarModule
                    ],
                    exports: [QuestionComponent]
                },] }
    ];
    return QuestionModule;
}());
export { QuestionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy11aS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLGVBQWUsRUFDZixlQUFlLEVBQ2hCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpEO0lBQUE7SUFxQjZCLENBQUM7O2dCQXJCN0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2Ysc0JBQXNCO3dCQUN0QixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3Qjs7SUFDNEIscUJBQUM7Q0FBQSxBQXJCOUIsSUFxQjhCO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBUYUJ1dHRvbnNNb2R1bGUsXHJcbiAgVGFEcm9wZG93bk1vZHVsZSxcclxuICBUYVByb2dyZXNzYmFyTW9kdWxlLFxyXG4gIFRhUmFkaW9Nb2R1bGUsXHJcbiAgVGFTdmdJY29uTW9kdWxlLFxyXG4gIFRhVG9vbHRpcE1vZHVsZVxyXG59IGZyb20gJ0B0cnVzdGFyYy91aS10b29sa2l0JztcclxuXHJcbmltcG9ydCB7IFNpbXBsZUZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICcuLi9maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IE11bHRpU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2luZ2xlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpbmdsZS1zZWxlY3Qvc2luZ2xlLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcXVlc3Rpb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBRdWVzdGlvbkNvbXBvbmVudCxcclxuICAgIE11bHRpU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgU2luZ2xlU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgVGV4dENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVGFSYWRpb01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFRhQnV0dG9uc01vZHVsZSxcclxuICAgIFRhU3ZnSWNvbk1vZHVsZSxcclxuICAgIFRhRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBUYVRvb2x0aXBNb2R1bGUsXHJcbiAgICBTaW1wbGVGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgVGFQcm9ncmVzc2Jhck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1F1ZXN0aW9uQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25Nb2R1bGUge31cclxuIl19