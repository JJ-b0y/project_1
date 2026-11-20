import { Injectable } from '@angular/core';
import { IAuthSession } from '../app-state/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'auth';

  storeInfo(session: IAuthSession, rememberMe: boolean): void {
    const orderedSession = JSON.stringify(session);
    if(rememberMe) {
      localStorage.setItem(
        this.storageKey,
        orderedSession
      );

      sessionStorage.removeItem(this.storageKey);

    } else {
      sessionStorage.setItem(this.storageKey, orderedSession);
      localStorage.removeItem(this.storageKey);
    }
  }

  private readSession(storage: Storage): IAuthSession | null {

    const storedData = storage.getItem(this.storageKey);

    if (!storedData) return null;

    const session = JSON.parse(storedData) as IAuthSession;

    if (!session || !session.accessToken || !session.user) {
      storage.removeItem(this.storageKey);
      return null;
    }
    return session;
  }

  loadInfo(): IAuthSession | null {

    if (localStorage) return this.readSession(localStorage);

    return this.readSession(sessionStorage);
  }

  clearData(): void {
    localStorage.removeItem(this.storageKey);
    sessionStorage.removeItem(this.storageKey);
  }
}
