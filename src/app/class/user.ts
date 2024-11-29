import { Roles } from "./roles";

export type User = {
  
    login_Name: string;
    isAuth: boolean;
    Id?: string;
    first_Name?: string;
    last_Name?: string;
    email?: string;
    phoneNumber?: string
    picture?: string;
  
    language?: string;
    theme?: string;
  
    role: Roles;
    lastAccess?: Date;
  
  }

