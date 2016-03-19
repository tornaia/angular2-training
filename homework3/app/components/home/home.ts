import {Component} from 'angular2/core';
import { NgFor} from 'angular2/common';
import CarouselComponent from '../carousel/carousel';
import ProductItemComponent from '../product-item/product-item';
import {RouterLink, RouteParams} from 'angular2/router';
import {Product, Review, ProductService} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
    selector: 'auction-home-page',
    directives: [
        NgFor,
        CarouselComponent,
        ProductItemComponent
    ],
    styleUrls: ['app/components/home/home.css'],
    template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <auction-carousel></auction-carousel>
      </div>
    </div>
    <div class="row">
      <div *ngFor="#product of products" class="col-sm-4 col-lg-4 col-md-4">
        <auction-product-item [product]="product"></auction-product-item>
      </div>
    </div>
  `
})
export default class HomeComponent {
    products: Product[] = [];

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}