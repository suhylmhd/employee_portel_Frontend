import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = () => {
  const authStatus =  inject(AuthService)
  const router = inject(Router)

  if(authStatus.isLogged()){
    return true;
  }
  else{
    Swal.fire({
      icon:"info",
      title:"Oohh",
      text:"Please Login"
    });
    router.navigateByUrl('')
    return false;
  }
  
};
