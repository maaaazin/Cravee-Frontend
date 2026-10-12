export type ScreenId =
  | '2. Sign In / Sign Up — Initial Screen'
  | '4. Sign Up'
  | '3. Sign In'
  | '6. Add Address'
  | '7. Add Address Details'
  | '8. Home'
  | '9. Search'
  | 'Search Results'
  | '10. Restaurant Menu'
  | '11. Restaurant Menu with Cart'
  | '12. Your Order'
  | '13. Checkout'
  | '14. Select Payment Method'
  | '15. Payment Confirmed'
  | 'Track Order'
  | 'Order Chat'
  | '16. Rate Your Experience'
  | '17. My Account'
  | 'Past Orders History'
  | 'Order Receipt'
  | 'Favorites'
  | 'Saved Addresses'
  | 'Saved Payment Methods';

export interface NavigationState {
  currentScreen: ScreenId;
  history: ScreenId[];
  transitionType?: 'push' | 'push_back' | 'slide_up' | 'none';
}
