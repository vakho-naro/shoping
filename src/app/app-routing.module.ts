import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShopComponent } from './add-shop/add-shop.component';
import { ListShopComponent } from './list-shop/list-shop.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateShopComponent } from './update-shop/update-shop.component';

   const routes: Routes = [  
      { path:'add',
        component: AddShopComponent      
      },
      { path:'list',
        component: ListShopComponent      
      },
      { path:'update/:id',
        component: UpdateShopComponent      
      },
      { path:'login',
        component: LoginComponent      
      },
      { path:'register',
        component: RegisterComponent      
      },
   ];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]  
})

export class AppRoutingModule { }
