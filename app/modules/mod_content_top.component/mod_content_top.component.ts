import { Component, OnInit, Input } from '@angular/core';
import { ProductType } from '../../models/product_type/product_type';
import { PRODUCTTYPE } from '../../models/product_type/mock_product_type';

@Component({
    moduleId: module.id,
    selector: 'mod_content_top',
    templateUrl: 'mod_content_top.component.html',
    inputs: ['product_type']
})
export class ModContentTopComponent implements OnInit {
    product_type = 1;
    product_types: ProductType[];
    product_name: string;
    constructor() { }

    ngOnInit() {
        this.product_types= PRODUCTTYPE;
        for (let item in this.product_types)
        {
            if(this.product_types[item].product_type_id == this.product_type)
            {
                this.product_name= this.product_types[item].product_type_name;
            }
            
        }
    }
}