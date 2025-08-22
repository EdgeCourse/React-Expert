import { create } from 'zustand';

interface AuthState {
  /**
   * Whether the user is currently logged in.
   */
  isLoggedIn: boolean;

  /**
   * Marks the user as logged in.
   *
   * Side effect:
   * - Stores `"true"` in `localStorage` under the key `"isLoggedIn"`.
   *
   * @see {@link logout} for the opposite action
   */
  
  login: () => void;

  /**
   * Marks the user as logged out.
   *
   * Side effect:
   * - Removes the `"isLoggedIn"` item from `localStorage`.
   */
  logout: () => void;
}

/**
 * Zustand store for authentication state.
 *
 * - Initializes `isLoggedIn` from `localStorage`.
 * - Provides `login` and `logout` methods to update both
 *   the store state and `localStorage`.
 *
 * @example
 * ```tsx
 * const { isLoggedIn, login, logout } = useAuthStore();
 * 
 * if (!isLoggedIn) {
 *   login();
 * }
 * ```
 */

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  login: () => {
    localStorage.setItem('isLoggedIn', 'true');
    set({ isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem('isLoggedIn');
    set({ isLoggedIn: false });
  },
}));
