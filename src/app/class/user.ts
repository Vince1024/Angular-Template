
export type User = {
  
    name: string;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;
  
    language: string;
    theme: string;
  
    role: Roles;
    lastAccess: Date;
  
  }

export enum Roles {
    ADMIN = 'ADMIN',
    SUPER_USER = 'SUPER_USER',
    USER = 'USER',
    VIEWER = 'VIEWER',
  }
