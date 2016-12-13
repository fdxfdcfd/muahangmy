import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    // url_api = "/muahangmy/service_api/api_product.php";
    url_api = "/muahangmy/app/service_api/api_product.php";

    constructor(private http: Http) { }

    getListProduct() {
        return this.http.get(this.url_api).map(res => res.json());
    }
    getProductById(id) {
        let body = JSON.stringify({ "id": id });
        let option = new RequestOptions({ method: "post" });
        return this.http.post(this.url_api, body, option).map(res => res.json());
    }
    getProductByProductTypeLimit(product_type){
        let body = JSON.stringify({ "product_type_limit": product_type });
        let option = new RequestOptions({ method: "post" });
        return this.http.post(this.url_api, body, option).map(res => res.json());
    }
    getProductByProductType(product_type){
        let body = JSON.stringify({ "product_type": product_type });
        let option = new RequestOptions({ method: "post" });
        return this.http.post(this.url_api, body, option).map(res => res.json());
    }


}