import * as _ from 'lodash';
export function stringContains(value, search) {
    return value.toLowerCase().indexOf(search.toLowerCase()) !== -1;
}
export function generateErrorMessage(message, httpError) {
    return httpError && httpError.error && httpError.error.message
        ? `${message} (${httpError.error.message})`
        : message;
}
export function onlyUnique(value, index, self) {
    return (index ===
        self.findIndex(selfValue => JSON.stringify(selfValue) === JSON.stringify(value)));
}
export const nameOf = (name) => name;
export function flatMap(items, key) {
    return [].concat(...items.map(item => item[key]));
}
export function getZoneOffset() {
    const timezoneOffset = new Date().getTimezoneOffset();
    const isNegative = timezoneOffset < 0;
    let zoneOffset = (timezoneOffset * (isNegative ? -1 : 1)).toString();
    for (let i = zoneOffset.toString().length; i < 4; i++) {
        zoneOffset = '0' + zoneOffset;
    }
    return isNegative ? '-' : '+' + zoneOffset;
}
export function getEnumKeys(enumType) {
    return Object.keys(enumType).filter(type => isNaN(type) && type !== 'values');
}
export function isPropertyChanged(simpleChange) {
    return (simpleChange && simpleChange.previousValue !== simpleChange.currentValue);
}
export function omitDeep(collection, ...excludeKeys) {
    function omitFn(value) {
        if (value && typeof value === 'object') {
            excludeKeys.forEach(key => {
                delete value[key];
            });
        }
    }
    const clonedCollection = _.cloneDeep(collection);
    return _.cloneDeepWith(clonedCollection, omitFn);
}
export function getProgress(loaded, total) {
    return Math.round((loaded / total) * 100);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFhLEVBQUUsTUFBYztJQUMxRCxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxPQUFlLEVBQUUsU0FBYztJQUNsRSxPQUFPLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTztRQUM1RCxDQUFDLENBQUMsR0FBRyxPQUFPLEtBQUssU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUc7UUFDM0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQVUsRUFBRSxLQUFhLEVBQUUsSUFBVztJQUMvRCxPQUFPLENBQ0wsS0FBSztRQUNMLElBQUksQ0FBQyxTQUFTLENBQ1osU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQ2pFLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FBSSxJQUE4QixFQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFFMUUsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBWSxFQUNaLEdBQVc7SUFFWCxPQUFRLEVBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRCxDQUFDO0FBRUQsTUFBTSxVQUFVLGFBQWE7SUFDM0IsTUFBTSxjQUFjLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3RELE1BQU0sVUFBVSxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDdEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXJFLEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JELFVBQVUsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDO0tBQy9CO0lBRUQsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztBQUM3QyxDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxRQUFhO0lBQ3ZDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFNLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxRQUFRLENBQzlDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFlBQTBCO0lBQzFELE9BQU8sQ0FDTCxZQUFZLElBQUksWUFBWSxDQUFDLGFBQWEsS0FBSyxZQUFZLENBQUMsWUFBWSxDQUN6RSxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsVUFBZSxFQUFFLEdBQUcsV0FBcUI7SUFDaEUsU0FBUyxNQUFNLENBQUMsS0FBVTtRQUN4QixJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFakQsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQWMsRUFBRSxLQUFhO0lBQ3ZELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdDb250YWlucyh2YWx1ZTogc3RyaW5nLCBzZWFyY2g6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRXJyb3JNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgaHR0cEVycm9yOiBhbnkpOiBzdHJpbmcge1xyXG4gIHJldHVybiBodHRwRXJyb3IgJiYgaHR0cEVycm9yLmVycm9yICYmIGh0dHBFcnJvci5lcnJvci5tZXNzYWdlXHJcbiAgICA/IGAke21lc3NhZ2V9ICgke2h0dHBFcnJvci5lcnJvci5tZXNzYWdlfSlgXHJcbiAgICA6IG1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbmx5VW5pcXVlKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIsIHNlbGY6IGFueVtdKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChcclxuICAgIGluZGV4ID09PVxyXG4gICAgc2VsZi5maW5kSW5kZXgoXHJcbiAgICAgIHNlbGZWYWx1ZSA9PiBKU09OLnN0cmluZ2lmeShzZWxmVmFsdWUpID09PSBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxuICAgIClcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmFtZU9mID0gPFQ+KG5hbWU6IEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPik6IHN0cmluZyA9PiBuYW1lO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXRNYXA8VERlc3RpbmF0aW9uPihcclxuICBpdGVtczogYW55W10sXHJcbiAga2V5OiBzdHJpbmdcclxuKTogVERlc3RpbmF0aW9uW10ge1xyXG4gIHJldHVybiAoW10gYXMgYW55W10pLmNvbmNhdCguLi5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtW2tleV0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVPZmZzZXQoKTogc3RyaW5nIHtcclxuICBjb25zdCB0aW1lem9uZU9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuICBjb25zdCBpc05lZ2F0aXZlID0gdGltZXpvbmVPZmZzZXQgPCAwO1xyXG4gIGxldCB6b25lT2Zmc2V0ID0gKHRpbWV6b25lT2Zmc2V0ICogKGlzTmVnYXRpdmUgPyAtMSA6IDEpKS50b1N0cmluZygpO1xyXG5cclxuICBmb3IgKGxldCBpID0gem9uZU9mZnNldC50b1N0cmluZygpLmxlbmd0aDsgaSA8IDQ7IGkrKykge1xyXG4gICAgem9uZU9mZnNldCA9ICcwJyArIHpvbmVPZmZzZXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNOZWdhdGl2ZSA/ICctJyA6ICcrJyArIHpvbmVPZmZzZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnVtS2V5cyhlbnVtVHlwZTogYW55KTogc3RyaW5nW10ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhlbnVtVHlwZSkuZmlsdGVyKFxyXG4gICAgdHlwZSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvcGVydHlDaGFuZ2VkKHNpbXBsZUNoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChcclxuICAgIHNpbXBsZUNoYW5nZSAmJiBzaW1wbGVDaGFuZ2UucHJldmlvdXNWYWx1ZSAhPT0gc2ltcGxlQ2hhbmdlLmN1cnJlbnRWYWx1ZVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbWl0RGVlcChjb2xsZWN0aW9uOiBhbnksIC4uLmV4Y2x1ZGVLZXlzOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgZnVuY3Rpb24gb21pdEZuKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGV4Y2x1ZGVLZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBkZWxldGUgdmFsdWVba2V5XTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9uZWRDb2xsZWN0aW9uID0gXy5jbG9uZURlZXAoY29sbGVjdGlvbik7XHJcblxyXG4gIHJldHVybiBfLmNsb25lRGVlcFdpdGgoY2xvbmVkQ29sbGVjdGlvbiwgb21pdEZuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2dyZXNzKGxvYWRlZDogbnVtYmVyLCB0b3RhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZCgobG9hZGVkIC8gdG90YWwpICogMTAwKTtcclxufVxyXG4iXX0=