import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-update-shop',
  templateUrl: './update-shop.component.html',
  styleUrls: ['./update-shop.component.css']
})
export class UpdateShopComponent implements OnInit {
  alert:boolean = false;
  editShop = new FormGroup({
    name: new FormControl(''),
    adress: new FormControl(''),
  })

  constructor(private shop: ShopService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.shop.getCurrentShop(this.route.snapshot.params.id).subscribe((res: any)=> {
      this.editShop = new FormGroup({
        name: new FormControl(res["name"]),
        adress: new FormControl(res["adress"]),
      })
    })
  }

  collection() {
    console.log(this.editShop.value);
    this.shop.updateShop(this.route.snapshot.params.id, this.editShop.value).subscribe((res)=>{
      console.log(res)
    })
    this.alert = true
  }

  closeAlert() {
    this.alert = false
  }

}
