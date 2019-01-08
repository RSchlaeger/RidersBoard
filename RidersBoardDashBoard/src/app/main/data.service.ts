import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { DashBoardItem } from '../models/dashbaordItem.model';


@Injectable()
export class DataService {

    private dashboardID = '18282823-123812381238-1238712371273-1238123812';
    private item: DashBoardItem;
    private arr: DashBoardItem[] = [];

    constructor(private http: HttpClient) { }


    GetLayoutFromBackend(): Observable<DashBoardItem[]> {

        var result = this.http.get(environment.baseUrl + "dashboard/" + this.dashboardID + '?' + environment.allDashboardsAuth).pipe(map(val => {
            return <DashBoardItem[]>val;
        }));
        return result;
    }

    private SeparateItemsObject() {

    }

}