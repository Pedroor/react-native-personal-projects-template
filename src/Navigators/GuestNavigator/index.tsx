import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { GuestStack } from "../Stacks/GuestStack";
import OnboardingNavigator from "./OnboardingNavigator";

const GuestNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator<GuestStack>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingNavigator"
        component={OnboardingNavigator}
      />
    </Stack.Navigator>
  );
};

export default GuestNavigator;
