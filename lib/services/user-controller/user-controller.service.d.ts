import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageInterface } from '../../interfaces/page.interface';
import { Assignee } from '../../models/assignee.model';
export declare class UserControllerService {
    private httpClient;
    private veritasApiProxyPrefixUrl;
    private readonly url;
    private readonly maxRows;
    constructor(httpClient: HttpClient, veritasApiProxyPrefixUrl: string);
    getUsers$(page: number, search?: string): Observable<PageInterface<Assignee>>;
}
