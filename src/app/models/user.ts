
export type UserRole = 'admin' | 'moderator' | 'user';

export interface Address {
  address: string;      
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
}

// The logged in user 
export interface AuthUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  phone: string;
  role: UserRole;       
  address: Address;     
}