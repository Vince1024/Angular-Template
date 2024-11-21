import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  
  public Vars = new BehaviorSubject<any>({
    title: 'Angular Template',
    version: '1.0.0',

    currentUser: '',
    currentLanguage: 'en-US',
    currentTheme: 'azure-blue'
  });

}