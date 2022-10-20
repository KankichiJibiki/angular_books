import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { LoginForm } from '../types/Auth';
import { RegisterFrom } from '../types/Register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched = true;

  constructor(private router: Router) { }

  register(form: RegisterFrom){
    if(form.password != form.confirm_pass){
      this.passwordMatched = false;
      alert('check Your password');
      return;
    }
    
    if(this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        console.log(userCredential);
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        
      }).finally(()=>(this.isLoading = false));
    console.log(form);
  }

  login(form: LoginForm){if(this.isLoading) return;

    this.isLoading = true
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      this.isAuthenticated = true;
      this.router.navigate(['']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Credentials does not match our record')
      this.isAuthenticated = false;
    })

    .finally(()=>(this.isLoading = false));
    console.log(form);

  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }
}
