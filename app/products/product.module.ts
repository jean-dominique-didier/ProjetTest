import {ProductService} from './product.service';
import {ProductDetailGuard} from './product-guard.service';
import {NgModule} from '@angular/core';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    providers: [
        ProductDetailGuard,
        ProductService
     ]
})

export class ProductModule {}