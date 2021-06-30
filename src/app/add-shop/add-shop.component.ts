import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
alert:boolean = false;
  addShop = new FormGroup({
    name: new FormControl(''),
    adress: new FormControl(''),
  })

  constructor(private shop: ShopService) { }

  ngOnInit(): void {
  }

  collectShop() {
    // console.log(this.addShop.value)
    this.shop.saveShop(this.addShop.value).subscribe((result)=> {
      this.alert = true
      this.addShop.reset({})    
    })
  }

  closeAlert() {
    this.alert = false
  }

}
