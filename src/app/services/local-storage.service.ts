import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LoggerService, logLevel } from './logger.service';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  private readonly localStorage = inject(DOCUMENT)?.defaultView?.localStorage;

  constructor (private logger: LoggerService) {
    
  }

  get<T>(key: string): T | null {
    const item = this.localStorage?.getItem(key);

    if (!item) {
      return null;
    }
    this.logger.log(logLevel.Info, 'LocalStorage Loaded', LocalStorageService.name);
    return this.isJSONValid(item) ? (JSON.parse(item) as T) : (item as T);
  }

  set(key: string, value: unknown): void {
    this.localStorage?.setItem(key, JSON.stringify(value));
    this.logger.log(logLevel.Info, 'LocalStorage Saved', LocalStorageService.name);
  }

  remove(key: string): void {
    this.localStorage?.removeItem(key);
  }
  
  removeKeys(keys: string[]): void {
    keys.forEach(key => this.localStorage?.removeItem(key));
  }

  clear(): void {
    this.localStorage?.clear();
  }

  private isJSONValid(value: string): boolean {
    try {
      JSON.parse(value);
      return true;
    } catch (error) {
      return false;
    }
  }
}
