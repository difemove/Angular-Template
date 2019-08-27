import { Component, OnInit,Input,Output } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
@Input() products:Product[];

  constructor() { }

  ngOnInit() {
    
    this.setProducts(
      [
        {
          productDescription:"prod1",
          code:"cod"
        }
      ]
    )

  }
public setProducts(p:Product[]):void{
  this.products=p;

}
}
