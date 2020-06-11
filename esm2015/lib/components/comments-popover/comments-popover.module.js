import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaMentionModule } from '@trustarc/mention';
import { TaButtonsModule, TaCheckboxModule, TaDropdownModule, TaPopoverModule, TaSvgIconModule } from '@trustarc/ui-toolkit';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InitialIndicatorModule } from '../initial-indicator';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentsPopoverComponent } from './comments-popover.component';
export class CommentsPopoverModule {
}
CommentsPopoverModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CommentsPopoverComponent, CommentFormComponent],
                imports: [
                    CommonModule,
                    TaSvgIconModule,
                    TaButtonsModule,
                    TaPopoverModule,
                    InitialIndicatorModule,
                    TaDropdownModule,
                    TaCheckboxModule,
                    FormsModule,
                    ReactiveFormsModule,
                    TaMentionModule,
                    NgxSkeletonLoaderModule
                ],
                exports: [CommentsPopoverComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMtcG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb21tZW50cy1wb3BvdmVyL2NvbW1lbnRzLXBvcG92ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixlQUFlLEVBQ2hCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFtQnhFLE1BQU0sT0FBTyxxQkFBcUI7OztZQWpCakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDO2dCQUM5RCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRhTWVudGlvbk1vZHVsZSB9IGZyb20gJ0B0cnVzdGFyYy9tZW50aW9uJztcclxuaW1wb3J0IHtcclxuICBUYUJ1dHRvbnNNb2R1bGUsXHJcbiAgVGFDaGVja2JveE1vZHVsZSxcclxuICBUYURyb3Bkb3duTW9kdWxlLFxyXG4gIFRhUG9wb3Zlck1vZHVsZSxcclxuICBUYVN2Z0ljb25Nb2R1bGVcclxufSBmcm9tICdAdHJ1c3RhcmMvdWktdG9vbGtpdCc7XHJcbmltcG9ydCB7IE5neFNrZWxldG9uTG9hZGVyTW9kdWxlIH0gZnJvbSAnbmd4LXNrZWxldG9uLWxvYWRlcic7XHJcblxyXG5pbXBvcnQgeyBJbml0aWFsSW5kaWNhdG9yTW9kdWxlIH0gZnJvbSAnLi4vaW5pdGlhbC1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBDb21tZW50Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tZW50c1BvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbW1lbnRzLXBvcG92ZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ29tbWVudHNQb3BvdmVyQ29tcG9uZW50LCBDb21tZW50Rm9ybUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVGFTdmdJY29uTW9kdWxlLFxyXG4gICAgVGFCdXR0b25zTW9kdWxlLFxyXG4gICAgVGFQb3BvdmVyTW9kdWxlLFxyXG4gICAgSW5pdGlhbEluZGljYXRvck1vZHVsZSxcclxuICAgIFRhRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBUYUNoZWNrYm94TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgVGFNZW50aW9uTW9kdWxlLFxyXG4gICAgTmd4U2tlbGV0b25Mb2FkZXJNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtDb21tZW50c1BvcG92ZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50c1BvcG92ZXJNb2R1bGUge31cclxuIl19