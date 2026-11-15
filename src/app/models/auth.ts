
export interface TokenPair {
  accessToken: string;    
  refreshToken: string;   
}

// sent to auth-login
export interface LoginRequest {
  username: string;
  password: string;
  expiresInMins?: number;  
}

// get back from auth-login
export interface LoginResponse extends TokenPair {   
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
 
}