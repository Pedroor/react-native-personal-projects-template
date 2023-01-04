import { OnboardingStack } from "@/Navigators/Stacks/OnboardingStack";
import Welcome from "@/Screens/Onboarding/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const OnboardingNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator<OnboardingStack>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
