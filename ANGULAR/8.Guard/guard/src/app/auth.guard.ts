import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state)   => {//kullanmıyoruz, işimize yaramaz)
 
    const token: string |null = localStorage.getItem("token");
    const router = inject(Router);
    debugger //gelen token değerine bakalım
    if(!token){
      router.navigateByUrl("/login");
      return false;
    }
  return true;
};

