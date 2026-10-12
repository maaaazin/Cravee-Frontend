/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId } from './types/navigation';
import { Screen2_SignInSignUp } from './components/screens/Screen2_SignInSignUp';
import { Screen3_SignIn } from './components/screens/Screen3_SignIn';
import { Screen4_SignUp } from './components/screens/Screen4_SignUp';
import { Screen6_AddAddress } from './components/screens/Screen6_AddAddress';
import { Screen7_AddAddressDetails } from './components/screens/Screen7_AddAddressDetails';
import { Screen8_Home } from './components/screens/Screen8_Home';
import { Screen9_Search } from './components/screens/Screen9_Search';
import { ScreenSearchResults } from './components/screens/ScreenSearchResults';
import { Screen10_RestaurantMenu } from './components/screens/Screen10_RestaurantMenu';
import { Screen11_RestaurantMenuCart } from './components/screens/Screen11_RestaurantMenuCart';
import { Screen12_YourOrder } from './components/screens/Screen12_YourOrder';
import { Screen13_Checkout } from './components/screens/Screen13_Checkout';
import { Screen14_SelectPaymentMethod } from './components/screens/Screen14_SelectPaymentMethod';
import { Screen15_PaymentConfirmed } from './components/screens/Screen15_PaymentConfirmed';
import { ScreenTrackOrder } from './components/screens/ScreenTrackOrder';
import { ScreenOrderChat } from './components/screens/ScreenOrderChat';
import { Screen16_RateExperience } from './components/screens/Screen16_RateExperience';
import { Screen17_MyAccount } from './components/screens/Screen17_MyAccount';
import { ScreenPastOrdersHistory } from './components/screens/ScreenPastOrdersHistory';
import { ScreenOrderReceipt } from './components/screens/ScreenOrderReceipt';
import { ScreenFavorites } from './components/screens/ScreenFavorites';
import { ScreenSavedAddresses } from './components/screens/ScreenSavedAddresses';
import { ScreenSavedPaymentMethods } from './components/screens/ScreenSavedPaymentMethods';
import { ScreenSwitcher } from './components/common/ScreenSwitcher';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>(
    '2. Sign In / Sign Up — Initial Screen'
  );
  const [historyStack, setHistoryStack] = useState<ScreenId[]>([
    '2. Sign In / Sign Up — Initial Screen',
  ]);
  const [transition, setTransition] = useState<'push' | 'push_back' | 'slide_up' | 'none'>('push');

  const navigateTo = (
    nextScreen: ScreenId,
    transitionType: 'push' | 'push_back' | 'slide_up' | 'none' = 'push'
  ) => {
    setTransition(transitionType);
    if (transitionType === 'push_back') {
      setHistoryStack((prev) => {
        const copy = [...prev];
        copy.pop();
        return copy.length ? copy : [nextScreen];
      });
    } else {
      setHistoryStack((prev) => [...prev, nextScreen]);
    }
    setCurrentScreen(nextScreen);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case '2. Sign In / Sign Up — Initial Screen':
        return <Screen2_SignInSignUp onNavigate={navigateTo} />;
      case '3. Sign In':
        return <Screen3_SignIn onNavigate={navigateTo} />;
      case '4. Sign Up':
        return <Screen4_SignUp onNavigate={navigateTo} />;
      case '6. Add Address':
        return <Screen6_AddAddress onNavigate={navigateTo} />;
      case '7. Add Address Details':
        return <Screen7_AddAddressDetails onNavigate={navigateTo} />;
      case '8. Home':
        return <Screen8_Home onNavigate={navigateTo} />;
      case '9. Search':
        return <Screen9_Search onNavigate={navigateTo} />;
      case 'Search Results':
        return <ScreenSearchResults onNavigate={navigateTo} />;
      case '10. Restaurant Menu':
        return <Screen10_RestaurantMenu onNavigate={navigateTo} />;
      case '11. Restaurant Menu with Cart':
        return <Screen11_RestaurantMenuCart onNavigate={navigateTo} />;
      case '12. Your Order':
        return <Screen12_YourOrder onNavigate={navigateTo} />;
      case '13. Checkout':
        return <Screen13_Checkout onNavigate={navigateTo} />;
      case '14. Select Payment Method':
        return <Screen14_SelectPaymentMethod onNavigate={navigateTo} />;
      case '15. Payment Confirmed':
        return <Screen15_PaymentConfirmed onNavigate={navigateTo} />;
      case 'Track Order':
        return <ScreenTrackOrder onNavigate={navigateTo} />;
      case 'Order Chat':
        return <ScreenOrderChat onNavigate={navigateTo} />;
      case '16. Rate Your Experience':
        return <Screen16_RateExperience onNavigate={navigateTo} />;
      case '17. My Account':
        return <Screen17_MyAccount onNavigate={navigateTo} />;
      case 'Past Orders History':
        return <ScreenPastOrdersHistory onNavigate={navigateTo} />;
      case 'Order Receipt':
        return <ScreenOrderReceipt onNavigate={navigateTo} />;
      case 'Favorites':
        return <ScreenFavorites onNavigate={navigateTo} />;
      case 'Saved Addresses':
        return <ScreenSavedAddresses onNavigate={navigateTo} />;
      case 'Saved Payment Methods':
        return <ScreenSavedPaymentMethods onNavigate={navigateTo} />;
      default:
        return <Screen8_Home onNavigate={navigateTo} />;
    }
  };

  const getTransitionClass = () => {
    switch (transition) {
      case 'push':
        return 'animate-in fade-in duration-200';
      case 'push_back':
        return 'animate-in fade-in duration-200';
      case 'slide_up':
        return 'animate-in slide-in-from-bottom-4 duration-300';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center">
      <div className="w-full max-w-md min-h-screen relative bg-[#f8f9fa] shadow-2xl flex flex-col">
        {/* Floating Quick Switcher */}
        <ScreenSwitcher currentScreen={currentScreen} onNavigate={navigateTo} />

        {/* Screen container */}
        <div key={currentScreen} className={`flex-1 flex flex-col ${getTransitionClass()}`}>
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
