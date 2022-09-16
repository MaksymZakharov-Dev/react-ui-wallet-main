import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../screens/OnboardingScreen";
import LegalScreen from "../screens/Legal";
import PhraseScreen from "../screens/PhraseScreen";
import VerifyPhraseScreen from "../screens/VerifyPhraseScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import DAppsScreen from "../screens/DApps";
import SettingsScreen from "../screens/SettingsScreen";
import ImportTokensScreen from "../screens/ImportTokensScreen";
import AddCustomTokenScreen from "../screens/AddCustomTokenScreen";
import BuyTokensScreen from "../screens/BuyTokensScreen";
import BuyTokenDetail from "../screens/BuyTokenDetail";
import TokenDetailScreen from "../screens/TokenDetailScreen"
import RecieveTokenScreen from "../screens/RecieveTokenScreen";
import SearchRecieveTokensScreen from "../screens/SearchRecieveTokensScreen";
import SwapScreen from "../screens/SwapScreen";
import SendTokenFormScreen from "../screens/SendTokenForm";
import PriceAlertsScreen from "../screens/PriceAlertsScreen";
import SecurityScreen from "../screens/SecurityScreen";
import PushNotificationsScreen from "../screens/PushNotificationsScreen";
import WalletConnectScreen from "../screens/PasswordSettingScreen";
import PreferencesScreen from "../screens/PreferencesScreen";
import WalletsScreen from "../screens/WalletsScreen";
import WalletEditScreen from "../screens/WalletEditScreen";
import SwapToken1Select from "../screens/SwapToken1Select";
import SwapToken2Select from "../screens/SwapToken2Select";
import SendTokenChoose from "../screens/SendTokenChoose";
import Welcome from "../screens/Welcome";
import PasscodeScreen from "../screens/PasscodeScreen";
import PasswordSettingScreen from "../screens/PasswordSettingScreen";

import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const Onboarding = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ headerLeft: (props) => null }}
      />
      <Stack.Screen name="LegalScreen" component={LegalScreen} />
      <Stack.Screen name="PhraseScreen" component={PhraseScreen} />
      <Stack.Screen name="VerifyPhraseScreen" component={VerifyPhraseScreen} />
      <Stack.Screen name="PasscodeScreen" component={PasscodeScreen} />
    </Stack.Navigator>
  );
};


const PortfolioStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{ headerLeft: (props) => null }}
      />
      <Stack.Screen name="ImportTokensScreen" component={ImportTokensScreen} />
      <Stack.Screen name="AddCustomTokenScreen" component={AddCustomTokenScreen} />
      <Stack.Screen name="BuyTokensScreen" component={BuyTokensScreen} />
      <Stack.Screen name="BuyTokenDetail" component={BuyTokenDetail} />
      <Stack.Screen name="RecieveTokenScreen" component={RecieveTokenScreen} />
      <Stack.Screen name="SearchRecieveTokensScreen" component={SearchRecieveTokensScreen} />
      <Stack.Screen name="SwapScreen" component={SwapScreen} />
      <Stack.Screen name="TokenDetailScreen" component={TokenDetailScreen} />
      <Stack.Screen name="SendTokenFormScreen" component={SendTokenFormScreen} />
      <Stack.Screen name="SwapToken1Select" component={SwapToken1Select} />
      <Stack.Screen name="SwapToken2Select" component={SwapToken2Select} />
      <Stack.Screen name="SendTokenChoose" component={SendTokenChoose} />

    </Stack.Navigator>
  );
};

const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{ headerLeft: (props) => null }}
      />
    </Stack.Navigator>
  );
};

const DAppsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="DAppsScreen"
        component={DAppsScreen}
        options={{ headerLeft: (props) => null }}
      />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerLeft: (props) => null }}
      />
      <Stack.Screen name="PriceAlertsScreen" component={PriceAlertsScreen} />
      <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
      <Stack.Screen name="WalletsScreen" component={WalletsScreen} />
      <Stack.Screen name="WalletEditScreen" component={WalletEditScreen} />
      <Stack.Screen name="PreferencesScreen" component={PreferencesScreen} />
      <Stack.Screen name="WalletConnectScreen" component={WalletConnectScreen} />
      <Stack.Screen name="PushNotificationsScreen" component={PushNotificationsScreen} />
      <Stack.Screen name="PasswordSettingScreen" component={PasswordSettingScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export {
  Onboarding,
  PortfolioStackNavigator,
  DiscoverStackNavigator,
  DAppsStackNavigator,
  SettingsStackNavigator,
};
