import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaButtonsModule, TaSvgIconModule, TaTooltipModule } from '@trustarc/ui-toolkit';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadValidationService } from './file-upload.validation.service';
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FileUploadComponent],
                    imports: [CommonModule, TaButtonsModule, TaSvgIconModule, TaTooltipModule],
                    exports: [FileUploadComponent],
                    providers: [FileUploadValidationService]
                },] }
    ];
    return FileUploadModule;
}());
export { FileUploadModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy11aS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsZUFBZSxFQUNmLGVBQWUsRUFDaEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRTtJQUFBO0lBTStCLENBQUM7O2dCQU4vQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztvQkFDMUUsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQzlCLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN6Qzs7SUFDOEIsdUJBQUM7Q0FBQSxBQU5oQyxJQU1nQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFRhQnV0dG9uc01vZHVsZSxcclxuICBUYVN2Z0ljb25Nb2R1bGUsXHJcbiAgVGFUb29sdGlwTW9kdWxlXHJcbn0gZnJvbSAnQHRydXN0YXJjL3VpLXRvb2xraXQnO1xyXG5cclxuaW1wb3J0IHsgRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vZmlsZS11cGxvYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9maWxlLXVwbG9hZC52YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtGaWxlVXBsb2FkQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUYUJ1dHRvbnNNb2R1bGUsIFRhU3ZnSWNvbk1vZHVsZSwgVGFUb29sdGlwTW9kdWxlXSxcclxuICBleHBvcnRzOiBbRmlsZVVwbG9hZENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbRmlsZVVwbG9hZFZhbGlkYXRpb25TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZE1vZHVsZSB7fVxyXG4iXX0=