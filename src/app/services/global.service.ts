import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  
  public Vars = new BehaviorSubject<any>({
    title: 'Angular Template',
    currentLanguage: 'fr-FR',
    currentTheme: 'azure-blue'
  });
}