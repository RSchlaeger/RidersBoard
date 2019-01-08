import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TimeModel } from '../models/time.model';
import { Observable } from 'rxjs';

@Injectable()
export class TimeService {

    constructor(private http: HttpClient) { }

    public getCurrentTime(city: string, country: string): Observable<TimeModel> {
        let url = environment["baseUrl"] + "time?city=" + city + ",+" + country + "&code=" + environment['timeAuth'];

        let result = this.http.get<TimeModel>(url);

        return result;
    }
}