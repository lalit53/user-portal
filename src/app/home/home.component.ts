import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notify: string;
  products: Product[];
  constructor(private router: Router, private route: ActivatedRoute,private productService: ProductService,public auth: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const key1 = 'loggedin';
      if (params[key1] === 'success') {
        this.notify = 'You have been successfully loggedin. Welcome home';
      }

      this.getProducts();
    });
    
  }

  getProducts() {
    return this.productService.getProducts()
      .subscribe(
        products => {
          console.log(products);
          this.products = products
        }
      );
  }

  

}
