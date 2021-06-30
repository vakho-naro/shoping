import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  url = 'http://localhost:3000/shops';

  constructor(private http:HttpClient) { }
  getList(){
    console.log('data');
    return this.http.get(this.url)
  }
  saveShop(data: any) {
    return this.http.post(this.url, data)
  }
  deleteShop(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentShop(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }
  updateShop(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
