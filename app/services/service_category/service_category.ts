import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    url_api = "/muahangmy/app/service_api/api_category.php";

    constructor(private http: Http) { }

    getCategoryList() {
        return this.http.get(this.url_api).map(res => res.json());
    }


}