export interface UserAuthState {
  userName: string;
  email: string;
  password: string;
}

export interface AuthState {
  auth: UserAuthState;
  isLoading: boolean;
}
