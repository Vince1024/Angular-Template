import { Roles } from "./roles";

export type User = {
  
    loginName: string;
    isAuth: boolean;
    userId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string
    picture?: string;
  
    language?: string;
    theme?: string;
  
    role: Roles;
    lastAccess?: Date;
  
  }

