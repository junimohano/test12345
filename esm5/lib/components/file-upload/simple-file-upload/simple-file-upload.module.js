import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaButtonsModule, TaSvgIconModule, TaTooltipModule } from '@trustarc/ui-toolkit';
import { FileDownloadModule } from '../file-download/file-download.module';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { SimpleFileUploadComponent } from './simple-file-upload.component';
var SimpleFileUploadModule = /** @class */ (function () {
    function SimpleFileUploadModule() {
    }
    SimpleFileUploadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SimpleFileUploadComponent],
                    imports: [
                        CommonModule,
                        FileUploadModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TaButtonsModule,
                        TaSvgIconModule,
                        TaTooltipModule,
                        FileDownloadModule
                    ],
                    exports: [SimpleFileUploadComponent]
                },] }
    ];
    return SimpleFileUploadModule;
}());
export { SimpleFileUploadModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZpbGUtdXBsb2FkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkL3NpbXBsZS1maWxlLXVwbG9hZC9zaW1wbGUtZmlsZS11cGxvYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGVBQWUsRUFDZixlQUFlLEVBQ2hCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFM0U7SUFBQTtJQWNxQyxDQUFDOztnQkFkckMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUN6QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2lCQUNyQzs7SUFDb0MsNkJBQUM7Q0FBQSxBQWR0QyxJQWNzQztTQUF6QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBUYUJ1dHRvbnNNb2R1bGUsXHJcbiAgVGFTdmdJY29uTW9kdWxlLFxyXG4gIFRhVG9vbHRpcE1vZHVsZVxyXG59IGZyb20gJ0B0cnVzdGFyYy91aS10b29sa2l0JztcclxuXHJcbmltcG9ydCB7IEZpbGVEb3dubG9hZE1vZHVsZSB9IGZyb20gJy4uL2ZpbGUtZG93bmxvYWQvZmlsZS1kb3dubG9hZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnLi4vZmlsZS11cGxvYWQvZmlsZS11cGxvYWQubW9kdWxlJztcclxuaW1wb3J0IHsgU2ltcGxlRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlLWZpbGUtdXBsb2FkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NpbXBsZUZpbGVVcGxvYWRDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBUYUJ1dHRvbnNNb2R1bGUsXHJcbiAgICBUYVN2Z0ljb25Nb2R1bGUsXHJcbiAgICBUYVRvb2x0aXBNb2R1bGUsXHJcbiAgICBGaWxlRG93bmxvYWRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtTaW1wbGVGaWxlVXBsb2FkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlRmlsZVVwbG9hZE1vZHVsZSB7fVxyXG4iXX0=