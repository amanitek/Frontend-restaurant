import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';


const USER_KEY = 'auth-user';
const TOKEN ='token'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  static getUserId(): string {
    const userString = localStorage.getItem(TOKEN);

    if (userString === null) {
      return ''; // ou une autre valeur par défaut si l'utilisateur n'est pas connecté
    }

    try {
      const user = JSON.parse(userString);

      if (user && typeof user === 'object' && 'id' in user) {
        return user.id;
      } else {
        return ''; // ou une autre valeur par défaut si l'ID n'est pas présent dans l'objet utilisateur
      }
    } catch (error) {
      console.error('Erreur lors de la conversion de la chaîne JSON :', error);
      return ''; // ou une autre valeur par défaut en cas d'erreur de conversion
    }
  }


static getToken(): string | null {
  const token = localStorage.getItem(TOKEN);
  return token !== null ? token : null;
}



  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }


}
