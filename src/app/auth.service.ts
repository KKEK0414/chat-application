import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }

  async signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }

  async signOut(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      throw error;
    }
  }
}
