export var FORMAT = {
    jpg: {
        exts: ['jpg', 'jpeg'],
        mime: [
            'image/jpeg',
            'image/jpg',
            'image/jp_',
            'application/jpg',
            'application/x-jpg',
            'image/pjpeg',
            'image/pipeg',
            'image/vnd.swiftview-jpeg',
            'image/x-xbitmap'
        ]
    },
    png: {
        exts: ['png'],
        mime: ['image/png', 'application/png', 'application/x-png']
    },
    gif: {
        exts: ['gif'],
        mime: ['image/gif', 'image/x-xbitmap', 'image/gi_']
    },
    csv: {
        exts: ['csv'],
        mime: [
            'text/comma-separated-values',
            'text/csv',
            'application/csv',
            'application/excel',
            'application/vnd.ms-excel',
            'application/vnd.msexcel',
            'text/anytext'
        ]
    },
    tsv: {
        exts: ['tsv'],
        mime: ['text/tab-separated-values']
    },
    zip: {
        exts: ['zip'],
        mime: [
            'application/zip',
            'application/x-zip',
            'application/x-zip-compressed',
            'application/octet-stream',
            'application/x-compress',
            'application/x-compressed',
            'multipart/x-zip'
        ]
    },
    txt: {
        exts: ['txt'],
        mime: [
            'text/plain',
            'application/txt',
            'browser/internal',
            'text/anytext',
            'widetext/plain',
            'widetext/paragraph'
        ]
    },
    doc: {
        exts: ['doc', 'docx'],
        mime: [
            'application/msword [official]',
            'application/doc',
            'application/vnd.msword',
            'application/vnd.ms-word',
            'application/winword',
            'application/word',
            'application/x-msw6',
            'application/x-msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ]
    },
    xsl: {
        exts: ['xsl', 'xlsx'],
        mime: [
            'application/vnd.ms-excel [official]',
            'application/msexcel',
            'application/x-msexcel',
            'application/x-ms-excel',
            'application/vnd.ms-excel',
            'application/x-excel',
            'application/x-dos_ms_excel',
            'application/xls',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ]
    },
    ppt: {
        exts: ['ppt', 'pptx'],
        mime: [
            'application/vnd.ms-powerpoint [official]',
            'application/mspowerpoint',
            'application/ms-powerpoint',
            'application/mspowerpnt',
            'application/vnd-mspowerpoint',
            'application/powerpoint',
            'application/x-powerpoint',
            'application/x-m'
        ]
    },
    rtf: {
        exts: ['rtf'],
        mime: [
            'application/rtf',
            'application/x-rtf',
            'text/rtf',
            'text/richtext',
            'application/msword',
            'application/doc',
            'application/x-soffice'
        ]
    },
    pdf: {
        exts: ['pdf'],
        mime: [
            'application/pdf',
            'application/x-pdf',
            'application/acrobat',
            'applications/vnd.pdf',
            'text/pdf',
            'text/x-pdf'
        ]
    },
    css: {
        exts: ['css'],
        mime: ['text/css', 'application/css-stylesheet']
    },
    js: {
        exts: ['js'],
        mime: ['application/x-javascript', 'text/javascript']
    },
    html: {
        exts: ['html'],
        mime: ['text/html', 'text/plain']
    },
    code: {
        exts: ['php', 'ts'],
        mime: []
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkEsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFvQjtJQUNyQyxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQ3JCLElBQUksRUFBRTtZQUNKLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGFBQWE7WUFDYiwwQkFBMEI7WUFDMUIsaUJBQWlCO1NBQ2xCO0tBQ0Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDYixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7S0FDNUQ7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDYixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxDQUFDO0tBQ3BEO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2IsSUFBSSxFQUFFO1lBQ0osNkJBQTZCO1lBQzdCLFVBQVU7WUFDVixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLDBCQUEwQjtZQUMxQix5QkFBeUI7WUFDekIsY0FBYztTQUNmO0tBQ0Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDYixJQUFJLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUNwQztJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNiLElBQUksRUFBRTtZQUNKLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsOEJBQThCO1lBQzlCLDBCQUEwQjtZQUMxQix3QkFBd0I7WUFDeEIsMEJBQTBCO1lBQzFCLGlCQUFpQjtTQUNsQjtLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2IsSUFBSSxFQUFFO1lBQ0osWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixvQkFBb0I7U0FDckI7S0FDRjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7UUFDckIsSUFBSSxFQUFFO1lBQ0osK0JBQStCO1lBQy9CLGlCQUFpQjtZQUNqQix3QkFBd0I7WUFDeEIseUJBQXlCO1lBQ3pCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLHNCQUFzQjtZQUN0Qix5RUFBeUU7U0FDMUU7S0FDRjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7UUFDckIsSUFBSSxFQUFFO1lBQ0oscUNBQXFDO1lBQ3JDLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQixxQkFBcUI7WUFDckIsNEJBQTRCO1lBQzVCLGlCQUFpQjtZQUNqQixtRUFBbUU7U0FDcEU7S0FDRjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7UUFDckIsSUFBSSxFQUFFO1lBQ0osMENBQTBDO1lBQzFDLDBCQUEwQjtZQUMxQiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLDhCQUE4QjtZQUM5Qix3QkFBd0I7WUFDeEIsMEJBQTBCO1lBQzFCLGlCQUFpQjtTQUNsQjtLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2IsSUFBSSxFQUFFO1lBQ0osaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsdUJBQXVCO1NBQ3hCO0tBQ0Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDYixJQUFJLEVBQUU7WUFDSixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsVUFBVTtZQUNWLFlBQVk7U0FDYjtLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2IsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLDRCQUE0QixDQUFDO0tBQ2pEO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ1osSUFBSSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsaUJBQWlCLENBQUM7S0FDdEQ7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO0tBQ2xDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztRQUNuQixJQUFJLEVBQUUsRUFBRTtLQUNUO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZEZvcm1hdENvbmZpZyB7XHJcbiAganBnPzogYm9vbGVhbjtcclxuICBwbmc/OiBib29sZWFuO1xyXG4gIGdpZj86IGJvb2xlYW47XHJcbiAgY3N2PzogYm9vbGVhbjtcclxuICB0c3Y/OiBib29sZWFuO1xyXG4gIHppcD86IGJvb2xlYW47XHJcbiAgdHh0PzogYm9vbGVhbjtcclxuICBkb2M/OiBib29sZWFuO1xyXG4gIHhzbD86IGJvb2xlYW47XHJcbiAgcHB0PzogYm9vbGVhbjtcclxuICBydGY/OiBib29sZWFuO1xyXG4gIHBkZj86IGJvb2xlYW47XHJcbiAgY3NzPzogYm9vbGVhbjtcclxuICBqcz86IGJvb2xlYW47XHJcbiAgaHRtbD86IGJvb2xlYW47XHJcbiAgY29kZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWF0SW50ZXJmYWNlIHtcclxuICBbeDogc3RyaW5nXToge1xyXG4gICAgZXh0czogc3RyaW5nW107XHJcbiAgICBtaW1lOiBzdHJpbmdbXTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRk9STUFUOiBGb3JtYXRJbnRlcmZhY2UgPSB7XHJcbiAganBnOiB7XHJcbiAgICBleHRzOiBbJ2pwZycsICdqcGVnJ10sXHJcbiAgICBtaW1lOiBbXHJcbiAgICAgICdpbWFnZS9qcGVnJyxcclxuICAgICAgJ2ltYWdlL2pwZycsXHJcbiAgICAgICdpbWFnZS9qcF8nLFxyXG4gICAgICAnYXBwbGljYXRpb24vanBnJyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3gtanBnJyxcclxuICAgICAgJ2ltYWdlL3BqcGVnJyxcclxuICAgICAgJ2ltYWdlL3BpcGVnJyxcclxuICAgICAgJ2ltYWdlL3ZuZC5zd2lmdHZpZXctanBlZycsXHJcbiAgICAgICdpbWFnZS94LXhiaXRtYXAnXHJcbiAgICBdXHJcbiAgfSxcclxuICBwbmc6IHtcclxuICAgIGV4dHM6IFsncG5nJ10sXHJcbiAgICBtaW1lOiBbJ2ltYWdlL3BuZycsICdhcHBsaWNhdGlvbi9wbmcnLCAnYXBwbGljYXRpb24veC1wbmcnXVxyXG4gIH0sXHJcbiAgZ2lmOiB7XHJcbiAgICBleHRzOiBbJ2dpZiddLFxyXG4gICAgbWltZTogWydpbWFnZS9naWYnLCAnaW1hZ2UveC14Yml0bWFwJywgJ2ltYWdlL2dpXyddXHJcbiAgfSxcclxuICBjc3Y6IHtcclxuICAgIGV4dHM6IFsnY3N2J10sXHJcbiAgICBtaW1lOiBbXHJcbiAgICAgICd0ZXh0L2NvbW1hLXNlcGFyYXRlZC12YWx1ZXMnLFxyXG4gICAgICAndGV4dC9jc3YnLFxyXG4gICAgICAnYXBwbGljYXRpb24vY3N2JyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL2V4Y2VsJyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXHJcbiAgICAgICdhcHBsaWNhdGlvbi92bmQubXNleGNlbCcsXHJcbiAgICAgICd0ZXh0L2FueXRleHQnXHJcbiAgICBdXHJcbiAgfSxcclxuICB0c3Y6IHtcclxuICAgIGV4dHM6IFsndHN2J10sXHJcbiAgICBtaW1lOiBbJ3RleHQvdGFiLXNlcGFyYXRlZC12YWx1ZXMnXVxyXG4gIH0sXHJcbiAgemlwOiB7XHJcbiAgICBleHRzOiBbJ3ppcCddLFxyXG4gICAgbWltZTogW1xyXG4gICAgICAnYXBwbGljYXRpb24vemlwJyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3gtemlwJyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3gtemlwLWNvbXByZXNzZWQnLFxyXG4gICAgICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3gtY29tcHJlc3MnLFxyXG4gICAgICAnYXBwbGljYXRpb24veC1jb21wcmVzc2VkJyxcclxuICAgICAgJ211bHRpcGFydC94LXppcCdcclxuICAgIF1cclxuICB9LFxyXG4gIHR4dDoge1xyXG4gICAgZXh0czogWyd0eHQnXSxcclxuICAgIG1pbWU6IFtcclxuICAgICAgJ3RleHQvcGxhaW4nLFxyXG4gICAgICAnYXBwbGljYXRpb24vdHh0JyxcclxuICAgICAgJ2Jyb3dzZXIvaW50ZXJuYWwnLFxyXG4gICAgICAndGV4dC9hbnl0ZXh0JyxcclxuICAgICAgJ3dpZGV0ZXh0L3BsYWluJyxcclxuICAgICAgJ3dpZGV0ZXh0L3BhcmFncmFwaCdcclxuICAgIF1cclxuICB9LFxyXG4gIGRvYzoge1xyXG4gICAgZXh0czogWydkb2MnLCAnZG9jeCddLFxyXG4gICAgbWltZTogW1xyXG4gICAgICAnYXBwbGljYXRpb24vbXN3b3JkIFtvZmZpY2lhbF0nLFxyXG4gICAgICAnYXBwbGljYXRpb24vZG9jJyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5tc3dvcmQnLFxyXG4gICAgICAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmQnLFxyXG4gICAgICAnYXBwbGljYXRpb24vd2lud29yZCcsXHJcbiAgICAgICdhcHBsaWNhdGlvbi93b3JkJyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3gtbXN3NicsXHJcbiAgICAgICdhcHBsaWNhdGlvbi94LW1zd29yZCcsXHJcbiAgICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCdcclxuICAgIF1cclxuICB9LFxyXG4gIHhzbDoge1xyXG4gICAgZXh0czogWyd4c2wnLCAneGxzeCddLFxyXG4gICAgbWltZTogW1xyXG4gICAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsIFtvZmZpY2lhbF0nLFxyXG4gICAgICAnYXBwbGljYXRpb24vbXNleGNlbCcsXHJcbiAgICAgICdhcHBsaWNhdGlvbi94LW1zZXhjZWwnLFxyXG4gICAgICAnYXBwbGljYXRpb24veC1tcy1leGNlbCcsXHJcbiAgICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxyXG4gICAgICAnYXBwbGljYXRpb24veC1leGNlbCcsXHJcbiAgICAgICdhcHBsaWNhdGlvbi94LWRvc19tc19leGNlbCcsXHJcbiAgICAgICdhcHBsaWNhdGlvbi94bHMnLFxyXG4gICAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnXHJcbiAgICBdXHJcbiAgfSxcclxuICBwcHQ6IHtcclxuICAgIGV4dHM6IFsncHB0JywgJ3BwdHgnXSxcclxuICAgIG1pbWU6IFtcclxuICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50IFtvZmZpY2lhbF0nLFxyXG4gICAgICAnYXBwbGljYXRpb24vbXNwb3dlcnBvaW50JyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL21zLXBvd2VycG9pbnQnLFxyXG4gICAgICAnYXBwbGljYXRpb24vbXNwb3dlcnBudCcsXHJcbiAgICAgICdhcHBsaWNhdGlvbi92bmQtbXNwb3dlcnBvaW50JyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3Bvd2VycG9pbnQnLFxyXG4gICAgICAnYXBwbGljYXRpb24veC1wb3dlcnBvaW50JyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3gtbSdcclxuICAgIF1cclxuICB9LFxyXG4gIHJ0Zjoge1xyXG4gICAgZXh0czogWydydGYnXSxcclxuICAgIG1pbWU6IFtcclxuICAgICAgJ2FwcGxpY2F0aW9uL3J0ZicsXHJcbiAgICAgICdhcHBsaWNhdGlvbi94LXJ0ZicsXHJcbiAgICAgICd0ZXh0L3J0ZicsXHJcbiAgICAgICd0ZXh0L3JpY2h0ZXh0JyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXHJcbiAgICAgICdhcHBsaWNhdGlvbi9kb2MnLFxyXG4gICAgICAnYXBwbGljYXRpb24veC1zb2ZmaWNlJ1xyXG4gICAgXVxyXG4gIH0sXHJcbiAgcGRmOiB7XHJcbiAgICBleHRzOiBbJ3BkZiddLFxyXG4gICAgbWltZTogW1xyXG4gICAgICAnYXBwbGljYXRpb24vcGRmJyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL3gtcGRmJyxcclxuICAgICAgJ2FwcGxpY2F0aW9uL2Fjcm9iYXQnLFxyXG4gICAgICAnYXBwbGljYXRpb25zL3ZuZC5wZGYnLFxyXG4gICAgICAndGV4dC9wZGYnLFxyXG4gICAgICAndGV4dC94LXBkZidcclxuICAgIF1cclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgZXh0czogWydjc3MnXSxcclxuICAgIG1pbWU6IFsndGV4dC9jc3MnLCAnYXBwbGljYXRpb24vY3NzLXN0eWxlc2hlZXQnXVxyXG4gIH0sXHJcbiAganM6IHtcclxuICAgIGV4dHM6IFsnanMnXSxcclxuICAgIG1pbWU6IFsnYXBwbGljYXRpb24veC1qYXZhc2NyaXB0JywgJ3RleHQvamF2YXNjcmlwdCddXHJcbiAgfSxcclxuICBodG1sOiB7XHJcbiAgICBleHRzOiBbJ2h0bWwnXSxcclxuICAgIG1pbWU6IFsndGV4dC9odG1sJywgJ3RleHQvcGxhaW4nXVxyXG4gIH0sXHJcbiAgY29kZToge1xyXG4gICAgZXh0czogWydwaHAnLCAndHMnXSxcclxuICAgIG1pbWU6IFtdXHJcbiAgfVxyXG59O1xyXG4iXX0=