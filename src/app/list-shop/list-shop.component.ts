import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.css']
})
export class ListShopComponent implements OnInit {
  collection: any = {};
  constructor(private shop:ShopService) {
    
   }

  ngOnInit(): void {
    this.shop.getList().subscribe((res)=> {
      console.log(res)
      this.collection = res
    })
  }

  deleteShop(item: any) {
    this.collection.splice(item - 1, 1)
    this.shop.deleteShop(item).subscribe((res)=> {
      console.log(res)
    })
  }

}
