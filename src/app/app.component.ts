import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
    ngOnInit(): void {
        initializeApp(firebaseConfig);
    }

    constructor(private authService: AuthService) {}

    isAuthenticated(){
        return this.authService.isAuthenticated;
    }

    logout(){
        this.authService.logout();
    }
}