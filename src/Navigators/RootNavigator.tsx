import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthenticatedNavigator from "./AuthenticatedNavigator";
import GuestNavigator from "./GuestNavigator";

// import { Container } from './styles';

const RootNavigator: React.FC = () => {
  const isAuthenticated = false;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuthenticated ? <AuthenticatedNavigator /> : <GuestNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
