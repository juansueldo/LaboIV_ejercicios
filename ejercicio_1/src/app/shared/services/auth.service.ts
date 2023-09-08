import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { 
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  async SignIn(email: string, password: string) {
    try {
      const result = await this.afAuth['signInWithEmailAndPassword'](email, password);
      this.router.navigate(['bienvenido']);
    } catch (error) {
      localStorage.setItem('errormessage', JSON.stringify(error.message));
      this.router.navigate(['error']);
    }
  }
  async Register(email: string, password: string){
    try{
      const result = await this.afAuth['createUserWithEmailAndPassword'](email, password);
      this.router.navigate(['bienvenido']);
    }catch(error){
      localStorage.setItem('errormessage', JSON.stringify(error.message));
      this.router.navigate(['error']);
    }
  }
  
  }

