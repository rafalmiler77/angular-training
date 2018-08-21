import { All, AuthActionTypes } from './../actions/auth.actions';

export interface LoginData {
  login: string;
  fakeToken: string;
}
export interface AuthState {
  loggedIn: boolean;
  user: LoginData | null;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null,
};

export function authReducer(state = initialState, action: All): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: {
          login: action.payload.login,
          fakeToken: action.payload.fakeToken,
        }
      };
    }

    case AuthActionTypes.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

